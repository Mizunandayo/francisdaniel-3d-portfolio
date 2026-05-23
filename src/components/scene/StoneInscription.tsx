// Implementation: Day 15

import type { Vector3Tuple } from 'three'

interface StoneInscriptionProps {
    position?: Vector3Tuple
}

/**
 * Boulder with engraved quote rendered via drei Html.
 * "Nothing is impossible. I don't code the universe — I architect it."
 * Purely decorative, no interaction.
 */

export function StoneInscription({
    position: _position = [0, 0, -45],
}: StoneInscriptionProps) {
   // Day 15: stone.glb + Html engraved text, serif italic, no pointer events
   return null
}