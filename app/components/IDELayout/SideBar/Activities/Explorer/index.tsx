import { treeData } from "@/app/lib/constants"
import TreeView from "./TreeView"

export default function Explorer() {
    return <div className="min-h-0 flex flex-col gap-1 text-xs font-medium">
        <h6 className="p-3 text-xs font-mono">EXPLORER</h6>
        <div className="thin-scrollbar overscroll-x-hidden overflow-y-auto"><TreeView data={treeData} level={0} /></div>
    </div>
}