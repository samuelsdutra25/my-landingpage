# CLAUDE.md

Single-page portfolio landing site for Samuel Dutra, a freelance front-end developer starting on Upwork. The site builds trust with small clients and sends them to contact him (by email for now, with a form planned). Upwork is the secondary route. This file is the full brief and the source of truth. If something it doesn't cover comes up, ask Samuel.

**Scope of the work he sells:** the whole front end, not only websites: websites and landing pages, online stores (e-commerce), dashboards and web apps, and tweaks to existing front ends. Site copy talks about "interfaces" and "projects", not only "sites". Samuel also knows React and uses it when an interface has a lot of state. This portfolio itself stays plain HTML on purpose, because a simple page doesn't need a framework.

## How to work with Samuel

- Chat in Portuguese. Code comments, commit messages, README and all site copy are in English (the site also ships a Portuguese translation).
- When a design decision is not covered here, ask instead of guessing. Do not invent content (see "Never do").
- Before building any UI, use the `frontend-design` skill (`.claude/skills/frontend-design/`). See "Fixed constraints vs. design freedom" for who decides what.

## Fixed constraints vs. design freedom

**Fixed (this file wins, do not change without asking):** the stack, the five palette tokens (extra transition tones are allowed, see "Design tokens"), the Alef font, English as default language with EN/PT toggle, the order of the sections, the single-page scope, and the "Never do" list (nothing invented).

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
- Files: `index.html`, `main.js`, `style.css` (only what Tailwind can't cover), `assets/`, plus the Tailwind input at `src/input.css`.
- The compiled Tailwind output is **committed** (`assets/tailwind.css`), so `index.html` still opens directly in the browser and deploys to Vercel or Netlify with no build step or config. Keep the CLI to one documented command (e.g. an npm script `build:css`, plus a `watch` variant), and document it in the README.
- Tailwind v4 (`@tailwindcss/cli`). Design tokens (colors, font) live in a single place: the `@theme` block in `src/input.css`. Add any transition tones there. Rebuild with `npm run build:css` (or `npm run watch` while working) and commit the result.
- No libraries beyond Tailwind and GSAP unless Samuel agrees. GSAP is approved (vendored at `assets/gsap.min.js`, refreshed with `npm run vendor:gsap`) and only for animations CSS can't do, see "Light animations only".

## Design tokens

| Token | Hex | Use |
|---|---|---|
| `cream` | `#FEF3E2` | Page background; text on dark areas |
| `sand` | `#F2DFC0` | Contrast section background. Confirmed by Samuel: keep the contrast with cream subtle |
| `ink` | `#2A1A0E` | Main text; dark sections (how it works, final CTA, footer) |
| `orange` | `#D4621A` | Primary buttons and links, with cream text on buttons |
| `amber` | `#F4AE52` | Accents: badges, icons, code details on dark. Don't single out one word of a headline with it |

Transition tones already in `src/input.css`: `linen` `#F8E8CF` (hover and soft fills), `ink-soft` `#6B5340` (secondary text), `line` `#D8BD90` (decorative hairlines, never text), `ink-raised` `#3D2A1A` (panels on dark), `cream-muted` `#CDB9A0` (secondary text on dark), `orange-deep` `#B5500F` (button hover), `score` `#F4AE52` (the ring), `score-ink` `#9A4308` (the number) and `score-soft` `#FCE6CB` (the fill inside the ring), the light oranges for the Lighthouse scores in "What you get". The ring has low contrast on cream (1.7:1), so it is decorative: the number carries the value (5.3:1 on its fill).

Transition colors: if more are needed, create intermediate tones derived from the five tokens. Name them as tokens in the same single place, keep them in the same warm family, and mention them in the design plan. The five tokens above stay as they are, and the contrast rules below apply to the new tones too.

Contrast rules:

- Measured contrast of cream with `#D4621A` is 3.44:1 (the briefing's 3.8:1 and 4.7:1 were wrong). Never use `#D4621A` as small text on cream. Only buttons, large headings or icons.
- Cream text on `#D4621A` passes AA only as large text, so button labels are Alef bold at 1.2rem (about 19px) or larger. Hover uses `orange-deep` (4.6:1).
- `#F4AE52` is for dark backgrounds. On cream, only large decorative elements.
- Every link and button has a visible focus state.

## Typography

- **Alef** from Google Fonts, weights 400 and 700 only (the only ones that exist), loaded with `display=swap`.
- Alef everywhere.
- Headings use `text-wrap: balance`. Body text is at most about 65 characters wide.
- Define the type scale (sizes, weights, line height, spacing) in the design plan, following the `frontend-design` skill, and keep it consistent across the page. Don't change it later without saying so.
- The logo is the text "Samuel Dutra" in Alef bold. No image.

## Style reference

Structure and feel follow https://weaveos.com. The palette does **not**.

- Lean header: logo left, few anchors, one primary button right.
- Hero: direct and confident, with a primary and a secondary button. See the Hero entry in "Sections" for what is fixed and what is free.
- Few illustrations and decorative elements, lots of white space.
- Product-interface-style blocks, e.g. the report panel in "What you get". The weaveos.com number strip is inspiration for the "What you get" section only if real numbers exist.
- Tone: friendly and relaxed, but organized and professional. Short sentences, direct voice, no corporate jargon.

## Sections (in this order)

1. **Header** (sticky): logo, anchors (Services, Projects, Process, Contact), EN/PT toggle, "Talk to me" button linking to contact.
2. **Hero:** the first thing visitors see, so open with the most characteristic thing in Samuel's world (a headline, a live demo, a code block, a load-speed moment, or something else) and say why you chose it. Don't default to a big number with a small label and a gradient accent. Fixed content: a message about what the client gets (the front end their customers use: websites, online stores and dashboards, fast and easy to use; never promise business results), the buttons "Tell me about your project" (primary, filled, links to email until the contact form exists) and "See projects" (secondary, outlined), and a strip with the stack (HTML, CSS, JavaScript, React, Tailwind) instead of client logos. The form is free.
3. **What you get:** a report-style panel with performance, SEO and accessibility as rings that fill while the number counts up. Below the panel, three plain items: responsive on every screen, clean maintainable code and delivery with support. The ring numbers are **real Lighthouse scores of this very page**, kept in `SITE.scores` in `main.js` with the date and conditions of the measurement. Never type a score that was not measured. Re-run Lighthouse after any change that can affect it and on the deployed URL, then update them. **No other made-up numbers.**
4. **Services:** four services: websites and landing pages, online stores, dashboards and web apps, tweaks and maintenance. The form is free. Avoid identical boxes with the same radius and the same soft grey shadow. Let the layout reflect what each service is.
5. **Projects:** three clearly marked placeholders (type, image, title, short description, link). Samuel plans to build 3 projects for this site, ideally one website, one online store and one dashboard, so the projects prove each kind of work he sells. Each project carries its type as a short label. Projects are the proof of work, so give them more visual weight than Services. The form is free, with the same warning against identical cards. Vary radius and elevation by importance, and don't use gradient washes as decoration.
6. **How it works** (`#process`, nav label still "Process"): 4 steps (briefing, layout, development, delivery) in a dark block. Four boxes in a row, the even ones set lower than the odd ones, joined by upright semicircles (with a straight piece that reaches the lower or higher box) that alternate under and over the row (on mobile, a column of narrower boxes alternating left and right, joined by S-shaped curves with the same stroke and dots; on tablet each curve leaves its box a little to the side of where the previous one arrived). Replaces the old terminal mock (2026-10-14).
7. **About:** photo, short first-person paragraph, stack. Include the idea that he picks the tool for the job (plain HTML for a simple site, React when the interface has a lot of state).
8. **Final CTA and footer:** "Let's talk?" with a primary button to email ("Send me a message") and a secondary button to the Upwork profile, plus email, LinkedIn and GitHub.

## Content and i18n

- English by default, EN/PT toggle in the header.
- All text lives in one translations object in `main.js`. The only text allowed directly in the HTML is the logo.
- The toggle saves the choice in `localStorage` and updates `<html lang>`.

## Placeholders

Everything Samuel will replace lives in one object (e.g. `const SITE = {...}` in `main.js`), so he never has to hunt through the HTML. Keep placeholders obvious and easy to swap. Still **PENDING**:

- Photo: neutral shape with initials "SD" until it arrives.
- Links: Upwork, GitHub, LinkedIn, email (use `#` or an example `mailto:` marked TODO).
- The 3 projects (type, title, description, image, link).
- Real metrics (years of experience, projects, Upwork rating). The Lighthouse scores in "What you get" are already real, but were measured locally: re-measure on the deployed site.

## Quality bar

- Mobile first. Check around 400px with no horizontal scroll.
- Accessibility: semantic HTML, correct heading hierarchy, `alt` on images, visible focus, keyboard navigation, respect `prefers-reduced-motion`.
- SEO basics: `<title>`, meta description, Open Graph, correct `lang`, simple favicon.
- Performance: light images, no unnecessary libraries.
- Light animations only: always prefer lightweight animations. Animate `transform` and `opacity`, avoid layout-triggering properties, keep durations short, and prefer CSS when it is enough. Use GSAP only when CSS can't do the job.
- Motion: one orchestrated moment (likely in the hero) plus feedback for user actions (EN/PT toggle, menu, button hover and focus). No fade-and-slide entrance on every section and no hover effect on every card. Always respect `prefers-reduced-motion`. Nothing that hurts reading.

## Never do

- Do not invent clients, testimonials, metrics, awards or projects.
- Do not change the five palette tokens, the font or the default language without asking. Adding transition tones is fine.
- No emojis as section markers.
- No lorem ipsum. The site copy was written and approved by Samuel (2026-10-13). Facts in it (two weeks of support, contract, estimate, monthly hours) come from Samuel, so don't change them without asking. Avoid coach-style words, humor, em dashes in short copy, and any mention of being new to the field. Don't state an hourly rate on the site. The project texts are still pending and will be written once the projects exist.
- No extra pages. It is one page.
- No fixed text in the HTML outside the translations object (except the logo).

## Git

- The repo uses git. Make small, descriptive commits in English, and only when Samuel asks.
- Commit the compiled `assets/tailwind.css` along with the source changes that produced it.

## Deliverables

- Organized code, commented where it isn't obvious.
- A short `README` covering: how to open locally, how to rebuild the CSS, where to change the photo, links and projects, and how to publish on Vercel or Netlify.
