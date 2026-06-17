# Abhigya AI Lab

A modern, professional AI consulting and training website built with React, Vite, and Tailwind CSS.

**Live site:** Deploy to GitHub Pages (see instructions below)

## Tech Stack

- **React 19** — UI framework
- **Vite 6** — Build tool and dev server
- **Tailwind CSS 4** — Utility-first styling
- **gh-pages** — GitHub Pages deployment

## Features

- Single-page application with smooth scrolling sections
- Dark theme with professional blue accents
- Fully responsive design with mobile hamburger menu
- Sticky navigation bar
- Reusable React components
- Mailto contact form (no backend required)
- GitHub Pages compatible

## Sections

1. **Hero** — Brand introduction with CTA buttons
2. **Training Programs** — 8 course cards with topics
3. **Consulting Services** — 5 service offerings
4. **Case Studies** — 4 real-world project showcases
5. **About** — Company overview and founder profile
6. **Blog** — Latest articles with placeholder links
7. **Contact** — Mailto form with email and LinkedIn
8. **Footer** — Branding and copyright

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install Dependencies

```bash
npm install
```

**Windows SSL note:** If `npm install` fails with a certificate error, run:

```powershell
$env:NODE_OPTIONS='--use-system-ca'
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
abhigyaailab/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Button.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Consulting.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Icon.jsx
│   │   ├── Navbar.jsx
│   │   ├── SectionHeader.jsx
│   │   └── Training.jsx
│   ├── data/
│   │   └── siteData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Create a new repository on GitHub named `abhigyaailab`
2. Push this project to the repository:

```bash
git init
git add .
git commit -m "Initial commit: Abhigya AI Lab website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/abhigyaailab.git
git push -u origin main
```

### Step 2: Configure Base Path (if needed)

The `vite.config.js` is pre-configured with:

```js
base: '/abhigyaailab/',
```

- If your repository is named `abhigyaailab`, no changes needed.
- If using a **custom domain** or deploying to `username.github.io` (user site), change `base` to `'/'`.

### Step 3: Deploy

```bash
npm run deploy
```

This builds the project and publishes the `dist` folder to the `gh-pages` branch.

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose branch: `gh-pages`, folder: `/ (root)`
5. Click **Save**

Your site will be live at:

```
https://YOUR_USERNAME.github.io/abhigyaailab/
```

### Custom Domain (Optional)

1. Add a `CNAME` file in the `public/` folder with your domain
2. Update `base` in `vite.config.js` to `'/'`
3. Configure DNS with your domain provider
4. Enable custom domain in GitHub Pages settings

## Customization

- **Content:** Edit `src/data/siteData.js` for all text, courses, services, and case studies
- **Colors:** Modify CSS variables in `src/index.css` under `@theme`
- **Components:** Each section is a standalone component in `src/components/`
- **Contact email:** Update `contactInfo.email` in `src/data/siteData.js`
- **LinkedIn:** Update `contactInfo.linkedin` in `src/data/siteData.js`

## License

Copyright © 2026 Abhigya AI Lab. All rights reserved.
