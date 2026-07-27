# Real Editable PowerPoint Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an English SEO landing page that leads with SciNest generating a real editable PPTX from user-selected materials, then proves editability, material binding, visual content, editable outline, WYSIWYG preview, local revision, and export.

**Architecture:** Add one isolated Next.js App Router page with page-specific metadata, FAQ/WebPage structured data, and a scoped CSS module. Reuse the existing SciNest product screenshots and registration flow. Add the route to the sitemap and one homepage internal link without changing the homepage information architecture.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, CSS Modules.

---

## File map

- Create `app/ai-powerpoint-generator/page.tsx`: page content, metadata, structured data, CTA links, semantic sections.
- Create `app/ai-powerpoint-generator/ai-powerpoint-generator.module.css`: responsive visual system and page-specific components.
- Modify `app/sitemap.ts`: add the new canonical route.
- Modify `app/scinest-home.tsx`: add one contextual internal link from the existing PowerPoint output section.
- Modify `app/scinest-home.module.css`: add styling for the new internal link only.

### Task 1: Build the route and SEO contract

- [ ] Create `app/ai-powerpoint-generator/page.tsx` with page metadata:
  - title: `AI PowerPoint Generator | Create Real Editable PPTX With Your Materials`
  - canonical: `/ai-powerpoint-generator`
  - description focused on real editable PPTX, source-bound content, visuals, outline editing, and WYSIWYG.
- [ ] Add WebPage, SoftwareApplication, and FAQ structured data.
- [ ] Use the existing registration URL `/login?redirect=/dashboard&intent=early-bird`.
- [ ] Reuse `/scinest/ppt-ui-en.webp` as the main product proof image.

### Task 2: Implement the visual page

- [ ] Create `app/ai-powerpoint-generator/ai-powerpoint-generator.module.css`.
- [ ] Use the existing SciNest teal palette with a darker presentation-stage visual direction.
- [ ] Implement responsive layouts for desktop, tablet, and mobile.
- [ ] Ensure buttons, comparison table, FAQ, image alt text, heading order, and focus states are accessible.

### Task 3: Add discoverability

- [ ] Add `/ai-powerpoint-generator` to `app/sitemap.ts` with weekly change frequency and priority `0.9`.
- [ ] Add one text link below the existing PowerPoint output section on the English homepage.
- [ ] Do not add a second navigation system or change unrelated homepage copy.

### Task 4: Verify

- [ ] Check the route for TypeScript-safe JSX, valid imports, unique list keys, valid metadata, and no browser-only APIs in the server component.
- [ ] Check responsive CSS for overflow and table scrolling.
- [ ] Run `npm run build` in an environment with repository dependencies and Supabase build variables.
- [ ] If local dependency installation is unavailable, report the exact verification limitation instead of claiming a passing build.

## Acceptance criteria

- The first screen clearly says the output is a real editable PowerPoint, not an image, PDF, or HTML slideshow.
- The page proves: real PPTX, material binding, automatic visual planning, editable outline, WYSIWYG preview, local page-level revision, and export.
- Claims stay within current product truth and do not promise guaranteed academic outcomes.
- The page is discoverable through sitemap and an English homepage link.
- No unrelated homepage, account, payment, or desktop app code is changed.
