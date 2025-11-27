# GitHub Pages Deployment Guide

## Quick Setup Steps

### 1. Initial Setup

```bash
# Install dependencies
npm install

# Push to GitHub (if not already done)
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Personal-Website.git
git push -u origin main
```

### 2. Configure Base Path

**Important:** Update `vite.config.js` based on your repository setup:

#### For Project Pages (username.github.io/repo-name):
```js
base: process.env.NODE_ENV === 'production' ? '/Personal-Website/' : '/',
```
Replace `Personal-Website` with your actual repository name.

#### For User Pages (username.github.io):
```js
base: '/',
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 4. Deploy

The GitHub Actions workflow will automatically:
- Build your site on every push to `main`
- Deploy to GitHub Pages
- Make it available at: `https://YOUR_USERNAME.github.io/Personal-Website/`

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm run deploy
```

Then enable GitHub Pages from the `gh-pages` branch in repository settings.

## Troubleshooting

### 404 Errors
- Check that the `base` path in `vite.config.js` matches your repository name
- Ensure GitHub Pages is enabled and pointing to GitHub Actions
- Wait a few minutes after pushing - deployment can take 1-2 minutes

### Assets Not Loading
- Verify the base path is correct
- Clear browser cache
- Check browser console for specific errors

### Workflow Not Running
- Ensure the workflow file is in `.github/workflows/deploy.yml`
- Check Actions tab for any error messages
- Verify GitHub Pages is enabled in repository settings

