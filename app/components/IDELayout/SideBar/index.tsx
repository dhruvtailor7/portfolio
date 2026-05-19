import useIDEContext from "@/app/hooks/useIDEContext";
import ActivityFactory from "./Activities/Factory";

export default function SideBar() {
    const {selectedActivity, sidebarOpen, toggleSidebar} = useIDEContext();

    return (
        <>
        <div className={`
            flex-shrink-0 border-r border-(--border) bg-(--surface) flex flex-col
            
            /* Desktop */
            md:w-48 md:relative md:translate-x-0

            /* Mobile */
            fixed top-0 left-0 h-full w-64 z-50 transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
            <div className="md:block">
                {ActivityFactory.getView(selectedActivity)}
            </div>
        </div>
        {/* Backdrop — only on mobile when open */}
        {sidebarOpen && (
            <div
                className="fixed inset-0 z-40 bg-black/40 md:hidden transition-opacity duration-300 ease-in-out"
                onClick={toggleSidebar}
            />
        )}
        </>
    )
}