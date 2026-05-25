import Contact from "./Contact"
import Intro from "./Intro"
import Projects from "./Projects"
import Timeline from "./Timeline"

export default function Portfolio() {
    return (
        <div className="overflow-y-auto select-text">
            <Intro />
            <hr className="text-(--border)" />
            <Timeline />
            <hr className="text-(--border)" />
            <Projects />
            <hr className="text-(--border)" />
            <Contact />
        </div>
    )
}

