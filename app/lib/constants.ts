export const myData = {
  personal: {
    name: {
      first: "dhruv",
      last: "tailor"
    },
    email: "dhruvtailor7@gmail.com",
  },

  professional: {
    designation: "senior software engineer",
    resumeLink: "https://drive.google.com/file/d/1aYdsed5ayTdQyB3eRxic5I66L0dmv9Wv/view"
  },

  location: {
    city: "surat",
    state: "gujarat",
    country: "india",
  },

  social: {
    github: 'https://github.com/dhruvtailor7',
    linkedin: 'https://www.linkedin.com/in/dhruv-tailor-3b0164171'
  },
}

export const treeData: TreeData = [
    {
        name: 'my-portfolio',
        type: 'directory',
        path: '/my-portfolio',
        children: [
            {
                name: 'src',
                type: 'directory',
                path: '/my-portfolio/src',
                children: [
                    {
                        name: 'portfolio.tsx',
                        type: 'file',
                        path: '/my-portfolio/src/portfolio.tsx'
                    }
                ]
            },
            {
                name: 'styles',
                type: 'directory',
                path: '/my-portfolio/styles',
                children: [
                    {
                        name: 'themes.css',
                        type: 'file',
                        path: '/my-portfolio/styles/themes.css'
                    }
                ]
            },
            // {
            //     name: 'package.json',
            //     type: 'file',
            //     path: '/my-portfolio/package.json'
            // },
            {
                name: '.gitignore',
                type: 'file',
                path: '/my-portfolio/.gitignore'
            }
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