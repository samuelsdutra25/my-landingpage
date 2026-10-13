# Samuel Dutra: portfolio landing page

A one-page site built with plain HTML, CSS, JavaScript and Tailwind CSS (v4, via the CLI).

## Open it locally

Open `index.html` in your browser. The compiled CSS is already in `assets/tailwind.css`, so no build is needed just to look at the site.

## Change the CSS

Needs Node.js. Install once, then rebuild after changing classes in `index.html`, `main.js` or `src/input.css`:

```bash
npm install
npm run build:css   # one build
npm run watch       # rebuild while you work
```

Colors, fonts, type sizes and radii live in the `@theme` block at the top of `src/input.css`. Commit `assets/tailwind.css` after every build.

## Change content

Everything you replace is in `main.js`:

- **`SITE`** (top of the file): photo, Upwork/GitHub/LinkedIn/email links, the 3 projects (title, text, image, link) and the tech stack. Search for `TODO`.
- **`TRANSLATIONS`**: all site text in English and Portuguese. The body copy is lorem ipsum for now, so replace it.

Put images in `assets/` and point to them from `SITE` (for example `photo: 'assets/samuel.jpg'`).

## Publish

The site has no build step on the server, so it works as-is.

- **Vercel:** import the repository, leave every setting at its default, and deploy.
- **Netlify:** import the repository, leave the build command empty and set the publish directory to `/`.
