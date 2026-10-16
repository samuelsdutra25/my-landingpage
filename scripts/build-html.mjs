/*
 * Writes the site text into the HTML, so each page has its content before any JavaScript runs
 * (search engines, link previews, AI tools and slow phones all read it). Run it with `npm run build`.
 *
 * Source of truth: SITE and TRANSLATIONS at the top of main.js. index.html is both the template (its
 * markup is edited by hand) and the English page: every run rewrites the text inside the hooks
 * (data-i18n, data-link, data-project-*, ...) and the block between the build:head comments, so it
 * can run any number of times. Outputs:
 *   index.html     English, served at /
 *   pt/index.html  Portuguese, served at /pt/ (generated: never edit it by hand)
 *   404.html       English error page. Same idea: it is the template and the English page
 *   pt/404.html    Portuguese error page (generated). Cloudflare serves the nearest one to a wrong address
 *   sitemap.xml, robots.txt
 * Plain Node, no dependencies.
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import vm from 'node:vm';

const ROOT = new URL('../', import.meta.url);
const NAME = 'Samuel Dutra';

// One page per language. The first one is the default (x-default) and lives at the root.
const LOCALES = {
  en: { htmlLang: 'en', ogLocale: 'en_US', path: '' },
  pt: { htmlLang: 'pt-BR', ogLocale: 'pt_BR', path: 'pt/' },
};
const DEFAULT_LANG = 'en';

// Pastel background per technology in the About stack (full class names, so Tailwind finds them)
const STACK_COLORS = {
  HTML: 'bg-score-soft',
  CSS: 'bg-tag-blue',
  Tailwind: 'bg-tag-pink',
  JavaScript: 'bg-tag-yellow',
  GSAP: 'bg-tag-purple',
  React: 'bg-check-soft',
};

/* ---- Files ---- */
const read = (path) => readFileSync(new URL(path, ROOT), 'utf8');

function write(path, text) {
  const url = new URL(path, ROOT);
  if (existsSync(url) && readFileSync(url, 'utf8') === text) return console.log(`  unchanged  ${path}`);
  mkdirSync(new URL('.', url), { recursive: true });
  writeFileSync(url, text);
  console.log(`  wrote      ${path}`);
}

// Short fingerprint of a file, added as ?v= so browsers and Googlebot never keep an old copy
const version = (path) => createHash('sha256').update(readFileSync(new URL(path, ROOT))).digest('hex').slice(0, 8);

/* ---- Data: run the part of main.js above its "3. Behavior" banner ---- */
const source = read('main.js');
const behavior = source.indexOf('3. Behavior');
if (behavior < 0) throw new Error('main.js: the "3. Behavior" banner is missing, so the data part cannot be found.');
const { SITE, TRANSLATIONS } = vm.runInNewContext(`${source.slice(0, source.lastIndexOf('/*', behavior))}\n({ SITE, TRANSLATIONS });`);

if (!/^https:\/\/[^/]+\/$/.test(SITE.url)) throw new Error("SITE.url must be the site's https address with a final slash.");
const pageUrl = (lang) => SITE.url + LOCALES[lang].path;
const emailAddress = SITE.links.email.replace(/^mailto:/, '');

/* ---- HTML helpers (string based: the hooks are simple, see eachElement) ---- */
const escapeHtml = (text) =>
  String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const attrValue = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];

// Sets (string), adds (true) or removes (null) one attribute on a start tag
function setAttr(tag, name, value) {
  const existing = new RegExp(`\\s${name}(="[^"]*")?(?=[\\s>])`);
  const attr = value === true ? ` ${name}` : ` ${name}="${escapeHtml(value)}"`;
  if (value === null) return tag.replace(existing, '');
  return existing.test(tag) ? tag.replace(existing, attr) : tag.replace(/>$/, `${attr}>`);
}

// Calls render(startTag, inner) for every element that carries the `hook` attribute and puts back the
// [startTag, inner] it returns. Hooked elements never contain an element with their own tag name
// (checked here), so their closing tag is simply the next one.
function eachElement(html, hook, render) {
  const start = new RegExp(`<([a-z][a-z0-9]*)(?=[^>]*\\s${hook}[\\s=>])[^>]*>`, 'g');
  let out = '';
  let last = 0;
  let match;
  while ((match = start.exec(html))) {
    const [tag, name] = match;
    const open = match.index + tag.length;
    const close = html.indexOf(`</${name}>`, open);
    const inner = html.slice(open, close);
    if (close < 0 || new RegExp(`<${name}[\\s>]`).test(inner)) throw new Error(`Cannot fill ${hook} in ${tag}`);
    const [newTag, newInner] = render(tag, inner);
    out += html.slice(last, match.index) + newTag + newInner;
    last = close;
    start.lastIndex = close;
  }
  return out + html.slice(last);
}

const fillText = (html, hook, value) => eachElement(html, hook, (tag) => [tag, escapeHtml(value(tag))]);

/* ---- The <head> block: title, description, language versions, share previews, structured data ---- */
function head(lang) {
  const t = TRANSLATIONS[lang];
  const url = pageUrl(lang);
  const others = Object.keys(LOCALES).filter((code) => code !== lang);
  const sameAs = [SITE.links.linkedin, SITE.links.github, SITE.links.instagram].filter((link) => /^https?:/.test(link));

  // Only what the page shows: name, role, the stack in About, the photo and the real profile links
  const person = {
    '@type': 'Person',
    '@id': `${SITE.url}#person`,
    name: NAME,
    url: SITE.url,
    jobTitle: t['meta.jobTitle'],
    knowsAbout: SITE.stack,
    ...(SITE.photo && { image: SITE.url + SITE.photo }),
    ...(sameAs.length && { sameAs }),
  };
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}#website`,
        url: SITE.url,
        name: NAME,
        alternateName: new URL(SITE.url).hostname,
        inLanguage: Object.values(LOCALES).map((locale) => locale.htmlLang),
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}#page`,
        url,
        name: t['meta.title'],
        inLanguage: LOCALES[lang].htmlLang,
        isPartOf: { '@id': `${SITE.url}#website` },
        mainEntity: { '@id': person['@id'] },
      },
      person,
    ],
  };

  return [
    `<title>${escapeHtml(t['meta.title'])}</title>`,
    `<meta name="description" content="${escapeHtml(t['meta.description'])}">`,
    `<link rel="canonical" href="${url}">`,
    ...Object.entries(LOCALES).map(([code, locale]) => `<link rel="alternate" hreflang="${locale.htmlLang}" href="${pageUrl(code)}">`),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl(DEFAULT_LANG)}">`,
    '',
    '<meta property="og:type" content="website">',
    `<meta property="og:site_name" content="${NAME}">`,
    `<meta property="og:locale" content="${LOCALES[lang].ogLocale}">`,
    ...others.map((code) => `<meta property="og:locale:alternate" content="${LOCALES[code].ogLocale}">`),
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:title" content="${escapeHtml(t['meta.title'])}">`,
    `<meta property="og:description" content="${escapeHtml(t['meta.description'])}">`,
    `<meta property="og:image" content="${SITE.url}assets/og-image-${lang}.png">`,
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    `<meta property="og:image:alt" content="${escapeHtml(`${NAME}. ${t['hero.title']}`)}">`,
    '<meta name="twitter:card" content="summary_large_image">',
    '',
    '<script type="application/ld+json">',
    JSON.stringify(data, null, 2).replace(/</g, '\\u003c'),
    '</script>',
  ]
    .join('\n')
    .split('\n')
    .map((line) => (line ? `  ${line}` : ''))
    .join('\n');
}

// The error page's <head>: only a title and noindex (the address the visitor typed is not a page to index)
function notFoundHead(lang) {
  return [`  <title>${escapeHtml(TRANSLATIONS[lang]['notfound.meta'])}</title>`, '  <meta name="robots" content="noindex">'].join('\n');
}

/* ---- One page ---- */
function renderPage(template, lang, headBlock = head) {
  const t = TRANSLATIONS[lang];
  const text = (key) => {
    if (!(key in t)) throw new Error(`TRANSLATIONS.${lang} has no "${key}"`);
    return t[key];
  };

  let html = template
    .replace(/<html lang="[^"]*"/, `<html lang="${LOCALES[lang].htmlLang}"`)
    .replace(/(<!-- build:head[\s\S]*?-->)[\s\S]*?(\n[ \t]*<!-- \/build:head -->)/, (all, open, close) => `${open}\n${headBlock(lang)}${close}`);

  // Comments stay as they are (the hidden project cards keep their empty hooks)
  const comments = [];
  html = html.replace(/<!--[\s\S]*?-->/g, (comment) => `\u0000${comments.push(comment) - 1}\u0000`);

  // Project cards, from SITE.projects[n]
  html = eachElement(html, 'data-project', (tag, inner) => {
    const project = SITE.projects[Number(attrValue(tag, 'data-project'))];
    if (!project) return [tag, inner];
    inner = fillText(inner, 'data-project-type', () => project.type[lang]);
    inner = fillText(inner, 'data-project-title', () => project.title[lang]);
    inner = fillText(inner, 'data-project-text', () => project.text[lang]);
    inner = fillText(inner, 'data-project-about', () => project.details.about[lang]);
    inner = fillText(inner, 'data-project-role', () => project.details.role[lang]);
    inner = eachElement(inner, 'data-project-stack', (ul) => [
      ul,
      project.details.stack.map((name) => `<li class="rounded-full bg-sand px-3 py-1 text-small font-bold">${escapeHtml(name)}</li>`).join(''),
    ]);
    inner = eachElement(inner, 'data-project-link', (a, content) => [setAttr(a, 'href', project.url), content]);
    inner = eachElement(inner, 'data-project-badge', (span, content) => [setAttr(span, 'hidden', project.placeholder ? null : true), content]);
    inner = eachElement(inner, 'data-project-media', (div) => [
      div,
      project.image
        ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title[lang])}" loading="lazy" class="h-full w-full object-cover">`
        : `<span class="text-small">${escapeHtml(text('projects.image'))}</span>`,
    ]);
    return [tag, inner];
  });

  // Screen reader text for the score rings (the visible numbers are animated by main.js)
  html = eachElement(html, 'data-gauge', (tag, inner) => {
    const score = SITE.scores[attrValue(tag, 'data-gauge')];
    return [tag, fillText(inner, 'data-gauge-sr', () => (score === null ? '' : `${score} ${text('included.outOf')}`))];
  });

  // About: the photo (or the initials until there is one) and the stack chips
  html = eachElement(html, 'data-about-photo', (tag) =>
    SITE.photo
      ? [setAttr(tag, 'aria-hidden', null), `<img src="${escapeHtml(SITE.photo)}" alt="${NAME}" class="h-full w-full object-cover">`]
      : [setAttr(tag, 'aria-hidden', 'true'), escapeHtml(SITE.initials)],
  );
  html = eachElement(html, 'data-stack', (tag) => [
    tag,
    SITE.stack
      .map((name) => `<li class="rounded-full px-3 py-1 text-small font-bold ${STACK_COLORS[name] || 'bg-sand'}">${escapeHtml(name)}</li>`)
      .join(''),
  ]);

  // Links from SITE.links. Real web addresses open in a new tab; '#' placeholders and mailto: stay in place.
  html = eachElement(html, 'data-link', (tag, inner) => {
    const url = SITE.links[attrValue(tag, 'data-link')];
    if (url === undefined) throw new Error(`SITE.links has no "${attrValue(tag, 'data-link')}"`);
    const external = /^https?:/.test(url);
    tag = setAttr(tag, 'href', url);
    tag = setAttr(tag, 'target', external ? '_blank' : null);
    tag = setAttr(tag, 'rel', external ? 'noopener noreferrer' : null);
    return [tag, inner];
  });
  html = fillText(html, 'data-email-text', () => emailAddress);
  html = fillText(html, 'data-copyright', () => `© ${new Date().getFullYear()} ${NAME}`);

  // Error page: links back to this language's home page (the value is an optional #section), and the
  // domain in the window (the page's own script swaps it for the address that was typed)
  html = eachElement(html, 'data-home', (tag, inner) => [setAttr(tag, 'href', `/${LOCALES[lang].path}${attrValue(tag, 'data-home')}`), inner]);
  html = fillText(html, 'data-address', () => new URL(SITE.url).hostname);

  // All other text, and the aria-labels
  html = fillText(html, 'data-i18n', (tag) => text(attrValue(tag, 'data-i18n')));
  html = html.replace(/<[a-z][^>]*\sdata-i18n-aria="([^"]+)"[^>]*>/g, (tag, key) => setAttr(tag, 'aria-label', text(key)));

  // The EN/PT switch marks the language of this page
  html = html.replace(/<a\b[^>]*\sdata-lang="([a-z]+)"[^>]*>/g, (tag, code) => setAttr(tag, 'aria-current', String(code === lang)));

  // Local scripts and stylesheets get a fingerprint of their content
  // (the error page uses addresses that start with a slash, because it is served at any depth)
  html = html.replace(
    /(\s(?:src|href)=")(\/?)((?![a-z][a-z0-9+.-]*:|\/)[^"?#]+\.(?:js|css))(?:\?v=[0-9a-f]+)?"/g,
    (all, before, slash, path) => `${before}${slash}${path}?v=${version(path)}"`,
  );

  return html.replace(/\u0000(\d+)\u0000/g, (all, index) => comments[Number(index)]);
}

// A page one folder down (pt/): relative addresses point one level up ("./" becomes "../",
// "assets/x" becomes "../assets/x"); anchors and full URLs stay as they are
function moveDown(html, file) {
  return html
    .replace(/(\s(?:src|href)=")(?![a-z][a-z0-9+.-]*:|#|\/)(?:\.\/)?([^"]*)"/g, (all, before, path) => `${before}../${path}"`)
    .replace(/^<!doctype html>\n/i, (doctype) =>
      `${doctype}<!-- Generated by scripts/build-html.mjs from ${file} and main.js. Do not edit: change those and run npm run build. -->\n`,
    );
}

/* ---- Build ---- */
console.log('build:html');
for (const [file, headBlock] of [['index.html', head], ['404.html', notFoundHead]]) {
  const template = read(file);
  for (const lang of Object.keys(LOCALES)) {
    const { path } = LOCALES[lang];
    const html = renderPage(template, lang, headBlock);
    write(`${path}${file}`, path ? moveDown(html, file) : html);
  }
}

write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(LOCALES)
  .map((lang) => `  <url><loc>${pageUrl(lang)}</loc></url>`)
  .join('\n')}
</urlset>
`,
);

write(
  'robots.txt',
  `# The whole site is open to search engines
User-agent: *
Allow: /

Sitemap: ${SITE.url}sitemap.xml
`,
);
