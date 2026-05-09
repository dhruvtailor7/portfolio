import useIDEContext from "@/app/hooks/useIDEContext"
import { useCallback } from "react"

export default function FileView({file, level = 0}: FileViewProps) {
    const {openFile} = useIDEContext()

    const _openFile = useCallback(() => {
        openFile(file)
    }, [openFile])

    return (
        <div
            onClick={_openFile}
            className="hover:bg-(--surface-elevated) flex items-center gap-1 py-0.5"
            style={{ paddingLeft: `${level * 16}px` }}
        >
            <span className="codicon codicon-file" /><span>{file.name}</span>
        </div>
    )
}