import React from "react"
import type { FileNode } from "@/app/components/IDELayout/SideBar/Activities/ExplorerView/TreeView/types"

const viewRegistry: Record<string, () => Promise<{ default: React.ComponentType }>> = {
    "/my-portfolio/src/portfolio.tsx": () => import("@/app/content/Portfolio"),
    "/my-portfolio/.gitignore": () => import("@/app/content/GitIgnore"),
    "/my-portfolio/styles/themes.css": () => import("@/app/content/Theme"),
    "/my-portfolio/styles/README.md": () => import("@/app/content/RealmReadme"),
    "package.json": () => import("@/app/content/PackageJSON")
}

export class ViewFactory {
    static async getView(filePath?: FileNode["path"]): Promise<React.ComponentType | null> {
        if (!filePath) {
            return null
        }

        return (await viewRegistry[filePath]?.())?.default
    }
}