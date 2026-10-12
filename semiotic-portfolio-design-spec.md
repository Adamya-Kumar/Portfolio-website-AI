# Semiotic Reference Audit → Adamya's Portfolio Design Specification

**Reference:** https://semiotic-case-study.webflow.io/  
**Secondary page:** https://semiotic-case-study.webflow.io/products  
**Purpose:** Rebuild the reference's design language and interaction patterns for a personal Backend / Generative AI portfolio, using original portfolio content and original assets.

## 1. Scope and confidence

This audit inspects the published homepage and products page, the shared published CSS, the HTML structure, and referenced animation/filter libraries. It captures concrete CSS variables, font-family declarations, responsive rules, component classes, media types, and interaction patterns that are available from those resources.

Some values below are directly present in the source CSS. Font-size values reported by automated page branding extraction represent a detected desktop rendering and may vary by viewport and section. Animation timing details are included where exposed in CSS; GSAP sequences and event logic that are hidden in minified runtime bundles should be verified in a live browser before trying to reproduce them frame-for-frame.

## 2. Overall design language

- **Visual direction:** editorial, technical, intentionally sparse, futuristic without heavy sci-fi decoration.
- **Canvas:** pale grey in the default page scheme, with near-black typography and occasional dark full-width sections.
- **Accent behavior:** saturated electric blue and signal red are used as deliberate accents rather than filling every surface. Yellow and orange appear as supplementary palette tokens.
- **Typography:** oversized sans-serif display headings contrasted with monospaced body copy, navigation, captions, filters, and small uppercase labels.
- **Geometry:** square corners, thin borders, precise grid alignment, broad empty space, and strong left/right alignment.
- **Motion philosophy:** large, carefully choreographed headline and background reveals; restrained 200–800 ms interaction transitions; small state changes on hover/focus; animated looping product visuals.
- **Content style:** short technical headline, concise explanatory text, then deeper product/project detail and a direct CTA.

## 3. Typography system

### Font families found in the published CSS

| Role | Exact family label | Weights detected | Intended use |
|---|---|---:|---|
| Display / headings | `Tt Hoves Pro Subset` | 400, 500 | H1–H4, large project and section titles |
| Body / interface | `Centra Mono Subset` | 400, 500, 700 | Paragraphs, nav, captions, small headings, category labels, UI text |
| Fallback | `Arial, sans-serif` | Browser fallback | Use only when the intended font is unavailable |

The published CSS loads subset WOFF2 files and declares `font-display: swap`. Use the family names as design references, but make sure any font files used in the new portfolio are licensed for your use. If you cannot use these fonts, choose a licensed geometric sans for headings and a readable mono family such as IBM Plex Mono for body/UI text.

### Detected font sizes

| Page / element | Detected value | Implementation guidance |
|---|---:|---|
| Homepage H1 | ~93.744 px | Use a responsive `clamp()` scale rather than a fixed size |
| Homepage H2 | ~85.5 px | Large display scale; reduce sharply on smaller screens |
| Homepage body | ~18 px | Monospace body copy |
| Products page H1 | ~124.992 px | Extra-large desktop display scale; responsive wrap is essential |
| Products page H2 | ~114 px | Large section/title scale |
| Products page body | ~24 px | Large copy detected in the inner-page hero; individual cards and labels are smaller |
| Navigation | `0.75rem` / ~12 px on desktop | Uppercase, medium weight |
| Filter label | `0.75rem` / ~12 px | Uppercase, medium weight, line-height around 1.3 |
| Small mobile nav link | `0.875rem` / ~14 px | Enlarged for touch and mobile readability |

### Type behavior to reproduce

- Hero words appear split into individual runs/lines and are uncovered by animated masks.
- Use an editorial mix of very large display type and small monospaced labels.
- Use uppercase for navigation and filter labels.
- Avoid rounded or playful typefaces; the contrast comes from scale, width, spacing, and motion.
- Prevent ugly mid-word line breaks; recompose lines explicitly at mobile breakpoints.

## 4. Color system

The published CSS contains both light and dark color-scheme values. The homepage is detected in a light scheme at initial load; there is also an explicit color-scheme toggle and dark-styled content sections.

### Core tokens

| Token / role | Hex value | Suggested use in the portfolio |
|---|---|---|
| Main light canvas | `#D9D9D9` | Main light-mode background |
| Main text / black | `#151515` | Main text, dark button surfaces, logo |
| White | `#FFFFFF` / `#FFF` | Dark mode text and contrast surfaces |
| Semiotic blue | `#161AFF` | Primary kinetic accent, diagrams, focused UI details |
| Secondary blue | `#3898EC` | Secondary link / icon accent where needed |
| Dark blue | `#1317D6` | Pressed/strong blue state |
| Signal red | `#FD4B4E` | Secondary accent, hover, active/filter states, focus outline |
| Dark red | `#AB3335` | Pressed red state |
| Mid grey | `#CECECE` | Neutral hover and divider surfaces |
| Mid-dark grey | `#A2A1A1` | Muted surfaces / borders |
| Dark grey | `#5B5B5B` | Secondary neutral text or lines |
| Light black | `#242424` | Dark-mode layered surfaces |
| Mid black | `#1E1E1E` | Dark-mode alternate surface |
| Yellow | `#FDF44B` | Supplementary highlight token; use sparingly |
| Orange | `#FD8F4B` | Supplementary highlight token; use sparingly |

### Palette rules

- Keep the core UI monochrome; use one accent at a time for each interaction or illustration.
- Use blue for the visual system / kinetic background motif and red for selected, hover, or emphasis states; the published site also swaps accent priority between pages/components.
- Dark sections use near-black backgrounds with white text and retain the accent color.
- Avoid gradients as the default treatment; the reference gets impact from color blocks, contrast, and animation.
- For the new portfolio, use these values as a close reference palette, not a mandate to copy the original brand.

## 5. Spacing, geometry, and layout

- **Base spacing unit:** 4 px.
- **Corner radius:** `0px` for small, medium, and large UI radius tokens.
- **Default border / divider width:** `1px`.
- **Keyboard focus:** 2 px visible outline with 2 px offset; red is the intended accent in the global override.
- **Desktop navbar:** fixed to the top, minimum height `4.5rem` (~72 px), horizontal padding `1.25rem` (~20 px), responsive vertical padding around 16–20 px.
- **Mobile navbar:** minimum height `4rem` (~64 px).
- **Navbar grid:** three-column alignment `1fr max-content 1fr` on wide screens, with logo/navigation/actions kept aligned.
- **Hero side padding:** 20 px; top padding uses `clamp(72px, 7.031vw, 135px)` for the inner hero.
- **Product card padding:** `clamp(16px, 2.34375vw, 45px)`.
- **Product card gap:** `clamp(24px, 2.916vw, 56px)`.
- **Product heading row gap:** `clamp(16px, 2.604vw, 46px)`.
- **Product visual thumbnail:** square (`aspect-ratio: 1`), width/height `clamp(45px, 3.385vw, 65px)`.
- **Filter category gaps:** `clamp(12px, 1.25vw, 24px)`.
- **Small button bracket details:** SVG side pieces are 9 px wide and 47 px tall.
- **Mobile viewport handling:** use `100svh` for full-height navigation overlays to avoid mobile browser chrome issues.

### Grid / composition

- Hero text spans large portions of the viewport with some rows aligned to opposite sides.
- The decorative hero pattern sits behind the text and is clipped to its section.
- Product/project cards are structured, border-led modules; content alignment and whitespace matter more than rounded surfaces or shadows.
- Footer and CTA have large headings, clear grid alignment, thin rule lines, and simple navigation.

## 6. Page architecture

### Page A — Home (`/`)

1. **Fixed global navigation**
   - Brand mark and wordmark.
   - Home, Products & Services, Careers, Blog links.
   - Social links and a contact CTA on wide layouts.
   - Responsive full-height menu on mobile/tablet.
   - Color-scheme control near the nav actions.

2. **Hero**
   - Very large editorial heading with deliberately split/wrapped words.
   - Short supporting statement directly below or between headline rows.
   - Background pattern composed of animated vertical blue units.
   - Heading mask layers hide/reveal pieces of the letters during the entrance sequence.

3. **Featured product/service list**
   - Repeating project/service modules with title, concise description, visual icon/thumbnail, media illustration, and an action such as More info / Learn more / Try now.
   - Current reference content includes LikWid, GraphTally, Indexer Stake Allocation Optimizer, Dynamic Pricing Algorithm, and Holographic Homomorphic Signature Scheme.
   - Product media uses looping, muted, inline WebM video and some SVG/WebP assets.

4. **About / ecosystem section**
   - Mission statement and explanatory copy.
   - Related ecosystem/partner callouts, including The Graph Protocol, Odos, and Cambrian Network.
   - Hover treatment illuminates border details rather than lifting the card dramatically.

5. **Large dark CTA**
   - Oversized heading: “Let’s build the future together”.
   - Supporting paragraph and contact action.
   - Thin horizontal line elements animate into place.

6. **Footer**
   - Brand lockup, nav links, contact email, X/GitHub social icons, copyright.
   - Minimal styling and strong alignment; not a separate boxed card.

### Page B — Products & Services (`/products`)

1. Inner hero with oversized heading and animated pattern.
2. Featured product area.
3. Category filter form, with uppercase labels and selectable chip/radio fields.
4. Product listing where each item includes an icon/thumbnail, title, description, relevant category labels, and a detail/external link.
5. Pagination controls with custom arrow icons and state colors.
6. CTA and footer shared with the homepage.

The product filter references `@finsweet/attributes-cmsfilter@1` and the page uses Webflow CMS-style content, so the visual filtering is intended to be a real stateful feature rather than decorative chips.

## 7. Interaction and animation inventory

### A. Page loading / preloader

- A fixed, viewport-covering overlay is defined with a 5-column by 4-row grid (20 cells in the CSS grid definition).
- The cells use `transform-origin: 50%` and can scale horizontally from zero to create a tiled reveal/wipe.
- The preloader should run once on first load, then be removed/hidden without blocking navigation or causing layout shift.
- Keep it quick; provide a reduced-motion path and don't repeat it on every route unless it is an intentional transition.

### B. Custom cursor

- Cursor wrapper: fixed to all four viewport edges, centered, `pointer-events: none`, z-index `9999`.
- System cursor is hidden only at desktop widths `min-width: 992px` in the published CSS.
- Cursor visuals are hidden on smaller layouts / touch screens.
- Portfolio adaptation: optionally expand or change label when hovering projects and actionable controls, but never hide the normal cursor on touch devices. Make sure the custom cursor never covers form or text usability.

### C. Hero type reveal / masks

- Hero headings are layered with pseudo-element masks matching the canvas color.
- CSS values found include mask width `175%`, left offset `-60%`; a double variant uses `110%` width and `-5%` offset; ascender variant uses a `10%` top offset.
- Headline words/rows are split into individual wrappers and reveal in a staggered sequence.
- Some logo/brand word elements start below their clipping region (`translateY(102%)`) and are animated into view.
- Portfolio adaptation: use GSAP timelines for short staggered line reveals, not typewriter typing on every heading.

### D. Kinetic hero pattern

- Background pattern is absolutely positioned and clipped within the hero.
- Pattern is made of rows and vertical units. Units use the saturated blue token, with 2 px canvas-colored borders left/right.
- Unit width and left position transition over `0.8s` to give the composition a reactive / shifting feel.
- Portfolio adaptation: make units respond to cursor position or controlled animation; add a reduced-motion fallback and avoid triggering reflow every pointer event.

### E. Navigation

- Navbar is fixed and remains above scrolling content.
- Webflow navigation uses a `600ms` duration, with `ease-out-quint` opening and `ease-in-quint` closing settings.
- Logo mark and brand name have hover states; wordmark can reveal via a vertical mask/translation.
- Links transition color over `300ms` using `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.
- Mobile menu becomes a vertically arranged overlay at tablet breakpoints, taking approximately `100svh` and nearly the whole viewport width. The mobile menu's visual open/close states must be keyboard accessible.

### F. Theme / color-scheme toggle

- A `color-scheme-toggle_field` element exists with separate light/dark icon SVGs, a mask, and a dot.
- Dark styling is explicitly applied to major CTA/about sections, and dark token mappings are present in the CSS.
- Portfolio adaptation: make the theme switch actually update CSS variables and persist the choice if desired. Animate the mask/dot and theme colors, while preserving contrast and preventing a flash of the wrong theme during hydration.

### G. Buttons and link states

- Main buttons use separate left/right bracket SVG borders, not a thick pill background.
- Button bracket SVGs animate their color, along with inner icon colors.
- Transitions: about `300ms`, `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.
- Distinguish default, hover, and pressed/active states.
- Provide visible keyboard focus with a 2 px outline and 2 px offset.

### H. Product detail/dropdown behavior

- On smaller layouts, product descriptions can be tucked under a “new item” dropdown/summary.
- Hover or keyboard focus expands an area from `grid-template-rows: 0fr` to `1fr` over about `400ms`.
- A small accent arrow rotates `180deg` (CSS uses `-180deg`) over about `200ms`.
- Make the interaction available by click/tap as well as hover, and ensure screen readers receive expanded/collapsed state.

### I. Category filter and pagination

- Category chips are uppercase, 12 px, medium weight, and use 10 px-ish vertical / 14 px horizontal padding.
- Chip gaps are responsive; hovered and selected states modify background, label, border, and icon colors.
- Selected states are based on a real checked radio input (the source CSS targets `.w--redirected-checked`).
- Pagination buttons are 38 px high (`2.375rem`), with 12–16 px icon sizes; hover uses the signal-red token and contrasting white text.
- For the personal portfolio, apply actual filtering to project data and ensure keyboard-operable semantics; do not build non-functional filter UI.

### J. Product visuals / motion

- Product animation assets are muted, autoplaying, looping, and `playsinline`.
- Both light and dark variants exist for multiple media loops.
- Product visuals may reveal contextual detail via a tooltip button.
- Portfolio adaptation: prefer optimized muted WebM/WebP animations or lightweight CSS/Canvas where possible; lazy-load anything below the fold and provide static fallbacks.

### K. Scroll-driven section details
aslo
- The page includes GSAP 3.12.7 and ScrollTrigger 3.12.7.
- Border-line elements in the CTA have pre-animation transforms (`translateY(1rem)` and vertical scale near zero) that indicate scroll/entrance reveal choreography.
- Some long product sections include deliberate vertical offsets to create a staggered, story-like presentation. Reinterpret for case studies rather than copying hard-coded large margins.
- Prefer transform/opacity animation to animate width/height or layout properties wherever possible; the hero pattern is a deliberate exception.

## 8. Responsive behavior to implement

The original is built with Webflow breakpoints. The CSS explicitly changes interaction behavior at 992 px and 767 px, and uses `clamp()` for fluid measurements.

- **Desktop (≥ 992 px):** full nav, custom cursor may be active, large split hero, denser multi-column layouts.
- **Tablet (768–991 px):** hide custom cursor, switch to mobile-style menu where appropriate, reduce headline scale and content gaps, keep project modules readable.
- **Mobile (≤ 767 px):** no hover-only effects, full-width navigation overlay, stacked product/project cards, centered/wrapping category filters, no excessive vertical offsets, smaller display typography, videos/graphics sized to viewport width.
- Use `100svh` for overlays, images/videos with explicit aspect ratios, keyboard navigation and touch targets of comfortable size.
- Respect `prefers-reduced-motion: reduce`; switch to quick fades or static states rather than simply disabling all content.

## 9. Resource inventory observed on the reference

### Pages

- Homepage: https://semiotic-case-study.webflow.io/
- Products page: https://semiotic-case-study.webflow.io/products

### Published stylesheet

- https://cdn.prod.website-files.com/67efec141cc312ba9c0a7268/css/semiotic-case-study.shared.86f8c9dcb.min.css

### Animation / interaction libraries referenced by the page

- GSAP 3.12.7: `https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js`
- ScrollTrigger 3.12.7: `https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js`
- Finsweet CMS Filter v1: `https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js`
- Webflow's published script bundles and jQuery are also loaded by the reference.

### Example visual assets observed in source

- `indexer-product.svg`
- `GraphTally_featured.svg`
- `Dynamic-Pricing-Algorithm_featured.svg`
- `Holographic-Homomorphic-Signature-Scheme_featured.svg`
- `animation_3.webp`
- `external-link_icon.svg`
- Several `animation_*_light.webm` and `animation_*_dark.webm` loops for theme-specific product visuals.

These are useful for understanding asset types and visual density, not for reusing the reference company's logo, media, or branded assets in a personal portfolio. Create original graphics/screenshots for your own projects, and check the relevant license before using any third-party font or media.

## 10. Recommended adaptation for Adamya's portfolio

Keep the style DNA—light grey/near-black base, oversized Hoves-like display type, mono body labels, zero-radius blocks, electric accent colors, mask reveals, kinetic bars, thin border graphics—but replace all product/business content with real projects and verified details.

### Suggested homepage sections

1. **Hero:** “I build intelligent systems from backend to GenAI.” Add a short one-line profile and “Explore projects” / “Contact” CTAs. Use an original cursor-reactive kinetic pattern.
2. **Selected work:** show the Multi-Agent AI Research System, RAG project, Java/Spring Boot backend, Telegram job assistant, and other verified work. Use real screenshots, architecture diagrams, repo links, and live demos.
3. **Capability strip:** Backend Engineering / RAG / Agentic AI / LLM Integrations / APIs & Infrastructure.
4. **Project filters:** `All`, `GenAI`, `RAG`, `Agentic AI`, `Backend`, `ML`. Filtering must really work.
5. **Engineering case studies:** problem → architecture → important decisions → trade-offs → outcome → links. Do not invent metrics or production scale.
6. **About / skills:** concise technical story and verified skills, not progress bars pretending to measure proficiency.
7. **AI portfolio assistant:** optional chatbot answering from a structured, verified project/resume dataset.
8. **Recruiter email generator:** optional tool that drafts an editable email from user-provided role/company/JD, using a predefined template and only verified portfolio data. It should not send email automatically.
9. **Contact CTA + footer:** email, GitHub, LinkedIn, resume download.

### Recommended technical implementation

- Next.js + TypeScript.
- Tailwind CSS with a CSS-variable theme system.
- GSAP + ScrollTrigger for hero reveals and scroll timelines.
- Framer Motion / Motion only where component-state animation is simpler than GSAP.
- FastAPI backend for the AI assistant/email generator if needed; keep secrets server-side.
- Project data in typed JSON/TypeScript data structures at first; add a CMS only if you need non-developer editing.
- Use CSS `clamp()` for responsive type and spacing, and avoid rigid desktop-only sizing.

## 11. Build sequence for Cursor

1. Inspect the existing repo and preserve project conventions.
2. Implement CSS variables, typography, grid, buttons, navigation, and a static responsive page shell.
3. Build the hero text/mask reveal and kinetic background pattern.
4. Build project modules and real category filtering.
5. Add theme switching and mobile menu details.
6. Add scroll-triggered animation and project case-study pages.
7. Add AI assistant/email generator only after the static portfolio is polished.
8. Test mobile/tablet/desktop, reduced motion, keyboard access, loading states, and performance.

## 12. Cursor implementation prompt

> Treat this document as the visual and interaction specification for my personal portfolio. First inspect the current repository and existing project instructions. Reproduce the Semiotic reference's design language—not its branding, words, logo, or assets. Use an editorial light-grey/near-black canvas, oversized geometric sans headings, monospaced body/UI typography, square corners, thin borders, restrained electric-blue and signal-red accents, a fixed responsive navigation, mask-based headline reveals, a kinetic background pattern, deliberate hover/focus/pressed states, and scroll-driven reveals with GSAP/ScrollTrigger. Use the exact design tokens and measured values documented here as starting points, then make them responsive with `clamp()`. Convert the reference's product sections into real engineering project case studies from my verified portfolio. Use original diagrams/screenshots; do not invent projects, metrics, employment history, or production claims. Filtering, theme switching, nav, links, and all buttons must actually work. Respect reduced-motion preferences, keyboard accessibility, mobile touch behavior, and performance. Implement one phase at a time, review the result, and do not move to the next phase until the current phase is verified. Do not add the AI assistant or email generator until the main visual system and responsive portfolio are complete.

## 13. Verification checklist

- [ ] Main canvas, text, accents, and dark-section tokens match the documented palette.
- [ ] Correct type roles and responsive display type are in place.
- [ ] Navbar stays aligned while scrolling and transforms into an accessible mobile menu.
- [ ] Theme switch changes the actual theme, not just the icon.
- [ ] Hero reveal works once and doesn't leave hidden text after errors or reduced-motion settings.
- [ ] Mouse-reactive visuals are disabled or simplified for touch and reduced motion.
- [ ] Every project filter produces the correct set of cards.
- [ ] Project cards and CTAs link to verified destinations.
- [ ] Animations do not cause horizontal overflow or major layout shifts.
- [ ] Video/animation assets are optimized and lazy-loaded below the fold.
- [ ] The site remains usable with keyboard only and at narrow viewport widths.
- [ ] No reference-company logo, copy, or proprietary media is reused without permission.
