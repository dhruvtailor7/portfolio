import useIDEContext from "@/app/hooks/useIDEContext";
import ActivityFactory from "./Activities/Factory";

export default function SideBar(props: SideBarProps) {
    const {selectedActivity} = useIDEContext();

    return (
        <div className="flex-shrink-0 w-48 border-r border-(--border) bg-(--surface) flex flex-col">
            {ActivityFactory.getView(selectedActivity)}
        </div>
    )
}