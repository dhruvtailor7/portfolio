import { useCallback, useRef, useState } from "react";

export default function useTerminalHistory() {
    const [history, setHistory] = useState<string[]>([]);
    const cursorRef = useRef<number | null>(null);
    const draftRef = useRef<string | null>(null);

    const resetCursor = useCallback(() => {
        cursorRef.current = null;
        draftRef.current = null;
    }, []);

    const loadPreviousCommand = useCallback((currentInput: string) => {
        if (history.length === 0) return null;

        if (cursorRef.current === null) {
            draftRef.current = currentInput;
            cursorRef.current = history.length - 1;
        } else if (cursorRef.current > 0) {
            cursorRef.current--;
        }

        return history[cursorRef.current];
    }, [history]);

    const loadNextCommand = useCallback(() => {
        if (history.length === 0 || cursorRef.current === null) return null;

        if (cursorRef.current < history.length - 1) {
            cursorRef.current++;
            return history[cursorRef.current];
        }

        cursorRef.current = null
        return draftRef.current;
    }, [history]);

    const recordCommand = useCallback((command: string) => {
        setHistory((prev) => {
            if (prev.at(-1) !== command) {
                return [...prev, command];
            }
            return prev
        })
        resetCursor()
    }, [resetCursor])

    return {
        history,
        resetCursor,
        recordCommand,
        loadPreviousCommand,
        loadNextCommand,
    }
}