import useIDEContext from "@/app/hooks/useIDEContext";
import { activities } from "@/app/lib/constants";

export default function ActivityBar() {

    const {selectedActivity} = useIDEContext();

    return <div className="flex-shrink-0 w-11 border-r border-(--border) bg-(--surface)">
        <div className="flex flex-col">
        {
            activities.map((activity) => {
                const isSelected = activity.id === selectedActivity
                return <button 
                    key={activity.id}
                    title={activity.title}
                    className={`
                        w-full 
                        !text-2xl 
                        p-2 
                        codicon 
                        codicon-${activity.icon} 
                        hover:text-(--foreground)
                        ${isSelected ? 'border-l-2 border-(--foreground)' : 'border-l-0'}
                        ${isSelected ? 'text-(--foreground)' : 'text-(--muted-foreground)'}
                    `}
                />
            })
        }
        </div>
    </div>
}