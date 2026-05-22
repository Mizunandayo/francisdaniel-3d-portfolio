// Implemented: Days 11–12

export interface SpotifyHook {
    initiateLogin: () => void
    handleCallback: (code: string) => Promise<void>
    togglePlay: () => Promise<void>
    next: () => Promise<void>
    prev: () => Promise<void>
}

export function useSpotify(): SpotifyHook {
    // Day 11: PKCE OAuth helpers + initiateLogin + handleCallback + refreshToken
    // Day 12: Web Playback SDK init + transferPlayback + player controls

    return {
        initiateLogin: () => {},
        handleCallback: async (_code: string) => {},
        togglePlay: async () => {},
        next: async () => {},
        prev: async () => {},
    }
}

