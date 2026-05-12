import TextFile from "./TextFile"
import packageJson from '../../package.json';

const content = [
  '{',
  '  "name": "my-portfolio",',
  `  "version": "${packageJson.version}"`,
  '  "private": true,',
  '  "scripts": {',
  '    "start-day": "wake-up && tea --ginger",',
  '    "relax": "watch tv || open instagram || open youtube",',
  '    "start": "next start",',
  '    "lint": "eslint"',
  '  },',
  '  "dependencies": {',
  '    "@vscode/codicons": "^0.0.45",',
  '    "next": "16.2.4",',
  '    "react": "19.2.4",',
  '    "react-dom": "19.2.4"',
  '  },',
  '  "devDependencies": {',
  '    "phone": "Z-Flip4",',
  '    "macbook": "M5 Pro",',
  '    "@types/react": "^19",',
  '    "@types/react-dom": "^19",',
  '    "eslint": "^9",',
  '    "eslint-config-next": "16.2.4",',
  '    "tailwindcss": "^4",',
  '    "typescript": "^5"',
  '  }',
  '  "author": "Your Name",',
  '  "license": "MIT"',
  '}'
];

export default function PackageJson() {
    return (
        <TextFile content={content} />
    )
}