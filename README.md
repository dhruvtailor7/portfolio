# Dhruv Tailor - Portfolio

<img src="public/android-chrome-192x192.png" alt="VS Code–themed portfolio" width="64" />

A personal portfolio website built to look and feel like **Visual Studio Code**.


## Concept

The entire portfolio is wrapped in a VS Code shell:

- The **file explorer** lists files like `portfolio.tsx`, `.gitignore`, `themes.css`, etc.
- Clicking a file **opens it as a tab** in the editor

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Icons | `@vscode/codicons`, `react-icons` |
| Fonts | JetBrains Mono, Cabin Sketch (Google Fonts) |
| Analytics | Vercel Analytics |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Environment

Copy `.env.example` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public URL for metadata/canonical (used outside Vercel) |

### Run

```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Lint
npm run lint
```

The dev server starts at `http://localhost:3000`.

## License

[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) — free to share and adapt with attribution, but not for commercial use.
