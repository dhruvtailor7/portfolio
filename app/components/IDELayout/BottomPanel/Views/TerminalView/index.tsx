import { useCallback, useLayoutEffect, useRef } from "react";
import { TerminalLine } from "./types";
import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";
import { TerminalProvider } from "@/app/contexts/TerminalContext";
import useTerminalContext from "@/app/hooks/useTerminalContext";

const SCROLL_BOTTOM_THRESHOLD = 40;

function TerminalViewWithContext() {
    const { transcript } = useTerminalContext();
    const scrollRef = useRef<HTMLDivElement>(null);
    const pinnedRef = useRef(true);

    useLayoutEffect(() => {
        const el = scrollRef.current;
        if (el && pinnedRef.current) {
            el.scrollTop = el.scrollHeight;
        }
    }, [transcript]);

    const handleScroll = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        pinnedRef.current =
            el.scrollHeight - el.scrollTop - el.clientHeight < SCROLL_BOTTOM_THRESHOLD;
    }, [])

    return (
        <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex flex-col flex-1 min-w-0 min-h-0 p-2 gap-1 overflow-y-auto select-text text-(--foreground) text-xs text-wrap"
        >
            {transcript.map((line: TerminalLine, idx: number) => {
                return <TerminalOutput key={`${line.kind}-${idx}`} line={line} />
            })}
            <TerminalInput />
        </div>
    )
}

export default function TerminalView() {
    return (
        <TerminalProvider>
            <TerminalViewWithContext />
        </TerminalProvider>
    )
}
