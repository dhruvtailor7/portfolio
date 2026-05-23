import { useState, useCallback } from "react"
import TreeView from ".";
import FolderOpenIcon from "@/app/components/icons/FolderOpenIcon";
import FolderIcon from "@/app/components/icons/FolderIcon";

export default function FolderView({directory, level}: DirectoryViewProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const expand = useCallback(() => {
        setIsExpanded((expanded) => !expanded)
    }, [])

    return (
        <>
            <button className="hover:bg-(--surface-elevated) py-0.5" onClick={expand}>
                <div 
                    className={"flex items-center gap-0.5"}
                    style={{ paddingLeft: `${level * 16}px` }}
                >
                    <span
                        className={`!text-(--muted-foreground) !font-bold codicon ${
                            isExpanded ? 'codicon-chevron-down' : 'codicon-chevron-right'
                        } leading-none`}
                    />
                    <div className="flex items-center gap-1">
                        {
                            isExpanded ? <FolderOpenIcon size={16} /> : <FolderIcon size={16} />
                        }
                        <span className={`flex-1 text-start ${level == 0 ? 'font-extrabold tracking-wide uppercase' : 'font-semibold'}`}>{directory.name}</span>
                    </div>
                </div>
            </button>
            {
                isExpanded && directory.children && directory.children.length > 0 ? 
                    (
                        <div>
                            <TreeView data={directory.children} level={level+1} />
                        </div>
                    )
                : null
            }
        </>
    )
}