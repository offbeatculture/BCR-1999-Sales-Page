# Daily Breathwork Membership - Landing Page

Standalone Vite + React + TypeScript project. Ready for Netlify deploy.

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Output goes to `dist/`.

## Deploy to Netlify
**Option A - Drag & drop:** Run `npm run build`, then drag the `dist/` folder onto https://app.netlify.com/drop

**Option B - Git:** Push to GitHub, "Add new site" on Netlify, pick the repo. `netlify.toml` is already configured (build = `npm run build`, publish = `dist`).
