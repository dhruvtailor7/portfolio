import Section from "./Section";

const projects: Project[] = [
  {
    name: "StreamFlow",
    url: "https://github.com/dhruvtailor7/StreamFlow",
    description: [
        "A system that records a RTSP stream in chunks and uploads the clips to a cloud-based storage service.",
        "Built the recorder service to capture live RTSP streams, segment the footage into clips, and store metadata in a SQLite database.",
        "Implemented an uploader service with event-based triggers along with cron-based retries to process new and failed uploads."
    ],
    technologies: [
       "Node.js", "SQLite", "MQTT"
    ]
  },
  {
    name: "Portfolio",
    url: "https://github.com/dhruvtailor7/portfolio",
    description: [
        "The code for this very website you are looking at right now.",
        "Inspired by the VS Code UI, with visually appealing components that go beyond the editor aesthetic; since a purely text-based editor aesthetic alone wouldn't make for an engaging portfolio.",
    ],
    technologies: [
       "Next.js", "Tailwind CSS", "TypeScript"
    ]
  },
  {
    name: "AppLogger",
    url: "https://github.com/TrueSparrowSystems/applogger",
    description: [
        "A debugging tool that captures user actions and application state, helping QA reproduce issues easily.",
        "Implemented a web dashboard to present logs and export sessions, reducing turnaround time for debugging.",
        "Added session management to group logs by test scenario, improving traceability across complex test flows."
    ],
    technologies: [
       "React Native"
    ]
  }
]

export default function Projects() {
    return (
        <Section>
            <div className="uppercase text-xs text-(--highlight-2)" >
                Featured Projects
            </div>

            <h2 className="text-5xl font-(family-name:--font-cabin-sketch) font-extrabold">
                <span>Things I&apos;ve built</span>
            </h2>

            <p className="max-w-lg text-(--muted-foreground)">A selection of projects that showcase different aspects of my engineering work.</p>

            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mt-8">
                {
                    projects.map((project, idx) => <Project key={idx} project={project} idx={idx}/>)
                }
            </div>
        </Section>
    )
}

function Project({project, idx}: ProjectProps) {
    const highlight = `var(--highlight-${(idx % 3) + 1})`;
    const indexLabel = String(idx + 1).padStart(2, '0');
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ '--card-highlight': highlight } as React.CSSProperties}
            className="relative overflow-hidden hover:shadow-[0_0_10px_var(--card-highlight)] hover:border-[var(--card-highlight)] transition duration-300 hover:-translate-y-2 pointer-auto px-6 py-8 border border-(--border) border-t-2 border-t-[var(--card-highlight)] bg-(--surface) rounded-3xl flex flex-col gap-3"
        >
            <span className="absolute top-3 right-5 text-8xl font-extrabold opacity-[0.06] leading-none select-none pointer-events-none">
                {indexLabel}
            </span>

            <div className="flex items-center justify-between">
                <p className="text-(--foreground) font-extrabold text-lg leading-none">
                    {project.name}
                </p>
                <span className="!text-2xl text-(--muted-foreground) codicon codicon-github"></span>
            </div>

            <div className="border-b border-(--border)" />

            <ul className="flex-1 text-(--muted-foreground) font-medium text-sm list-disc list-inside space-y-1">
                {project.description.map((itm: string, i: number) => <li key={i}>{itm}</li>)}
            </ul>

            <div className="flex gap-2 flex-wrap">
                {project.technologies.map((itm, i) => (
                    <div key={i} className="px-2 py-1 text-xs border border-(--border) bg-(--surface-elevated) rounded-md">
                        {itm}
                    </div>
                ))}
            </div>

            <p className="text-xs text-[var(--card-highlight)] mt-1">
                View on GitHub -&gt;
            </p>
        </a>
    )
}