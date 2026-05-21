import { myData } from "@/app/lib/constants";
import Section from "./Section";
import Image from "next/image";
import meImage from "@/public/images/me.jpeg";

export default function Intro() {
    return (
        <Section styles="flex flex-row items-center px-8 py-7 md:px-12 md:py-10">
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3 before:content-[''] before:w-6 before:h-[1px] before:bg-(--highlight-2) before:align-middle uppercase text-xs text-(--highlight-2)" >
                    {myData.professional.designation}
                </div>
                <h1 className="text-8xl font-(family-name:--font-cabin-sketch) font-extrabold">
                    <span className="text-(--highlight-1) capitalize">{myData.personal.name.first}</span>
                    <br/>
                    <span className="text-(--highlight-2) capitalize">{myData.personal.name.last}</span>
                </h1>
                <p className="max-w-lg leading-7 font-semibold text-(--muted-foreground)">
                    <span className="text-(--foreground)">Full-stack engineer</span> with <span className="text-(--foreground)">5+ years of experience</span> building and maintaining products across the stack — <span className="text-(--foreground)">mobile apps, backend APIs, cloud infrastructure</span>, and everything in between.
                </p>

                <div className="text-xs text-(--muted-foreground) flex gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-[#c3e88d] text-[8px] leading-none">●</span>
                        <span className="capitalize">{myData.location.state}, {myData.location.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#c3e88d] text-[8px] leading-none">●</span>
                        <span>Open to work</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <Image src={meImage} alt="Me" width={300} height={300} className="rounded-full" />
            </div>
        </Section>
    )
}