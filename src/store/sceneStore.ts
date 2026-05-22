import { create } from 'zustand'
import { Vector3 } from 'three'





interface SceneState {
  // Avatar world position — updated every frame by usePlayerController
  avatarPosition: Vector3

  // Which panel is currently open (only one at a time)
  tvOpen: boolean
  corkboardOpen: boolean
  bookshelfOpen: boolean
  deskOpen: boolean
  hackathonStation1Open: boolean
  hackathonStation2Open: boolean

  // Camera states
  cameraLocked: boolean
  isFirstPerson: boolean
  isIntroPlaying: boolean

  // Actions
  setAvatarPosition: (position: Vector3) => void
  setTvOpen: (open: boolean) => void
  setCorkboardOpen: (open: boolean) => void
  setBookshelfOpen: (open: boolean) => void
  setDeskOpen: (open: boolean) => void
  setHackathonStation1Open: (open: boolean) => void
  setHackathonStation2Open: (open: boolean) => void
  setCameraLocked: (locked: boolean) => void
  setIsFirstPerson: (fp: boolean) => void
  setIsIntroPlaying: (playing: boolean) => void
  closeAllPanels: () => void
}

const CLOSED_PANELS = {
  tvOpen: false,
  corkboardOpen: false,
  bookshelfOpen: false,
  deskOpen: false,
  hackathonStation1Open: false,
  hackathonStation2Open: false,
}

export const useSceneStore = create<SceneState>()((set) => ({
  avatarPosition: new Vector3(0, 0, 0),

  ...CLOSED_PANELS,

  cameraLocked: false,
  isFirstPerson: false,
  isIntroPlaying: true,

  setAvatarPosition: (position) => set({ avatarPosition: position.clone() }),
  setTvOpen: (open) => set({ ...CLOSED_PANELS, tvOpen: open }),
  setCorkboardOpen: (open) => set({ ...CLOSED_PANELS, corkboardOpen: open }),
  setBookshelfOpen: (open) => set({ ...CLOSED_PANELS, bookshelfOpen: open }),
  setDeskOpen: (open) => set({ ...CLOSED_PANELS, deskOpen: open }),
  setHackathonStation1Open: (open) =>
    set({ ...CLOSED_PANELS, hackathonStation1Open: open }),
  setHackathonStation2Open: (open) =>
    set({ ...CLOSED_PANELS, hackathonStation2Open: open }),
  setCameraLocked: (locked) => set({ cameraLocked: locked }),
  setIsFirstPerson: (fp) => set({ isFirstPerson: fp }),
  setIsIntroPlaying: (playing) => set({ isIntroPlaying: playing }),

  // Closes every panel at once — used by Escape key handler
  closeAllPanels: () => set(CLOSED_PANELS),
}))
