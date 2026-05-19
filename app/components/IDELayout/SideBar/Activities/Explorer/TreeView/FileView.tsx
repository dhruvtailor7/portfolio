import useIDEContext from "@/app/hooks/useIDEContext"
import { checkIsMobile } from "@/app/lib/breakpoint"
import { useCallback, useMemo } from "react"

export default function FileView({file, level = 0}: FileViewProps) {
    const {activeFile, openFile, toggleSidebar} = useIDEContext()

    const _openFile = useCallback(() => {
        openFile(file)
        if(checkIsMobile()) {
            toggleSidebar()
        }
    }, [file, openFile, toggleSidebar])

    const isActive = useMemo(() => activeFile === file.path, [activeFile, file.path])

    return (
        <div
            onClick={_openFile}
            className={`hover:bg-(--surface-elevated) flex items-center gap-1 py-1 ${isActive ? 'bg-(--surface-elevated)' : ''}`}
            style={{ paddingLeft: `${level * 16}px` }}
        >
            <span className={`codicon codicon-file ${isActive ? 'text-(--foreground)' : 'text-(--muted-foreground)'}`} />
            <span>{file.name}</span>
        </div>
    )
}