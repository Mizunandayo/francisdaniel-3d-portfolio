// Implementation: Day 15

import type { HackathonStationData } from '../scene/HackathonStation'

interface HackathonPanelProps {
    open: boolean
    onClose: () => void
    data?: HackathonStationData
}



/**
 * Hackathon station detail panel.
 * Hackathon name, dates, project info, tech stack, award badge, live link.
 * All CTAs have cursor pointer. No gray text. No emojis.
 */

export function HackathonPanel({
    open: _open,
    onClose: _onClose,
    data: _data,
}: HackathonPanelProps) {
  // Day 15: Framer Motion slide, hackathon data, trophy badge, live link CTA
  return null
}