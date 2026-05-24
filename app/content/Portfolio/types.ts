export type Experience = {
    company: string
    role: string
    period: string
    description: string[]
}

export type ExperienceProps = {
    experience: Experience
}

export type Project = {
    name: string
    url?: string
    description: string[]
    technologies: string[]
}

export type ProjectProps = {
    project: Project
    idx: number
}

export type SectionProps = React.PropsWithChildren<{
  styles?: string;
}>