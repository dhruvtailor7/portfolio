"use client"

import ActivityBar from "./ActivityBar";
import SideBar from "./SideBar";
import Editor from "./EditorLayout";

export default function IDELayout() {
    return (
        <div className="grow flex min-h-0 flex-row bg-(--background)">
            <div className="hidden md:flex">
                <ActivityBar />
            </div>
            <SideBar />
            <Editor />
        </div>
    )
} 