import useIDEContext from "@/app/hooks/useIDEContext"
import ActivityFactory from "./Activities/Factory"

export default function SidebarPanel() {
    const {sidebarOpen, selectedActivity} = useIDEContext()
    
    return (
        <div className={`
            flex-shrink-0 border-r border-(--border) bg-(--surface) flex flex-col
            relative h-full
            overflow-hidden
            ${sidebarOpen ? 'w-48' : 'w-0'}
        `}>
            {ActivityFactory.getView(selectedActivity)}
        </div>
    )
}