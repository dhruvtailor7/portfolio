export const globalConstants = {
    firstName: "Dhruv",
    lastName: "Tailor"
}

export const treeData: TreeData = [
    {
        name: 'my-portfolio',
        type: 'directory',
        children: [
            {
                name: 'src',
                type: 'directory',
                parent: 'my-portfolio',
                children: [
                    {
                        name: 'portfolio.tsx',
                        type: 'file',
                        parent: 'src'
                    },
                    {
                        name: 'contact.md',
                        type: 'file',
                        parent: 'src'
                    },
                    {
                        name: 'guestbook.md',
                        type: 'file',
                        parent: 'src'
                    }
                ]
            },
            {
                name: 'components',
                type: 'directory',
                parent: 'my-portfolio',
                children: [
                    {
                        name: 'Hero.tsx',
                        type: 'file',
                        parent: 'components'
                    },
                    {
                        name: 'Skills.tsx',
                        type: 'file',
                        parent: 'components'
                    },
                    {
                        name: 'Projects.tsx',
                        type: 'file',
                        parent: 'components'
                    }
                ]
            },
            {
                name: 'package.json',
                type: 'file',
                parent: 'my-portfolio'
            },
            {
                name: 'tsconfig.json',
                type: 'file',
                parent: 'my-portfolio'
            },
            {
                name: '.gitignore',
                type: 'file',
                parent: 'my-portfolio'
            },
        ]
    }
]

export const activities: Activity[] = [
    {
        id: 'explorer',
        title: 'Explorer',
        icon: 'files'
    },
    {
        id: 'search',
        title: 'Search',
        icon: 'search'
    },
    {
        id: 'git',
        title: 'Git',
        icon: 'source-control'
    },
    {
        id: 'extension',
        title: 'Extensions',
        icon: 'extensions'
    }
]