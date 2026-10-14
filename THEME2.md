# Theme 2: Cyberpunk Newspaper Editorial

## Role

Act as a senior creative frontend engineer, UI/UX designer, and motion designer. Implement a second, visually distinct theme for the existing developer portfolio project.

This is **Theme 2 of the same portfolio**, not a replacement for Theme 1. It must live in a separate path and must not modify, break, or overwrite Theme 1.

Before coding, inspect the existing repository, identify the framework, installed dependencies, design conventions, animation setup, and the exact location where Theme 2 should be implemented. Reuse existing infrastructure where appropriate without coupling the two themes together.

Do not ask unnecessary questions if the repository already provides the answers. Make sensible implementation decisions and proceed.

## 1. Creative Direction

Combine three design styles:

1. **Newspaper / Print Editorial:** vintage newspaper columns, mastheads, issue numbers, oversized headlines, fine rules, newsprint texture, small captions, editorial grids, and black-and-white imagery.
2. **Luxury Editorial:** refined typography, intentional asymmetry, generous whitespace, sharp rectangular edges, carefully composed layouts, and slow cinematic transitions.
3. **Cyberpunk:** selective neon cyan, electric magenta, digital interference, scan lines, terminal metadata, subtle glitch effects, futuristic labels, and dark contrasting sections.

The result should look like an independent technology newspaper from a futuristic city, designed by a luxury magazine art director.

The newspaper aesthetic must remain dominant. Cyberpunk elements should appear as accents, not overwhelm the page.

Avoid generic cyberpunk clichés such as excessive glowing borders, full-page neon gradients, constant glitching, and random futuristic decorations.

## 2. Design Tokens

Create a dedicated Theme 2 design-token system. Do not modify Theme 1 tokens or global styling.

### Color palette

- Newsprint background: `#F3EFE5`
- Paper highlight: `#FAF8F1`
- Main ink: `#191A19`
- Muted ink: `#77756F`
- Editorial rule: `#A7A196`
- Neon cyan: `#00E5FF`
- Electric magenta: `#FF3CAC`
- Acid yellow: `#D7FF3F`
- Dark edition background: `#111315`
- Dark edition text: `#F3EFE5`

Use newsprint and ink for most of the interface. Use cyan, magenta, and acid yellow sparingly for labels, underlines, active states, small markers, and selected interactive elements.

Neon should feel like digital ink printed over an analog newspaper.

### Typography

Use three complementary typography roles:

- **Editorial headlines:** Playfair Display or another existing high-contrast serif.
- **Body and interface:** Inter.
- **Technical metadata:** JetBrains Mono or an equivalent monospace font.

Typography should create a strong hierarchy between huge headlines, compact newspaper captions, readable body copy, and tiny technical labels.

Use italic serif words selectively for emphasis. Use uppercase, tracked monospace labels for issue numbers, project categories, timestamps, and technical details.

### Layout rules

- Sharp rectangular corners.
- Thin editorial rules and dividers.
- Asymmetric 12-column editorial grid on desktop.
- Newspaper-like columns and carefully controlled text widths.
- Large headlines that break across multiple lines.
- Generous whitespace balanced by dense pockets of editorial information.
- Occasional full-width dark sections.
- Subtle paper grain and ink-like details.

Do not apply rounded-card styling from Theme 1.

## 3. Theme Isolation

This requirement is critical.

- Implement Theme 2 only in its designated path.
- Preserve Theme 1 components, styles, data, and behavior.
- Avoid global CSS selectors that accidentally affect Theme 1.
- Use scoped styles, CSS Modules, or a dedicated theme wrapper with namespaced classes.
- Prefix theme-specific components and utilities with `Theme2` where appropriate.
- Reuse shared utilities only when they are genuinely theme-independent.
- Do not duplicate dependencies that are already installed.
- Do not create a second application unless the existing architecture specifically requires it.
- Do not modify the main portfolio routing or navigation in a way that breaks Theme 1.

If a theme switcher already exists, integrate Theme 2 into it. Otherwise, make Theme 2 independently accessible through its assigned route or path without changing the existing entry point.

## 4. Page Structure

Build a complete developer portfolio, not just a landing-page mockup.

### A. Newspaper Masthead

Create a distinctive masthead inspired by an independent technology newspaper.

Include:
- Newspaper-style title: `THE DIGITAL EDITION`
- Edition label: `INDEPENDENT DEVELOPER JOURNAL`
- Issue number and year.
- A thin rule separating the masthead from the navigation.
- Compact navigation for Work, About, Stack, and Contact.
- A small status indicator such as `AVAILABLE FOR SELECT PROJECTS`.

Use typography and layout, not a large logo graphic, as the main visual identity.

### B. Hero: Front Page

Make this section feel like the front page of a premium newspaper reporting on the future of software.

Main headline:

`CODE. CRAFT. FUTURE.`

Supporting headline:

`Building digital experiences for a world that never stands still.`

Description:

`I'm a software developer focused on web and mobile experiences, thoughtful interfaces, and practical technology that solves real problems.`

Include:
- An oversized editorial headline.
- A compact author/byline block.
- A featured visual resembling a futuristic newspaper cover or printed technical report.
- A small terminal-style information panel.
- Fine vertical and horizontal rules.
- A cyan underline or magenta annotation used sparingly.
- A clear `EXPLORE THE STORIES` link that scrolls to the projects section.
- A small scroll indicator.

Use CSS-generated compositions, inline SVG, and typography wherever possible. Avoid relying on random stock images to create the design.

### C. Featured Projects: The Archive

Present projects as featured stories in a technology publication.

Use these placeholder projects:

**01. CloudFit**
- Category: MOBILE / WELLNESS
- Description: A wellness application combining health insights, nutrition tracking, and AI-powered coaching.
- Technologies: React Native, TypeScript, REST APIs.
- Visual direction: Monochrome health dashboard with selective cyan data highlights.

**02. Radio Buddy**
- Category: WEB / INTERACTIVE
- Description: A playful radio discovery experience with accessible controls and a distinctive interface.
- Technologies: Next.js, Tailwind CSS, TypeScript.
- Visual direction: Newspaper-style radio listings with neon frequency markers.

**03. Invite Studio**
- Category: WEB / CREATIVE TOOLS
- Description: A customizable digital invitation platform for creating event pages.
- Technologies: Next.js, Prisma, MySQL.
- Visual direction: Refined print layouts mixed with technical interface details.

**04. AI Food Journal**
- Category: AI / NUTRITION
- Description: An AI-assisted nutrition experience featuring barcode scanning, meal-photo analysis, and conversational interactions.
- Technologies: React Native, API Integration, AI.
- Visual direction: Editorial food photography treatment with monochrome imagery and small neon annotations.

These are dummy portfolio entries. Keep all project content in a centralized data file. Do not invent client testimonials, results, awards, or links to nonexistent live projects.

Project layout:
- Alternate between large featured stories and smaller editorial entries.
- Use image or interface previews where appropriate.
- Include project number, category, title, description, technology metadata, and a project link.
- Separate entries with fine rules rather than rounded cards.
- Use grayscale image treatments with slow color reveals on hover when imagery is available.
- Make hover effects restrained and intentional.

### D. About: The Byline

Headline:

`BEHIND THE CODE`

Write a concise developer introduction describing a software developer with 6+ years of experience building web and mobile products.

Include:
- Frontend and mobile development.
- API integrations.
- Interface implementation.
- Production application development.

Use a newspaper byline layout, oversized drop cap, editorial text columns, and a small profile or abstract visual area.

Do not invent employers or personal achievements.

### E. Skills: Technical Index

Present skills like an organized index in a technology publication.

Frontend:
- React
- Next.js
- TypeScript
- JavaScript
- Tailwind CSS
- HTML and CSS

Mobile:
- React Native
- Expo

Backend and Tools:
- REST APIs
- Node.js
- Prisma
- MySQL
- Git

Use typography, grid alignment, separators, and small monospace category labels rather than generic pill badges.

Introduce subtle scroll reveals as the categories enter the viewport.

### F. Dark Cyberpunk Interlude

Create one visually striking dark section between the main editorial sections and the contact area.

Background: `#111315`

Text: `#F3EFE5`

Accents: cyan and magenta.

Include:
- An oversized statement such as `THE FUTURE IS BUILT, NOT PREDICTED.`
- Fine grid lines.
- A subtle animated scan line or data-like visual.
- Small terminal-inspired metadata.
- A restrained glitch or chromatic shift on selected decorative text.
- Layered parallax elements.

This should provide a strong visual contrast to the warm paper sections without turning the entire website into a dark theme.

Keep the effect tasteful, readable, and inexpensive to render.

### G. Contact: The Last Edition

Headline:

`HAVE A STORY TO BUILD?`

Supporting text:

`Let's make something useful, thoughtful, and worth sharing.`

Include:
- A prominent contact CTA.
- Email placeholder.
- GitHub placeholder link.
- LinkedIn placeholder link.
- A newspaper-style footer with copyright and edition details.

Use a final editorial rule, one small neon detail, and a cinematic exit animation.

## 5. Smooth Scrolling and Parallax

This is a core feature. Do not omit it.

Use the project's existing animation infrastructure if one exists. Otherwise, use GSAP with ScrollTrigger and optionally Lenis for smooth scrolling.

Implement:

### Layered hero parallax
- Background grid and paper details move slowly.
- Main editorial visual moves at a different scroll speed.
- Small technical annotations move at a slightly different depth.
- Headline lines reveal or shift subtly as the page scrolls.

### Editorial image parallax
- Large project visuals move vertically at a slower rate than surrounding content.
- Use clipped image containers so images move within their frames.
- Combine restrained scale changes with grayscale-to-color transitions.
- Keep captions and surrounding layout stable.

### Scroll-linked headlines
- Reveal large headlines using clipping masks or line-by-line transitions.
- Animate selected underlines and editorial rules as they enter the viewport.
- Use small, purposeful shifts instead of excessive motion.

### Horizontal editorial feature
If appropriate to the existing layout, create one pinned horizontal project showcase on desktop. Tie its horizontal movement to vertical scroll progress.

Requirements:
- Keep the animation bounded to the project section.
- Release normal scrolling naturally after the final item.
- Use a normal vertical layout or simplified animation on mobile.
- Avoid horizontal page overflow.
- Do not force horizontal scrolling on touch devices if it harms usability.

### Background depth
- Move decorative grid or scan-line layers subtly.
- Use CSS transforms rather than expensive layout-changing animations.
- Keep background movement slow and unobtrusive.

### Smooth-scroll engineering
- Integrate Lenis with ScrollTrigger correctly if Lenis is installed.
- Avoid conflicting scroll listeners or multiple animation loops.
- Scope and clean up all animations on component unmount.
- Prevent duplicate ScrollTriggers during React Strict Mode.
- Recalculate animation positions after layout changes.
- Use responsive animation conditions.
- Ensure normal browser navigation and anchor links