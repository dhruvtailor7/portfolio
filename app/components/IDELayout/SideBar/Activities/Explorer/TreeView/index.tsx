import FileView from "./FileView"
import DirectoryView from "./DirectoryView"

export default function TreeView({data, level}: TreeViewProps) {
    return (
        <ul>
            {
                data.map((node) => {
                    if(node.type === 'file') {
                        return <li className={`flex flex-col`} key={node.name}><FileView file={node} level={level} /></li>;
                    } else if(node.type === 'directory') {
                        return <li className={`flex flex-col`} key={node.name}><DirectoryView directory={node} level={level}/></li>
                    } else {
                        return null
                    }
                })
            }
        </ul>
    )
}