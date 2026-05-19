import Section from "./Section";

const experiences: Experience[] = [
  {
    company: "True Sparrow Systems",
    role: "Senior Software Engineer",
    period: "May 2023 - Present",
    description: [
        "• Worked on the Checklist Module, building CRUD APIs to manage checklists and tasks, along with background jobs to send automated reminders for task completion.",
        "• Developed and maintained APIs for the M365 Room Booking Module with Microsoft 365 Outlook integration, and wrote async workflows to sync room and calendar event data from M365.",
        "• Provisioned and managed AWS infrastructure for various projects using Terraform.",
        "• Improved the consistency of fallback handling and the adherence of responses to configured tone and verbosity settings for AI agent using prompt engineering."
    ]
  },
  {
    company: "True Sparrow Systems",
    role: "Software Engineer",
    period: "Nov 2020 - April 2023",
    description: [
        "• Developed core features for a React Native–based fitness application, enabling users to host and attend live classes, participate in real-time chat, and access VOD content for past completed classes.",
        "• Integrated CodePush for OTA updates enabling faster delivery of critical bug fixes and UI improvements.",
        "• Integrated Push Notifications and Universal Links/App Links improving user engagement."
    ],
  },
  {
    company: "Coviam",
    role: "Software Engineering Intern",
    period: "Jan 2020 - June 2020",
    description: [
        "• Utilized mustache template engine with Spring Boot to improve SEO for the e-commerce web application.",
        "• Implemented unit test cases using JUnit to validate the backend APIs and improved the overall code coverage."
    ],
  },
];

export default function Timeline() {
  return (
    <Section>
      <div className="flex items-center gap-3 uppercase text-xs text-(--highlight-2)">
        Work History
      </div>

      <h2 className="text-5xl font-(family-name:--font-cabin-sketch) font-extrabold">
        <span>Where I&apos;ve worked</span>
      </h2>

      <div className="flex flex-col mt-8">
        {experiences.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))}
      </div>
    </Section>
  );
}

function Experience({ experience }: ExperienceProps) {
  return (
    <div className="flex gap-8 last:[&>div]:pb-0">
      <div className="relative flex flex-col items-center">
        <div className={`absolute w-2 h-2 rounded-full bg-(--highlight-2)
          /* Desktop */
          md:top-3
          /* Mobile */
          top-2
          `} />
        <div className="w-px h-full bg-(--border)" />
      </div>

      <div className="flex flex-col grow pb-10 gap-2 md:gap-1">
        <div className={`
          flex flex-col md:flex-row items-start md:items-center gap-2 justify-start md:justify-between`}>
          <p className="text-(--foreground) font-bold leading-none text-lg">
            {experience.company}
          </p>

          <div className={`border border-(--border) bg-(--surface) rounded-full leading-none whitespace-nowrap
            /* Desktop */
            md:text-sm md:px-4 md:py-2
            /* Mobile */
            text-xs px-2 py-1
            `}>
              {experience.period}
          </div>
        </div>

        <p className="text-(--highlight-2) font-medium text-sm">{experience.role}</p>

        <ul className="text-(--muted-foreground) text-sm">
          {experience.description.map((itm: string, idx: number) => <li key={idx}>{itm}</li>)}
        </ul>
      </div>
    </div>
  );
}