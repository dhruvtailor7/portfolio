"use client"

import useIDEContext from "@/app/hooks/useIDEContext";
import AppName from "./AppName";
import CurrentTime from "./CurrentTime";
import WindowControls from "./WindowControls";

export default function TitleBar() {
    const {toggleSidebar} = useIDEContext();
    return (
        <div className={`
            flex flex-row flex-shrink-0 border-b border-(--border) justify-between items-center-safe text-xs bg-[var(--background)] px-2
            /* Desktop */
            md:py-0.75 md:h-auto
            /* Mobile */
            py-0 h-8
        `}>
            <div className="hidden md:flex">
                <WindowControls />
            </div>
            <div className="flex px-1 rounded-md md:hidden">
                <button onClick={toggleSidebar} className="codicon codicon-three-bars !text-xl" />
            </div>
            <AppName />
            <CurrentTime />
        </div>
    )
}