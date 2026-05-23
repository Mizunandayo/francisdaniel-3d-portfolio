import { Suspense, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useSpotify } from './hooks/useSpotify'
import { useBackgroundMusic } from './hooks/useBackgroundMusic'
import { TVPanel } from './components/ui/TVPanel'

// ─── Camera ───────────────────────────────────────────────────────────────────

function CameraRig() {
  const { camera } = useThree()
  useEffect(() => {
    camera.lookAt(0, 9, 0)
  }, [camera])
  return null
}

// ─── 3D Scene ─────────────────────────────────────────────────────────────────

function MoonScene() {
  return (
    <>
      <CameraRig />

      {/* Lighting */}
      <ambientLight intensity={0.25} />
      <directionalLight
        position={[10, 20, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={100}
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={30}
        shadow-camera-bottom={-30}
      />
      <hemisphereLight args={['#1a1a4e', '#2a2a2a', 0.4]} />
      {/* Sun — directional light has no distance falloff, reaches the Earth */}
      <directionalLight position={[30, 40, 20]} intensity={2.5} />

      {/* Stars — 5000 points across a large sphere, always fills the sky */}
      <Stars radius={200} depth={60} count={5000} factor={4} saturation={0} fade speed={0.3} />

      {/* Moon surface placeholder — replaced Day 6 with Blender terrain */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -0.01, 0]}>
        <planeGeometry args={[120, 120]} />
        <meshStandardMaterial color="#7a7a82" roughness={0.95} metalness={0} />
      </mesh>

      {/* Earth placeholder — replaced Day 16 with full Earth component */}
      <mesh position={[0, 30, -60]}>
        <sphereGeometry args={[10, 32, 32]} />
        <meshStandardMaterial color="#1a6bb5" roughness={0.8} />
      </mesh>
    </>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const { handleCallback } = useSpotify()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')
    const returnedState = params.get('state')
    const error = params.get('error')

    if (error) {
      console.warn('[Spotify] Auth error returned:', error)
      window.history.replaceState({}, '', '/')
      return
    }

    if (code && returnedState) {
      handleCallback(code, returnedState).catch((err: unknown) => {
        if (err instanceof Error) {
          console.error('[Spotify] Callback failed:', err.message)
        }
      })
    }
  }, [handleCallback])

  useBackgroundMusic()

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#000010',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Canvas
        camera={{ position: [0, 12, 35], fov: 75, near: 0.1, far: 1000 }}
        shadows
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: false,
          stencil: false,
        }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <Suspense fallback={null}>
          <MoonScene />
        </Suspense>
      </Canvas>

      {/* 2D UI — outside Canvas, lives in the normal DOM */}
      <TVPanel />
    </div>
  )
}
