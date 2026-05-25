# Francis Daniel — 3D Moon Portfolio
## Project: `francisdaniel-portfolio`
## Last updated: May 2026

> **Important for AI assistants:** This file is the single source of truth for this project. Update it automatically whenever changes, decisions, or new features are added — even if not explicitly asked.

---

## WHO

**Developer:** Francis Daniel (Mizu)
**GitHub:** https://github.com/Mizunandayo
**LinkedIn:** https://www.linkedin.com/in/francis-daniel-genese-141294170/
**Facebook:** https://www.facebook.com/pope.wannaflytoo
**Discord:** https://discord.com/users/714616104630222899
**Email:** francisdanielgenese@gmail.com
**Resume:** Google Drive link — placeholder, to be added later

---

## REPOSITORY

**GitHub:** https://github.com/Mizunandayo/francisdaniel-3d-portfolio
**Dev server:** `http://127.0.0.1:5173` (must use 127.0.0.1, not localhost — Spotify OAuth requires it)

---

## THE CONCEPT

A **3D interactive portfolio** set on the moon surface.
No walls. No ceiling. Open-air moon base with Earth looming large in the sky.
Inspired by Bruno Simon's "My Room in 3D" — but taken to the moon.

**Why the moon?**
> *"Nothing is impossible to build with AI in this generation. Everything is possible — even me as a developer who plans system architecture and delivers the best user experience that marks in their mind."*

**Reference images confirmed:**
- Grey rocky moon surface with craters and scattered boulders
- Earth visible large in the upper background
- Deep blue-black space with stars
- Astronaut figure on surface (where the avatar goes)

---

## NAVIGATION SYSTEM

### Desktop
- **WASD** to walk across the moon surface
- **Mouse** to look around (rotate camera)
- **Scroll wheel** to zoom in/out
  - Scroll out → camera moves further back (wider view)
  - Scroll in → camera moves closer to avatar
  - **Maximum zoom in** → seamless crossfade into **first-person view** (pointer lock)
  - Scroll back out → returns to third-person

### Mobile / Tablet
- **Touch detection on mount** → swap to orbital drag controls
- Pinch to zoom, drag to orbit
- Tap to interact with objects

### Camera Style
**Over-the-shoulder third-person** (Zelda / GTA / God of War style)
- Camera floats 2–3 metres behind avatar, slightly above head height
- Avatar is always visible walking ahead
- Earth and full scene visible in the distance
- Mouse look rotates the camera around the avatar

---

## SCENE DESCRIPTION

### Environment
- **Moon surface** — grey rocky terrain, craters, scattered boulders
- **No walls, no ceiling** — fully open-air
- **Earth** — large sphere in the upper background (not on the horizon, looming above)
  - NASA Blue Marble texture + cloud layer
  - Atmospheric rim glow shader (bloom post-processing)
  - Slow rotation
- **Stars** — 2000-point star field (`@react-three/drei Stars`)
- **Lighting** — dramatic directional light from Earth-side, ambient moon ambience

### Spawn Point
- Avatar spawns at center-south, facing Earth (North)
- Camera spawns behind avatar
- Stone inscription near spawn point (see below)

---

## LAYOUT — ARC ARRANGEMENT

All main objects are arranged in a **semicircle ahead of spawn**, facing Earth.

```
              ▲ EARTH (North)

  [AMD Station]  [Moon Stone]  [lablab.ai Station]
        (hackathon stations — far, near Earth)

[Bookshelf]  [Mailbox]  [PC Desk]  [Corkboard]  [Sofa + TV]
        (main objects — mid arc)

              ● Francis Daniel (spawn)
              ▼ Camera here
```

---

## OBJECTS DETAIL

### 1. 📚 Bookshelf (Left Arc)
**Purpose:** Portfolio projects — one book per project
**Interaction:**
- Walk near → glow + "Press E to browse" appears
- Press E → camera zooms in to bookshelf
- Books are clickable — each = one project
- Click a book → it pulls out and opens
- Inside the book: project detail panel (Framer Motion slide-in)

**Projects (4 books):**
1. Eye2Wear Optical Clinic
2. Bacsal Business Consultancy
3. Miwa — Discord Voice Translation Overlay
4. Mirai — AI Robot Arm Simulator

---

### 2. 🖥️ PC Setup / Desk (Center Arc)
**Purpose:** Main workspace, GitHub + Resume access
**Contains on/near the desk:**
- 🐙 **GitHub Octocat figure** on desk → opens https://github.com/Mizunandayo
- 📁 **Resume folder/binder** on desk → opens Google Drive PDF (placeholder)
- Monitor, keyboard, chair (decorative but interactive on approach)

---

### 3. 🛋️ Sofa + TV (Right Arc)
**Purpose:** Chill zone — ambient music player via Spotify
- Sofa faces the TV
- **TV** is a modern flat-screen placed in front of the sofa (see TV section below)
- Background Minecraft-style ambient music plays in the scene at all times
- Mute button for BGM is inside the TV panel (only accessible when near TV + Press E)

---

### 4. 📬 Mailbox (Mid — between bookshelf and PC desk)
**Purpose:** Email contact
**Interaction:** Walk near → glow → Press E → opens `mailto:francisdanielgenese@gmail.com`
**3D form:** Physical letterbox/postbox planted in moon soil

---

### 5. 📌 Corkboard (Mid — between PC desk and sofa)
**Purpose:** Social links
**Contains three plaques/badges pinned to corkboard:**
- 🔵 LinkedIn → https://www.linkedin.com/in/francis-daniel-genese-141294170/
- 🔵 Facebook → https://www.facebook.com/pope.wannaflytoo
- 🟣 Discord → https://discord.com/users/714616104630222899
**Interaction:** Walk near → glow → Press E → opens link

---

### 6. 🚩 Hackathon Stations (Far Row, near Earth)

Each station is a **mini exhibition booth** containing:

```
[Flag pole]           [Table]          [Trophy]
Flag = hackathon    Laptop on table    Gold trophy if won
cover banner image  Active screen =    Empty pedestal if not
(image texture)     project running
```

**Station #1 — AMD Developer Hackathon**
- Flag: AMD hackathon cover banner image
- Project: Miwa (Discord Voice Translation Overlay)
- Laptop screen: Miwa UI / demo
- Trophy: TBD (result pending)
- Links: Miwa project page

**Station #2 — lablab.ai: Transforming Enterprise Through AI**
- Flag: lablab.ai hackathon cover banner image
- Project: Mirai (AI Robot Arm Simulator)
- Laptop screen: Mirai simulation running (live Vercel URL or screenshot)
- Trophy: 🏆 Gold trophy (submitted — Track 3)
- Links: https://mirai-tech-ex-hackathon-transformin.vercel.app

**Station Interaction:**
- Walk near → glow + "Press E to explore" appears
- Press E → detail panel opens: hackathon name, dates, project name, description, stack, links, award status

---

### 7. 🪨 Stone Inscription (Center Far, near Earth, between hackathon stations)
**Engraved text:**
> *"Nothing is impossible. I don't code the universe — I architect it."*

Decorative. Visible from spawn. Sets tone before visitor touches anything.

---

### 8. 📺 Television (In front of Sofa, Right Arc) — NEW
**Purpose:** Interactive Spotify music player + ambient BGM host
**Style:** Modern flat-screen (sleek, thin-bezel, purple/blue frame glow on proximity)

**Geometry:**
- TV body: `BoxGeometry(2.4, 1.4, 0.08)` — thin flat panel, black (#111) metallic
- Screen: `PlaneGeometry(2.1, 1.2)` — slightly forward (z+0.045), content via `<Html>` from drei
- Stand: `BoxGeometry(0.2, 0.3, 0.1)` — small pedestal
- Frame emissive: `#6366f1` (purple) glow, lerps 0→0.4 when visitor is in proximity range

**Idle screen (when Spotify not connected):**
Spotify Connect branding on screen — green `#1db954` logo, "Press E to connect" prompt

**Interaction:**
- Walk within ~2.5 units → frame glows purple, "Press E" label floats above TV
- Press E → `TVPanel` slides in from right (Framer Motion, consistent with all other panels)
- Inside panel: either **SpotifyConnect** or **NowPlaying** depending on auth state
- Press Escape / click X → closes panel, returns to walking

**Background Music (BGM):**
- Minecraft-style ambient tracks play automatically on page load
- Stored in `src/assets/music/` (2–4 tracks, shuffle loop)
- Mute toggle is inside the NowPlaying panel on the TV

**Spotify Integration:**
- OAuth method: **PKCE** (no backend, client-side only)
- Playback: **Spotify Web Playback SDK** — music plays **through the browser**
- Requires **Spotify Premium** on the visitor's account
- Redirect URI: `http://127.0.0.1:5173/callback`
- Scopes: `streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state`
- Tokens kept **in memory only** (never persisted to localStorage — XSS protection). Visitor must reconnect on refresh — this is the intentional security trade-off.
- `VITE_SPOTIFY_CLIENT_ID` in `.env.local` (never committed)

**Spotify App:** Registered at developer.spotify.com
- App name: `Francis Daniel Portfolio`
- Redirect URIs: `http://127.0.0.1:5173/callback`

---

## INTERACTION MODEL (Universal)

Same system for every interactive object in the scene:

```
1. Walk within proximity radius (~2–3 units)
2. Object emits a soft glow pulse
3. Floating UI hint appears above object: "Press E" (or tap on mobile)
4. Press E / click / tap
5. Action fires:
   - Projects/hackathons → Framer Motion detail panel slides in from right
   - TV → Framer Motion panel with Spotify player
   - Social links → opens URL in new tab
   - Email → opens mailto
   - Resume → opens Google Drive PDF
6. Press Escape / click X → closes panel, returns to walking
```

---

## AVATAR

**Type:** Ready Player Me — casual outfit (not astronaut suit)
**Animations needed:**
- Idle (breathing, slight sway)
- Walk forward / backward / strafe
- Look left/right (head turns with camera)
- Interact (lean forward animation when pressing E)

---

## PROJECTS DATA STRUCTURE

```typescript
type Contributor = {
  name: string
  image?: string
  email?: string
  linkedin?: string
}

type Project = {
  id: string
  title: string
  description: string
  longDescription?: string
  role: string
  stack: string[]
  url?: string
  githubUrl?: string
  gallery: string[]
  youtubeUrl?: string
  mp4Url?: string
  color: string
  coverImage?: string
  contributors?: Contributor[]
  date?: string
}
```

**Stored in:** Zustand store → persisted to `localStorage`
**Managed from:** In-scene "add project" interaction on the bookshelf (floating form panel)
**Admin mode:** `Ctrl+Shift+E` to unlock editing existing books in-scene

---

## CONFIRMED PROJECTS

### Eye2Wear Optical Clinic
- **URL:** https://eye2wear.onrender.com
- **Role:** UI/UX & Full-Stack Developer
- **Stack:** JavaScript, React, Vite, Node.js, Express.js, Tailwind CSS, shadcn/ui, MongoDB Atlas, Socket.IO, Cloudinary, JWT, Google OAuth, PhilSMS API, Gmail API, ApexCharts, Recharts, jsPDF, Mapbox, Puppeteer, Multer
- **Color:** #22d3ee (cyan)

### Bacsal Business Consultancy
- **URL:** https://www.bacsalbusinessconsultancy.com/
- **Role:** Lead Junior Software Engineer (Internship)
- **Date:** Jan 2026 – Apr 2026
- **Stack:** TypeScript, React 19, Next.js 16, Tailwind CSS v4, shadcn/ui, Framer Motion, GSAP, Prisma 7, NextAuth v5, PostgreSQL (Supabase), Redis (Upstash), Cloudinary, Vercel, Puppeteer, Nodemailer, Valibot, Vitest
- **Color:** #4ade80 (green)

### Miwa — Discord Voice Translation Overlay
- **URL:** TBD (AMD Hackathon project)
- **Role:** Solo Developer
- **Hackathon:** AMD Developer Hackathon, May 4–11, 2026
- **Stack:** AMD Instinct MI300X, Python, Discord API, AI agents, real-time voice processing
- **Color:** #f59e0b (amber)

### Mirai — AI Robot Arm Simulator
- **URL:** https://mirai-tech-ex-hackathon-transformin.vercel.app
- **GitHub:** https://github.com/Mizunandayo/mirai
- **Role:** Solo Developer
- **Hackathon:** Transforming Enterprise Through AI by lablab.ai, May 11–19, 2026
- **Stack:** React 18, TypeScript, React Three Fiber, Rapier WASM, MuJoCo, Gemini 2.5 Flash, FastAPI, Jinja2, Jotai, Railway, Vercel
- **Color:** #c084fc (violet)

---

## TECH STACK

| Layer | Technology | Version | Notes |
|---|---|---|---|
| Framework | React Three Fiber | v9 | Three.js as React components |
| 3D Library | Three.js | r184+ | |
| Helpers | @react-three/drei | v10 | Stars, Float, Html, useGLTF, OrbitControls |
| Post-FX | @react-three/postprocessing | latest | Bloom (Earth glow), DepthOfField, ChromaticAberration |
| Animation | GSAP | v3 | Camera movements, object interactions |
| State | Zustand | v5 | Scene state, audio state, project list |
| 2D UI | Framer Motion | v12 | All detail panels (slide from right) |
| Build | Vite | v8 | |
| Language | TypeScript | v6 | |
| Styling | Tailwind CSS | v4 | UI overlays only, @tailwindcss/vite plugin |
| Avatar | Ready Player Me | API | Free .glb casual avatar |
| Terrain | Three.js PlaneGeometry | — | High poly + moon displacement texture |
| Character control | Custom R3F hook | — | WASD + mouse look + zoom-to-FPS |
| Music (BGM) | HTML5 Audio | — | Minecraft ambient tracks, shuffle loop |
| Music (Spotify) | Spotify Web Playback SDK | — | In-browser playback, Premium required |
| Spotify Auth | PKCE OAuth | — | No backend, client-side only |

---

## FILE STRUCTURE (planned)

```
src/
├── store/
│   └── audioStore.ts              # Zustand: BGM mute + Spotify state
├── hooks/
│   ├── useBackgroundMusic.ts      # Minecraft BGM (HTML5 Audio, shuffle loop)
│   └── useSpotify.ts              # PKCE OAuth + Web Playback SDK
├── components/
│   ├── scene/
│   │   └── TV.tsx                 # 3D TV mesh, proximity glow, Press E hint
│   └── ui/
│       ├── TVPanel.tsx            # Framer Motion overlay wrapper
│       ├── SpotifyConnect.tsx     # Idle: Spotify login screen
│       └── NowPlaying.tsx         # Playing: track info + controls + BGM mute
├── types/
│   └── spotify.d.ts               # Spotify SDK global type declarations
├── assets/
│   └── music/                     # Minecraft BGM .mp3 files (2–4 tracks)
└── App.tsx                        # Handles OAuth callback on mount
```

---

## ENVIRONMENT VARIABLES

```
VITE_SPOTIFY_CLIENT_ID=      # From developer.spotify.com — never commit
VITE_SPOTIFY_REDIRECT_URI=http://127.0.0.1:5173/callback
```

File: `.env.local` (gitignored). Template in `.env.example`.

---

## REFERENCE

- Bruno Simon's "My Room in 3D": https://github.com/brunosimon/my-room-in-3d
  - Takeaways: baked lighting pipeline, raycaster interactions, camera system
  - Difference: no walls/ceiling, moon setting, first-person/third-person hybrid, project management from within scene

---

## WHAT'S NOT DECIDED YET

- [ ] Exact Ready Player Me avatar (user creates their own at readyplayer.me)
- [ ] AMD hackathon cover banner image (for flag #1)
- [ ] lablab.ai hackathon cover banner image (for flag #2)
- [ ] AMD hackathon result — trophy or empty pedestal?
- [ ] Resume Google Drive link (placeholder)
- [ ] Moon terrain — procedural noise vs NASA heightmap texture
- [ ] 3D models source — free .glb from Poly Pizza/Sketchfab vs custom Blender (Blender not required)
- [ ] BGM audio files — C418 Minecraft tracks vs royalty-free alternatives

---

## PROJECT STATUS

- [x] Brainstorming session complete
- [x] Vite + React + TypeScript scaffolded
- [x] All dependencies installed
- [x] Tailwind CSS v4 configured
- [x] .gitignore updated (.env.local, .superpowers/ excluded)
- [x] Spotify Developer App registered (http://127.0.0.1:5173/callback)
- [x] GitHub repo created: https://github.com/Mizunandayo/francisdaniel-3d-portfolio
- [x] .env.local created with VITE_SPOTIFY_CLIENT_ID
- [x] Spotify type declarations (src/types/spotify.d.ts — declare global pattern)
- [x] Zustand audioStore (bgmMuted persisted only — tokens in memory, never localStorage)
- [x] ESLint configured for .d.ts files (no-unused-vars disabled)
- [x] Scene camera fixed — position [0,12,35], lookAt [0,2,0], fov 75, Earth visible
- [ ] useBackgroundMusic hook
- [ ] useSpotify hook (PKCE + Web Playback SDK)
- [ ] TV 3D component
- [ ] TVPanel + SpotifyConnect + NowPlaying UI
- [ ] Full 3D scene (moon terrain, Earth, stars, all objects)
- [ ] Avatar + character controller
- [ ] Bookshelf + project panels
- [ ] Hackathon stations
- [ ] PC Desk + mailbox + corkboard

---

## BLENDER STRATEGY

Francis has no prior Blender experience. AI assistant will provide exact step-by-step Blender instructions for each object when that day arrives.

**Only model unique objects in Blender — use free .glb assets for generic furniture:**

| Model in Blender | Download free .glb |
|---|---|
| TV (unique design) | Sofa |
| Bookshelf (with books) | Office chair |
| Mailbox | PC monitor |
| Stone Inscription | Keyboard + mouse |
| Hackathon station (table, flag, laptop, trophy) | |
| Moon terrain | |
| Moon boulders (3 variations) | |

**Free .glb sources:** [Poly Pizza](https://poly.pizza) · [Sketchfab Free](https://sketchfab.com/features/free-3d-models) · [Kenney.nl](https://kenney.nl)

**Blender skills needed for this project (nothing else required):**

| Skill | Used For |
|---|---|
| Interface navigation | Moving around, selecting |
| Box modeling (Extrude, Loop Cut, Inset) | Every object |
| Subdivision Surface modifier | Rounded shapes |
| Displace modifier | Moon terrain, boulder |
| UV Unwrapping (Smart UV Project) | Preparing for baking |
| Lightmap baking (Cycles) | Baked textures |
| Export as `.glb` | Getting into R3F |

---

## DAILY BUILD PLAN

**Timeline:** 3 weeks · 6–8 hrs/day · Starting May 21, 2026 · Target completion: ~June 10, 2026

---

### WEEK 1 — Blender Learning + All 3D Objects + Scene Foundation

---

#### Day 1 — May 21 · Blender Interface + Environment Setup
- Create `.env.local` with `VITE_SPOTIFY_CLIENT_ID` and `VITE_SPOTIFY_REDIRECT_URI=http://127.0.0.1:5173/callback`
- Create all `src/` subfolders: `store/`, `hooks/`, `components/scene/`, `components/ui/`, `types/`, `assets/music/`, `assets/models/`
- Create empty placeholder `.ts`/`.tsx` files for every planned file so imports don't break later
- Install Blender from blender.org (free, latest stable version)
- Watch Blender interface crash course — 1 hr (recommended: Default Cube "Blender 4.x for Beginners")
- Practice Blender navigation: middle mouse orbit, scroll zoom, Shift+middle pan, Numpad 1/3/7 for views
- Learn and drill shortcuts: `G` move · `R` rotate · `S` scale · `X/Y/Z` lock axis · `Tab` edit mode · `Shift+A` add mesh
- Learn Edit Mode basics: select faces (`3`), edges (`2`), verts (`1`), `E` extrude, `Ctrl+R` loop cut, `I` inset
- Exercise: add a Cube, enter Edit Mode, extrude a face, loop cut it, inset a face — just getting comfortable
- Try making a rough TV shape from a cube (no pressure, just practice)

---

#### Day 2 — May 22 · Blender: TV Model + Pipeline Test
- Blender: New project, set units to Metric, set render engine to Cycles
- Blender: `Shift+A → Mesh → Cube` — this is the TV body base
- Blender: `S`, `X`, `2.4`, Enter → scale width to 2.4 · `S`, `Z`, `1.4`, Enter → scale height to 1.4 · `S`, `Y`, `0.08`, Enter → scale depth to 0.08 (thin panel)
- Blender: Enter Edit Mode (`Tab`) → select front face (`3` for face select, click front face)
- Blender: `I` (inset) → type `0.05`, Enter — creates the bezel border around the screen
- Blender: Select the inner face (screen area) → `Ctrl+Shift+B` bevel slightly for depth
- Blender: Assign 2 material slots — Material 1: `TV_Frame` (dark grey, metallic) · Material 2: `TV_Screen` (near-black `#0a0a14`, slight emissive)
- Blender: Select bezel faces → assign `TV_Frame` material · select screen face → assign `TV_Screen` material
- Blender: Model TV stand — `Shift+A → Cube`, scale to `(0.2, 0.1, 0.3)`, position at bottom center of TV panel
- Blender: Select both TV body + stand, `Ctrl+J` to join into one object
- Blender: UV Unwrap — `Tab` into Edit Mode, `A` select all, `U → Smart UV Project`, adjust island margin to 0.03
- Blender: Set up bake — go to Render Properties, set Cycles, samples 128 · in Shader Editor add Image Texture node, create new 1024×1024 image named `tv_bake`
- Blender: `Object → Bake → Combined` — wait for bake to complete
- Blender: `File → Export → glTF 2.0 (.glb)` — check "Include: Selected Objects", "Geometry: Apply Modifiers", "Materials: Export" → save as `src/assets/models/tv.glb`
- R3F: In `App.tsx`, import TV with `useGLTF`, render in scene — confirm it shows in browser
- This pipeline test confirms Blender → `.glb` → R3F works end-to-end

---

#### Day 3 — May 23 · Blender: Mailbox + Stone + Bookshelf Start
- Blender: New file — **Mailbox**
- Blender: Start with a cube, scale to roughly `(0.4, 0.3, 0.5)` for the box body
- Blender: Edit Mode → select top face → extrude up `0.1`, then `S`, `X`, `0.95` to taper slightly (roof effect)
- Blender: Select front face → `I` inset `0.05` → `E` extrude inward `0.02` — creates mail slot recess
- Blender: `Shift+A → Mesh → Cylinder` — scale thin (`S`, `X/Z`, `0.03`) for the pole, position below box going into ground
- Blender: Assign 2 materials: `Mailbox_Body` (red or grey metal) · `Mailbox_Slot` (dark inner)
- Blender: UV unwrap + bake (1024×1024) → export as `mailbox.glb`
- Blender: New file — **Stone Inscription**
- Blender: Start with a cube, scale to `(1.5, 0.4, 0.9)` — flat wide boulder shape
- Blender: Add Subdivision Surface modifier (level 3) to round it out
- Blender: Add Displace modifier → create a new cloud noise texture, set strength to `0.15` — adds rocky surface bumps
- Blender: Apply both modifiers
- Blender: Assign material: `Stone` (mid-grey `#888`, rough 0.9)
- Blender: UV unwrap + bake → export as `stone.glb`
- Blender: New file — **Bookshelf** (start, finish next session if needed)
- Blender: Main frame — tall cube `(1.8, 0.4, 2.2)`, enter Edit Mode, select all inner volume and delete (leaving just frame walls using Inset + Delete)
- Blender: Add 4 shelf planks — `Shift+A → Cube` × 4, each `(1.7, 0.38, 0.04)`, evenly spaced vertically inside frame
- Blender: Add back panel — thin cube `(1.75, 0.02, 2.1)` at back of frame
- Blender: Add 4 book meshes on shelves — each a cube with different `X` width and `Z` height, assign a different colored material per book (cyan, green, amber, violet — matching project colors)

---

#### Day 4 — May 24 · Blender: Bookshelf Finish + Corkboard + Source Free Assets
- Blender: Finish bookshelf — UV unwrap frame, shelves, back panel separately
- Blender: Bake bookshelf lightmap (2048×1024 for a taller object) → export as `bookshelf.glb`
- Blender: New file — **Corkboard**
- Blender: Frame — 4 thin rectangular pieces forming a border, joined (`Ctrl+J`), material `Wood_Frame` (warm brown)
- Blender: Cork face — flat plane slightly inset from frame face, material `Cork` (tan/beige `#c4a882`, rough)
- Blender: Add 3 small badge/plaque shapes pinned to cork — each a thin cube `(0.3, 0.01, 0.15)`, slightly tilted for realism
- Blender: UV unwrap + bake corkboard → export as `corkboard.glb`
- Download free `.glb` assets:
  - Sofa: search Poly Pizza for "sofa" or "couch" — download low-poly version
  - Office chair: search "office chair" — download
  - PC monitor: search "monitor" or "computer screen" — download
  - Keyboard: search "keyboard" — download
  - Mouse: search "computer mouse" — download
- Save all downloaded `.glb` files to `src/assets/models/`
- Import each downloaded model in a test R3F scene, check scale and visual quality
- Adjust scale if needed (Blender: open the `.glb`, rescale, re-export)

---

#### Day 5 — May 25 · Blender: Hackathon Station Set + Trophy
- Blender: New file — **Hackathon Station Table**
- Blender: Table top — cube `(2.0, 0.8, 0.06)`, material `Table_Top` (dark wood or metal)
- Blender: 4 legs — cylinder `(0.04 radius, 0.7 height)` × 4, positioned at corners
- Blender: **Flag Pole** — cylinder `(0.03 radius, 2.0 height)`, vertical · add crossbar cylinder horizontal at top
- Blender: **Flag plane** — plane `(0.8, 0.0, 0.5)` hanging from crossbar, UV unwrapped flat (banner image texture applied in R3F code)
- Blender: **Laptop** — base box `(0.5, 0.35, 0.025)` for keyboard deck · screen panel box `(0.48, 0.30, 0.012)` rotated ~110° from hinge point at back edge of base · trackpad: small inset rectangle on base
- Blender: **Trophy (gold)** — use Spin tool: draw a profile curve in front view (cup silhouette), select, `Spin` 360° in 32 steps → creates lathe shape · add two handle loops extruded from sides · add rectangular base/plinth `(0.3, 0.2, 0.15)` · material `Gold` (metallic 1.0, roughness 0.1, base color `#FFD700`)
- Blender: **Empty Pedestal** — just the rectangular base/plinth, no cup (for AMD station)
- Blender: UV unwrap all hackathon assets together, bake in one scene (1024×1024)
- Blender: Export: `hackathon-table.glb` · `flag-pole.glb` · `laptop.glb` · `trophy.glb` · `pedestal.glb`

---

#### Day 6 — May 26 · Blender: Moon Terrain + Boulders + Full Scene Layout
- Blender: New file — **Moon Terrain**
- Blender: `Shift+A → Mesh → Plane` · `S`, `60`, Enter (120 units wide)
- Blender: `Right-click → Subdivide` — in operator panel set cuts to 200 (creates 200×200 grid of vertices)
- Blender: Add Displace modifier → New texture → set to Clouds type, size 1.5, depth 6
- Blender: Set displace Strength to `1.0`, mid-level `0.5`
- Blender: Sculpt Mode — use Draw Concave brush to manually carve 3–4 larger craters
- Blender: Add Subdivision Surface modifier (level 1) on top for smoothness
- Blender: Material: `MoonSurface` — base color `#7a7a7a`, roughness 0.95, no metallic
- Blender: UV unwrap (Smart UV Project) · bake color + normal map (2048×2048)
- Blender: Apply modifiers, export as `moon-terrain.glb`
- Blender: New file — **Moon Boulders** (3 variations in one file)
- Blender: Boulder Large — start cube, Subdivision Surface level 2, Displace modifier (cloud noise, strength 0.4), sculpt slightly with Grab brush, material `Stone`
- Blender: Boulder Medium — smaller version, different displacement seed
- Blender: Boulder Small — smallest, nearly round
- Blender: Export all 3 as `boulders.glb` (separate objects within one file)
- R3F: Import moon terrain, swap placeholder ground plane
- R3F: Import all Blender models + downloaded free assets, position everything in the arc arrangement
- R3F: Scatter 15–20 boulders randomly across terrain with random position/rotation/scale using a loop
- R3F: Create Ready Player Me avatar at readyplayer.me → download `.glb` → save to `src/assets/avatar.glb`
- R3F: Import avatar with `useGLTF`, position at spawn `[0, 0, 0]`
- R3F: Full scene visible in browser — all objects in arc, terrain, avatar standing

---

#### Day 7 — May 27 · Rest / Catchup

---

### WEEK 2 — Character Controller + Interaction System + TV/Spotify

---

#### Day 8 — May 28 · Character Controller Part 1
- Create `src/hooks/usePlayerController.ts`
- Implement keyboard state tracking with `useRef` map — `keydown`/`keyup` listeners for `W`, `A`, `S`, `D`, `E`, `Escape`
- Implement `useFrame` movement loop — read key state, build direction vector, normalize for diagonal (`length > 1 → normalize`), multiply by speed `5.0`
- Apply movement to avatar position ref each frame
- Implement mouse look — `mousemove` listener accumulates horizontal delta into `yaw` ref · vertical delta into `pitch` ref · clamp pitch to `-20°` to `+60°`
- Implement pointer lock — `canvas.requestPointerLock()` on click · `pointerlockchange` listener toggles mouse look active
- Compute over-the-shoulder camera position from yaw + pitch + distance offset, set `camera.position` and `camera.lookAt(avatarPosition)` in `useFrame`
- Wire `usePlayerController` into `App.tsx`
- Test: WASD moves avatar, mouse rotates camera, pointer lock works

---

#### Day 9 — May 29 · Character Controller Part 2 + Avatar Animations
- Implement scroll zoom — `wheel` event listener, adjust `targetDistance` ref (clamp 2–12 units)
- Implement smooth zoom lerp in `useFrame` — `currentDistance += (targetDistance - currentDistance) * 0.1`
- Implement zoom-to-first-person — when `currentDistance < 2`, switch to FPS mode: lock camera to avatar head bone position, hide avatar mesh, change crosshair cursor
- Implement zoom-out back to third-person — crossfade, show avatar mesh again
- Load avatar animations with `useAnimations` from drei
- Play idle animation clip on loop at all times
- Blend to walk animation when any WASD key held — `actions.walk.play()` / `crossFadeTo(idle)` on release
- Rotate avatar head bone to follow camera yaw (±30° clamp) for natural head-turning feel
- Mobile detection: `useEffect` checks `'ontouchstart' in window` on mount
- If mobile: disable pointer lock + WASD, enable `<OrbitControls>` from drei with `enableDamping`
- Test character controller feel thoroughly — diagonal movement, all zoom levels, mobile drag/pinch

---

#### Day 10 — May 30 · Zustand Store + Background Music
- Create `src/types/spotify.d.ts`:
  - Declare global `Spotify` namespace
  - Type `Spotify.Player` — `constructor`, `connect()`, `disconnect()`, `getCurrentState()`, `nextTrack()`, `previousTrack()`, `togglePlay()`
  - Type `Spotify.PlaybackState` — `paused`, `track_window.current_track`, `position`, `duration`
  - Type `Spotify.Track` — `name`, `artists[]`, `album.name`, `album.images[]`
  - Type `window.onSpotifyWebPlaybackSDKReady: () => void`
- Create `src/store/audioStore.ts` with Zustand + `persist` middleware:
  - BGM state: `bgmMuted: boolean`, `toggleBgmMute()` action
  - Spotify auth (persisted): `spotifyToken`, `spotifyRefreshToken`, `spotifyTokenExpiry`
  - Spotify runtime (NOT persisted): `spotifyPlayer`, `spotifyDeviceId`, `currentTrack`, `isPlaying`
  - Actions: `setSpotifyAuth()`, `setSpotifyPlayer()`, `setPlaybackState()`, `disconnectSpotify()`
- Create `src/store/sceneStore.ts`:
  - `avatarPosition: Vector3` ref (updated every frame from character controller)
  - Panel open states: `tvOpen`, `corkboardOpen`, `bookshelfOpen`, `hackathonOpen`
  - Actions: `setTvOpen()`, `setCorkboardOpen()` etc.
- Create `src/hooks/useBackgroundMusic.ts`:
  - Create singleton `HTMLAudioElement` ref on mount
  - Track list array — import paths from `src/assets/music/`
  - Shuffle array with Fisher-Yates on init
  - `playNext()` — advance index (wrap around), set `audio.src`, `audio.play()`
  - Wire `audio.onended → playNext()`
  - `useEffect` subscribes to `bgmMuted` store — syncs `audio.muted`
  - Handle browser autoplay policy — play on first user interaction if blocked
- Download 3–4 royalty-free ambient tracks from Pixabay (search "ambient space" or "lo-fi peaceful") → save to `src/assets/music/`
- Wire `useBackgroundMusic()` in `App.tsx` — confirm BGM plays on load

---

#### Day 11 — May 31 · Spotify Hook Part 1 — PKCE OAuth
- Create `src/hooks/useSpotify.ts`
- Implement pure PKCE helper functions (no deps, pure TS):
  - `generateCodeVerifier()` — `crypto.getRandomValues(new Uint8Array(96))` → base64url encode → 128-char string
  - `generateCodeChallenge(verifier)` — `crypto.subtle.digest('SHA-256', encode(verifier))` → base64url encode
  - `buildAuthUrl(clientId, redirectUri, challenge)` — construct full URL: `https://accounts.spotify.com/authorize?client_id=...&response_type=code&redirect_uri=...&code_challenge_method=S256&code_challenge=...&scope=streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state`
- Implement `initiateLogin()`:
  - Call `generateCodeVerifier()` → store in `sessionStorage('pkce_verifier')`
  - Call `generateCodeChallenge(verifier)` (async — await the SHA-256)
  - `window.location.href = buildAuthUrl(clientId, redirectUri, challenge)`
- Implement `handleCallback(code: string)`:
  - Read verifier from `sessionStorage('pkce_verifier')`
  - `POST https://accounts.spotify.com/api/token` with body: `grant_type=authorization_code`, `code`, `client_id`, `redirect_uri`, `code_verifier` (no client_secret needed for PKCE)
  - Parse JSON response — extract `access_token`, `refresh_token`, `expires_in`
  - Call `audioStore.setSpotifyAuth(access_token, refresh_token, Date.now() + expires_in * 1000)`
  - `sessionStorage.removeItem('pkce_verifier')`
  - `window.history.replaceState({}, '', '/')` — clears `?code=...` from URL
  - Call `initWebPlaybackSDK()`
- Implement `refreshToken()`:
  - `POST https://accounts.spotify.com/api/token` with `grant_type=refresh_token`, `refresh_token`, `client_id`
  - Update store with new token + expiry
- Wire `handleCallback` into `App.tsx` `useEffect` on mount — check `new URLSearchParams(location.search).get('code')`

---

#### Day 12 — June 1 · Spotify Hook Part 2 — Web Playback SDK
- Implement `initWebPlaybackSDK()` in `useSpotify.ts`:
  - Check if `<script src="https://sdk.scdn.co/spotify-player.js">` already in DOM — if not, inject it
  - Set `window.onSpotifyWebPlaybackSDKReady = () => initPlayer()`
  - If SDK already loaded (page refresh with existing token), call `initPlayer()` directly
- Implement `initPlayer()`:
  - `const player = new Spotify.Player({ name: 'Moon Base TV', getOAuthToken: cb => cb(getValidToken()), volume: 0.8 })`
  - `getValidToken()` — checks `spotifyTokenExpiry`, calls `refreshToken()` if within 60s of expiry, returns current token
  - Register `player.addListener('ready', ({ device_id }) => { setSpotifyPlayer(player, device_id); transferPlayback(device_id) })`
  - Register `player.addListener('player_state_changed', state => { if (!state) return; setPlaybackState(state.track_window.current_track, !state.paused) })`
  - Register `player.addListener('not_ready', () => console.warn('Spotify player not ready'))`
  - `player.connect()`
- Implement `transferPlayback(deviceId)`:
  - `PUT https://api.spotify.com/v1/me/player` with `Authorization: Bearer ${token}` header
  - Body: `{ device_ids: [deviceId], play: false }`
- Export player controls: `togglePlay`, `next`, `prev` — each calls corresponding method on `audioStore.spotifyPlayer`
- Check if existing token in store on hook mount → if valid token exists, call `initWebPlaybackSDK()` automatically (handles page refresh)

---

#### Day 13 — June 2 · TV 3D Component + Spotify UI Panels
- Create `src/components/scene/TV.tsx`:
  - `useGLTF('src/assets/models/tv.glb')` to load Blender model
  - Accept `position` prop
  - `useProximity(tvPosition, 2.5)` — returns `inRange` boolean
  - `useFrame` — lerp `tvFrameMaterial.emissiveIntensity` → 0.4 when `inRange`, → 0 when not
  - Add `<Html>` Press E label above TV, `visible={inRange && !tvOpen}`, CSS opacity transition
  - Add `<Html transform occlude>` on screen face — renders small idle screen (Spotify logo + "Press E to connect")
  - Wire `E` key from keyboard state → `setTvOpen(true)` when `inRange && !tvOpen`
- Create `src/components/ui/SpotifyConnect.tsx`:
  - Spotify SVG logo, green `#1db954`
  - `<h2>` "Connect Spotify"
  - `<p>` "Requires Spotify Premium · Music plays in this browser"
  - Large green button "Connect with Spotify" → calls `initiateLogin()`
  - Small privacy note at bottom: "We only request playback control"
- Create `src/components/ui/NowPlaying.tsx`:
  - Album art `<img>` 64×64px from `currentTrack.album.images[0].url`
  - Track name bold + artist name muted colour, both truncated with `text-ellipsis`
  - Progress bar — `useEffect` polls `spotifyPlayer.getCurrentState()` every 500ms → updates `position`/`duration` state → `width: (position/duration * 100)%`
  - Controls row: `⏮` `⏸/▶` `⏭` buttons → `prev()`, `togglePlay()`, `next()`
  - Divider
  - BGM mute button: `🔊 Moon BGM: ON` / `🔇 Moon BGM: OFF` → `toggleBgmMute()`
  - Disconnect link at bottom → `disconnectSpotify()` + `spotifyPlayer?.disconnect()`
- Create `src/components/ui/TVPanel.tsx`:
  - `<AnimatePresence>` wraps `<motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25 }}>`
  - Fixed right panel `w-96 h-full bg-gray-950 border-l border-gray-800 z-50`
  - X close button top-right → `setTvOpen(false)` · `Escape` key listener → `setTvOpen(false)`
  - Renders `<SpotifyConnect />` if no token · `<NowPlaying />` if token exists
- Add `<TVPanel />` outside `<Canvas>` in `App.tsx`
- Test full Spotify flow end-to-end: walk to TV → glow → E → panel → connect → music plays → controls → BGM mute → disconnect

---

#### Day 14 — June 3 · All Remaining Object Interactions
- Create `src/hooks/useProximity.ts` — reusable hook, takes `objectPosition: Vector3` + `threshold: number`, reads avatar position from `sceneStore`, returns `inRange: boolean`, runs check in `useFrame`
- Create `src/components/scene/PressELabel.tsx` — reusable `<Html>` floating label, accepts `visible` + `text` props, CSS `opacity` transition + `pointer-events: none`
- Wire **Mailbox** — `useProximity` → glow on mesh → `PressELabel` → E key → `window.location.href = 'mailto:francisdanielgenese@gmail.com'`
- Wire **Corkboard** — `useProximity` → glow → E → Framer Motion panel slides from right with 3 social link buttons (LinkedIn, Facebook, Discord) each opening URL in new tab
- Wire **PC Desk** — `useProximity` on desk area → glow → E opens desk panel with 2 clickable items: GitHub Octocat → `window.open('https://github.com/Mizunandayo', '_blank')` · Resume folder → `window.open(RESUME_URL, '_blank')` · `onPointerOver` on each mesh → cursor `pointer`
- Wire **Bookshelf** — `useProximity` → glow → E → GSAP `gsap.to(camera.position, { ...zoomTarget, duration: 1, ease: 'power2.inOut' })` → lock player movement (`cameraLocked` state)
- Add raycaster click on each book mesh — `onPointerDown` handler per book
- GSAP book pull-out animation on click: `gsap.to(bookRef.position, { z: z + 0.3, duration: 0.4, ease: 'back.out' })` → `gsap.to(bookRef.rotation, { x: -Math.PI/2, duration: 0.5, delay: 0.3 })`
- Create `src/components/ui/ProjectPanel.tsx` — Framer Motion slide panel with: cover image, title, role, date, tech stack badges (colored chips matching project color), description, Live Demo + GitHub buttons, horizontally-scrollable gallery strip, X + Escape close
- Wire all 4 books to all 4 projects: Eye2Wear (cyan `#22d3ee`) · Bacsal (green `#4ade80`) · Miwa (amber `#f59e0b`) · Mirai (violet `#c084fc`)
- Test full bookshelf flow: walk near → glow → E → zoom → click book → pull-out → panel → close → camera returns

---

### WEEK 3 — Hackathon Stations + Polish + Deploy

---

#### Day 15 — June 4 · Hackathon Stations + Stone Inscription
- Create `src/components/scene/HackathonStation.tsx` — accepts props: `position`, `flagImageUrl`, `stationData`, `hasTrophy`, `laptopScreenUrl`
- Render imported `hackathon-table.glb` mesh
- Render `flag-pole.glb` mesh · add `<mesh>` flag plane with `TextureLoader` for `flagImageUrl` as `MeshBasicMaterial` map
- Render `laptop.glb` · on screen face, add `<Html transform>` with `<img src={laptopScreenUrl} />` (screenshot of running project)
- Render `trophy.glb` if `hasTrophy` else `pedestal.glb`
- `useProximity(stationPosition, 3.0)` → glow on table + flag pole → `PressELabel`
- Create `src/components/ui/HackathonPanel.tsx` — Framer Motion slide panel with: hackathon banner image, hackathon name + dates, project name + description, tech stack badges, award status badge (gold trophy SVG or "Result Pending"), live project link button, X close
- Wire Station #1 — AMD / Miwa: `hasTrophy={false}`, Miwa project data, flag placeholder
- Wire Station #2 — lablab.ai / Mirai: `hasTrophy={true}`, Mirai project data + Vercel live link, flag placeholder
- Create `src/components/scene/StoneInscription.tsx`:
  - Import `stone.glb`
  - `<Html transform occlude>` on flat face — styled italic serif text: *"Nothing is impossible. I don't code the universe — I architect it."*
  - Text color muted grey `#9ca3af`, small size, pointer-events none
- Position stone between hackathon stations in scene, slightly toward Earth

---

#### Day 16 — June 5 · Earth Polish + Post-Processing + Lighting
- Replace Earth placeholder with full `<Earth>` component:
  - Load NASA Blue Marble texture (download from visibleearth.nasa.gov, public domain)
  - `TextureLoader` → `MeshStandardMaterial` with `map` = Blue Marble texture
  - Cloud layer — load cloud texture (NASA public domain) → second sphere slightly larger `(8.05 radius)` with `MeshStandardMaterial`, `transparent: true`, `opacity: 0.4`, `alphaMap` = cloud texture
  - `useFrame` slow Y rotation: `earthRef.current.rotation.y += 0.0003` each frame
  - Atmosphere rim — third sphere `(8.15 radius)` with `MeshBasicMaterial`, cyan `#7dd3fc`, `side: THREE.BackSide`, `transparent: true`, `opacity: 0.15`
- Install post-processing: `npm install @react-three/postprocessing`
- Add `<EffectComposer>` inside `<Canvas>` wrapping:
  - `<Bloom luminanceThreshold={0.8} intensity={0.6} radius={0.4}>` — makes Earth atmosphere + TV screen glow
  - `<DepthOfField focusDistance={0.01} focalLength={0.02} bokehScale={2}>` — soft background blur
  - `<ChromaticAberration offset={[0.0005, 0.0005]}>` — subtle lens fringe
- Final lighting pass:
  - `<directionalLight position={[10, 20, 5]} intensity={1.2} castShadow>` — sun-like from Earth direction
  - `<ambientLight intensity={0.25}>` — low ambient (moon has no atmosphere)
  - `<hemisphereLight skyColor="#1a1a4e" groundColor="#2a2a2a" intensity={0.4}>` — space ambient fill
- Tweak all imported model materials under new lighting, check nothing looks blown out

---

#### Day 17 — June 6 · Loading Screen + Intro Animation + Performance
- Create `src/components/ui/LoadingScreen.tsx`:
  - Full-screen fixed overlay, black background `bg-black z-50`
  - `useProgress()` from drei → get `progress` 0–100
  - Progress bar: `<div style={{ width: `${progress}%` }}>` with transition
  - Moon icon or text animation (CSS keyframe pulse)
  - Framer Motion `exit={{ opacity: 0 }}` when `progress === 100` — smooth fade-out
- Wrap all `useGLTF` scene objects in `<Suspense fallback={null}>` — `LoadingScreen` wraps the whole Canvas
- Add `useGLTF.preload()` calls at top of `App.tsx` for every model path — parallel preloading
- Implement intro camera animation:
  - Check `localStorage.getItem('hasVisited')` on mount
  - If first visit: GSAP timeline — camera starts at `[0, 40, 10]`, lookAt `[0, 0, 0]`, animates down to spawn position over 3.5s `ease: 'power3.inOut'`
  - Disable player controls during animation (`animating` state flag)
  - On complete: `localStorage.setItem('hasVisited', 'true')`, unlock controls
  - If returning visitor: skip animation, start directly in play mode

---

#### Day 18 — June 7 · Mobile Pass + TypeScript + Lint Cleanup
- Mobile panel audit — open every panel on 375px width:
  - All panels should have `max-h-screen overflow-y-auto`
  - Stack controls vertically on small screens if needed
  - Font sizes readable without zooming
- Mobile interaction — replace `onPointerDown` with `onClick` on all interactive meshes (better touch support)
- Test on real phone (use `npm run dev -- --host` to expose local network, open on phone browser)
- Virtual joystick (optional, if time allows): `npm install nipplejs @types/nipplejs` → add joystick overlay when mobile detected → map joystick output to movement direction
- TypeScript cleanup — run `npx tsc --noEmit` → fix all type errors
- ESLint cleanup — run `npm run lint` → fix all warnings and errors
- Remove all placeholder empty files created on Day 1 that are still empty
- Check all `import` paths are correct, no missing files
- Add Three.js stats panel for dev only: `import Stats from 'three/addons/libs/stats.module.js'` → `useEffect` adds to DOM in `import.meta.env.DEV` mode

---

#### Day 19 — June 8 · Deploy to Vercel + Spotify Production Config
- Run `npm run build` locally — fix any build errors until it compiles clean
- Create Vercel account if not already (vercel.com)
- Connect Vercel to GitHub repo `francisdaniel-3d-portfolio` — auto-detect as Vite project
- Add environment variables in Vercel dashboard → Settings → Environment Variables:
  - `VITE_SPOTIFY_CLIENT_ID` = your client ID
  - `VITE_SPOTIFY_REDIRECT_URI` = `https://your-domain.vercel.app/callback`
- Push to `main` branch → Vercel auto-deploys → note the live URL (e.g. `francisdaniel-3d-portfolio.vercel.app`)
- Go to Spotify Developer Dashboard → your app → Settings → Redirect URIs → Add `https://your-domain.vercel.app/callback` → Save
- Test live URL end-to-end:
  - Page loads with loading screen
  - BGM plays after first interaction
  - Can walk around the moon
  - All object glows + Press E labels work
  - Bookshelf opens, books clickable, project panels load
  - Hackathon stations open with correct data
  - TV proximity glow works
  - Spotify login → playback → controls → BGM mute → disconnect (all on live URL)
  - Mobile layout on real device
- Log all bugs found for Day 20

---

#### Day 20 — June 9 · Bug Fixes + Final Polish
- Fix all bugs logged from Day 19 live testing
- Add `<meta>` tags to `index.html`:
  - `og:title` = "Francis Daniel — 3D Moon Portfolio"
  - `og:description` = "An interactive 3D portfolio set on the moon surface."
  - `og:image` = screenshot of the scene (take a screenshot, upload to `/public`)
  - `og:url` = live Vercel URL
  - `twitter:card = "summary_large_image"`
- Add favicon — moon emoji favicon or custom SVG, add to `public/`
- Performance final check:
  - Open Chrome DevTools → Lighthouse → run Performance audit
  - Target: LCP under 4s, no major layout shifts
  - Check Three.js draw calls in stats panel — target under 50
- Update CLAUDE.md project status checklist — mark all items complete
- Final walkthrough as a first-time visitor — every interaction, every panel, every button
- Push final commit to GitHub → Vercel redeploys automatically

---

#### Day 21 — June 10 · Buffer / Done
- Share the live URL
- Any remaining polish or features from the backlog
- Portfolio is live

---

## TIMELINE SUMMARY

| Week | Days | Key Deliverable |
|---|---|---|
| Week 1 | May 21–26 | All Blender models exported + full scene layout visible in browser |
| Week 2 | May 28–June 3 | Can walk around the moon · all interactions work · Spotify TV functional |
| Week 3 | June 4–10 | Post-processing done · deployed live · shareable |

**Note:** AI assistant will provide exact numbered Blender steps for each object on the day it's scheduled. Just say "Day X, let's go" to start any day.

---

*Last updated: May 21, 2026*
