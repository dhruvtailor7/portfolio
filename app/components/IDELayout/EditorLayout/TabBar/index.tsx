import { getFileIcon } from "@/app/lib/fileHelper"
import Tab from "./Tab"
import useIDEContext from "@/app/hooks/useIDEContext"
import { useMemo } from "react"

export default function TabBar() {
    
    const {openFiles, activeFile} = useIDEContext()

    const filesWithIcons = useMemo(
        () => openFiles.map((file) => ({
          ...file,
          Icon: getFileIcon(file),
        })),
        [openFiles]
      );

    return (
        <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap flex-shrink-0 overscroll-none no-scrollbar min-w-0 h-8 flex bg-(--surface)">
            {
                filesWithIcons.map(
                    (file) => {
                        return <Tab key={file.name} file={file} Icon={file.Icon} isSelected={activeFile === file.path} />
                    }
                )
            }
        </div>
    )
}