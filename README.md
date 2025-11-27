# Aaditya Voruganti - Personal Portfolio

A modern, high-performance personal portfolio website showcasing work in AI, Software Engineering, Robotics, and ML Infrastructure.

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Design

- **Theme**: Dark mode by default
- **Colors**: Deep Slate (#0f172a), Electric Blue (#3b82f6), Off-White (#f8fafc)
- **Typography**: JetBrains Mono (headers), Inter (body)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features

- ✅ Fully responsive design (mobile-friendly)
- ✅ Smooth scroll navigation
- ✅ Animated sections with Framer Motion
- ✅ Download resume functionality
- ✅ Social media links (GitHub, LinkedIn, Email)
- ✅ Timeline layout for experience
- ✅ Card grid for projects
- ✅ Badge layout for technical skills

## Adding Your Resume

Place your resume PDF file in the `public` folder as `resume.pdf` for the download functionality to work.

## Deployment to GitHub Pages

### Option 1: GitHub Actions (Recommended - Automated)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/Personal-Website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to `main`

3. **Update base path (if needed):**
   - If your repository name is different from `Personal-Website`, update the `base` path in `vite.config.js`
   - For user pages (`username.github.io`), change base to `'/'`
   - For project pages, use `'/your-repo-name/'`

Your site will be available at: `https://YOUR_USERNAME.github.io/Personal-Website/`

### Option 2: Manual Deployment with npm

1. **Install gh-pages:**
   ```bash
   npm install
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages:**
   - Go to **Settings** → **Pages**
   - Select **Deploy from a branch**
   - Choose `gh-pages` branch and `/ (root)` folder

**Note:** Make sure to update the `base` path in `vite.config.js` to match your repository name before deploying.

## Customization

All content is located in the component files under `src/components/`. Update the data arrays in each component to customize:

- `src/components/Experience.jsx` - Work experience
- `src/components/Projects.jsx` - Projects and research
- `src/components/Skills.jsx` - Technical skills
- `src/components/Awards.jsx` - Awards and achievements
- `src/components/About.jsx` - Education information

## License

Copyright 2025 Aaditya Voruganti

