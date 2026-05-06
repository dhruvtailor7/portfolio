import EditorView from "./EditorView";
import TabBar from "./TabBar";

export default function EditorLayout() {
    return (
        <div className="flex flex-col grow min-w-0 bg-(--background)">
            <TabBar />
            <EditorView />
        </div>
    )
}