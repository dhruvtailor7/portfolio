import { myData } from "@/app/lib/constants";
import Section from "./Section";
import { MdEmail, MdInsertDriveFile } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const buttonsData = [
    {
        icon: <MdEmail />,
        title: "Send Email",
        link: `mailto: ${myData.personal.email}`
    },
    {
        icon: <FaGithub />,
        title: "GitHub",
        link: myData.social.github
    },
    {
        icon: <FaLinkedin />,
        title: "LinkedIn",
        link: myData.social.linkedin
    },
    {
        icon: <SiLeetcode />,
        title: "LeetCode",
        link: myData.social.leetcode
    },
    {
        icon: <MdInsertDriveFile />,
        title: "Resume",
        link: myData.professional.resumeLink
    }
]

export default function Contact() {
    return (
        <Section >
            <div className="border border-(--highlight-2) px-3 py-1 bg-[rgb(var(--highlight-2)/0.15)] rounded-full w-fit">
                <p className="uppercase text-xs text-(--highlight-2)">
                    AVAILABLE FOR WORK
                </p>
            </div>
            <p className="text-7xl font-(family-name:--font-cabin-sketch) font-extrabold">Get in touch</p>
            <p className="max-w-lg text-md leading-7 font-semibold text-(--muted-foreground) font-medium">
                I work on products, systems, and interfaces with a focus on clarity, reliability, and usefulness.
                If you think my experience could be valuable to you or your project, feel free to reach out.
            </p>
            <div className="text-md leading-7 font-semibold text-(--muted-foreground) font-medium">
                <p><span className="text-(--foreground)">Email: </span>{myData.personal.email}</p>
                <p className="capitalize"><span className="text-(--foreground)">Location: </span>{myData.location.state}, {myData.location.country}</p>
            </div>
            <div className="max-w-lg flex flex-wrap gap-2">
                {
                    buttonsData.map((data) => {
                        return (
                            <a key={data.title} className="hover:border hover:border-(--highlight-2) transition duration-300 hover:-translate-y-[1px] pointer-auto border rounded-lg border-(--border) bg-(--surface) px-5 py-3 text-sm font-semibold flex items-center gap-2" href={data.link} target="_blank">
                                <span className="text-base">{data.icon}</span>
                                <span>{data.title}</span>
                            </a>
                        )
                    })
                }
            </div>
        </Section>
    )
}