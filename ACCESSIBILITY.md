# Accessibility checklist (WCAG 2.2 Level AA)

Target: **WCAG 2.2 Level AA**. This means every Level A and Level AA success criterion (SC) of WCAG 2.2.
WCAG 2.2 keeps all 2.0/2.1 criteria except 4.1.1 Parsing (removed) and adds nine; four of them are AA
(2.4.11, 2.5.7, 2.5.8, 3.3.8). So a page that passes 2.2 AA also passes 2.1 AA, which is what EN 301 549
and the European Accessibility Act still point to.

How to read the marks:

- `[x]` passes (checked in the code, or measured in the browser, see "Tested" below).
- `[ ]` still needs a manual test that a tool cannot do (screen reader, real keyboard use, real devices).

Status date: 2026-10-15.

## Fixed

- Form fields: focus now uses the same global 3px ring as every other control, instead of only changing the border to orange.
- Hero at 320px: the grid column of the hero mock was 312px wide inside a 280px container, so the page scrolled sideways by 12px (1.4.10 Reflow). Fixed with `min-w-0` on the two hero columns.
- EN/PT options are 44x39px (were 44x28px).
- Language change (updated 2026-10-15): each language is now its own page (`/` and `/pt/`), so EN/PT are links and choosing one opens the other page, which screen readers announce like any new page (title and `lang`). The old `role="status"` announcement was removed with the in-place switch.
- While the opening animation covers the page, `<main>` itself is no longer `inert` (only its children), so tools that read the page meanwhile still find the main landmark. PageSpeed reported "Document does not have a main landmark"; it could not be reproduced locally (Lighthouse 13.5, accessibility 100, even with real throttling), so this is a precaution. Re-run PageSpeed on the deployed URL.
- Windows high contrast (`forced-colors`): the selected chip and the selected language use system colors, so the state stays visible.

Decided to keep as is: the hover/focus colors of the contact icons are the official brand colors (Samuel prefers them). The WhatsApp green is 1.8:1 on cream, below the 3:1 of 1.4.11. The icons keep their 2px border and the 3px focus ring, so the control is still visible; only the icon color is weak on hover.

Not a problem after checking: `hover:text-orange-deep` is only used on cream (the project card and the form panel are cream even inside sand sections), where it has 4.64:1.

## Tested (2026-10-15, Playwright and axe-core 4.10.2)

- After the font change (Hind), the text written into the HTML and the `/pt/` page: axe **0 violations** on `/` at 1280px and on `/pt/` at 320px, and no horizontal scroll on `/pt/` at 320px (the longer Portuguese text).

- axe with the WCAG 2.0/2.1/2.2 A and AA tags plus best practices: **0 violations** in PT (project expanded), EN, and EN on a 390px screen with the mobile menu open.
- Reflow: no horizontal scroll at 320, 360, 400 and 768px.
- Text spacing (line height 1.5, letter 0.12em, word 0.16em, paragraph 2em): no horizontal scroll and no clipped text at 320 and 1280px.
- Target size: every link, button, field and chip is at least 24x24px.
- Focus not obscured: tabbing through the whole page at 1280px, no focused element sits behind the sticky header (the skip link shows above it on purpose).
- Reduced motion: no intro, the three rings show their final numbers (92, 100, 100), all four process boxes are visible.

## Deferred

The contact form is not finished (Samuel will build it later), so every form item below (1.3.1 labels, 1.3.4, 3.3.1 to 3.3.4, 3.3.7, 4.1.3 status) must be tested again when it is done.

## 1. Perceivable

### Text alternatives and media
- [x] 1.1.1 Non-text content: decorative SVGs have `aria-hidden="true"`, the hero mock has `role="img"` with a translated `aria-label`, the rings have `sr-only` text.
- [ ] 1.1.1 The real photo (About) and project images need `alt` when they arrive (SITE placeholders).
- [x] 1.2.x Time-based media: no video or audio on the page. Re-check if a project adds a demo video (captions, 1.2.2).

### Adaptable
- [x] 1.3.1 Info and relationships: `<header>`, `<nav>`, `<main>`, `<footer>`, one `<h1>`, `<h2>` per section, labels tied with `for`/`id`, `<fieldset>` and `<legend>` for the radio chips, `<dl>` for project details.
- [x] 1.3.1 Heading outline: axe reports no skipped levels.
- [x] 1.3.2 Meaningful sequence: DOM order matches the visual order (the How it works boxes are CSS-positioned, check on mobile).
- [x] 1.3.4 Identify input purpose: `autocomplete="name"` and `autocomplete="email"` on the form.
- [x] 1.3.5/1.3.3 Instructions do not rely on shape, color or position only.

### Distinguishable
- [x] 1.4.1 Use of color: errors have text, not only color. Selected chip changes fill and text, not hue only.
- [x] 1.4.3 Contrast (text, 4.5:1; large text 3:1), measured on the palette:
  - ink on cream/sand 12.9 to 15:1, ink-soft on cream 6.5:1, on sand 5.5:1, on linen 5.9:1
  - cream-muted on ink 8.8:1, on ink-raised 7.2:1
  - orange-deep on cream 4.64:1; cream on orange-deep 4.64:1
  - cream on orange 3.44:1 passes only as large text: button labels must stay bold and at least 1.2rem (about 19px)
  - score-ink on score-soft 5.45:1
- [x] 1.4.3 axe finds no contrast problems on the real page. Hover states are not covered by axe: check them by hand.
- [ ] 1.4.4 Resize text: zoom to 200% (and text-only zoom in Firefox) with no loss of content. Reflow at 320px already passes, which is the same as 400% zoom.
- [ ] 1.4.5 Images of text: none, the logo is text.
- [x] 1.4.10 Reflow: no horizontal scroll at 320px (fixed, see above).
- [x] 1.4.11 Non-text contrast (3:1): ink borders on fields and chips pass (15:1). Decorative hairlines (`line`, 1.65:1) are not needed to understand the UI. The ring is decorative and the number carries the value.
- [x] 1.4.12 Text spacing: tested, nothing is clipped.
- [ ] 1.4.13 Content on hover or focus: the page has no tooltips. The social-link grow on hover must not hide neighbors.

## 2. Operable

### Keyboard
- [ ] 2.1.1 Keyboard: do the whole page with Tab, Shift+Tab, Enter, Space and Escape only (menu, EN/PT, project toggle, chips, form, send).
- [x] 2.1.2 No keyboard trap: the mobile menu is not modal; Escape closes it and returns focus to the button.
- [x] 2.1.4 Character key shortcuts: none.

### Enough time and seizures
- [x] 2.2.1 Timing adjustable: no time limits.
- [x] 2.2.2 Pause, stop, hide: the opening screen is a loading state (plays once per tab, never with reduced motion, content stays `inert` and hidden from screen readers only while it covers the page). Nothing else loops.
- [x] 2.3.1 Three flashes: nothing flashes.

### Navigable
- [x] 2.4.1 Bypass blocks: skip link `#main`, and the smooth scroll moves focus to the target by hand.
- [x] 2.4.2 Page titled: each language page has its own `<title>`, written by the build.
- [ ] 2.4.3 Focus order: Tab order follows the visual order; closed mobile menu is out of the order (`visibility: hidden`); the intro and the honeypot are out too.
- [x] 2.4.4 Link purpose: links read well alone. Icon-only links have `aria-label`.
- [ ] 2.4.4 Placeholder `href="#"` links (social, project) must be replaced before launch.
- [x] 2.4.5 Multiple ways: nav, footer menu. One page, so this is covered.
- [x] 2.4.6 Headings and labels are descriptive.
- [x] 2.4.7 Focus visible: global 3px ink outline, amber on dark sections.
- [x] **2.4.11 (new) Focus not obscured**: tested at 1280px, none is behind the sticky header. Repeat once at 200% zoom on a real browser.

### Input modalities
- [x] 2.5.1 Pointer gestures: no multi-point or path gestures.
- [x] 2.5.2 Pointer cancellation: only native `click`.
- [ ] 2.5.3 Label in name: visible text of buttons and links appears in the accessible name. The EN/PT links have no `aria-label`, so their name is the visible "EN"/"PT" (the group is labelled "Language"). Check the project toggle.
- [x] 2.5.4 Motion actuation: none.
- [x] **2.5.7 (new) Dragging movements**: nothing needs dragging.
- [x] **2.5.8 (new) Target size (minimum 24x24px)**: measured, all targets pass.

## 3. Understandable

### Readable
- [x] 3.1.1 Language of page: `lang="en"` on `/`, `lang="pt-BR"` on `/pt/`. The EN and PT links carry their own `lang` and `hreflang`.
- [ ] 3.1.2 Language of parts: any English term inside the PT text (for example "front-end", stack names) is fine as a proper name; check the longer ones.

### Predictable
- [x] 3.2.1 On focus: nothing changes on focus.
- [x] 3.2.2 On input: the EN/PT toggle is a pair of links (a click opens the other page, which is expected of a link), the radio chips only select.
- [x] 3.2.3 Consistent navigation, 3.2.4 consistent identification: header and footer are the same everywhere (one page).
- [x] **3.2.6 (new, A) Consistent help**: the contact link is in the header and the footer in the same place. Nothing else to do.

### Input assistance
- [x] 3.3.1 Error identification: text message per field, `aria-invalid`, `aria-describedby`, focus moves to the first invalid field.
- [x] 3.3.2 Labels or instructions: visible labels, hint for the message.
- [ ] 3.3.1 Test with a screen reader that the error text is read when focus lands on the field, and that messages follow EN/PT.
- [x] 3.3.3 Error suggestion: messages say what is wrong (check wording).
- [x] 3.3.4 Error prevention: not required (no legal or financial data).
- [x] **3.3.7 (new, A) Redundant entry**: the user never types the same data twice.
- [x] **3.3.8 (new) Accessible authentication**: no login on the site.

## 4. Robust

- [x] ~~4.1.1 Parsing~~ was removed from WCAG 2.2. Still validate the HTML (W3C validator) for duplicate ids.
- [x] 4.1.2 Name, role, value: `aria-expanded` and `aria-controls` on menu and project toggles, `aria-current="true"` on the EN/PT link of the current page.
- [ ] 4.1.2 The project toggle sits inside an `<h3>` and its card has an `aria-hidden` visual cue. Confirm a screen reader announces "button, collapsed" with the title.
- [x] 4.1.3 Status messages: `role="status"` on the form status.
- [x] 4.1.3 The EN/PT change opens a new page, announced by the screen reader itself (see "Fixed").

## Motion and preferences (not a separate SC, but the project rule)

- [x] `prefers-reduced-motion`: GSAP, counters, intro, builds and transitions are off or near zero.
- [x] Tested with reduced motion on: all content appears (see "Tested").
- [ ] `forced-colors` (Windows high contrast): buttons, chips and focus rings stay visible. Selected chip and language use system colors in forced colors mode (added). Test it once in Windows or with the DevTools emulation.
- [ ] Dark mode is not offered, so `prefers-color-scheme` is not needed.

## How to test (in this order)

1. **Automated** (finds about 30 to 40% of the problems): Lighthouse accessibility score, then axe DevTools on the deployed URL, in EN and in PT, with the mobile menu open and a project expanded.
2. **Keyboard only**: the full path from the skip link to the Send button. Watch the focus ring in every section and every state.
3. **Zoom and reflow**: 200% zoom, 320px width, text spacing bookmarklet.
4. **Screen reader**: NVDA with Firefox or Chrome on Windows, or Orca on Linux, or VoiceOver on a phone. Go through headings (H key), landmarks, links list, the form and the project toggle.
5. **Reduced motion and forced colors**: switch both in the OS or in DevTools (Rendering tab).
6. **Update `SITE.scores`** only after a new Lighthouse run on the deployed URL (see CLAUDE.md).

## Sources

- W3C, [What's new in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- W3C, [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- European Commission, [Accessibility in the Europa Web Guide](https://commission.europa.eu/resources/europa-web-guide/design-content-and-development/accessibility/what-accessibility_it) (EN 301 549 points to WCAG 2.1 AA; 2.2 criteria are still voluntary)
