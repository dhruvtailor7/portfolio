import useIDEContext from "@/app/hooks/useIDEContext"
import ActivityFactory from "./Activities/Factory"
import useResizer from "@/app/hooks/useResizer";

const MIN_WIDTH = 150;
const MAX_WIDTH = 500;
const DEFAULT_WIDTH = 230;

const HANDLE_WIDTH = 4;

export default function SidebarPanel() {
    const { sidebarOpen, selectedActivity } = useIDEContext()

    const { ref, value, isResizing, cursor, resizeHandleProps } = useResizer({
        direction: 'right',
        initialValue: DEFAULT_WIDTH,
        minValue: MIN_WIDTH,
        maxValue: MAX_WIDTH,
    });

    return (
        <div className="relative h-full">
            <div
                ref={ref}
                className="border-r border-(--border) bg-(--surface) flex flex-col overflow-hidden h-full"
                style={{
                    width: sidebarOpen ? `${value}px` : 0,
                    borderRightWidth: sidebarOpen ? '1px' : 0,
                }}
            >
                {ActivityFactory.getView(selectedActivity)}
            </div>
            {sidebarOpen && <div
                {...resizeHandleProps}
                className={`
                    absolute top-0 bottom-0 w-1 z-10
                    hover:bg-(--accent-elevated)
                    ${isResizing ? 'bg-(--accent-elevated)' : 'bg-transparent'}
                `}
                style={{
                    ...resizeHandleProps.style,
                    left: sidebarOpen ? `${value - HANDLE_WIDTH}px` : 0,
                    width: `${HANDLE_WIDTH}px`,
                    cursor,
                }}
            />}
        </div>
    )
}