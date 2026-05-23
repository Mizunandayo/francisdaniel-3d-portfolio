// Implementation: Day 14

export interface ProjectData {
  id: string
  title: string
  description: string
  role: string
  stack: string[]
  url?: string
  githubUrl?: string
  gallery: string[]
  color: string
  coverImage?: string
  date?: string
}

interface ProjectPanelProps {
    project: ProjectData | null
    open: boolean
    onClose: () => void
}

/**
 * Book detail panel. Slides in from right on book click.
 * Cover image, title, role, date, stack badges, description,
 * live demo + GitHub CTA buttons, scrollable gallery.
 * All CTAs have cursor pointer. Poppins font throughout.
 */

export function ProjectPanel({
    project: _project,
    open: _open,
    onClose: _onClose,
}: ProjectPanelProps) {
    // Day 14: Framer Motion slide, project data, gallery strip, CTA buttons
    return null
}



