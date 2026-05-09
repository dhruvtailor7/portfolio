"use client"

import { RefObject, useEffect, useRef } from "react"

export default function CurrentTime() {
    const timeRef: RefObject<null|HTMLSpanElement> = useRef(null);
    const workerRef: RefObject<null|Worker> = useRef(null);

    useEffect(() => {
        const worker = new Worker(
            new URL("../../lib/workers/clock.worker.ts", import.meta.url)
        );

        workerRef.current = worker

        worker.onmessage = (event) => {
            if (timeRef.current) {
                timeRef.current.textContent = event.data;
            }
        };

        return () => {
            if (workerRef.current) {
                workerRef.current.postMessage("stop");
                workerRef.current.terminate();
            }
        }
    }, []);

    return <div className="min-w-15">
        <span className="text-(--muted-foreground)" ref={timeRef}></span>
    </div>
}