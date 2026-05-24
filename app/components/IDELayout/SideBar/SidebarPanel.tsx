import useIDEContext from "@/app/hooks/useIDEContext"
import ActivityFactory from "./Activities/Factory"
import { useEffect, useRef, useState } from "react"

const MIN_WIDTH = 150;
const MAX_WIDTH = 500;
const DEFAULT_WIDTH = 192;

const HANDLE_WIDTH = 4;

type ResizeCursor = 'col-resize' | 'e-resize' | 'w-resize'

function getResizeCursor(proposedWidth: number): ResizeCursor {
    if (proposedWidth < MIN_WIDTH) return 'e-resize'
    if (proposedWidth > MAX_WIDTH) return 'w-resize'
    return 'col-resize'
}

function setGlobalCursor(cursor: ResizeCursor) {
    let style = document.getElementById('sidebar-resize-cursor') as HTMLStyleElement | null
    if (!style) {
        style = document.createElement('style')
        style.id = 'sidebar-resize-cursor'
        document.head.appendChild(style)
    }
    style.textContent = `*, *::before, *::after { cursor: ${cursor} !important; }`
}

function clearGlobalCursor() {
    document.getElementById('sidebar-resize-cursor')?.remove()
    document.body.style.removeProperty('user-select')
}

export default function SidebarPanel() {
    const {sidebarOpen, selectedActivity} = useIDEContext()
    const ref = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(DEFAULT_WIDTH)
    const [isResizing, setIsResizing] = useState(false)

    function getProposedWidth(clientX: number) {
        return clientX - (ref.current?.getBoundingClientRect().left ?? 0) + HANDLE_WIDTH / 2
    }

    useEffect(() => {
        if (!isResizing) return

        function handleResize(e: MouseEvent) {
            e.preventDefault()

            const proposedWidth = getProposedWidth(e.clientX)
            setGlobalCursor(getResizeCursor(proposedWidth))
            setWidth(Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, proposedWidth)))
        }

        function handleMouseUp() {
            setIsResizing(false)
            clearGlobalCursor()
        }

        window.addEventListener('mousemove', handleResize)
        window.addEventListener('mouseup', handleMouseUp)

        return () => {
            window.removeEventListener('mousemove', handleResize)
            window.removeEventListener('mouseup', handleMouseUp)
            clearGlobalCursor()
        }

    }, [isResizing])

    function handleResizeStart(e: React.MouseEvent) {
        e.preventDefault()
        document.body.style.userSelect = 'none'
        setGlobalCursor(getResizeCursor(getProposedWidth(e.clientX)))
        setIsResizing(true)
    }
 
    return (
        <div className="relative h-full">
            <div
                ref={ref}
                className="border-r border-(--border) bg-(--surface) flex flex-col overflow-hidden h-full"
                style={{ 
                    width: sidebarOpen ? `${width}px` : 0,
                    borderRightWidth: sidebarOpen ? '1px' : 0,
                }}
            >
                {ActivityFactory.getView(selectedActivity)}
            </div>
            <div
                onMouseDown={handleResizeStart}
                className={`
                    absolute top-0 bottom-0 w-1 z-10
                    hover:bg-(--accent-elevated)
                    ${isResizing ? 'bg-(--accent-elevated)' : 'bg-transparent'}
                `}
                style={{
                    left: sidebarOpen ? `${width - HANDLE_WIDTH}px` : 0,
                    width: `${HANDLE_WIDTH}px`,
                    cursor: getResizeCursor(width),
                }}
            />
        </div>
    )
}