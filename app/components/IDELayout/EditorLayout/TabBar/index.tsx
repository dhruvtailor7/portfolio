import Tab from "./Tab"
import useIDEContext from "@/app/hooks/useIDEContext"

export default function TabBar() {
    
    const {openFiles, activeFile} = useIDEContext()

    return (
        <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap flex-shrink-0 overscroll-none no-scrollbar min-w-0 h-8 flex bg-(--surface)">
            {
                openFiles.map(
                    (file) => <Tab key={file.name} file={file} icon={'file'} isSelected={activeFile === file.path} />
                )
            }
        </div>
    )
}