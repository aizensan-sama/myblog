# Balanced Scoring System Blog & Tracker

This is a premium, static, interactive blog post introducing the **Balanced Scoring System** for engineering teams. It features:
* A modern responsive layout with dark/light themes.
* Google Fonts integrations (`Outfit` & `Inter`).
* An interactive, client-side points calculator implementing the scoring tier logic.

## Local View
Simply open `index.html` in any web browser to view the site.

## Deployment to GitHub Pages

GitHub Pages serves files directly from the root of a repository. To publish your blog, run the following commands in your terminal:

### 1. Initialize Git & Add Files
```bash
cd E:\myblog
git init -b main
git add .
git commit -m "feat: initial commit of blog with interactive tracker"
```

### 2. Connect to GitHub & Push
1. Create a new, blank repository on GitHub named `myblog` (do **not** initialize it with a README, license, or `.gitignore`).
2. Copy your repository's remote URL (e.g., `git@github.com:yourusername/myblog.git` or `https://github.com/yourusername/myblog.git`).
3. Run the following commands:
```bash
# Add your GitHub repository as remote (replace with your actual URL)
git remote add origin https://github.com/yourusername/myblog.git

# Push to your repository
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository page on GitHub.
2. Navigate to **Settings** > **Pages** (under Code and automation).
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set the **Branch** to `main` and folder to `/ (root)`.
5. Click **Save**.

Your blog will be live at `https://yourusername.github.io/myblog/` within a few minutes!
