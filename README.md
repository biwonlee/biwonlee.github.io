# Biwon Lee — Academic Website

Personal academic website for GitHub Pages. Plain HTML/CSS/JS — no build step required.

## File Structure

```
academic-website/
├── index.html          ← Home page
├── research.html       ← Working papers & publications
├── teaching.html       ← Teaching experience
├── cv.html             ← CV embed + download
├── css/style.css       ← All styles
├── js/main.js          ← Nav toggle + abstract toggles
├── assets/             ← Put photo.jpg and cv.pdf here
│   └── (empty)
└── .github/
    └── workflows/
        └── deploy.yml  ← Auto-deploy to GitHub Pages on push
```

---

## Deploy to GitHub Pages (step-by-step)

### 1. Create a GitHub repository

- Go to [github.com](https://github.com) → **New repository**
- Name it **`<your-username>.github.io`** (e.g., `blee121.github.io`)
  This gives you a URL like `https://blee121.github.io`
- Set it to **Public**
- Do **not** initialize with a README (you already have one)

### 2. Push the site to GitHub

Open a terminal in the `academic-website/` folder and run:

```bash
git init
git add .
git commit -m "Initial commit: academic website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages with Actions

1. On GitHub, go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. That's it — the workflow in `.github/workflows/deploy.yml` will run automatically on every push to `main`

Your site will be live at `https://<your-username>.github.io` within ~2 minutes.

---

## Customizing your site

### Add your photo
1. Save your headshot as `assets/photo.jpg` (or `.png`)
2. Open `index.html`, find the comment `<!-- Replace src with your photo file -->`, and replace with:
   ```html
   <img src="assets/photo.jpg" alt="Biwon Lee" />
   ```
3. Delete (or comment out) the `<div class="photo-placeholder">` block below it

### Add your CV PDF
1. Save your CV as `assets/cv.pdf`
2. Open `cv.html`, find the `<div class="cv-placeholder">` block and replace with:
   ```html
   <iframe src="assets/cv.pdf" title="Biwon Lee CV"></iframe>
   ```

### Update your profile links (Google Scholar, SSRN, LinkedIn)
In `index.html`, find:
```html
<a href="#">Google Scholar</a>
<a href="#">SSRN</a>
<a href="#">LinkedIn</a>
```
Replace each `#` with your actual profile URL.

### Add paper abstracts
In `research.html`, find each `[TO BE ADDED — paste your abstract here...]` block inside `.abstract-body` and replace with your actual abstract text.

### Add/update paper links (PDF, Slides, SSRN)
In `research.html`, find the `<div class="paper-links">` for each paper.
Replace `href="#"` with the actual URL and remove the `placeholder` class from the link:
```html
<a href="https://ssrn.com/..." class="paper-link">[SSRN]</a>
```

### Add teaching entries
In `teaching.html`, copy an existing `<tr>` row and fill in:
- Course name
- Semester (e.g., `Spring 2024`)
- Role badge: use `role-instructor` or `role-ta`
- Syllabus link (once available)

### Update website URL
In `index.html`, find `http://www.example.com` and replace with your actual website URL
(e.g., `https://blee121.github.io`).

---

## Making updates after deployment

Every time you push to `main`, the GitHub Actions workflow automatically redeploys:

```bash
# Edit any HTML/CSS file, then:
git add .
git commit -m "Update research page"
git push
```

The site updates in ~1 minute.

---

## Local preview (optional)

Since this is plain HTML, you can preview locally by opening `index.html` directly in your browser.
For a more accurate preview (especially if you use relative paths), use Python's built-in server:

```bash
cd academic-website
python -m http.server 8000
# Open http://localhost:8000 in your browser
```
