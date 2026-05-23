import { useCallback, useRef } from 'react'
import { useAudioStore } from '../store/audioStore'

// ─── Environment ──────────────────────────────────────────────────────────────

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID as string
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI as string

// ─── PKCE pure helpers (no React deps, no side-effects) ──────────────────────

function base64url(buffer: ArrayBuffer): string {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}

function generateCodeVerifier(): string {
  const bytes = new Uint8Array(96)
  crypto.getRandomValues(bytes)
  return base64url(bytes.buffer)
}

async function generateCodeChallenge(verifier: string): Promise<string> {
  const encoded = new TextEncoder().encode(verifier)
  const hash = await crypto.subtle.digest('SHA-256', encoded)
  return base64url(hash)
}

function generateState(): string {
  const bytes = new Uint8Array(16)
  crypto.getRandomValues(bytes)
  return base64url(bytes.buffer)
}

function buildAuthUrl(clientId: string, redirectUri: string, challenge: string, state: string): string {
  const scopes = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-read-playback-state',
    'user-modify-playback-state',
  ].join(' ')

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUri,
    code_challenge_method: 'S256',
    code_challenge: challenge,
    state,
    scope: scopes,
  })

  return `https://accounts.spotify.com/authorize?${params}`
}

// ─── Token helpers (always reads fresh store state via .getState()) ───────────

async function refreshAccessToken(refreshToken: string): Promise<void> {
  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: CLIENT_ID,
  })

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })

  if (!res.ok) throw new Error('Token refresh failed')

  const data = (await res.json()) as {
    access_token: string
    refresh_token?: string
    expires_in: number
  }

  useAudioStore.getState().setSpotifyAuth(
    data.access_token,
    data.refresh_token ?? refreshToken,
    Date.now() + data.expires_in * 1000,
  )
}

async function getValidToken(): Promise<string> {
  const { spotifyToken, spotifyTokenExpiry, spotifyRefreshToken } =
    useAudioStore.getState()

  if (!spotifyToken) throw new Error('No Spotify token')

  if (spotifyTokenExpiry && Date.now() > spotifyTokenExpiry - 60_000 && spotifyRefreshToken) {
    await refreshAccessToken(spotifyRefreshToken)
    const refreshed = useAudioStore.getState().spotifyToken
    if (!refreshed) throw new Error('Token refresh returned null')
    return refreshed
  }

  return spotifyToken
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useSpotify() {
  // Guards against double-initialising the SDK if handleCallback is somehow called twice
  const sdkInitialized = useRef(false)

  // ─── Playback device transfer ─────────────────────────────────────────────

  const transferPlayback = useCallback(async (deviceId: string): Promise<void> => {
    const token = await getValidToken()
    await fetch('https://api.spotify.com/v1/me/player', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ device_ids: [deviceId], play: false }),
    })
  }, [])

  // ─── SDK player init ──────────────────────────────────────────────────────

  const initPlayer = useCallback((): void => {
    const player = new Spotify.Player({
      name: 'Moon Base TV',
      getOAuthToken: (cb) => {
        getValidToken().then(cb).catch(() => {})
      },
      volume: 0.8,
    })

    player.addListener('ready', ({ device_id }) => {
      useAudioStore.getState().setSpotifyPlayer(player, device_id)
      transferPlayback(device_id).catch(() => {})
    })

    player.addListener('player_state_changed', (state) => {
      if (!state) return
      const t = state.track_window.current_track
      useAudioStore.getState().setPlaybackState(
        {
          name: t.name,
          artists: t.artists,
          album: t.album,
          duration_ms: t.duration_ms,
          id: t.id,
          uri: t.uri,
        },
        !state.paused,
      )
    })

    player.addListener('not_ready', () => {
      console.warn('[Spotify] Player disconnected')
    })
    player.addListener('initialization_error', ({ message }) => {
      console.error('[Spotify] Init error:', message)
    })
    player.addListener('authentication_error', ({ message }) => {
      console.error('[Spotify] Auth error:', message)
    })
    player.addListener('account_error', ({ message }) => {
      console.error('[Spotify] Account error:', message)
    })

    player.connect()
  }, [transferPlayback])

  const initWebPlaybackSDK = useCallback((): void => {
    if (sdkInitialized.current) return
    sdkInitialized.current = true

    window.onSpotifyWebPlaybackSDKReady = initPlayer

    const script = document.createElement('script')
    script.src = 'https://sdk.scdn.co/spotify-player.js'
    script.async = true
    document.body.appendChild(script)
  }, [initPlayer])

  // ─── OAuth — PKCE flow ────────────────────────────────────────────────────

  const initiateLogin = useCallback(async (): Promise<void> => {
    const verifier = generateCodeVerifier()
    const state = generateState()
    const challenge = await generateCodeChallenge(verifier)

    sessionStorage.setItem('pkce_verifier', verifier)
    sessionStorage.setItem('oauth_state', state)

    window.location.href = buildAuthUrl(CLIENT_ID, REDIRECT_URI, challenge, state)
  }, [])

  const handleCallback = useCallback(
    async (code: string, returnedState: string): Promise<void> => {
      const storedState = sessionStorage.getItem('oauth_state')
      const verifier = sessionStorage.getItem('pkce_verifier')

      // CSRF guard — state mismatch means this redirect was not initiated by us
      if (!storedState || storedState !== returnedState) {
        console.error('[Spotify] State mismatch — possible CSRF attempt')
        window.history.replaceState({}, '', '/')
        return
      }

      if (!verifier) {
        console.error('[Spotify] Missing PKCE verifier')
        window.history.replaceState({}, '', '/')
        return
      }

      sessionStorage.removeItem('pkce_verifier')
      sessionStorage.removeItem('oauth_state')

      const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        code_verifier: verifier,
      })

      const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })

      if (!res.ok) throw new Error('Token exchange failed')

      const data = (await res.json()) as {
        access_token: string
        refresh_token: string
        expires_in: number
      }

      useAudioStore.getState().setSpotifyAuth(
        data.access_token,
        data.refresh_token,
        Date.now() + data.expires_in * 1000,
      )

      window.history.replaceState({}, '', '/')
      initWebPlaybackSDK()
    },
    [initWebPlaybackSDK],
  )

  // ─── Controls ─────────────────────────────────────────────────────────────

  const togglePlay = useCallback(async (): Promise<void> => {
    await useAudioStore.getState().spotifyPlayer?.togglePlay()
  }, [])

  const next = useCallback(async (): Promise<void> => {
    await useAudioStore.getState().spotifyPlayer?.nextTrack()
  }, [])

  const prev = useCallback(async (): Promise<void> => {
    await useAudioStore.getState().spotifyPlayer?.previousTrack()
  }, [])

  return { initiateLogin, handleCallback, togglePlay, next, prev }
}
