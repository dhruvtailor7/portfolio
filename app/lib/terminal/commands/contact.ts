import { myData } from "@/app/lib/constants"
import type { CommandDefinition, CommandResult } from "../types"

export const contactCommand: CommandDefinition = {
    name: 'contact',
    description: 'Contact the developer',
    handler(_args, _ctx): CommandResult {
        const { personal, professional, location, social } = myData

        return {
            status: 'success',
            output: [
                `Name: ${personal.name.full}`,
                `Designation: ${professional.designation}`,
                `Email: ${personal.email}`,
                `Location: ${location.city}, ${location.state}, ${location.country}`,
                `GitHub: ${social.github}`,
                `LinkedIn: ${social.linkedin}`,
                `LeetCode: ${social.leetcode}`,
                `Resume: ${professional.resumeLink}`,
            ],
        }
    },
}
