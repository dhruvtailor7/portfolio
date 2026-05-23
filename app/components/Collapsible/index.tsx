import { useCallback, useState } from "react"

export default function Collapsible({ title, Content }: CollapsibleProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    const expand = useCallback(() => {
        setIsExpanded((expanded) => !expanded)
    }, [])

    return (
        <>
            <button className="hover:bg-(--surface-elevated) py-0.5" onClick={expand}>
                <div className={"flex items-center gap-0.5"} >
                    <span
                        className={`!text-(--muted-foreground) !font-bold codicon leading-none
                            ${isExpanded ? 'codicon-chevron-down' : 'codicon-chevron-right'}`}
                    />
                    <span className={`flex-1 text-start font-extrabold tracking-wide uppercase`}>{title}</span>
                </div>
            </button>
            {
                isExpanded ? <Content /> : null
            }
        </>
    )
}

type CollapsibleProps = {
    title: string
    Content: React.ComponentType
}

