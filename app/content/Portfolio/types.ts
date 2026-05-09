type Experience = {
    company: string
    role: string
    period: string
    description: string[]
}

type ExperienceProps = {
    experience: Experience
}

type Project = {
    name: string
    url?: string
    description: string[]
    technologies: string[]
}

type ProjectProps = {
    project: Project
}

type SectionProps = React.PropsWithChildren<{
  styles?: string;
}>