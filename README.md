# aizensan-sama's Personal Blog & Balanced Scoring Project

This is my personal blog, built to host my engineering concepts, experiments, and projects. 

Currently, it features:
* A detailed post on the **Balanced Scoring System** for engineering teams.
* An interactive, client-side points calculator implementing the scoring tier logic.
* A modern responsive layout with dark/light themes.
* Google Fonts integrations (`Outfit` & `Inter`).
* Automatically compiled static site publishing via Jekyll on GitHub Pages.

## Local View
Simply open `index.html` in any web browser to view the site (if previewing raw files), or run Jekyll locally if Jekyll is installed:
```bash
bundle exec jekyll serve
```

## How to Add New Blog Posts

To write a new blog post:
1. Create a new markdown file in `_posts/` with the filename format `YYYY-MM-DD-title-slug.md`.
2. Add the required frontmatter at the top of the file:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: YYYY-MM-DD HH:MM:SS +0000
   description: "Brief summary of your post"
   author: "Ayman"
   read_time: "5 Min Read"
   ---
   ```
3. Write your content in Markdown below the frontmatter.
4. Git commit and push to publish automatically.

## Deployment to GitHub Pages

GitHub Pages serves Jekyll sites natively for free. To push updates:

```bash
cd E:\myblog
git add .
git commit -m "docs: update README to reflect personal blog status"
git push origin main
```
