"use client"
import ThemeService, { ThemeChangedEvent } from "@/app/services/ThemeService"
import { useCallback, useEffect, useState } from "react"
import { QuickPickerOpenEvent } from "../QuickPickerDropdown/constants"
import eventEmitter from "@/app/lib/eventEmitter"
import { Theme } from "@/app/services/ThemeService/types"

export default function ThemeSwitcher() {
    const [currentTheme, setCurrentTheme] = useState<Theme | undefined>(undefined)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCurrentTheme(ThemeService.getCurrentTheme())
    }, [])

    useEffect(() => {
        const unsubscribe = eventEmitter.on<Theme>(ThemeChangedEvent, (data) => {
            setCurrentTheme(data)
        })

        return () => unsubscribe()
    }, [setCurrentTheme])

    const openQuickPicker = useCallback(() => {
        eventEmitter.emit(QuickPickerOpenEvent)
    }, [])

    return (
        <button className="hover:bg-[var(--accent-elevated)] px-2 py-0.75">
            <span className="text-nowrap" onClick={openQuickPicker}>{currentTheme?.name ?? ''}</span>
        </button>
    )
}