import Collapsible from "@/app/components/Collapsible"
import ThemesIcon from "@/app/components/icons/ThemesIcon"
import { QuickPickerOpenEvent } from "@/app/components/QuickPickerDropdown/constants"
import eventEmitter from "@/app/lib/eventEmitter"

const extensions = [
    {
        name: 'Themes',
        description: 'Manage your themes and colors',
        Icon: ThemesIcon,
        onClick: () => eventEmitter.emit(QuickPickerOpenEvent)
    }
]

export default function ExtensionView() {
    return (
        <div className="min-h-0 flex flex-col gap-1 text-sm font-medium md:text-xs">
            <h6 className="p-3 text-sm font-mono md:text-xs">EXTENSIONS</h6>
            <Collapsible title="installed" Content={InstalledExtensions} />
        </div>
    )
}

function InstalledExtensions() {
    return (
        <div className="flex flex-col gap-2">
            {extensions.map((extension) => (
                <ExtensionItem 
                    key={extension.name} 
                    name={extension.name}
                    description={extension.description}
                    Icon={extension.Icon}
                    onClick={extension.onClick}
                />
            ))}
        </div>
    )
}

function ExtensionItem({ name, description, Icon, onClick }: ExtensionItemProps) {
    return (
        <div className="flex items-center gap-2 w-full min-w-0 hover:bg-(--surface-elevated) px-2 py-1 cursor-pointer" onClick={onClick}>
            <div className="flex items-center justify-center w-6 h-6 bg-(--background) rounded-md shrink-0">
                <Icon />
            </div>

            <div className="flex flex-col min-w-0 flex-1">
                <h1 className="text-sm font-medium">
                    {name}
                </h1>
                <p className="text-xs text-(--muted-foreground) w-full overflow-hidden whitespace-nowrap text-ellipsis">
                    {description}
                </p>
            </div>
        </div>
    )
}

type ExtensionItemProps = {
    name: string
    description: string
    Icon: React.ComponentType
    onClick: () => void
}