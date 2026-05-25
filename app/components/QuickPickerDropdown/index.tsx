"use client"
import eventEmitter from "@/app/lib/eventEmitter"
import { ChangeEvent, MouseEvent, useCallback, useEffect, useMemo, useState } from "react"
import { QuickPickerOpenEvent } from "./constants"
import { themes } from "@/app/lib/themes"
import ThemeService from "@/app/services/ThemeService"

export default function QuickPickerDropdown() {
    const [isOpen, setIsOpen] = useState(false)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setThemeUpdate] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')

    const open = useCallback(() => {
        setIsOpen(true)
    }, [])

    const close = useCallback(() => {
        setIsOpen(false)
    }, [])

    useEffect(() => {
        let unsubscribeOpen: () => void

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                close()
            }
        }

        function subscribeToQuickPickerEvents() {
            unsubscribeOpen = eventEmitter.on(QuickPickerOpenEvent, open)
            window.addEventListener('keydown', handleKeyDown)
        }

        subscribeToQuickPickerEvents()

        return () => {
            unsubscribeOpen()
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [close, open])

    const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        e.preventDefault()
    }, [])

    const onThemeSelect = useCallback((themeId: string) => {
        ThemeService.setTheme(themeId)
        setThemeUpdate(prev => prev + 1)
    }, [])

    const handleSearchQueryChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }, [])

    const filteredThemes = useMemo(
        () => Object.values(themes).filter(t =>
            t.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
        [searchQuery]
    )

    if (!isOpen) return null

    return (
        <div
            className="absolute top-0 left-0 w-full h-full flex justify-center z-100 bg-black/50 backdrop-blur-[2px]"
            onClick={close}
        >
            <div
                id="quick-picker-dropdown"
                className="mx-4 my-4 w-full max-w-lg flex flex-col overflow-hidden max-h-[320px] bg-(--surface) border border-(--border) rounded-md"
                role="dialog"
                aria-modal="true"
                onClick={handleClick}
            >
                <div className="flex flex-row gap-2 items-center px-3 py-2 border-b border-(--border)">
                    <span className="flex-shrink-1 codicon codicon-search"></span>
                    <input type="text" placeholder="Search Color Themes" className="flex-1 bg-transparent outline-none" value={searchQuery} onChange={handleSearchQueryChange} />
                </div>
                <div className="flex flex-col gap-2 px-1 py-2 overflow-y-auto thin-scrollbar min-h-0 flex-1">
                    {filteredThemes.map((theme) => (
                        <button
                            role="menuitem"
                            key={theme.id}
                            type="button"
                            className="flex flex-row w-full px-2 py-1 items-center justify-between hover:bg-(--surface-elevated) cursor-pointer text-left"
                            style={{
                                backgroundColor:
                                    ThemeService.getCurrentTheme() === theme.id
                                        ? 'var(--accent)'
                                        : 'transparent'
                            }}
                            onClick={() => onThemeSelect(theme.id)}
                        >
                            <span>{theme.name}</span>

                            <div data-theme={theme.id} className="flex flex-row items-center gap-2">
                                <div className="w-4 h-4 border border-(--border) rounded-sm bg-(--background)" />
                                <div className="w-4 h-4 border border-(--border) rounded-sm bg-(--accent)" />
                                <div className="w-4 h-4 border border-(--border) rounded-sm bg-(--highlight-1)" />
                                <div className="w-4 h-4 border border-(--border) rounded-sm bg-(--highlight-2)" />
                                <div className="w-4 h-4 border border-(--border) rounded-sm bg-(--highlight-3)" />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}