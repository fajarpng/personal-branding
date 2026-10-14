# Build a Creative Developer Portfolio

## Role

Act as a senior frontend engineer, creative developer, and award-winning web designer. Build a polished, distinctive developer portfolio with playful geometric visuals, hand-drawn details, and advanced scroll-driven animations.

Do not create a generic portfolio template. The website should feel like a carefully art-directed interactive experience while remaining professional, readable, fast, and responsive.

## 1. Tech Stack

Use:
- Next.js with App Router
- TypeScript
- Tailwind CSS
- GSAP with ScrollTrigger for advanced scroll animations
- Lenis for optional smooth scrolling, integrated correctly with GSAP if used
- Lucide React for icons

Use the latest stable compatible package versions available in the project environment.

Requirements:
- No backend or database.
- Use dummy portfolio data stored locally.
- No authentication or unnecessary dependencies.
- Use Server Components by default and Client Components only where necessary.
- Keep components reusable and the project structure maintainable.
- No semicolons in TypeScript or JavaScript.
- Use semantic HTML and accessible interactive elements.

## 2. Design Direction

Combine three visual influences into one coherent design.

### A. Playful Geometric

Use a Memphis-inspired visual language with a professional, modern execution.

Colors:
- Background: #FFFDF5
- Foreground: #1E293B
- Muted background: #F1F5F9
- Primary accent: #8B5CF6
- Pink accent: #F472B6
- Yellow accent: #FBBF24
- Mint accent: #34D399
- Borders: #1E293B

Visual elements:
- Geometric shapes, circles, stars, triangles, squiggles, and dotted patterns.
- Thick dark borders.
- Hard, offset shadows without blur.
- Sticker-like cards and colorful labels.
- Occasional asymmetric corner radii.
- Hand-drawn underlines, arrows, and annotations.
- Small decorative elements that react to scrolling or pointer movement.

Use Outfit for headings and Plus Jakarta Sans for body text.

### B. Handwritten Details

Incorporate handwritten-style annotations to give the site personality:
- Scribbled underlines beneath important words.
- Small handwritten notes beside project cards.
- Hand-drawn arrows pointing toward interactive elements.
- Small annotations such as "made with care", "a little side project", and "hover me".
- SVG-based doodles and squiggles.

Keep these elements decorative and restrained. Main content must remain easy to read.

### C. Creative Developer Portfolio

Add a subtle developer identity:
- Terminal-inspired cards.
- Small code snippets.
- Technology labels.
- Browser-window-style project previews.
- Monospace metadata and project numbers.
- Minimal technical details that complement the playful design.

Avoid making the entire site look like a terminal or a standard dark developer portfolio.

## 3. Website Structure

Build a complete single-page portfolio with the following sections.

### Section 1: Navigation

Create a compact, clean navigation bar.

Include:
- A simple text-based logo: DEV/01
- Work
- About
- Skills
- Contact
- A prominent "Hire Me ↗" button

The navigation should remain accessible and work correctly on mobile.

Use smooth scrolling for anchor navigation where appropriate.

### Section 2: Hero

This is the most important section. Give it a strong visual identity.

Layout:
- Two-column layout on desktop.
- Text on the left.
- Layered, animated visual composition on the right.
- Stacked layout on mobile.

Dummy content:

Small status label:
"AVAILABLE FOR SELECT PROJECTS"

Main headline:
"I BUILD DIGITAL THINGS."

Style the words with contrasting typography, colors, and a hand-drawn underline.

Short description:
"I'm a software developer who turns ideas into useful, thoughtful digital experiences across web and mobile."

Primary CTA:
"Explore My Work ↗"

Secondary CTA:
"Let's Talk"

Hero illustration:
- A floating browser window.
- A code snippet card.
- A large yellow circle.
- A purple geometric shape.
- Pink stars and mint squiggles.
- Overlapping layers with different depths.

Use original CSS and inline SVG shapes instead of requiring stock images.

The hero should feel lively without overwhelming the headline.

### Section 3: Selected Projects

Create an engaging project showcase with advanced scroll animation.

Section heading:
"SELECTED WORK"

Supporting text:
"A few things I've built, broken, fixed, and shipped."

Use these dummy projects:

1. CloudFit
   - Category: Mobile App
   - Description: A wellness application that brings health insights, nutrition tracking, and AI-powered coaching into one experience.
   - Technologies: React Native, TypeScript, REST API
   - Visual direction: Green wellness dashboard with layered UI previews.

2. Radio Buddy
   - Category: Web Application
   - Description: A playful radio discovery experience built around accessible controls and a distinctive visual identity.
   - Technologies: Next.js, Tailwind CSS, TypeScript
   - Visual direction: Bright yellow interface with bold black borders and neo-brutalist cards.

3. Invite Studio
   - Category: Web Platform
   - Description: A customizable digital invitation platform designed to make beautiful event pages easier to create.
   - Technologies: Next.js, Prisma, MySQL
   - Visual direction: Elegant invitation preview mixed with modern interface elements.

4. AI Food Journal
   - Category: AI Integration
   - Description: A nutrition experience exploring barcode scanning, meal-photo analysis, and conversational AI.
   - Technologies: React Native, API Integration, AI
   - Visual direction: Colorful food-tracking interface.

These are placeholder descriptions, not verified public case studies. Keep project content in a centralized data file so it can be replaced easily.

Project card requirements:
- Large visual preview area.
- Project number.
- Title and category.
- Short description.
- Technology badges.
- "View Project ↗" link.
- Distinct color treatment for each project.
- Hover states with subtle movement and hard shadows.

Use CSS-generated mock interfaces or original HTML previews instead of random stock imagery.

### Section 4: About Me

Heading:
"THE PERSON BEHIND THE PIXELS."

Description:
"I'm a software developer focused on building practical, polished digital products. I enjoy solving frontend challenges, connecting interfaces to APIs, and turning complicated ideas into experiences that feel simple."

Add a few playful facts:
- 6+ years of development experience
- Web & mobile development
- UI implementation and API integration
- Always experimenting with new ideas

Present these as small, visually interesting cards or annotations.

Do not invent employers, client names, awards, testimonials, or professional achievements.

### Section 5: Skills

Heading:
"MY DIGITAL TOOLBOX"

Group the dummy skills into categories.

Frontend:
- React
- Next.js
- TypeScript
- JavaScript
- Tailwind CSS
- HTML & CSS

Mobile:
- React Native
- Expo

Backend & Tools:
- REST APIs
- Node.js
- Prisma
- MySQL
- Git

Use colorful sticker-like labels or cards.

Add staggered reveal animations when the section enters the viewport.

Do not add percentage-based skill bars or fabricated proficiency scores.

### Section 6: Contact

Make the final section memorable.

Large headline:
"HAVE A GOOD IDEA?"

Supporting text:
"Let's turn it into something people love to use."

Include:
- A prominent "Hire Me ↗" CTA
- Email placeholder
- GitHub link
- LinkedIn link

Use placeholder URLs and email addresses that are easy to replace.

Add a few animated geometric decorations and a strong visual ending.

### Section 7: Footer

Include:
- DEV/01
- Copyright with the current year
- "Designed and built with curiosity."
- Back-to-top link

Keep the footer minimal.

## 4. Scroll Animation Direction

Scroll-driven animation is a defining feature of this portfolio.

Use GSAP ScrollTrigger for complex animations and CSS for simple interactions.

### Hero Parallax

Create layered movement:
- Background geometric shapes move slowly.
- Code cards move at a different speed.
- Foreground decorations move slightly faster.
- Headline elements enter with a subtle stagger.
- Decorative elements rotate slightly as the user scrolls.

Use restrained movement and avoid excessive bouncing.

### Pinned Horizontal Project Showcase

Create a desktop project section that stays pinned while the project cards travel horizontally as the user scrolls vertically.

Requirements:
- Horizontal movement is tied to scroll progress.
- Project cards should have enough width to feel like individual showcases.
- Each card has a unique visual composition.
- The animation must finish naturally and release the page back into normal scrolling.
- Avoid fake scroll hijacking.
- On mobile, use a normal vertical project list or a simplified interaction.
- Recalculate ScrollTrigger positions when layout changes.
- Ensure the animation does not cause horizontal overflow across the entire page.

### Scroll-Triggered Typography

Use selected headings as visual transitions:
- Reveal text using clipping masks.
- Animate words or lines into view.
- Add subtle scale changes.
- Use hand-drawn SVG underlines that animate into place.

Keep text legible throughout the animation.

### Staggered Reveals

Animate project details, skill cards, and about cards when they enter the viewport.

Use subtle opacity, translation, and scale transitions.

Avoid animating every paragraph and decorative element independently.

### Microinteractions

Add:
- Button hover lift with hard-shadow changes.
- Slight project-card rotation on hover.
- Animated arrows.
- Subtle icon wiggles.
- Optional pointer-responsive movement on selected hero decorations.

Respect reduced-motion preferences.

## 5. Animation Engineering Requirements

- Register GSAP plugins correctly.
- Use the recommended React integration, such as `@gsap/react` and `useGSAP`, where appropriate.
- Scope animations to their component containers.
- Clean up animations and ScrollTriggers correctly on unmount.
- Avoid duplicate ScrollTriggers during development and React Strict Mode.
- Use `gsap.matchMedia()` or equivalent responsive logic for desktop-only animations.
- Recalculate layout-dependent animation values appropriately.
- Avoid unnecessary state updates during scroll.
- Keep animations smooth and avoid layout thrashing.
- Ensure the page remains usable if JavaScript animations fail.
- Avoid smooth-scroll conflicts with browser navigation and ScrollTrigger.
- Use stable layouts to prevent content jumps.

## 6. Responsive Design

Desktop:
- Spacious composition.
- Strong typography.
- Layered hero artwork.
- Pinned horizontal project showcase.

Tablet:
- Reduce decorative density.
- Adjust heading sizes.
- Simplify complex animation where necessary.

Mobile:
- Single-column layout.
- Readable typography and comfortable spacing.
- Full-width project cards.
- Minimum 44px interactive targets.
- No page-wide horizontal overflow.
- Simplify or disable pinned animations that impair usability.
- Reduce hard-shadow offsets.
- Hide decorative shapes when they interfere with content.

## 7. Accessibility and Performance

- Use semantic headings and landmarks.
- Provide visible keyboard focus states.
- Maintain readable contrast.
- Add appropriate labels to icon-only controls.
- Respect `prefers-reduced-motion`.
- Ensure content is visible even when animation is disabled.
- Optimize fonts and avoid unnecessary external assets.
- Use Next.js metadata for page title and description.
- Add Open Graph metadata with suitable placeholder content.
- Avoid unnecessary client-side JavaScript.
- Do not sacrifice usability for animation.

## 8. Code Organization

Keep the implementation organized and easy to maintain.

Suggested structure:

- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `components/navigation.tsx`
- `components/hero-section.tsx`
- `components/projects-section.tsx`
- `components/project-card.tsx`
- `components/about-section.tsx`
- `components/skills-section.tsx`
- `components/contact-section.tsx`
- `components/footer.tsx`
- `components/animations/`
- `data/projects.ts`
- `data/skills.ts`
- `lib/animations.ts`

Adapt the structure to the existing project rather than blindly duplicating files.

Centralize design tokens and reusable animation utilities. Keep components focused and avoid creating abstractions that add complexity without providing value.

## 9. Implementation Workflow

1. Inspect the existing repository and package configuration before making changes.
2. Identify the installed Next.js and Tailwind versions.
3. Create a short implementation plan.
4. Implement the complete portfolio, including all sections.
5. Install only the necessary dependencies.
6. Run the available lint, type-check, and build commands.
7. Fix errors caused by the implementation.
8. Check mobile responsiveness and reduced-motion behavior.
9. Summarize what was implemented and list the files changed.

Do not stop after creating a wireframe or a static hero section. Implement the complete working page.

Do not replace existing project configuration unnecessarily.

## 10. Quality Bar

The final result should feel like a creative developer's portfolio that could stand out in a frontend developer job application.

Priorities, in order:
1. Strong visual design.
2. Memorable but controlled scroll animations.
3. Excellent project presentation.
4. Responsive behavior.
5. Maintainable implementation.
6. Performance and accessibility.

Avoid:
- Generic SaaS landing-page layouts.
- Excessive gradients and glassmorphism.
- Random stock photos.
- Emoji used as primary design assets.
- Constant floating animations.
- Excessive rounded cards with no visual variation.
- Fake statistics, testimonials, or clients.
- Animations that make reading difficult.
- Overengineering a portfolio that does not need a backend.

Start by inspecting the repository, then implement the complete portfolio.