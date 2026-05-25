import { activities } from "@/app/lib/constants";
import type { ActivityId } from "./types";
import useIDEContext from "@/app/hooks/useIDEContext";
import { useCallback } from "react";

export default function ActivityBarDrawer() {
    const { selectedActivity, setSelectedActivity } = useIDEContext();

    const handleActivityClick = useCallback((activity: ActivityId) => {
        if (selectedActivity !== activity) {
            setSelectedActivity(activity)
        }
    }, [selectedActivity, setSelectedActivity])

    return (
        <div className="flex flex-row items-center justify-center gap-1 p-2">
            {activities.map((activity) => (
                <ActivityButton 
                    key={activity.id}
                    id={activity.id}
                    title={activity.title}
                    icon={activity.icon}
                    isSelected={activity.id === selectedActivity}
                    onClick={handleActivityClick}
                />
            ))}
        </div>
    )
}

function ActivityButton({ id, title, icon, isSelected, onClick }: ActivityButtonProps) {
    const handleClick = useCallback(() => {
        onClick(id)
    }, [onClick, id])

    return (
        <button
            key={id}
            title={title}
            className={`
                codicon 
                codicon-${icon} 
                hover:text-(--foreground)
                hover:bg-(--surface-elevated)
                ${isSelected ? 'bg-(--surface-elevated)' : ''}
                ${isSelected ? 'text-(--foreground)' : 'text-(--muted-foreground)'}
                cursor-pointer
                rounded-md
                p-1.5
            `}
            onClick={handleClick}
        />
    )
}

type ActivityButtonProps = {
    id: ActivityId
    title: string
    icon: string
    isSelected: boolean
    onClick: (activity: ActivityId) => void
}