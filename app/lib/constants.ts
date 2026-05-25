import { siteUrl } from "./config"
import type { Activity } from "@/app/components/IDELayout/ActivityBar/types"
import type { TreeData } from "@/app/components/IDELayout/SideBar/Activities/ExplorerView/TreeView/types"

export const myData = {
    personal: {
        name: {
            first: "Dhruv",
            last: "Tailor",
            full: "Dhruv Tailor",
        },
        email: "dhruvtailor7@gmail.com",
    },

    professional: {
        designation: "Senior Software Engineer",
        experience: 5,
        resumeLink:
            "https://drive.google.com/file/d/1aYdsed5ayTdQyB3eRxic5I66L0dmv9Wv/view",
    },

    location: {
        city: "Surat",
        state: "Gujarat",
        country: "India",
    },

    social: {
        github: "https://github.com/dhruvtailor7",
        linkedin: "https://www.linkedin.com/in/dhruv-tailor-3b0164171",
        leetcode: "https://leetcode.com/dhruvtailor7/",
    },

    site: {
        url: siteUrl,
        ogImage: "/og-image.png",
        title: "Dhruv Tailor — Senior Software Engineer",
        description:
            "Senior Software Engineer with 5+ years of experience in backend APIs, AWS infrastructure, and React Native mobile apps.",
        keywords: [
            "Dhruv Tailor",
            "Software Engineer",
            "React Native",
            "Node.js",
            "AWS",
            "Terraform",
            "PostgreSQL",
            "Backend Developer",
            "Mobile Developer",
            "Surat",
            "India",
        ],
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