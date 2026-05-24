import SidebarDrawer from "./SidebarDrawer";
import SidebarPanel from "./SidebarPanel";

export default function SideBar() {

    return (
        <>
            <div className="md:hidden block">   
                <SidebarDrawer />
            </div>
            <div className="md:block hidden">
                <SidebarPanel />
            </div>
        </>
    )
}