// Implementation: Day 15

import type  { Vector3Tuple } from 'three'

export interface HackathonStationData {
  hackathonName: string
  dates: string
  projectName: string
  description: string
  stack: string[]
  liveUrl?: string
  flagImageUrl?: string
  laptopScreenUrl?: string
  hasTrophy: boolean
  /** e.g. "Track 3 Winner" or "Result Pending" */
  awardLabel?: string
}

interface HackathonStationProps {
  position?: Vector3Tuple
  stationData: HackathonStationData
  onOpen: () => void
}




/**
 * Exhibition booth with flag, table, laptop, and trophy/pedestal.
 * Press E opens HackathonPanel with full project + award info.
 */

export function HackathonStation({
  position: _position = [0, 0, 0],
  stationData: _stationData,
  onOpen: _onOpen,
}: HackathonStationProps) {
  // Day 15: table + flag + laptop Html screen + trophy + proximity + panel
  return null
}