import IDELayout from "../components/IDELayout";
import StatusBar from "../components/StatusBar";
import TitleBar from "../components/TitleBar";
import { IDEProvider } from "../contexts/IDEContext";

export default function IDEWindow() {
    return (
        <div className="h-full flex flex-col">
            <IDEProvider>
                <TitleBar />
                <IDELayout />
                <StatusBar />
            </IDEProvider>
        </div>
    );
}