import useIDEContext from "@/app/hooks/useIDEContext"
import { MouseEvent, useCallback } from "react"

export default function Tab({
    file,
    icon,
    isSelected = true,
    onClick,
    onClose
}: TabProps) {
    const { setActiveFile, closeFile } = useIDEContext()

    const onTabClick = useCallback(() => {
        setActiveFile(file.name)
        onClick?.(file)
    }, [file, setActiveFile, onClick])

    const _onClose = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()

        closeFile(file)
        onClose?.(file)
    }, [file, closeFile, onClose])

    return (
        <div
            onClick={onTabClick}
            className={`
                border-t
                ${isSelected ? 'border-t-[var(--accent)]' : 'border-t-transparent'}
                ${isSelected ? 'bg-[var(--background)]' : 'bg-[var(--surface)]'}
                hover:bg-[var(--background)]
                group
                flex items-center px-1.5 gap-0.5
                border-r border-[var(--border)]
            `}
        >
            <div className="flex items-center">
                <span
                    className={`
                        flex items-center justify-center px-0.5
                        codicon codicon-${icon} !text-sm
                    `}
                />

                <span className="text-xs font-medium">
                    {file.name}
                </span>
            </div>

            <button
                onClick={_onClose}
                className={`
                    ${isSelected ? 'visible' : 'invisible group-hover:visible'}
                    hover:bg-[var(--surface-elevated)]
                    rounded-md p-0.5
                    codicon codicon-close
                `}
            />
        </div>
    )
}