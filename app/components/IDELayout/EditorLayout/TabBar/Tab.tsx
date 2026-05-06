import useIDEContext from "@/app/hooks/useIDEContext"
import { useCallback } from "react"

export default function Tab({file, icon, isSelected = true, onClick, onClose}:TabProps) {
    const {setActiveFile, closeFile} = useIDEContext()
    const onTabClick = useCallback(() => setActiveFile(file.name), [file.name])
    const _onClose = useCallback(() => {
        closeFile(file)
        onClose?.(file)
    }, [file.name])

    return (
        <div 
            onClick={onTabClick}
            className={`
                border-t
                ${isSelected ? 'border-t-(--accent)' : 'border-t-transparent'}
                ${isSelected ? 'bg-(--background)' : 'bg-(--surface)'}
                hover:bg-(--background)
                group
                flex items-center px-1.5 gap-0.5
                border-r border-(--border)
            `}
        >
            <div className="flex items-center">
                <span className={`flex items-center justify-center px-0.5 codicon codicon-${icon} !text-sm`} />
                <span className="text-xs font-medium">{file.name}</span>
            </div>
            <button 
                onClick={_onClose}
                className={`
                    ${isSelected ? 'visible' : 'invisible group-hover:visible'}
                    hover:bg-(--surface-elevated) rounded-md p-0.5 codicon codicon-close
                `} 
            />
        </div>
    )
}