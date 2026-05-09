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
        path: '/',
        children: [
            {
                name: 'src',
                type: 'directory',
                path: '/my-portfolio',
                children: [
                    {
                        name: 'portfolio.tsx',
                        type: 'file',
                        path: '/my-portfolio/src'
                    },
                    // {
                    //     name: 'guestbook.md',
                    //     type: 'file',
                    //     path: '/my-portfolio/src'
                    // }
                ]
            },
            {
                name: 'styles',
                type: 'directory',
                path: '/my-portfolio',
                children: [
                    {
                        name: 'themes.css',
                        type: 'file',
                        path: '/my-portfolio/styles'
                    },
                ]
            },
            // {
            //     name: 'package.json',
            //     type: 'file',
            //     path: '/my-portfolio'
            // },
            {
                name: '.gitignore',
                type: 'file',
                path: '/my-portfolio'
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