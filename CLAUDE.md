# CLAUDE.md

Single-page portfolio landing site for Samuel Dutra, a freelance front-end developer, at https://samueldutra.com.br/ (English) and https://samueldutra.com.br/pt/ (Portuguese). The site builds trust with small clients and sends them to contact him (with a contact form that opens his email app until a form endpoint is set). This file is the full brief and the source of truth. If something it doesn't cover comes up, ask Samuel.

**Scope of the work he sells:** the whole front end, not only websites: websites and landing pages, online stores (e-commerce), dashboards and web apps, and tweaks to existing front ends. Site copy talks about "interfaces" and "projects", not only "sites". Samuel also knows React and uses it when an interface has a lot of state. This portfolio itself stays plain HTML on purpose, because a simple page doesn't need a framework.

## How to work with Samuel

- Chat in Portuguese. Code comments, commit messages, README and all site copy are in English (the site also ships a Portuguese translation).
- When a design decision is not covered here, ask instead of guessing. Do not invent content (see "Never do").
- Before building any UI, use the `frontend-design` skill (`.claude/skills/frontend-design/`). See "Fixed constraints vs. design freedom" for who decides what.

## Fixed constraints vs. design freedom

**Fixed (this file wins, do not change without asking):** the stack, the five palette tokens (extra transition tones are allowed, see "Design tokens"), the Hind font, English as default language with EN/PT toggle, the order of the sections, the single-page scope (one page, in two languages, plus the 404 page), and the "Never do" list (nothing invented).

**Free (the `frontend-design` skill decides):** how each section looks and behaves: hero treatment, layout, card shapes, labels, typographic details, motion and microcopy. The style reference and the section descriptions below are a starting point, not a recipe. If a detail in them reads as a generic default, propose something more specific to Samuel and his work, and say what you changed and why.

## Design process

Follow the `frontend-design` skill's process (plan, review, build, critique), without stopping for approval in between:

1. **Plan.** Write a compact design plan: 4 to 6 named hex values (the fixed palette tokens count), the role of each type weight or size, a layout concept with a short ASCII wireframe and alignment guidance, and the principles that make this page Samuel's.
2. **Review.** Check the plan against the brief. If any part reads like what you would produce for any similar page, revise it and say what changed and why.
3. **Build.** Only then write the code. Keep CSS selector specificity in check so section and element classes don't cancel each other out (especially padding and margin between sections).
4. **Critique.** Review your own work against the quality bar below. Do not take screenshots. Samuel reviews the result in the browser and gives feedback.

At the end of each piece of work, give Samuel a short summary of the design decisions you made and the one thing you chose to make memorable. Spend boldness in one place and keep the rest quiet.

## Stack

- Plain HTML, CSS and JavaScript plus **Tailwind CSS via the CLI**.
- No React, TypeScript, Next.js or any framework **in this site**. No complex build. (Samuel knows React and offers it to clients, see the scope above. The rule is about this page only.)
- Files: `index.html`, `main.js`, `style.css` (only what Tailwind can't cover), `assets/` (fonts in `assets/fonts/`), the Tailwind input at `src/input.css`, the HTML build at `scripts/build-html.mjs`, and the Cloudflare config `wrangler.jsonc` plus `.assetsignore` (the list of internal files that must not be published; add any new internal file or folder there). Generated and committed: `assets/tailwind.css`, `pt/index.html`, `pt/404.html`, `sitemap.xml`, `robots.txt`, `.well-known/security.txt` and `_headers` (Cloudflare security headers, with the Content-Security-Policy; plus the text inside `index.html` and `404.html`). `404.html` is the English error page and, like `index.html`, both the template and the page.
- One command builds everything: `npm run build` (= `build:css` then `build:html`), plus `npm run watch` for the CSS while working. The output is **committed**, so `index.html` still opens directly in the browser and deploys to Cloudflare (Workers with static assets) with no build step. Document any change to this in the README.
- `scripts/build-html.mjs` is plain Node with no dependencies. It reads `SITE` and `TRANSLATIONS` from `main.js` and writes the text into `index.html` (English, in place: it is both the template and the page) and `pt/index.html` (Portuguese, generated: never edit by hand), the `<head>` block between the `build:head` comments (title, description, canonical, hreflang, Open Graph, JSON-LD), the sitemap, `robots.txt`, `_headers` (the CSP lists the hash of each inline script, so a new outside service or inline script needs the build, not a hand edit) and the `?v=` fingerprints on local CSS and JS. Running it twice changes nothing.
- Tailwind v4 (`@tailwindcss/cli`). Design tokens (colors, font) live in a single place: the `@theme` block in `src/input.css`. Add any transition tones there. Rebuild with `npm run build` (or `npm run watch` while working) and commit the result.
- No libraries beyond Tailwind and GSAP unless Samuel agrees. GSAP is approved (vendored at `assets/gsap.min.js` and `assets/ScrollToPlugin.min.js`, both refreshed with `npm run vendor:gsap`) and only for animations CSS can't do, see "Light animations only". Today it drives the button bounce and the smooth scroll. Cloudflare Turnstile is approved (2026-10-16) as the form's anti-bot check: loaded from Cloudflare only when the form nears the screen, never on first load. Samuel declined reCAPTCHA (weight, Google cookies, accessibility). Google Tag Manager with GA4 is approved (2026-10-16) for analytics: it loads only after the visitor accepts the cookie notice, and only when `SITE.tracking.gtm` is set.

## Code conventions

- **`main.js` order:** `SITE` (editable data), `TRANSLATIONS`, then behavior. The build reads everything above the "3. Behavior" banner, so keep that part pure data. Rendering content (text, projects, links, photo, stack) is the build's job; `main.js` only handles what happens after load (form, animations, the language links), using `T`, the translations of the page's language. Shared helpers sit at the top of the behavior part: `$`, `$$`, `reducedMotion`, `onceVisible(element, callback, options)` and `animateProgress(duration, render)`.
- **Scroll-triggered animations** (hero wireframe, rings, Services rows, How it works) all use `onceVisible()`. Don't write a new `IntersectionObserver` by hand. Counters use `animateProgress()`, which already respects reduced motion.
- **Anchor links and focus:** the GSAP smooth scroll cancels the browser's own anchor jump, so it moves focus to the target by hand (`tabindex="-1"`, no outline, see `style.css`). Keep that when touching the scroll code, or the skip link breaks for keyboard users.
- **Data attributes are the JS hooks.** They are unique per purpose: `data-i18n` is filled with text by the build, `data-lang` marks the two language links. Don't reuse a name for two things.
- **Tokens:** only add a token to `@theme` when something uses it, and comment why it exists. Same for components in `src/input.css`: delete them when the markup stops using them (the old terminal's `text-code` and `btn-secondary-dark` were removed this way).
- **`style.css`** has a table of contents in its top comment. Layout properties shared by every breakpoint go on the base rule, not repeated in each media query.
- **Project cards:** only project 0 is in the HTML; cards 1 and 2 are commented out in `index.html` and their texts stay in `SITE.projects`.

## Design tokens

| Token | Hex | Use |
|---|---|---|
| `cream` | `#FEF3E2` | Page background; text on dark areas |
| `sand` | `#F2DFC0` | Contrast section background. Confirmed by Samuel: keep the contrast with cream subtle |
| `ink` | `#2A1A0E` | Main text; dark sections (how it works, footer) |
| `orange` | `#D4621A` | Primary buttons and links, with cream text on buttons |
| `amber` | `#F4AE52` | Accents: badges, icons, code details on dark. Don't single out one word of a headline with it |

Transition tones already in `src/input.css`: `linen` `#F8E8CF` (hover and soft fills), `ink-soft` `#6B5340` (secondary text), `line` `#D8BD90` (decorative hairlines, never text), `ink-raised` `#3D2A1A` (panels on dark), `cream-muted` `#CDB9A0` (secondary text on dark), `orange-deep` `#B5500F` (button hover), `score` `#F4AE52` (the ring), `score-ink` `#9A4308` (the number) and `score-soft` `#FCE6CB` (the fill inside the ring), the light oranges for the Lighthouse scores in "What you get". The ring has low contrast on cream (1.7:1), so it is decorative: the number carries the value (5.3:1 on its fill).

Transition colors: if more are needed, create intermediate tones derived from the five tokens. Name them as tokens in the same single place, keep them in the same warm family, and mention them in the design plan. The five tokens above stay as they are, and the contrast rules below apply to the new tones too.

Contrast rules:

- Measured contrast of cream with `#D4621A` is 3.44:1 (the briefing's 3.8:1 and 4.7:1 were wrong). Never use `#D4621A` as small text on cream. Only buttons, large headings or icons.
- Cream text on `#D4621A` passes AA only as large text, so button labels are Hind bold at 1.2rem (about 19px) or larger. Hover uses `orange-deep` (4.6:1).
- `#F4AE52` is for dark backgrounds. On cream, only large decorative elements.
- Every link and button has a visible focus state.

## Typography

- **Hind**, weights 400 and 700 only, everywhere. Chosen by Samuel (2026-10-15) to replace Alef, whose apostrophe and quotes are drawn as large curly commas. It is hosted with the site (`assets/fonts/`, latin subset, license in `OFL.txt`), with `font-display: swap` and the bold preloaded in the `<head>`.
- Hind's own vertical metrics are tall (it also covers Devanagari), so the `@font-face` rules in `style.css` override its ascent and descent to the values the page was designed with. `Hind Fallback` (Arial resized to Hind's width and those metrics) keeps the swap from moving the layout. Recompute both if the font changes.
- Headings use `text-wrap: balance`. Body text is at most about 65 characters wide.
- Define the type scale (sizes, weights, line height, spacing) in the design plan, following the `frontend-design` skill, and keep it consistent across the page. Don't change it later without saying so.
- The logo is the text "Samuel Dutra" in Hind bold. No image.

## Style reference

Structure and feel follow https://weaveos.com. The palette does **not**.

- Lean header: logo left, few anchors, one primary button right.
- Hero: direct and confident, with a primary and a secondary button. See the Hero entry in "Sections" for what is fixed and what is free.
- Few illustrations and decorative elements, lots of white space.
- Product-interface-style blocks, e.g. the report panel in "What you get". The weaveos.com number strip is inspiration for the "What you get" section only if real numbers exist.
- Tone: friendly and relaxed, but organized and professional. Short sentences, direct voice, no corporate jargon.

## Sections (in this order)

1. **Header** (sticky): logo, anchors (Services, Projects, How it works, Contact), EN/PT toggle, "Talk to me" button linking to contact.
2. **Hero:** the first thing visitors see, so open with the most characteristic thing in Samuel's world (a headline, a live demo, a code block, a load-speed moment, or something else) and say why you chose it. Don't default to a big number with a small label and a gradient accent. Fixed content: a message about what the client gets (the front end their customers use: websites, online stores and dashboards, fast and easy to use; never promise business results), the buttons "Tell me about your project" (primary, filled, links to email) and "See projects" (secondary, outlined), and a strip with the stack of this page (HTML, Tailwind, JavaScript and GSAP, no React: it is not used here) instead of client logos. The form is free.
3. **What you get:** a report-style panel with performance, SEO and accessibility as rings that fill while the number counts up. Below the panel, three plain items: responsive on every screen, clean maintainable code and delivery with support. The ring numbers are **real Lighthouse scores of this very page**, kept in `SITE.scores` in `main.js` with the date and conditions of the measurement. Never type a score that was not measured. Re-run Lighthouse after any change that can affect it and on the deployed URL, then update them. **No other made-up numbers.**
4. **Services:** four services: websites and landing pages, online stores, dashboards and web apps, tweaks and maintenance. The form is free. Avoid identical boxes with the same radius and the same soft grey shadow. Let the layout reflect what each service is.
5. **Projects:** three clearly marked placeholders (type, image, title, short description, link). Samuel plans to build 3 projects for this site, ideally one website, one online store and one dashboard, so the projects prove each kind of work he sells. Each project carries its type as a short label. Projects are the proof of work, so give them more visual weight than Services. The form is free, with the same warning against identical cards. Vary radius and elevation by importance, and don't use gradient washes as decoration.
6. **How it works** (`#process`, nav label "How it works"): 4 steps (briefing, layout, development, delivery) in a dark block. Four boxes in a row, the even ones set lower than the odd ones, joined by upright semicircles (with a straight piece that reaches the lower or higher box) that alternate under and over the row (on mobile, a column of narrower boxes alternating left and right, joined by S-shaped curves with the same stroke and dots; on tablet each curve leaves its box a little to the side of where the previous one arrived). Replaces the old terminal mock (2026-10-14). When the row reaches the screen it plays once, in order: box 1 appears, the line is drawn from it, and the next box appears as the line arrives; slower (1.3x) on phone and tablet.
7. **About:** photo, short first-person paragraph, stack. Include the idea that he picks the tool for the job (plain HTML for a simple site, React when the interface has a lot of state).
8. **Final CTA and footer:** "Let's talk?" on a `sand` background (not dark) with a contact form in a cream panel (name, email, optional project type as radio chips, message; the submit button is the primary "Send me a message"), and the email address as a text link. No Upwork mention anywhere: this site is separate from his Upwork profile. The form posts to `SITE.form.action` (Formspree) when set; otherwise it opens the visitor's email app with a ready `mailto:`. Limits: name 100, email 254, message 10 to 3000 characters, with a counter near the end. The Formspree form ID is public by design; secrets (the Turnstile secret key) live only in the Formspree dashboard. The cookie notice (Accept and Decline at the same size) and the "Cookie settings" footer button exist only when `SITE.tracking.gtm` is set; there is no privacy page (one page only), the notice itself says what is measured. Validation messages follow the EN/PT toggle. The footer stays dark (`ink`) with email, WhatsApp, Instagram and GitHub (no LinkedIn: Samuel removed it, 2026-10-16).

## Content and i18n

- English by default, EN/PT toggle in the header.
- All text lives in one translations object in `main.js` (project texts in `SITE.projects`). The build writes it into the HTML so crawlers and visitors get it without JavaScript. Never type text into `index.html` or `pt/index.html` by hand; the only text written directly in the HTML is the logo.
- Each language is its own page: `/` (`lang="en"`) and `/pt/` (`lang="pt-BR"`), each with its own canonical, `hreflang` to both (plus `x-default` to English) and its own title, description and share image. The EN/PT toggle is a pair of links (the thumb slides, then the other page opens on the same section). No automatic redirect by language and no saved choice: Google advises against redirecting by language, and the address already says which one it is.

## Placeholders

Everything Samuel will replace lives in one object (e.g. `const SITE = {...}` in `main.js`), so he never has to hunt through the HTML. Keep placeholders obvious and easy to swap. Still **PENDING**:

- Photo: done (2026-10-16), `assets/samuel-dutra.avif`. The initials "SD" only show if `SITE.photo` is empty. Alt text is `about.photoAlt`.
- Links: all filled (2026-10-16). The email is temporary until Samuel has a professional address. Real `https` profile links go into the structured data (`sameAs`) on the build.
- The 3 projects (type, title, description, image, link).
- Real metrics (years of experience, projects). The Lighthouse scores in "What you get" are already real, but were measured locally (2026-10-15): re-measure on the deployed site.

## Quality bar

- Mobile first. Check around 400px with no horizontal scroll.
- Accessibility: semantic HTML, correct heading hierarchy, `alt` on images, visible focus, keyboard navigation, respect `prefers-reduced-motion`.
- SEO: see `SEO.md` (checklist, with what is done and what is pending). The build covers title, description, canonical, hreflang, Open Graph, JSON-LD, sitemap and robots; keep it that way rather than adding tags by hand.
- Performance: light images, no unnecessary libraries.
- Light animations only: always prefer lightweight animations. Animate `transform` and `opacity`, avoid layout-triggering properties, keep durations short, and prefer CSS when it is enough. Use GSAP only when CSS can't do the job.
- Motion: one orchestrated moment (likely in the hero) plus feedback for user actions (EN/PT toggle, menu, button hover and focus). No fade-and-slide entrance on every section and no hover effect on every card. Always respect `prefers-reduced-motion`. Nothing that hurts reading.

## Never do

- Do not invent clients, testimonials, metrics, awards or projects.
- Do not change the five palette tokens, the font or the default language without asking. Adding transition tones is fine.
- No emojis as section markers.
- No lorem ipsum. The site copy was written and approved by Samuel (2026-10-13). Facts in it (two weeks of support, contract, estimate, monthly hours) come from Samuel, so don't change them without asking. Avoid coach-style words, humor, em dashes in short copy, and any mention of being new to the field. Don't state an hourly rate on the site. The project texts are still pending and will be written once the projects exist.
- No extra pages. It is one page, in two languages (`/` and `/pt/`). The only exception is the error page, `404.html` and `pt/404.html`: it is not linked from the site, not in the sitemap and `noindex`.
- No hand-written text in the HTML: it comes from the translations object through the build (except the logo).

## Git

- The repo uses git. Make small, descriptive commits in English, and only when Samuel asks.
- Commit the generated files (`assets/tailwind.css`, `index.html`, `404.html`, `pt/index.html`, `pt/404.html`, `sitemap.xml`, `robots.txt`, `.well-known/security.txt`, `_headers`) along with the source changes that produced them. Run `npm run build` first.

## Deliverables

- Organized code, commented where it isn't obvious.
- A short `README` (lean on purpose, rewritten 2026-10-20): the live link, how to open and build locally, where to change content, and a three-line deploy summary. The detailed deploy steps and service setup live in this file, in the to-do checklist below.

## To-do checklist

Everything still to do, reviewed on 2026-10-20 and grouped by when it happens: **before**, **during** and **after** the deploy. Tick items here as they are done and add the date. **Samuel** marks what only he can do or decide. `SEO.md` and `ACCESSIBILITY.md` keep the detail; this list is the overview.

### A. Before the deploy

**Decisions and approvals (Samuel)**

- [x] (2026-10-20) Approve the copy added without his sign-off: the cookie notice (`consent.text`, `consent.accept`, `consent.decline`, `footer.cookies`, EN and PT) and the form messages `form.error.messageShort`, `form.count` and `form.countOne`.
- [x] (2026-10-20, kept as is) Check the Portuguese meta description (`meta.description` in `TRANSLATIONS.pt`), a translation of the approved English one.
- [x] (2026-10-20, seen in the GTM dashboard: version 2 live, 4 tags, 3 triggers) Confirm the GTM container `GTM-5B9PSTB3` is published (Versions tab shows a live version with the GA4 Google tag `G-W9Y8S0FQWZ` and the three event tags). Without it the site loads an empty container.
- [x] (2026-10-20, kept as is) Hero strip: it lists the stack of this page, "Built with HTML, Tailwind, JavaScript and GSAP", without React because the site does not use it. The brief (Sections, item 2) was updated to match.
- [x] (2026-10-20, kept as is) About: Samuel chose to leave `about.text2` as it is, without the "plain HTML for a simple site, React when the interface has a lot of state" sentence.
- [x] (2026-10-20) LGPD text. Samuel chose a "Details" disclosure inside the cookie notice (no privacy page, so the one-page rule stands) and approved the text: who is responsible, what Google Analytics records, cookie 2 years and 2 months of data retention, Google may process it abroad (EN says "in other countries", PT "fora do Brasil"), rights and how to block cookies, and the email as the rights channel (`SITE.links.email`, to be swapped when the professional email exists). Keys `consent.details`, `consent.who`, `consent.what`, `consent.keep`, `consent.abroad`, `consent.rights`, `consent.contact`. The form has a line under the send button, `form.privacy` (Formspree and Cloudflare Turnstile are US services, used only to reply, deletion on request). Still to do in GA4: set the data retention to 2 months on purpose (see section C), so the notice stays true.
- [x] (2026-10-20) Launch with one real project. Samuel confirmed project 1 (a concept website built pixel to pixel from a Figma design, HTML, Tailwind and JavaScript, live at samuelsdutra25.github.io/figma-project/, no domain of its own) and its texts; `placeholder: false`. The store and dashboard cards stay commented out until they exist. The card is labeled as a concept project (type label and `details.about`), at Samuel's request.
- [x] (2026-10-20) License: none, all rights reserved. Samuel's choice; the README says so.
- [x] (2026-10-20) Accessibility statement: one line in the footer (`footer.a11y`, `footer.a11yEnd`), saying the site aims for WCAG 2.2 level AA and where to report a problem. It does not claim full conformance, because the screen reader and other manual tests are still pending. Revisit the wording after them.
- [x] (2026-10-20) MEI: Samuel is not a MEI yet, so no name and CNPJ in the footer. Revisit if he opens one.

**Content (Samuel)**

- [ ] The other two real projects (online store, dashboard): type, title, short text, details (about, role, stack), image and live link, in EN and PT. Then set `placeholder: false`, uncomment cards 1 and 2 in `index.html`, and check the `project_open` event with the real titles. Project 1 is done (2026-10-20). Samuel left the other two out for now, so the launch has proof of one kind of work only.
- [ ] Project images: AVIF or WebP, about 1200px wide, descriptive file names, `width` and `height` (the build writes them), `loading="lazy"`.
- [ ] Professional email (for example `contato@samueldutra.com.br` with Cloudflare Email Routing, free), then replace `SITE.links.email` (today `samuelsdutra25@gmail.com`) and the Formspree notification address. Samuel decided (2026-10-20) to launch with the Gmail, because the first clients come through Upwork, and to move to a paid Google address or Email Routing later. Moved to "after the deploy" in practice: nothing blocks the launch.
- [x] (2026-10-20) Real metrics: Samuel has none yet, so the site shows none. Add them only when they exist.

**Code (ask before starting)**

- [x] (2026-10-20) Re-ask consent after 12 months: the choice is saved with its date (`analytics-consent-date` in `localStorage`) and `storedConsent()` in `main.js` ignores it after `CONSENT_MONTHS` (12). A choice saved before this change has no date, so those visitors are asked once more.
- [x] (2026-10-20) `/.well-known/security.txt`, generated by the build (Contact, Expires at the start of the month 11 months ahead, Preferred-Languages, Canonical). After deploy, check that it returns 200 (see section C).
- [x] (2026-10-20) About photo cut to 800x800 (38 KB, was 1254px and 91 KB). The build writes `width="800" height="800"` into the `<img>`.
- [x] (2026-10-20) Form without JavaScript: it first posted to a `mailto:`, but Chrome flags that as mixed content (Lighthouse best practices 73 to 77), so it was replaced the same day by a `<noscript>` note at the top of the form (`form.noscript` plus the email link). The form has `method="dialog"`, so without script a submit does nothing and no field ends up in the address bar; with script `main.js` handles the submit as before. The CSP is back to `form-action 'self'`.
- [x] (2026-10-20) The "Cookie settings" button is removed from the 404 footers by the build (`withSiteChrome`), because those pages do not load `main.js`. 404 visits stay unmeasured on purpose.
- [x] (2026-10-20) Stale docs refreshed: `README.md`, `SEO.md` and `ACCESSIBILITY.md`.

**Tests that need no live site**

- [x] (2026-10-20, done by Samuel, no problems found) W3C HTML validator on `/`, `/pt/` and both 404 pages.
- [x] (2026-10-20, done by Samuel, no problems found) Keyboard only through the whole page, including the cookie notice.
- [x] (2026-10-20, done by Samuel, no problems found) Screen reader pass.
- [x] (2026-10-20, done by Samuel, no problems found) 200% zoom and Firefox text-only zoom.
- [x] (2026-10-20, done by Samuel, no problems found) Windows high contrast.
- [x] (2026-10-20, done by Samuel, no problems found) Real phones (Android and iPhone).

**Last step**

- [x] (2026-10-20) Build and commit everything pending (commits `93f39eb`, `7912f26` and `86bba8b`). Not pushed yet.

### B. During the deploy

The order matters. Do these one after another.

1. [x] (2026-10-20) Put the repository on GitHub (`samuelsdutra25/my-landingpage`, pushed).
2. [x] (2026-10-20) Cloudflare Worker `samueldutra` created from the repository, build command empty. Worker URL: `samueldutra.samuelsdutra25-15f.workers.dev`.
3. [x] (2026-10-20) Checked on workers.dev: `/` and `/pt/` 200, `/CLAUDE.md`, `/README.md`, `/package.json`, `/_headers` 404, `/.well-known/security.txt` 200 as text/plain, `/x` and `/pt/x` 404 in the right language, security headers present, no injected Cloudflare scripts.
4. [x] (2026-10-20) Turnstile: widget created (hostnames `samueldutra.com.br` and the workers.dev address, Managed), site key in `SITE.form.turnstile` and live, secret key rotated (it had shown in a screenshot in the chat) and pasted in Formspree (CAPTCHA solution: Cloudflare Turnstile). A real send from the workers.dev address works. Remove the workers.dev hostname from the widget once the custom domain is live.
5. [x] (2026-10-20) Formspree: Restrict to Domain is not available on the free plan (not in the form's Settings), so it is skipped on purpose. The form stays protected by Turnstile (the token is only issued for the hostnames listed in the widget), the honeypot and Formshield. A real send from the live domain arrives by email. Submission Archive is on, so Formspree keeps a copy of each message; delete it in Submissions if a visitor asks.
6. [x] (2026-10-20) Domain: `samueldutra.com.br` moved from another Cloudflare account (an old maths-classes site, no longer needed, no email) to this one, name servers `arch.ns.cloudflare.com` and `monroe.ns.cloudflare.com` at Registro.br (DNSSEC was not on), zone Active. Cloudflare imported the three "no mail" records (null MX, `_dmarc` `p=reject`, SPF `-all`) and they were kept.
7. [x] (2026-10-20) Custom domains `samueldutra.com.br` and `www.samueldutra.com.br` added to the Worker (Production). HTTPS works.
8. [x] (2026-10-20) Redirect Rule from the Cloudflare template "Redirect from WWW to root" (`https://www.*` to `https://${1}`, 301, query string kept). Tested: `www` and `www/pt/?a=1` redirect to the apex.
9. [x] (2026-10-20) The `*.workers.dev` and preview URLs are turned off (both return 404).
10. [x] (2026-10-20) Checked on the live domain: the HTML is identical to `index.html`, no Cloudflare script injected, the `mailto:` links are intact and not obfuscated.
11. [x] (2026-10-20) AI crawlers: Cloudflare added its managed block to `robots.txt` (`ai-train=no` and Disallow for training crawlers such as GPTBot, ClaudeBot and Google-Extended); search crawlers stay allowed and our `Allow: /` and sitemap line are still there. Later the same day this turned out to be wrong: the rule "Block AI training crawlers - BOBA-199" (Cloudflare Bot Management rules) was blocking the real Googlebot (IPs `66.249.x.x`, Googlebot Smartphone user agent), including on `/`, and Search Console got a 403 on `sitemap.xml`. Samuel changed the AI bot policy in Security > Settings > Bot traffic > Configure AI bot policies to allow them, and the `robots.txt` is back to our own two lines. Keep checking Security > Analytics > Events for blocks from Google IPs.
12. [x] (2026-10-20) DNS: DNSSEC is on. The DS record is published at the `.br` registry and Google (8.8.8.8) and Quad9 (9.9.9.9) answer with the `ad` flag (validated). The "no mail" records (null MX, SPF `-all`, DMARC `p=reject`) already exist in the zone (kept from the old account, 2026-10-20); replace them with the real ones when Email Routing is set up.
13. [x] (2026-10-20) HSTS: `Strict-Transport-Security: max-age=31536000` (one year, no includeSubDomains, no preload, on purpose) added to `_headers` by the build; Cloudflare's own HSTS setting stays off so the header comes from one place. Always Use HTTPS is on (`http://` redirects with 301). Check with `curl -sI https://samueldutra.com.br/` after the deploy.

After this, every push to `main` publishes by itself.

**Tag Manager setup notes** (kept from the old README). The page sends three events to the `dataLayer`, only after the visitor accepts the notice: `generate_lead` (form sent successfully, `form_name` = `contact`), `contact_click` (email or WhatsApp link, `contact_method`) and `project_open` (`project_title`). In GTM each one has a Custom Event trigger and a GA4 Event tag, and the Google tag with the GA4 ID fires on "Initialization - All Pages". Use GTM Preview only on a copy of the site (its iframe is blocked by the CSP). Do not use Custom HTML tags (the CSP blocks inline scripts on purpose); the built-in templates work.

### C. After the deploy

**Check the live site**

- [x] (2026-10-20) Live checks: `/` and `/pt/` 200 over HTTPS, `http://` and `www` redirect (301), `/x` and `/pt/x` 404 in the right language, `/CLAUDE.md`, `/README.md`, `/package.json` 404, `/.well-known/security.txt` 200 as plain text, workers.dev off.
- [x] (2026-10-20) No CSP violation or console error on both pages (Lighthouse "errors in console" passes, before cookies are accepted). Cloudflare's Web Analytics beacon was being injected and blocked by the CSP; fixed with `Cache-Control: ... no-transform` in `_headers`. Not yet checked after accepting the cookies.
- [ ] (2026-10-20) Compression. `no-transform` also stops Cloudflare from compressing, so nothing was sent with Brotli or gzip (275 KB on the wire). Local Lighthouse, mobile, 3 runs each: uncompressed 95 to 97 (LCP 2.2 to 2.6 s, 275 KB), assets compressed 98 to 99 (LCP 1.7 to 1.9 s, 151 KB), everything compressed 100 (LCP 1.4 to 1.5 s, 107 KB). The build keeps `no-transform` only on the HTML and the 404 pages; CSS, JS and `assets/` lose it (`! Cache-Control` in `_headers`). Dropping it from the HTML too was tried (commit `fae9fb7`) and the beacon came back, even though the account has no Web Analytics site and Speed > Observatory offers to enable RUM. Cloudflare only injects it for browsers: check with a browser user agent, `curl -s --compressed -A 'Mozilla/5.0 Chrome/130.0' -H 'Accept: text/html' https://samueldutra.com.br/ | grep cloudflareinsights` (plain curl never shows it). **Samuel:** find the switch (Speed > Real user monitoring, or the zone's Web Analytics settings), then remove `no-transform` from the build and check again. Then re-run Lighthouse and update `SITE.scores`.
- [~] (2026-10-20) Live headers checked with curl (CSP, nosniff, Referrer-Policy, Permissions-Policy, Cache-Control, `robots.txt` with Cloudflare's block). Mozilla Observatory / securityheaders.com not run.
- [x] (2026-10-20) Real form send with Turnstile on: the email arrives. `generate_lead` in GA4 not checked yet.
- [~] (2026-10-20) Analytics in a normal tab: after accepting, GA4 Realtime shows `page_view`, `first_visit`, `session_start`, `scroll`, `click`, `contact_click` and `project_open`. Console after accepting: only harmless noise (Firefox's `_ga` "invalid domain" probing on `.com.br`, and warnings from inside the Turnstile iframe). Still to do: `generate_lead` (nobody has sent the form since the tag went live) and declining in another browser to confirm no request goes to Google.
- [x] (2026-10-20) Lighthouse on the live site (mobile, 12 runs): performance 92 to 98 (median 97), accessibility 100, best practices 100, SEO 100. `SITE.scores` updated to 97, 100, 100. PageSpeed Insights not run.
- [x] (2026-10-20) axe 4.x on the deployed `/` and `/pt/` (390px and 1280px; notice open, notice answered, mobile menu open, project expanded; WCAG 2.2 A/AA plus best practices): 0 violations in every state. Left for review by axe, not failures: the three gauge numbers (text too short to judge; measured by hand at 5.3:1) and the notice text (it overlaps the page, on its own cream panel). During the intro the page is inert on purpose, so run axe after it ends.
- [ ] Real phones again on the live site, and the Turnstile challenge by keyboard if it appears.

**Search and sharing**

- [x] (2026-10-20) **Samuel.** Google Search Console: the Domain property already existed and is verified. `sitemap.xml` submitted (the Domain property needs the full URL; the first fetch got a 403 from Cloudflare's AI bot block, see step 11, and works after the fix, status processed). URL Inspection live test passed on `/pt/` (and `/`), indexing requested.
- [x] (2026-10-20) **Samuel.** GA4 linked to Search Console (data shows up in a day or two).
- [ ] **Samuel.** Bing Webmaster Tools: import from Search Console. Postponed by Samuel (2026-10-20).
- [ ] Validate the JSON-LD with the Schema Markup Validator and the Rich Results Test.
- [ ] Test the share preview on WhatsApp and the LinkedIn Post Inspector, EN and PT.
- [x] (2026-10-20) **Samuel.** Site linked from GitHub, Instagram, WhatsApp Business, email signature and Upwork.

**Google Analytics settings (Samuel, in GA4)**

- [ ] Mark `generate_lead` as a key event.
- [ ] Data retention: set it to 2 months on purpose (Admin > Data collection > Data retention), because the cookie notice already says "2 months in reports". The GA4 default is 2 months, but check that it was not changed.
- [ ] Google signals and ads personalization off (the page never grants ad storage, keep the property consistent with that).
- [ ] Optionally set the `_ga` cookie lifetime in the Google tag (`cookie_expires`, for example 13 months, the European reference) so the notice can state it.

### D. Ongoing

- [ ] After every content change: `npm run build`, commit, deploy, re-run Lighthouse and update `SITE.scores`.
- [ ] Search Console every few weeks (Pages, Performance, Manual actions) and GA4 for the three events.
- [ ] `npm run vendor:gsap` when GSAP is updated; `npm update` for Tailwind now and then, then rebuild.

### Notes and sources

What the site already meets: WCAG 2.2 AA (see `ACCESSIBILITY.md`, also the base of ABNT NBR 17225:2025, the Brazilian reference for LBI art. 63), Google Search Essentials (see `SEO.md`), Core Web Vitals, and from the ANPD cookie guide: a reject button as visible as accept, analytics off by default, no pre-ticked boxes, text in the visitor's language, and a way to change the choice later (footer). Researched 2026-10-16.

**Notes on this section**

- The LGPD items follow the ANPD guide and the law text; they are not legal advice. For legal certainty, a quick review by a lawyer is worth it.
- Sources:
  - ANPD, Guia orientativo "Cookies e proteção de dados pessoais" (2022): https://webcon.unioeste.br/portal/arq/files/NIC/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf (pages 28 to 33: cookie policy, first and second layer, what to avoid)
  - Summaries of the guide: https://www.mattosfilho.com.br/unico/anpd-guia-cookies-protecao-dados/ and https://lefosse.com/noticias/anpd-publica-guia-orientativo-sobre-o-uso-de-cookies
  - LGPD (Lei 13.709/2018), art. 9 (information owed to the data subject), art. 18 (rights), arts. 33 to 36 (international transfer): https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
  - Resolução CD/ANPD 2/2022 (small processing agents, no DPO but a channel): https://www.mayerbrown.com/-/media/files/perspectives-events/publications/2022/02/regulation-for-the-application-of-the-general-data-protection-law-lgpd-for-small-business-data-processing-agents/legal-update--regulamento-agentes-de-pequeno-porte.pdf
  - International transfer in the privacy notice: https://www.conjur.com.br/?p=364819
  - LBI art. 63 and its regulation: https://www.mpf.mp.br/o-mpf/unidades/pr-sp/noticias/mpf-exige-que-a-uniao-defina-regras-para-garantir-acessibilidade-em-sites-publicos-e-privados
  - ABNT NBR 17225:2025 (based on WCAG 2.2): https://acervo.ceweb.br/acervos/conteudo/1386e03c-4991-4473-b969-5cf4d8caeebb and https://teletime.com.br/11/03/2025/abnt-lanca-norma-para-aprimorar-a-acessibilidade-de-sites/
  - OWASP Secure Headers Project: https://owasp.org/www-project-secure-headers-project/
  - RFC 9116 (security.txt): https://www.rfc-editor.org/rfc/rfc9116
  - Cloudflare Email Address Obfuscation: https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation
  - Cloudflare AI crawler settings (changelog): https://developers.cloudflare.com/bots/changelog/
  - Domains that do not send email: https://www.gov.uk/guidance/protect-domains-that-dont-send-email and https://www.suped.com/learn/dmarc-for-msps/how-to-handle-client-domains-that-do-not-send-email
  - GA4 privacy settings (retention, Google signals): https://infotrust.com/articles/privacy-centric-google-analytics-4-consent-opt-out-configuration/
  - Decreto 7.962/2013: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/decreto/d7962.htm

