# Agent notes

This is a Vite + React SPA. Do not treat it as Create React App (`react-scripts` was removed).

## GitHub Pages

Deployment is **manual**. There is no GitHub Actions workflow and a push to `main` does not publish the site.

- Live URL: https://noowxela.github.io/reactPlayGround
- Publish only when the user asks: `npm run deploy`
- That script builds to `dist/` and pushes it to the `gh-pages` branch
- Do not add auto-deploy CI unless the user asks for it
