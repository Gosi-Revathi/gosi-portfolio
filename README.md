# Gosi Revathi — Portfolio

Built with **React 18 + Vite + Tailwind CSS**.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Vercel auto-detects Vite.

### Option B — Vercel Dashboard (drag & drop)
1. Run `npm run build` → generates `dist/` folder
2. Go to https://vercel.com/new
3. Drag & drop the **`dist`** folder
4. Click Deploy ✅

### Option C — GitHub Import
1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new → Import Git Repository
3. Select your repo — Vercel auto-configures Vite
4. Click Deploy ✅

## Project Structure

```
gosi-portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data.js          ← all content lives here
    ├── hooks.js         ← useReveal, useCountUp
    └── components/
        ├── Cursor.jsx
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Terminal.jsx
        ├── StatsStrip.jsx
        ├── SectionHeader.jsx
        ├── CountUp.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Publication.jsx
        ├── Certifications.jsx
        ├── Education.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Customisation

All content is in `src/data.js` — edit your skills, projects, experience there.
Colours are in `tailwind.config.js` under `theme.extend.colors`.
