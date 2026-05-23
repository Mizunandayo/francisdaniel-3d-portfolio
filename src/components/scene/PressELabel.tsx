// Implementation: Day 14

interface PressELabelProps {
    visibile: boolean
    label?: string
    yOffset?: number
}

/**
 * Floating "Press E" hint rendered in 3D space via drei Html.
 * Faces the camera at all times. Uses CSS opacity for smooth fade.
 * Poppins font, white text, no gray, no emojis.
 */

export function PressELabel({
    visible: _visible,
    label: _label = 'Press E',
    yOffset: _yOffset = 1.5,
}: PressELabelProps) {
  // Day 14: drei <Html>, opacity transition, pointer-events: none
    return null
}

