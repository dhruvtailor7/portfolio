import useIDEContext from "@/app/hooks/useIDEContext";
import { activities } from "@/app/lib/constants";
import { useCallback } from "react";

export default function ActivityBar() {

    const {selectedActivity, sidebarOpen, setSelectedActivity, toggleSidebar} = useIDEContext();

    const handleActivityClick = useCallback((activity: ActivityId) => {
        if(selectedActivity === activity) {
            toggleSidebar()
        } else {
            setSelectedActivity(activity)   
            if(!sidebarOpen) toggleSidebar()
        }
    }, [selectedActivity, setSelectedActivity, toggleSidebar, sidebarOpen])

    return <div className="flex-shrink-0 w-11 border-r border-(--border) bg-(--surface)">
        <div className="flex flex-col">
        {
            activities.map((activity) => {
                return <ActivityButton key={activity.id} id={activity.id} title={activity.title} icon={activity.icon} isSelected={activity.id === selectedActivity} onClick={handleActivityClick} />
            })
        }
        </div>
    </div>
}

export function ActivityButton({id, title, icon, isSelected, onClick}: ActivityButtonProps) {
    const handleClick = useCallback(() => {
        onClick(id)
    }, [onClick, id])

    return <button 
        key={id}
        title={title}
        className={`
            w-full 
            !text-2xl 
            p-2 
            codicon 
            codicon-${icon} 
            hover:text-(--foreground)
            ${isSelected ? 'border-l-2 border-(--foreground)' : 'border-l-0'}
            ${isSelected ? 'text-(--foreground)' : 'text-(--muted-foreground)'}
            cursor-pointer
        `}
        onClick={handleClick}
    />
}

type ActivityButtonProps = {
    id: ActivityId
    title: string
    icon: string
    isSelected: boolean
    onClick: (activity: ActivityId) => void
}