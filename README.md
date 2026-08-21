# reactPlayGround

Vite + React playground hosted on GitHub Pages:

https://noowxela.github.io/reactPlayGround

Requires Node 22 (`nvm use`).

## Scripts

```bash
npm start          # dev server at http://localhost:3000
npm test           # Vitest
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Deploy (manual)

There is **no CI**. Pushing to `main` does not update GitHub Pages.

Publish a new build yourself:

```bash
npm run deploy
```

That runs `predeploy` (`vite build`) then `gh-pages -d dist`, which pushes `dist/` to the `gh-pages` branch.

GitHub Pages must stay set to **Deploy from branch → `gh-pages` / root**.
