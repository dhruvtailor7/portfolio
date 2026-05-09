import { useEffect, useState } from "react";

import useIDEContext from "@/app/hooks/useIDEContext";
import { ViewFactory } from "./ViewFactory";

export default function EditorView() {
  const { activeFile } = useIDEContext();

  const [View, setView] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const loadView = async () => {
      const component = await ViewFactory.getView(activeFile);
      setView(() => component);
    };

    loadView();
  }, [activeFile]);

  return (
    <div className="overflow-y-auto min-h-0 grow border-t border-(--border)">
      {View ? <View /> : null}
    </div>
  );
}