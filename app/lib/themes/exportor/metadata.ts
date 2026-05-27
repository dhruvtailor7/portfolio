import { themes } from ".."
import { myData } from "../../constants"

export const data = {
    name: "relm-themes",
    displayName: "Relm Themes",
    description: "Dhruv Tailor's portfolio color themes",
    version: "1.0.0",
    publisher: "Dhruv Tailor",
    tags: ["theme", "color-theme", "dark"],
    engines: { vscode: "^1.0.0" },
    categories: ["Themes"],
}

export const contentTypesXml = `<?xml version="1.0" encoding="utf-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
    <Default Extension=".vsixmanifest" ContentType="text/xml" />
    <Default Extension=".json" ContentType="application/json" />
    <Default Extension=".png" ContentType="image/png" />
</Types>
`

export const manifestXml = `<?xml version="1.0" encoding="utf-8"?>
<PackageManifest Version="2.0.0" xmlns="http://schemas.microsoft.com/developer/vsx-schema/2011">
    <Metadata>
        <Identity Language="en-US" Id="${data.name}" Version="${data.version}" Publisher="${data.publisher}" />
        <DisplayName>${data.displayName}</DisplayName>
        <Description>${data.description}</Description>
        <Tags>${data.tags.join(", ")}</Tags>
        <Categories>${data.categories.join(", ")}</Categories>
    </Metadata>
    <Installation>
        <InstallationTarget Id="Microsoft.VisualStudio.Code" Version="[1.0,)" />
    </Installation>
    <Dependencies />
    <Assets>
        <Asset Type="Microsoft.VisualStudio.Code.Manifest" Path="extension/package.json" Addressable="true" />
    </Assets>
</PackageManifest>
`

const themeTable = Object.values(themes)
    .map(t => `| **${t.name}** | ${t.description} |`)
    .join('\n')

export const readme = `# ${data.displayName}

Dark color themes for VS Code and Cursor — exported straight from ${myData.site.url}

## Step 1 — Download

If you haven't downloaded the extension yet:

1. Open ${myData.site.url} in your browser
2. In the left sidebar, open the **Extensions** panel
3. Click the **Export** button on the **${data.displayName}** card
4. \`${data.name}.vsix\` will download automatically

## Step 2 — Install

### VS Code
1. Press \`Ctrl+Shift+X\` / \`Cmd+Shift+X\` → Extensions
2. Click the \`···\` menu (top-right) → **Install from VSIX...**
3. Select the downloaded \`${data.name}.vsix\`
4. Click **Reload** when prompted

### Cursor
1. Press \`Ctrl+Shift+X\` / \`Cmd+Shift+X\` → Extensions
2. Click the \`···\` menu (top-right) → **Install from VSIX...**
3. Select the downloaded \`${data.name}.vsix\`
4. Click **Reload** when prompted

## Step 3 — Switch Theme

Press \`Ctrl+K Ctrl+T\` / \`Cmd+K Cmd+T\` to open the theme picker.
Look for any of the **${data.displayName}** entries:

| Theme | Description |
|-------|-------------|
${themeTable}
`

export const pkg = {
    name: data.name,
    displayName: data.displayName,
    description: data.description,
    version: data.version,
    publisher: data.publisher,
    engines: data.engines,
    categories: data.categories,
    icon: "icon.png",
    readme: "README.md",
    contributes: {
        themes: Object.values(themes).map(theme => ({
            label: theme.name,
            uiTheme: "vs-dark",
            path: `./themes/${theme.id}.json`,
        })),
    },
}
