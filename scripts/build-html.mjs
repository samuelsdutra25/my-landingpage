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
 *   404.html       English error page. Same idea: it is the template and the English page. Its header and footer
 *                  (between the build:header and build:footer comments) are copied from index.html
 *   pt/404.html    Portuguese error page (generated). Cloudflare serves the nearest one to a wrong address
 *   sitemap.xml, robots.txt, .well-known/security.txt
 *   _headers       Security headers for Cloudflare. The Content-Security-Policy lists the hash of each inline script,
 *                  so it is generated here (editing an inline script by hand would silently break it)
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
  HTML: 'bg-tag-red',
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
  const sameAs = [SITE.links.github, SITE.links.instagram].filter((link) => /^https?:/.test(link));

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
    `<meta property="og:image:alt" content="${escapeHtml(t['meta.ogAlt'])}">`,
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

// The error page wears the site's own header and footer: they are copied from index.html (between the
// build:header and build:footer comments of 404.html), so the two never drift apart. This page is served at any
// wrong address, so section links go through data-home (filled in by renderPage) and the language links point
// to the two home pages. "Back to top" makes no sense here, so it is left out, and so is "Cookie settings": this page does not load main.js, so the button would do nothing.
function withSiteChrome(notFound, home) {
  const piece = (tag) => home.match(new RegExp(`<${tag}\\b[\\s\\S]*?</${tag}>`))[0];
  const adapt = (html) =>
    html
      .replace(/href="#top"/g, 'href="/" data-home=""')
      .replace(/href="(#[a-z-]+)"/g, (all, hash) => `href="/${hash}" data-home="${hash}"`)
      .replace(/href="\.\/"/g, 'href="/"')
      .replace(/href="pt\/"/g, 'href="/pt/"')
      .replace(/\s*<a href="\/" data-home="" class="footer-link[\s\S]*?<\/a>/, '')
      .replace(/\s*<button type="button" data-consent-open[\s\S]*?<\/button>/, '');
  const swap = (html, name, block) =>
    html.replace(new RegExp(`(<!-- build:${name}[\\s\\S]*?-->)[\\s\\S]*?(\\n[ \\t]*<!-- /build:${name} -->)`), (all, open, close) => `${open}\n  ${block}${close}`);
  return swap(swap(notFound, 'header', adapt(piece('header'))), 'footer', adapt(piece('footer')));
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
    // Real project sites open in a new tab so the visitor keeps this page
    inner = eachElement(inner, 'data-project-link', (a, content) => {
      a = setAttr(a, 'href', project.url);
      return [project.url.startsWith('http') ? setAttr(setAttr(a, 'target', '_blank'), 'rel', 'noopener') : a, content];
    });
    inner = eachElement(inner, 'data-project-badge', (span, content) => [setAttr(span, 'hidden', project.placeholder ? null : true), content]);
    inner = eachElement(inner, 'data-project-media', (div) => [
      div,
      project.image
        ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title[lang])}"${project.imageSize ? ` width="${project.imageSize[0]}" height="${project.imageSize[1]}"` : ''} loading="lazy" decoding="async" class="h-full w-full object-cover">`
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
      ? [setAttr(tag, 'aria-hidden', null), `<img src="${escapeHtml(SITE.photo)}" alt="${escapeHtml(text('about.photoAlt'))}" width="800" height="800" loading="lazy" decoding="async" class="h-full w-full object-cover">`]
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
    let url = SITE.links[attrValue(tag, 'data-link')];
    if (url === undefined) throw new Error(`SITE.links has no "${attrValue(tag, 'data-link')}"`);
    // WhatsApp opens with a ready message, in the page's language
    if (attrValue(tag, 'data-link') === 'whatsapp' && /^https?:/.test(url)) url += `?text=${encodeURIComponent(text('whatsapp.message'))}`;
    const external = /^https?:/.test(url);
    tag = setAttr(tag, 'href', url);
    tag = setAttr(tag, 'target', external ? '_blank' : null);
    tag = setAttr(tag, 'rel', external ? 'noopener noreferrer' : null);
    return [tag, inner];
  });
  html = fillText(html, 'data-email-text', () => emailAddress);
  // The form posts to a mailto: when script does not run (main.js takes over otherwise)
  html = eachElement(html, 'data-contact-form', (tag, inner) => [setAttr(tag, 'action', `mailto:${emailAddress}`), inner]);
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
const pages = [];
for (const [file, headBlock] of [['index.html', head], ['404.html', notFoundHead]]) {
  const template = file === '404.html' ? withSiteChrome(read(file), read('index.html')) : read(file);
  for (const lang of Object.keys(LOCALES)) {
    const { path } = LOCALES[lang];
    const html = renderPage(template, lang, headBlock);
    const page = path ? moveDown(html, file) : html;
    pages.push(page);
    write(`${path}${file}`, page);
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

// security.txt (RFC 9116): where to report a security problem. Expires must be less than a year ahead, so it is set to
// the start of the month 11 months from now: a build every few months keeps it valid, and a site nobody touches stops
// claiming a contact that may be gone. It changes once a month, so the build is still safe to run twice.
const expires = new Date();
expires.setUTCDate(1);
expires.setUTCHours(0, 0, 0, 0);
expires.setUTCMonth(expires.getUTCMonth() + 11);
write(
  '.well-known/security.txt',
  `Contact: mailto:${emailAddress}
Expires: ${expires.toISOString().replace('.000', '')}
Preferred-Languages: ${Object.values(LOCALES).map((locale) => locale.htmlLang).join(', ')}
Canonical: ${SITE.url}.well-known/security.txt
`,
);

/*
 * Security headers (Cloudflare reads _headers from the site root). The page only loads its own files, the
 * Turnstile widget and the form endpoint, so the policy names exactly those. Inline scripts are allowed by
 * hash, taken from the pages written above; the JSON-LD block is data, not a script, so it needs none.
 * Inline style attributes (the hero wireframe's --i) are allowed on their own, with style-src-attr.
 * Cache-Control keeps what Cloudflare's static assets send (revalidate every time) and adds no-transform, which
 * tells Cloudflare not to rewrite the HTML: without it the zone injects its Web Analytics beacon (blocked by the
 * policy above, and it would measure visits before the cookie notice is answered).
 */
const inlineScripts = pages.flatMap((html) => [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]));
const scriptHashes = [...new Set(inlineScripts)].map((code) => `'sha256-${createHash('sha256').update(code).digest('base64')}'`);
const turnstile = 'https://challenges.cloudflare.com';
const formOrigin = SITE.form.action ? [new URL(SITE.form.action).origin] : [];

// Google Tag Manager and GA4, allowed only when a container ID is set. The tag script comes from googletagmanager.com;
// GA4 sends its hits to the google-analytics.com / analytics.google.com hosts (any region). Custom HTML tags in the
// container would need inline scripts and stay blocked on purpose: use the built-in tag templates.
if (SITE.tracking.gtm && !/^GTM-[A-Z0-9]{4,}$/.test(SITE.tracking.gtm)) throw new Error("SITE.tracking.gtm must look like 'GTM-XXXXXXX'.");
const googleScripts = SITE.tracking.gtm ? ['https://www.googletagmanager.com'] : [];
const googleHits = SITE.tracking.gtm
  ? ['https://www.googletagmanager.com', 'https://*.google-analytics.com', 'https://*.analytics.google.com']
  : [];

const csp = [
  "default-src 'self'",
  `script-src ${["'self'", ...scriptHashes, turnstile, ...googleScripts].join(' ')}`,
  "style-src 'self'",
  "style-src-attr 'unsafe-inline'",
  `img-src ${["'self'", ...googleHits].join(' ')}`,
  "font-src 'self'",
  `connect-src ${["'self'", ...formOrigin, turnstile, ...googleHits].join(' ')}`,
  `frame-src ${turnstile}`,
  "form-action 'self' mailto:", // mailto: for the contact form when script does not run
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
].join('; ');

write(
  '_headers',
  `# Security headers, generated by scripts/build-html.mjs (do not edit: change the build and run npm run build)
/*
  Content-Security-Policy: ${csp}
  Cache-Control: public, max-age=0, must-revalidate, no-transform
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
`,
);
