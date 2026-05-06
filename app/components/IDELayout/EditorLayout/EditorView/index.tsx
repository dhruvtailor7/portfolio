import useIDEContext from "@/app/hooks/useIDEContext";

export default function EditorView() {
  const { activeFile } = useIDEContext();

  return (
    <div className="grow border-t border-(--border)">
      {activeFile ? (
        <>
          {activeFile}
        </>
      ) : null}
    </div>
  );
}