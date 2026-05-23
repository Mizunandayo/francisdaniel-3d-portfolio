import { useEffect, useRef } from 'react'
import { useAudioStore } from '../store/audioStore'

// Add audio files to src/assets/music/ — any .mp3 or .ogg works.
// Import them here once they exist, e.g.:
//   import track1 from '../assets/music/track1.mp3'
// Then add to the TRACKS array below.

const TRACKS: string[] = [
  // '../assets/music/track1.mp3',
]

function shuffled<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function useBackgroundMusic(): void {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const trackListRef = useRef<string[]>([])
  const indexRef = useRef(0)
  const bgmMuted = useAudioStore((s) => s.bgmMuted)

  useEffect(() => {
    if (TRACKS.length === 0) return

    const audio = new Audio()
    audio.preload = 'auto'
    audio.volume = 0.4
    audioRef.current = audio

    trackListRef.current = shuffled(TRACKS)
    indexRef.current = 0

    function playNext() {
      indexRef.current = (indexRef.current + 1) % trackListRef.current.length
      audio.src = trackListRef.current[indexRef.current]
      audio.play().catch(() => {})
    }

    audio.addEventListener('ended', playNext)
    audio.src = trackListRef.current[0]

    // Browser autoplay policy: attempt on load, retry on first user interaction
    const tryPlay = () => audio.play().catch(() => {})
    tryPlay()

    const onInteraction = () => {
      audio.play().catch(() => {})
      document.removeEventListener('pointerdown', onInteraction)
      document.removeEventListener('keydown', onInteraction)
    }
    document.addEventListener('pointerdown', onInteraction)
    document.addEventListener('keydown', onInteraction)

    return () => {
      audio.removeEventListener('ended', playNext)
      document.removeEventListener('pointerdown', onInteraction)
      document.removeEventListener('keydown', onInteraction)
      audio.pause()
      audio.src = ''
      audioRef.current = null
    }
  }, [])

  // Sync mute state whenever bgmMuted changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = bgmMuted
    }
  }, [bgmMuted])
}
