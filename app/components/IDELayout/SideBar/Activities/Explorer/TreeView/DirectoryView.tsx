import { useState, useCallback } from "react"
import TreeView from ".";

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
                    <span className="flex-1 text-start">{directory.name}</span>
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