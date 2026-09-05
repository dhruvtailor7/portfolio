"use client"

import Collapsible from "@/app/components/Collapsible"
import ThemesIcon from "@/app/components/icons/ThemesIcon"
import { IconProps } from "@/app/components/icons/types"
import { QuickPickerOpenEvent } from "@/app/components/QuickPickerDropdown/constants"
import { myData, treeData } from "@/app/lib/constants"
import eventEmitter from "@/app/lib/eventEmitter"
import { exportThemes } from "@/app/lib/themes/exportor"
import { findFileByPath } from "@/app/lib/fileHelper"
import posthog from "posthog-js"
import useIDEContext from "@/app/hooks/useIDEContext"
import { useCallback, useEffect, useRef, useState } from "react"

const README_FILE = findFileByPath(treeData, '/my-portfolio/styles/README.md')

export default function ExtensionView() {
    return (
        <div className="min-h-0 flex flex-col gap-1 text-sm font-medium md:text-xs">
            <h6 className="p-3 text-sm font-mono md:text-xs">EXTENSIONS</h6>
            <Collapsible title="installed" Content={InstalledExtensions} />
        </div>
    )
}

function InstalledExtensions() {
    const { openFile } = useIDEContext()

    const handleExport = useCallback(() => {
        posthog.capture("themes_export_clicked", {
            extension: "themes",
        })
        if (README_FILE) openFile(README_FILE)
        exportThemes().catch((error) => console.error('error exporting themes', error))
    }, [openFile])

    return (
        <div className="flex flex-col gap-2">
            <ExtensionItem
                name='Themes'
                description='Manage your themes and colors'
                publisher={myData.personal.name.full}
                Icon={ThemesIcon}
                onClick={() => eventEmitter.emit(QuickPickerOpenEvent)}
                onExport={handleExport}
            />
        </div>
    )
}

function ExtensionItem({ name, description, publisher, Icon, onClick, onExport }: ExtensionItemProps) {

    const ref = useRef<HTMLDivElement>(null)
    const [isSmall, setIsSmall] = useState(true)

    useEffect(() => {
        if (!ref.current) return;
    
        const observer = new ResizeObserver(([entry]) => {
            setIsSmall(entry.contentRect.width < 230);
        })
    
        observer.observe(ref.current)
    
        return () => observer.disconnect()
    }, [])

    const handleExport = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        e.preventDefault()
        onExport?.()
    }, [onExport])

    return (
        <div
            ref={ref}
            className="flex gap-2 w-full min-w-0 hover:bg-(--surface-elevated) px-2 py-1 cursor-pointer" onClick={onClick}>
            <Icon style={isSmall ? { width: 28 } : { height: '100%', width: 'auto' }} />

            <div className="flex flex-col min-w-0 flex-1 gap-1">
                <p className="text-sm leading-none font-bold">
                    {name}
                </p>
                <p className="text-xs leading-none text-(--muted-foreground) w-full overflow-hidden whitespace-nowrap text-ellipsis">
                    {description}
                </p>
                <div className="flex flex-row justify-between gap-1">
                    <span className="flex min-w-0 flex-row items-center gap-1 text-[11px] leading-none">
                        <span className="codicon codicon-verified !text-[11px]"/>
                        <p className="leading-none font-bold text-(--foreground) w-full overflow-hidden whitespace-nowrap text-ellipsis">
                            {publisher}
                        </p>
                    </span>
                    <button onClick={handleExport} className="px-1.5 py-0.5 text-nowrap rounded-xs bg-(--surface-elevated) flex flex-row items-center gap-1 !text-[11px] leading-none text-(--muted-foreground) hover:text-(--foreground) cursor-pointer">
                        <span className="codicon codicon-download !text-xs"/>
                        <span className="leading-none font-bold w-full overflow-hidden whitespace-nowrap text-ellipsis">
                            Export
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

type ExtensionItemProps = {
    name: string
    description: string
    publisher: string
    Icon: React.ComponentType<IconProps>
    onClick: () => void
    onExport?: () => void
}
