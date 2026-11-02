# Shanghai Mengsu Qualification Materials Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the two supplied injection-molding-robot qualification documents on the Shanghai Mengsu public website and verify the complete Production site on desktop and 390px mobile.

**Architecture:** Preserve the incumbent Next.js visual system. Add a typed qualification manifest backed by local public PDF/preview assets, render one bounded homepage certification section, and expose direct PDF links without changing unrelated customer content. Validate the asset contract with a Node test, then run build, deployment identity checks, formal-domain browser review, and an independent second pass.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Node test runner, Vercel.

**Spec:** `D:/Cursor/Grand/huanqiu-admin/docs/客户修改任务复审方法论.md`

## Global Constraints

- Customer request scope is limited to publishing the two supplied qualification documents and evidenced defects found during the mandated full review.
- The Verification of Conformity must be described as voluntary verification and must not be presented as a mandatory EU certificate or complete CE certification.
- Preserve existing product facts, visual identity, routes, analytics, Supabase integration, CAPTCHA, and admin proxy behavior.
- Every acceptance item uses `PASS`, `FAIL`, or `NOT_VISUALLY_VERIFIED`; any `FAIL` or unverified item blocks completion.
- Final evidence must come from `https://www.mengsumachinery.com` on desktop and 390px mobile in a safe browser session.
- GitHub company identity must be `luqite-ux`; local, GitHub `main`, and Vercel Production commit SHAs must match.

## Review Focus

- Both public PDF links must return the supplied, readable documents rather than a placeholder or stale asset.
- The card copy must distinguish the 185-page TCF/test report from the voluntary one-page VoC.
- Long document numbers, standards, model scope, dates, and buttons must not overflow at 390px.
- The new section must preserve readable contrast, keyboard focus, touch targets, and reduced-motion behavior.
- Existing public routes, product/news data, forms/CAPTCHA, favicon/brand, and responsive layout must remain functional after deployment.

---

### Task 1: Qualification asset contract

**Files:**
- Create: `public/documents/injection-molding-robot-technical-construction-file.pdf`
- Create: `public/documents/injection-molding-robot-verification-of-conformity.pdf`
- Create: `public/images/qualifications/injection-molding-robot-tcf-cover.jpg`
- Create: `public/images/qualifications/injection-molding-robot-voc.jpg`
- Create: `data/qualifications.json`
- Create: `tests/qualifications-assets.node.mjs`

**Interfaces:**
- Produces: qualification entries with `id`, `title`, `documentNumber`, `documentType`, `issueDate`, optional `expiryDate`, `summary`, `previewImage`, and `pdfUrl`.

- [ ] **Step 1: Write a failing Node test** that loads the real manifest, requires exactly the TCF and VoC entries, verifies literal document numbers/dates, checks every asset exists, and verifies each PDF begins with `%PDF-`.
- [ ] **Step 2: Run the test and confirm it fails because the manifest/assets do not exist.**
- [ ] **Step 3: Copy the supplied PDFs, render factual cover previews, and add the literal manifest data.**
- [ ] **Step 4: Re-run the test and confirm it passes.**

### Task 2: Public qualification section

**Files:**
- Create: `components/qualifications-section.tsx`
- Modify: `app/page.tsx`
- Modify: `components/header.tsx`

**Interfaces:**
- Consumes: `data/qualifications.json`.
- Produces: homepage anchor `#certifications` with two document cards and direct public PDF actions.

- [ ] **Step 1: Implement the bounded section using incumbent tokens and card language, factual preview images, semantic headings, and explicit VoC limitation copy.**
- [ ] **Step 2: Add the section to the homepage and a discoverable navigation anchor without altering unrelated sections.**
- [ ] **Step 3: Run the qualification test and TypeScript/Production build.**

### Task 3: Local audit and regression gate

**Files:**
- Modify only evidenced P0/P1 defects in changed or directly affected surfaces.

- [ ] **Step 1: Run the Impeccable detector once over the changed UI targets.**
- [ ] **Step 2: Run qualification tests, existing CAPTCHA tests, lint if configured, and `pnpm build`; record all failures rather than suppressing them.**
- [ ] **Step 3: Review the diff and worktree for scope purity, secret leakage, forbidden warranty/guarantee copy, and unexpected asset changes.**

### Task 4: Company GitHub and Vercel Production

**Files:**
- No additional product files unless deployment evidence exposes a defect.

- [ ] **Step 1: Commit only the explicit task files and push `HEAD:main` using the verified `luqite-ux` company token flow.**
- [ ] **Step 2: Read back GitHub `main` SHA through the company-token REST API and compare it with local HEAD.**
- [ ] **Step 3: Verify the Vercel Production deployment is `READY`, uses the same Git SHA, and serves the formal domain.**

### Task 5: Formal-domain full review and independent second pass

**Files:**
- Create evidence outside the eventual customer-repository deletion root.

- [ ] **Step 1: In a safe browser session, inspect every public route and required interaction on desktop, including both document previews and PDF links.**
- [ ] **Step 2: Repeat the same matrix at 390px mobile, including menu, section layout, long-copy wrapping, PDF actions, forms/CAPTCHA visibility, product/news routes, favicon, and overflow checks.**
- [ ] **Step 3: Re-run the matrix independently from the customer-visible outcome, not the modified files, and assign `PASS`, `FAIL`, or `NOT_VISUALLY_VERIFIED` to every row.**
- [ ] **Step 4: Only if no failure or unverified row remains, proceed to release evidence, authorized cleanup gates, workbench completion, and final title update.**
