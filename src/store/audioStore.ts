import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface SpotifyTrack {
  name: string
  artists: Array<{ name: string; uri: string }>
  album: {
    name: string
    uri: string
    images: Array<{ url: string; width: number | null; height: number | null }>
  }
  duration_ms: number
  id: string | null
  uri: string
}

// Only bgmMuted is persisted — tokens stay in memory only (XSS protection)
interface PersistedState {
  bgmMuted: boolean
}

interface RuntimeState {
  spotifyToken: string | null
  spotifyRefreshToken: string | null
  spotifyTokenExpiry: number | null
  spotifyPlayer: Spotify.Player | null
  spotifyDeviceId: string | null
  currentTrack: SpotifyTrack | null
  isPlaying: boolean
}

interface Actions {
  toggleBgmMute: () => void
  setSpotifyAuth: (token: string, refreshToken: string, expiry: number) => void
  setSpotifyPlayer: (player: Spotify.Player, deviceId: string) => void
  setPlaybackState: (track: SpotifyTrack | null, isPlaying: boolean) => void
  disconnectSpotify: () => void
  clearSpotifyPlayer: () => void
}

type AudioState = PersistedState & RuntimeState & Actions








export const useAudioStore = create<AudioState>()(
  persist(
    (set) => ({
      // Persisted
      bgmMuted: false,
      toggleBgmMute: () => set((state) => ({ bgmMuted: !state.bgmMuted })),

      // Runtime-only — never persisted (XSS protection)
      spotifyToken: null,
      spotifyRefreshToken: null,
      spotifyTokenExpiry: null,
      spotifyPlayer: null,
      spotifyDeviceId: null,
      currentTrack: null,
      isPlaying: false,

      // Auth actions
      setSpotifyAuth: (token, refreshToken, expiry) =>
        set({
          spotifyToken: token,
          spotifyRefreshToken: refreshToken,
          spotifyTokenExpiry: expiry,
        }),

      // Player actions
      setSpotifyPlayer: (player, deviceId) =>
        set({ spotifyPlayer: player, spotifyDeviceId: deviceId }),

      setPlaybackState: (track, isPlaying) =>
        set({ currentTrack: track, isPlaying }),

      clearSpotifyPlayer: () =>
        set({ spotifyPlayer: null, spotifyDeviceId: null }),

      disconnectSpotify: () =>
        set({
          spotifyToken: null,
          spotifyRefreshToken: null,
          spotifyTokenExpiry: null,
          spotifyPlayer: null,
          spotifyDeviceId: null,
          currentTrack: null,
          isPlaying: false,
        }),
    }),
    {
      name: 'fdp-audio-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state): PersistedState => ({
        bgmMuted: state.bgmMuted,
      }),
    }
  )
)
