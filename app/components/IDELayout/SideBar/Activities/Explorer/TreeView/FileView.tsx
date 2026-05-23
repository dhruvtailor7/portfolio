import useIDEContext from "@/app/hooks/useIDEContext"
import { checkIsMobile } from "@/app/lib/breakpoint"
import { useCallback, useMemo } from "react"
import File from "@/app/components/icons/FileIcon";
import { getFileIcon } from "@/app/lib/fileHelper";

export default function FileView({file, level = 0}: FileViewProps) {
    const {activeFile, openFile, toggleSidebar} = useIDEContext()

    const _openFile = useCallback(() => {
        openFile(file)
        if(checkIsMobile()) {
            toggleSidebar()
        }
    }, [file, openFile, toggleSidebar])

    const isActive = useMemo(() => activeFile === file.path, [activeFile, file.path])

    const Icon = useMemo(() => getFileIcon(file), [file]) as React.ElementType

    return (
        <div
            onClick={_openFile}
            className={`hover:bg-(--surface-elevated) flex items-center gap-1 py-1 ${isActive ? 'bg-(--surface-elevated)' : ''}`}
            style={{ paddingLeft: `${level * 16}px` }}
        >
            <Icon size={16} />
            <span>{file.name}</span>
        </div>
    )
}