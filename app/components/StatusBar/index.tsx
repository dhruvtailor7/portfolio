import LiveViewerCount from "./LiveViwerCount"
import TerminalButton from "./TerminalButton"
import ThemeSwitcher from "./ThemeSwitcher"

export default function StatusBar() {
  return (
    <div className={`flex-shrink-0 max-h-[22px] flex flex-row border-t border-(--border) justify-between items-center-safe text-xs font-semibold bg-[var(--accent)]
            /* Desktop */
            md:px-2
        `}>
      <div className="flex flex-row">
        <div className="hover:bg-[var(--accent-elevated)] flex flex-row gap-1 px-2 py-0.75"><span className="codicon codicon-remote" /></div>
        <div className="hover:bg-[var(--accent-elevated)] flex flex-row gap-1 px-2 py-0.75"><span className="codicon codicon-git-branch" />main</div>
        <div className="hover:bg-[var(--accent-elevated)] flex flex-row gap-1 px-2 py-0.75 items-center justify-center">
          <div className="flex flex-row gap-1"><span className="codicon codicon-error" />0</div>
          <div className="flex flex-row gap-1"><span className="codicon codicon-warning" />0</div>
        </div>
      </div>
      <div className="flex flex-row justify-stretch">
        <div className="flex-row justify-stretch hidden md:flex">
          <div className="hover:bg-[var(--accent-elevated)] flex flex-row px-2 py-0.75">Ln 1, Col 1</div>
          <div className="hover:bg-[var(--accent-elevated)] flex flex-row px-2 py-0.75">TypeScript React</div>
          <div className="hover:bg-[var(--accent-elevated)] flex flex-row px-2 py-0.75">UTF-8</div>
        </div>
        <TerminalButton />
        <ThemeSwitcher />
        <LiveViewerCount />
      </div>
    </div>
  )
}
