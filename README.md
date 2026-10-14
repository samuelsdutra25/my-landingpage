# Samuel Dutra: portfolio landing page

A one-page portfolio for Samuel Dutra, a freelance front-end developer starting on Upwork. The site builds trust with small clients and sends them to contact Samuel (by email for now, with a form planned), with Upwork as a secondary route. He builds websites, online stores, dashboards and other front-end work.

The site itself is built with plain HTML, CSS and JavaScript plus Tailwind CSS. There is no framework and no server-side build: open `index.html` and it works. Samuel also works with React, but a simple page like this one doesn't need it.

> **Status: MVP.** The layout, design system and behavior are done. The site copy is written (English and Portuguese), and the links, photo and project texts are placeholders. See [Before launch](#before-launch).

## What's inside

- **One page, eight parts:** header, hero, what you get, services, projects, how it works (four boxes joined by semicircles), about, and a final call to action with the footer.
- **English and Portuguese.** English is the default. A toggle in the header switches the language, remembers the choice in `localStorage` and updates `<html lang>` and the page title.
- **A hero that measures itself.** A small wireframe builds itself, and under it the page shows how long it really took to be ready in the visitor's browser (from the Navigation Timing API). If the browser can't measure it, the line stays hidden.
- **Editable without touching the HTML.** Links, photo, projects and all text live in `main.js`.
- **Accessible by default.** Semantic HTML, one `h1` and a correct heading order, a skip link, visible keyboard focus, labelled controls, and `prefers-reduced-motion` support.
- **Fast.** No libraries besides Tailwind's compiled CSS (about 19 KB), [GSAP](https://gsap.com) for animation (loaded from `assets/`) and one Google Font.

## Tech stack

| Part | Choice |
|---|---|
| Markup, behavior | HTML and vanilla JavaScript (no framework, no TypeScript) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) through its CLI, plus a small hand-written `style.css` |
| Font | [Alef](https://fonts.google.com/specimen/Alef), weights 400 and 700, loaded with `display=swap` |
| Hosting | Any static host (Vercel or Netlify, no configuration needed) |

## Project structure

```
.
├── index.html          # All markup. Text is empty and filled in by main.js
├── main.js             # SITE (editable data), TRANSLATIONS (all text), behavior
├── style.css           # Only what Tailwind can't cover: focus, skip link, hero animation
├── src/
│   └── input.css       # Tailwind input: design tokens (@theme), buttons, page width
├── assets/
│   ├── tailwind.css    # Compiled CSS. Committed on purpose, see below
│   ├── gsap.min.js     # GSAP core, copied from node_modules. Committed on purpose
│   └── favicon.svg
├── package.json        # Scripts and the Tailwind CLI and GSAP dependencies
├── CLAUDE.md           # Project brief and rules for Claude Code
└── .claude/skills/     # The frontend-design skill used while building the UI
```

`assets/tailwind.css` is generated from `src/input.css`, but it is committed so the site runs by just opening `index.html` and deploys with no build step.

## Run it locally

To look at the site, open `index.html` in your browser. That's all.

To change styles, you need [Node.js](https://nodejs.org) (the project was set up with Node 24 LTS):

```bash
git clone git@github.com:samuelsdutra25/my-landingpage.git
cd my-landingpage
npm install
npm run watch      # rebuilds assets/tailwind.css while you edit
```

| Command | What it does |
|---|---|
| `npm run build:css` | Builds `assets/tailwind.css` once, minified |
| `npm run watch` | Rebuilds it every time you save |
| `npm run vendor:gsap` | Copies GSAP from `node_modules` to `assets/gsap.min.js` (only needed when updating GSAP) |

Run `npm run build:css` and commit the result before you push or deploy. If you forget, the live site won't have your new classes.

## Edit the content

Everything Samuel replaces is in [main.js](main.js).

### `SITE`: links, photo, projects, stack

The top of the file. Search for `TODO` to find every value that still needs a real one.

```js
const SITE = {
  initials: 'SD',
  photo: '',                    // e.g. 'assets/samuel.jpg'
  links: { upwork: '#', github: '#', linkedin: '#', email: 'mailto:hello@example.com' },
  stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
  scores: { performance: 92, accessibility: 100, seo: 100 },   // real Lighthouse scores of this page
  projects: [ { placeholder: true, image: '', url: '#', type: { en, pt }, title: { en, pt }, text: { en, pt },
                details: { about: { en, pt }, role: { en, pt }, stack: [] } }, /* ... */ ],
};
```

- `scores` are the Lighthouse numbers shown in "What you get". They must be real: run Lighthouse (Chrome DevTools, mobile) on the deployed site and paste the results. The rings and counters animate to whatever is here.
- Put images in `assets/` and point to them by path.
- Set `placeholder: false` on a project when it's real. That hides its "Placeholder" badge.
- `type` is the short label shown on each project (website, online store, dashboard).
- `details` is what appears when a visitor clicks a card: an overview (`about`), what Samuel did (`role`) and the technologies used (`stack`). The card opens with a smooth animation.

### `TRANSLATIONS`: all the text

Every piece of text is a key in `TRANSLATIONS.en` and `TRANSLATIONS.pt`. In the HTML, an element reads its text from the `data-i18n` attribute:

```html
<h2 data-i18n="services.title"></h2>
```

To add or change text, edit the key in **both** languages. To add a new text element, give it a `data-i18n` key and add that key to both objects. The only text written directly in the HTML is the logo.

The site copy is final, except the project texts, which live in `SITE.projects`.

## Design system

Everything lives in the `@theme` block at the top of [src/input.css](src/input.css). Change a value there, rebuild, and it updates across the site.

| Token | Hex | Used for |
|---|---|---|
| `cream` | `#FEF3E2` | Page background, text on dark areas |
| `sand` | `#F2DFC0` | Contrast sections, kept subtle on purpose |
| `ink` | `#2A1A0E` | Main text, dark sections |
| `orange` | `#D4621A` | Primary buttons only |
| `amber` | `#F4AE52` | Accents on dark backgrounds, badges |

Six transition tones fill the gaps: `linen`, `ink-soft`, `line`, `ink-raised`, `cream-muted` and `orange-deep`.

Type is Alef everywhere, with a scale defined as tokens (`display`, `title`, `heading`, `body`, `small`, `button`, `code`). Buttons use two radii (10px for buttons, 16px for tiles) and there is a single shadow, on the hero mock.

**Contrast note:** cream text on `orange` measures 3.44:1. That passes WCAG AA only as large text, so button labels are Alef bold at 1.2rem (about 19px) or larger. Don't shrink them. Orange is never used for small text on cream.

## Before launch

- [ ] Replace every `#` and the example e-mail in `SITE.links`
- [ ] Add a photo (`SITE.photo`)
- [ ] Add the three real projects and set `placeholder: false` (ideally a website, an online store and a dashboard)
- [ ] Write the real project texts, in English and Portuguese
- [ ] Add real numbers to "What you get" only if they exist. Never invent metrics
- [ ] Add `og:image` and `og:url` in the `<head>` of `index.html` once the site has an address
- [ ] Run `npm run build:css` and commit `assets/tailwind.css`

## Deploy

The site is static, so it needs no build on the host.

- **Vercel:** import the repository, leave every setting at its default, and deploy.
- **Netlify:** import the repository, leave the build command empty, and set the publish directory to `/`.

Remember to commit a fresh `assets/tailwind.css` first.

## Working with Claude Code

The repository includes [CLAUDE.md](CLAUDE.md), which holds the full brief (stack, palette, sections, rules and what never to do), and the `frontend-design` skill in `.claude/skills/`. Together they let Claude Code keep building in the same style. The skill is Anthropic's, from [anthropics/skills](https://github.com/anthropics/skills), and keeps its own license file.

## Author

Samuel Dutra, [@samuelsdutra25](https://github.com/samuelsdutra25).

No license has been chosen for this project yet.
