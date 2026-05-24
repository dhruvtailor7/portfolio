import Collapsible from "@/app/components/Collapsible"
import ThemesIcon from "@/app/components/icons/ThemesIcon"

const extensions = [
    {
        name: 'Themes',
        description: 'Manage your themes and colors',
        icon: <ThemesIcon />
    }
]

export default function Extension() {
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
                <div key={extension.name} className="flex items-center gap-2 w-full min-w-0 hover:bg-(--surface-elevated) px-2 py-1">

                    <div className="flex items-center justify-center w-6 h-6 bg-(--background) rounded-md shrink-0">
                        {extension.icon}
                    </div>

                    <div className="flex flex-col min-w-0 flex-1">
                        <h1 className="text-sm font-medium">
                            {extension.name}
                        </h1>

                        <p style={{ textOverflow: 'ellipsis' }} className="text-xs text-(--muted-foreground) w-full overflow-hidden whitespace-nowrap text-ellipsis block">
                            {extension.description}
                        </p>
                    </div>

                </div>
            ))}
        </div>
    )
}