# Deploy to GitHub Pages

Your project is set up for static export and deployment via GitHub Actions.

## 1. One-time setup in GitHub

1. Push your code to a GitHub repository (e.g. `cambridgepolicyhackathon/cambridgepolicyhackathon.github.io`).
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

## 2. Deploy

- **Automatic:** Every push to the `main` branch runs the workflow, builds the site, and deploys to GitHub Pages.
- **Manual:** In the repo go to **Actions → Deploy to GitHub Pages → Run workflow**.

## 3. Result

- If the repo is named `cambridgepolicyhackathon.github.io`, the site will be at **https://cambridgepolicyhackathon.github.io**.
- If the repo has a different name, the URL will be **https://&lt;username&gt;.github.io/&lt;repo-name&gt;/** and you must set `basePath: "/&lt;repo-name&gt;"` in `next.config.js`.

## Notes

- **Static export:** The site is built as static HTML (no Node server). The **Contact form** (Send Message) uses an API route (`/api/sendmail`) that does **not** run on GitHub Pages. For a working form you’d need a serverless function (e.g. Vercel, Netlify) or an external form service and point the button to that.
- **Build locally:** Run `pnpm build`; the output is in the `out/` folder. You can open `out/index.html` locally to test.
