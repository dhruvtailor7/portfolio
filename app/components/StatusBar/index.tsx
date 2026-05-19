import LiveViewerCount from "./LiveViwerCount"

export default function StatusBar() {
    return (
        <div className={`flex-shrink-0 overflow-visible flex flex-row border-t border-(--border) justify-between items-center-safe text-xs font-semibold bg-[var(--accent)]
            /* Desktop */
            md:px-2
        `}>
            <div className="flex flex-row">
              <div className="hover:bg-[var(--accent-elevated)] flex flex-row gap-1 px-2 py-0.75"><span className="codicon codicon-remote"/></div>
              <div className="hover:bg-[var(--accent-elevated)] flex flex-row gap-1  px-2 py-0.75"><span className="codicon codicon-git-branch"/>main</div>
              <div className="hover:bg-[var(--accent-elevated)] flex flex-row gap-1  px-2 py-0.75 items-center justify-center">
                <div className="flex flex-row gap-1"><span className="codicon codicon-error"/>0</div>
                <div className="flex flex-row gap-1"><span className="codicon codicon-warning"/>0</div>
              </div>
            </div>
            <div className={`flex flex-row gap-3 px-2 py-0.75
                /* Desktop */
                md:px-2
                /* Mobile */
                px-1 py-0.5
            `}>
              <LiveViewerCount />
            </div>
        </div>
    )
}
