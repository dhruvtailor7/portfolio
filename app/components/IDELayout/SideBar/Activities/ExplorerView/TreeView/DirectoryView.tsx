import { useState, useCallback } from "react"
import TreeView from ".";
import FolderOpenIcon from "@/app/components/icons/FolderOpenIcon";
import FolderIcon from "@/app/components/icons/FolderIcon";
import type { DirectoryViewProps } from "./types";

export default function FolderView({directory, level}: DirectoryViewProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const expand = useCallback(() => {
        setIsExpanded((expanded) => !expanded)
    }, [])

    const Icon = isExpanded ? FolderOpenIcon : FolderIcon;

    return (
        <>
            <button className="hover:bg-(--surface-elevated) w-full min-w-0 py-0.5" onClick={expand}>
                <div 
                    className="flex w-full min-w-0 items-center gap-0.5"
                    style={{ paddingLeft: `${level * 16}px` }}
                >
                    <span
                        className={`shrink-0 !text-(--muted-foreground) !font-bold codicon ${
                            isExpanded ? 'codicon-chevron-down' : 'codicon-chevron-right'
                        } leading-none`}
                    />
                    <div className="flex min-w-0 flex-1 items-center gap-1">
                        <Icon size={16} style={{ flexShrink: 0 }} />
                        <span className={`min-w-0 flex-1 text-start whitespace-nowrap overflow-hidden text-ellipsis ${level == 0 ? 'font-extrabold tracking-wide uppercase' : 'font-semibold'}`}>{directory.name}</span>
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