import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import PromptPrefix from "./PromptPrefix";
import useTerminalContext from "@/app/hooks/useTerminalContext";

const PROMPT_GAP = 4;

export default function TerminalInput() {
    const { input, handleInput, submitCommand, cwd, onArrowUp, onArrowDown } = useTerminalContext();
    const [prefixWidth, setPrefixWidth] = useState(0);
    const prefixRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const measurePrefix = useCallback(() => {
        setPrefixWidth(prefixRef.current?.offsetWidth ?? 0);
    }, []);

    useLayoutEffect(() => {
        measurePrefix();
    }, [measurePrefix]);

    useEffect(() => {
        const el = prefixRef.current;
        if (!el) return;
        const observer = new ResizeObserver(measurePrefix);
        observer.observe(el);
        return () => observer.disconnect();
    }, [measurePrefix]);

    const syncHeight = useCallback(() => {
        const el = textareaRef.current;
        if (!el) return;
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
    }, []);

    useLayoutEffect(() => {
        syncHeight();
    }, [prefixWidth, syncHeight]);

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (event.key === "ArrowUp") {
                event.preventDefault();
                onArrowUp();
                return;
            }
            if (event.key === "ArrowDown") {
                event.preventDefault();
                onArrowDown();
                return;
            }
            if (event.key === "Enter") {
                event.preventDefault();
                submitCommand(input);
            }
        },
        [input, submitCommand, onArrowUp, onArrowDown]
    );

    useEffect(() => {
        textareaRef.current?.focus();
    }, []);

    const indent = prefixWidth + PROMPT_GAP;

    return (
        <div className="relative w-full min-w-0 font-mono text-xs">
            <div
                ref={prefixRef}
                aria-hidden
                className="pointer-events-none absolute top-0 left-0 select-none"
            >
                <PromptPrefix cwd={cwd} />
            </div>
            <textarea
                ref={textareaRef}
                value={input}
                spellCheck={false}
                rows={1}
                aria-label="Terminal input"
                onChange={(e) => handleInput(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{ textIndent: indent }}
                className="block w-full min-h-[1lh] resize-none overflow-hidden border-none bg-transparent outline-none font-mono text-xs leading-normal text-(--foreground) caret-(--foreground) break-words"
            />
        </div>
    );
}
