/**
 * Spotify Web Playback SDK type declarations.
 * Source: https://developer.spotify.com/documentation/web-playback-sdk
 *
 * These types describe the global Spotify namespace injected by
 * https://sdk.scdn.co/spotify-player.js
 */



declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady: () => void
  }
}

declare namespace Spotify {
  interface PlayerInit {
    name: string
    getOAuthToken: (callback: (token: string) => void) => void
    volume?: number
  }

  interface SpotifyError {
    message: string
  }

  interface WebPlaybackPlayer {
    device_id: string
  }

  interface Image {
    url: string
    height: number | null
    width: number | null
  }

  interface Artist {
    name: string
    uri: string
  }

  interface Album {
    uri: string
    name: string
    images: Image[]
  }

  interface Track {
    uri: string
    id: string | null
    type: 'track' | 'episode' | 'ad'
    media_type: 'audio' | 'video'
    name: string
    is_playable: boolean
    album: Album
    artists: Artist[]
    duration_ms: number
    linked_from: {
      uri: string | null
      id: string | null
    }
    linked_from_uri: string | null
  }

  interface PlaybackDisallows {
    pausing?: boolean
    peeking_next?: boolean
    peeking_prev?: boolean
    resuming?: boolean
    seeking?: boolean
    skipping_next?: boolean
    skipping_prev?: boolean
  }

  interface PlaybackContext {
    uri: string | null
    metadata: Record<string, unknown> | null
  }

  interface PlaybackTrackWindow {
    current_track: Track
    previous_tracks: Track[]
    next_tracks: Track[]
  }

  interface PlaybackState {
    context: PlaybackContext
    disallows: PlaybackDisallows
    duration: number
    paused: boolean
    position: number
    repeat_mode: 0 | 1 | 2
    shuffle: boolean
    timestamp: number
    track_window: PlaybackTrackWindow
  }

  class Player {
    constructor(options: PlayerInit)
    connect(): Promise<boolean>
    disconnect(): void
    addListener(
      event: 'ready',
      callback: (state: WebPlaybackPlayer) => void
    ): boolean
    addListener(
      event: 'not_ready',
      callback: (state: WebPlaybackPlayer) => void
    ): boolean
    addListener(
      event: 'player_state_changed',
      callback: (state: PlaybackState | null) => void
    ): boolean
    addListener(
      event: 'initialization_error',
      callback: (error: SpotifyError) => void
    ): boolean
    addListener(
      event: 'authentication_error',
      callback: (error: SpotifyError) => void
    ): boolean
    addListener(
      event: 'account_error',
      callback: (error: SpotifyError) => void
    ): boolean
    removeListener(
      event:
        | 'ready'
        | 'not_ready'
        | 'player_state_changed'
        | 'initialization_error'
        | 'authentication_error'
        | 'account_error'
    ): boolean
    getCurrentState(): Promise<PlaybackState | null>
    setName(name: string): Promise<void>
    getVolume(): Promise<number>
    setVolume(volume: number): Promise<void>
    pause(): Promise<void>
    resume(): Promise<void>
    togglePlay(): Promise<void>
    seek(position_ms: number): Promise<void>
    previousTrack(): Promise<void>
    nextTrack(): Promise<void>
  }
}

export {}
