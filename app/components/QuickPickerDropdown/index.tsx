"use client"
import eventEmitter from "@/app/lib/eventEmitter"
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { QuickPickerOpenEvent } from "./constants"
import { themes } from "@/app/lib/themes"
import ThemeService from "@/app/services/ThemeService"

export default function QuickPickerDropdown() {
    const [currentThemeId, setCurrentThemeId] = useState<string>('')
    const [searchQuery, setSearchQuery] = useState('')

    const dialogRef = useRef<HTMLDialogElement>(null)

    const open = useCallback(() => {
        setCurrentThemeId(ThemeService.getCurrentThemeId())
        setSearchQuery('')
        dialogRef.current?.showModal()
    }, [])

    const close = useCallback(() => {
        setSearchQuery('')
        dialogRef.current?.close()
    }, [])

    useEffect(() => {
        const unsubscribe = eventEmitter.on(QuickPickerOpenEvent, open)
        return () => unsubscribe()
    }, [open])

    const onThemeSelect = useCallback((themeId: string) => {
        ThemeService.setTheme(themeId)
        setCurrentThemeId(themeId)
    }, [])

    const handleSearchQueryChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }, [])

    const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === dialogRef.current) close()
    }, [close])

    const filteredThemes = useMemo(
        () => Object.values(themes).filter(t =>
            t.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
        [searchQuery]
    )

    return (
        <dialog
            ref={dialogRef}
            className="
                mx-auto my-4 w-[calc(100%-2rem)] max-w-lg flex-col overflow-hidden max-h-[320px]
                bg-(--surface) text-(--foreground) border border-(--border) rounded-md
                backdrop:bg-black/50 backdrop:backdrop-blur-[2px]
                open:flex
            "
            onCancel={close}
            onClick={handleBackdropClick}
        >
            <span tabIndex={-1} autoFocus className="sr-only" />
            <div className="flex flex-row gap-2 items-center px-3 py-2 border-b border-(--border)">
                <span className="flex-shrink-1 codicon codicon-search"></span>
                <input
                    type="text"
                    placeholder="Search Color Themes"
                    className="flex-1 bg-transparent outline-none"
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                />
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
                                currentThemeId === theme.id
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
        </dialog>
    )
}
