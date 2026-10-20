# Samuel Dutra: portfolio

My one-page portfolio, in English and Portuguese: **[samueldutra.com.br](https://samueldutra.com.br/)** · [Português](https://samueldutra.com.br/pt/)

I'm a freelance front-end developer. This page shows what I build (websites, online stores, dashboards) and how to hire me.

It's plain HTML, CSS and JavaScript with Tailwind CSS. A simple page doesn't need a framework, so there isn't one.

## Run it

Open `index.html` in your browser. That's it.

To change something, install [Node.js](https://nodejs.org) and run:

```bash
npm install
npm run watch   # rebuilds the CSS while you edit
npm run build   # builds CSS and pages; run before each commit
```

The built files are committed, so the host doesn't have to build anything.

## Make it yours

Links, photo, projects and every piece of text live in [`main.js`](main.js). Edit them there and run `npm run build`. Don't edit `pt/` or the text inside the HTML by hand: the build overwrites it.

Colors and fonts are in the `@theme` block of [`src/input.css`](src/input.css).

## Deploy

Hosted on Cloudflare (Workers with static assets). Push to `main` and it publishes. `.assetsignore` lists the files that stay private.

## License

None. All rights reserved: please don't copy the code, text or design without asking.
