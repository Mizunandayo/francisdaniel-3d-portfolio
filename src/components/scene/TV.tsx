// Implementation: Day 13

import type { Vector3Tuple } from 'three'

interface TVProps {
    position?: Vector3Tuple
}

/**
 * Modern flat-screen TV in front of the sofa.
 * Loads tv.glb from Blender. Shows Spotify idle screen via drei Html.
 * Frame emits purple glow (#6366f1) on proximity.
 * Press E opens TVPanel.
 */

export function TV({ position: _position = [8, 0, -3] }: TVProps) {
    // Day 13: useGLTF, useProximit, emissive lerp, PressELabel, Html idle screen
    return null
}


