import useIDEContext from "@/app/hooks/useIDEContext"
import ActivityFactory from "./Activities/Factory"
import ActivityBarDrawer from "../ActivityBar/ActivityBarDrawer"

export default function SidebarDrawer() {
    const {sidebarOpen, selectedActivity, toggleSidebar} = useIDEContext()
    return (
        <>
            <div className={`
                flex-shrink-0 border-r border-(--border) bg-(--surface) flex flex-col
                fixed top-0 left-0 h-full w-64 z-50 transition-transform duration-300 ease-in-out
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <ActivityBarDrawer />
                {ActivityFactory.getView(selectedActivity)}
            </div>
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ease-in-out"
                    onClick={toggleSidebar}
                />
            )}
        </>
    )
}