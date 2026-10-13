# CLAUDE.md

Single-page portfolio landing site for Samuel Dutra, a freelance front-end developer starting on Upwork. The site builds trust with small Upwork clients and sends them to hire him there. This file is the full brief and the source of truth. If something it doesn't cover comes up, ask Samuel.

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
| `ink` | `#2A1A0E` | Main text; dark sections (terminal, final CTA, footer) |
| `orange` | `#D4621A` | Primary buttons and links, with cream text on buttons |
| `amber` | `#F4AE52` | Accents: badges, icons, code details on dark. Don't single out one word of a headline with it |

Transition tones already in `src/input.css`: `linen` `#F8E8CF` (hover and soft fills), `ink-soft` `#6B5340` (secondary text), `line` `#D8BD90` (decorative hairlines, never text), `ink-raised` `#3D2A1A` (panels on dark), `cream-muted` `#CDB9A0` (secondary text on dark), `orange-deep` `#B5500F` (button hover).

Transition colors: if more are needed, create intermediate tones derived from the five tokens. Name them as tokens in the same single place, keep them in the same warm family, and mention them in the design plan. The five tokens above stay as they are, and the contrast rules below apply to the new tones too.

Contrast rules:

- Measured contrast of cream with `#D4621A` is 3.44:1 (the briefing's 3.8:1 and 4.7:1 were wrong). Never use `#D4621A` as small text on cream. Only buttons, large headings or icons.
- Cream text on `#D4621A` passes AA only as large text, so button labels are Alef bold at 1.2rem (about 19px) or larger. Hover uses `orange-deep` (4.6:1).
- `#F4AE52` is for dark backgrounds. On cream, only large decorative elements.
- Every link and button has a visible focus state.

## Typography

- **Alef** from Google Fonts, weights 400 and 700 only (the only ones that exist), loaded with `display=swap`.
- Alef everywhere. The terminal mock uses the system monospace font.
- Headings use `text-wrap: balance`. Body text is at most about 65 characters wide.
- Define the type scale (sizes, weights, line height, spacing) in the design plan, following the `frontend-design` skill, and keep it consistent across the page. Don't change it later without saying so.
- The logo is the text "Samuel Dutra" in Alef bold. No image.

## Style reference

Structure and feel follow https://weaveos.com. The palette does **not**.

- Lean header: logo left, few anchors, one primary button right.
- Hero: direct and confident, with a primary and a secondary button. See the Hero entry in "Sections" for what is fixed and what is free.
- Few illustrations and decorative elements, lots of white space.
- Product-interface-style blocks, e.g. a dark terminal mock in the process section. The weaveos.com number strip is inspiration for the "What you get" section only if real numbers exist.
- Tone: friendly and relaxed, but organized and professional. Short sentences, direct voice, no corporate jargon.

## Sections (in this order)

1. **Header** (sticky): logo, anchors (Services, Projects, Process, Contact), EN/PT toggle, "Talk to me" button linking to contact.
2. **Hero:** the first thing visitors see, so open with the most characteristic thing in Samuel's world (a headline, a live demo, a code block, a load-speed moment, or something else) and say why you chose it. Don't default to a big number with a small label and a gradient accent. Fixed content: a message about what the client gets (the front end their customers use: websites, online stores and dashboards, fast and built to bring in clients), the buttons "Hire me on Upwork" (primary, filled, because hiring is the goal) and "See projects" (secondary, outlined), and a strip with the stack (HTML, CSS, JavaScript, React, Tailwind) instead of client logos. The form is free.
3. **What you get:** fixed content is four items that hold for any kind of project: works on every screen, fast loading, clean maintainable code, delivery with support. SEO is not an item (it doesn't apply to dashboards): mention it in the websites and stores service text. The form is free (list, checklist, interface-style block, or something else). **No made-up numbers.** Only use the big-number-with-small-label format when real metrics exist, and design the section so they can be swapped in later without a redesign.
4. **Services:** four services: websites and landing pages, online stores, dashboards and web apps, tweaks and maintenance. The form is free. Avoid identical boxes with the same radius and the same soft grey shadow. Let the layout reflect what each service is.
5. **Projects:** three clearly marked placeholders (type, image, title, short description, link). Samuel plans to build 3 projects for this site, ideally one website, one online store and one dashboard, so the projects prove each kind of work he sells. Each project carries its type as a short label. Projects are the proof of work, so give them more visual weight than Services. The form is free, with the same warning against identical cards. Vary radius and elevation by importance, and don't use gradient washes as decoration.
6. **Process:** 4 steps (briefing, layout, development, delivery) in a dark block with a terminal mock.
7. **About:** photo, short first-person paragraph, stack. Include the idea that he picks the tool for the job (plain HTML for a simple site, React when the interface has a lot of state).
8. **Final CTA and footer:** "Let's talk?" with a button to the Upwork profile, plus email, LinkedIn and GitHub.

## Content and i18n

- English by default, EN/PT toggle in the header.
- All text lives in one translations object in `main.js`. The only text allowed directly in the HTML is the logo.
- The toggle saves the choice in `localStorage` and updates `<html lang>`.

## Placeholders

Everything Samuel will replace lives in one object (e.g. `const SITE = {...}` in `main.js`), so he never has to hunt through the HTML. Keep placeholders obvious and easy to swap. Still **PENDING**:

- Photo: neutral shape with initials "SD" until it arrives.
- Links: Upwork, GitHub, LinkedIn, email (use `#` or an example `mailto:` marked TODO).
- The 3 projects (type, title, description, image, link).
- Real metrics (years of experience, projects, Upwork rating).

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
- Lorem ipsum is allowed only as temporary placeholder copy in the MVP (Samuel's request). It lives in `main.js` (`LOREM`), the real labels (nav, buttons, section names, service and step names) are already final, and the lorem must be replaced with real text before launch. Don't write new lorem ipsum elsewhere.
- No extra pages. It is one page.
- No fixed text in the HTML outside the translations object (except the logo).

## Git

- The repo uses git. Make small, descriptive commits in English, and only when Samuel asks.
- Commit the compiled `assets/tailwind.css` along with the source changes that produced it.

## Deliverables

- Organized code, commented where it isn't obvious.
- A short `README` covering: how to open locally, how to rebuild the CSS, where to change the photo, links and projects, and how to publish on Vercel or Netlify.
