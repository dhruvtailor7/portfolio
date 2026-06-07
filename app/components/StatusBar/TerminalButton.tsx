"use client"
import useIDEContext from "@/app/hooks/useIDEContext";
import { useCallback } from "react";

export default function TerminalButton() {
    const { toggleBottomPanel } = useIDEContext();

    const handleClick = useCallback(() => {
        toggleBottomPanel()
    }, [toggleBottomPanel])

    return (
        <button className="hover:bg-[var(--accent-elevated)] flex flex-row px-2 py-0.75 codicon codicon-terminal !font-medium cursor-pointer" onClick={handleClick} />
    )
}