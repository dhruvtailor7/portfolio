import { useCallback, useState } from "react";
import { BottomPanelTab, BottomPanelTabId } from "./types";
import useIDEContext from "@/app/hooks/useIDEContext";
import useResizer from "@/app/hooks/useResizer";
import ViewFactory from "./Views/Factory";

const BOTTOM_PANEL_TABS: BottomPanelTab[] = [
    {
        id: 'problems',
        title: 'Problems',
    },
    {
        id: 'output',
        title: 'Output',
    },
    {
        id: 'debug console',
        title: 'Debug Console',
    },
    {
        id: 'terminal',
        title: 'Terminal',
    }
];

const HANDLE_HEIGHT = 4;

const DEFAULT_HEIGHT = 200;
const MIN_HEIGHT = 100;
const MAX_HEIGHT = 500;

export default function BottomPanel() {
    const { bottomPanelOpen } = useIDEContext();

    const { ref, value, isResizing, cursor, resizeHandleProps } = useResizer({
        direction: 'top',
        initialValue: DEFAULT_HEIGHT,
        minValue: MIN_HEIGHT,
        maxValue: MAX_HEIGHT,
    });

    const [selectedTabId, setSelectedTabId] = useState<BottomPanelTabId>('terminal');

    const handleTabClick = useCallback((tabId: BottomPanelTabId) => {
        setSelectedTabId(tabId);
    }, []);

    if (!bottomPanelOpen) return null;

    return (
        <div
            ref={ref}
            className="border-t border-(--border) relative shrink-0"
            style={{
                height: `${value}px`,
            }}
        >
            <div
                {...resizeHandleProps}
                className={`
                    absolute left-0 right-0 h-1 z-10
                    hover:bg-(--accent-elevated)
                    ${isResizing ? 'bg-(--accent-elevated)' : 'bg-transparent'}
                `}
                style={{
                    ...resizeHandleProps.style,
                    height: `${HANDLE_HEIGHT}px`,
                    cursor,
                }}
            />
            <div className="flex flex-col min-h-0 h-full px-3 py-1.5">
                <BottonPanelHeader selectedTabId={selectedTabId} onTabClick={handleTabClick} />
                {ViewFactory.getView(selectedTabId)}
            </div>
        </div>
    )
}

function BottonPanelHeader({ selectedTabId, onTabClick }: { selectedTabId: BottomPanelTabId, onTabClick: (tabId: BottomPanelTabId) => void }) {
    const { toggleBottomPanel } = useIDEContext();

    const handleCloseClick = useCallback(() => {
        toggleBottomPanel()
    }, [toggleBottomPanel])

    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-1">
                {BOTTOM_PANEL_TABS.map((tab) => (
                    <button key={tab.id} className={`flex flex-row items-center gap-0.5 md:gap-1 px-1 py-0.75 md:px-2 md:py-1 rounded-md font-medium cursor-pointer ${selectedTabId === tab.id ? 'bg-(--surface-elevated) text-(--foreground)' : 'text-(--muted-foreground) hover:text-(--foreground)'}`} onClick={() => onTabClick(tab.id)}>
                        <span className="text-xs font-medium">{tab.title}</span>
                    </button>
                ))}
            </div>
            <div className="flex flex-row items-center">
                <button className="!text-xs font-medium cursor-pointer codicon codicon-close hover:text-(--foreground) hover:bg-(--surface-elevated) rounded-md p-1" onClick={handleCloseClick}></button>
            </div>
        </div>
    )
}