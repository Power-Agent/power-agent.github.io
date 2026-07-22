# Core Team Layout Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Core Team section around a cardless leadership row and a responsive weighted project grid that gives PowerMCP appropriate space.

**Architecture:** Keep roster content local to `CoreTeam.tsx`, but split leadership data from project-team data. Render one semantic leadership region followed by a twelve-column project grid; use a small pair of global CSS animation hooks for progressive entrance motion and Tailwind utilities for alignment and hover states.

**Tech Stack:** React 18, TypeScript, Tailwind CSS 3, Vitest, Testing Library.

## Global Constraints

- Preserve every current member name, URL, and roster order.
- Keep the existing typography and color tokens.
- Add no dependencies.
- Disable movement for `prefers-reduced-motion: reduce`.
- Keep all external links opening in a new tab with `rel="noopener noreferrer"`.

---

### Task 1: Test and implement the responsive team hierarchy

**Files:**
- Modify: `src/components/sections/CoreTeam.test.tsx`
- Modify: `src/components/sections/CoreTeam.tsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: existing member records with `{ name: string; url: string }`.
- Produces: `data-testid="team-leads"`, `data-testid="team-grid"`, and `data-testid="team-<slug>"` regions for stable layout verification.

- [ ] **Step 1: Extend the component test with the new hierarchy and layout contracts**

Add assertions after `render(<CoreTeam />)`:

```tsx
const leads = screen.getByTestId("team-leads");
const teamGrid = screen.getByTestId("team-grid");
const powerMcp = screen.getByTestId("team-powermcp");
const powerFm = screen.getByTestId("team-powerfm");
const mcpMembers = within(powerMcp).getByRole("list");

expect(within(leads).getByRole("link", { name: "Le Xie" })).toHaveAttribute(
  "href",
  "https://seas.harvard.edu/person/le-xie",
);
expect(within(leads).getByRole("link", { name: "Qian Zhang" })).toHaveAttribute(
  "href",
  "https://www.linkedin.com/in/qian-zhang-harvard/",
);
expect(within(teamGrid).queryByText("Faculty Lead")).not.toBeInTheDocument();
expect(powerMcp).toHaveClass("lg:col-span-8");
expect(powerFm).toHaveClass("lg:col-span-4");
expect(mcpMembers).toHaveClass("sm:grid-cols-2");
expect(screen.getByTestId("team-powerskills")).toHaveClass("lg:col-span-4");
expect(screen.getByTestId("team-powerwf")).toHaveClass("lg:col-span-4");
expect(screen.getByTestId("team-poweragent-platform")).toHaveClass("lg:col-span-4");
```

- [ ] **Step 2: Run the focused test and confirm the new assertions fail**

Run: `npm test -- CoreTeam.test.tsx`

Expected: FAIL because the leadership and project-grid test IDs do not exist yet.

- [ ] **Step 3: Separate leadership data and render it below the section heading**

Replace the Leads object in `teamSections` with:

```tsx
const teamLeads = [
  { role: "Faculty Lead", name: "Le Xie", url: "https://seas.harvard.edu/person/le-xie" },
  {
    role: "Student Lead",
    name: "Qian Zhang",
    url: "https://www.linkedin.com/in/qian-zhang-harvard/",
  },
];
```

Render it immediately after `SectionHeader`:

```tsx
<div
  data-testid="team-leads"
  className="core-team-enter mx-auto mb-10 flex max-w-2xl flex-col items-center justify-center gap-5 border-y border-border/70 py-5 sm:flex-row sm:gap-0"
>
  {teamLeads.map((lead, index) => (
    <div
      key={lead.role}
      className="flex items-center gap-3 px-6 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-border"
    >
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {lead.role}
      </span>
      <a
        href={lead.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
      >
        {lead.name}
        <ExternalLink className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
      </a>
    </div>
  ))}
</div>
```

- [ ] **Step 4: Replace the uniform card grid with the weighted project grid**

Use a slug helper and span map:

```tsx
const sectionSlug = (title: string) => title.toLowerCase().replaceAll(" ", "-");

const sectionSpans: Record<string, string> = {
  PowerMCP: "md:col-span-2 lg:col-span-8",
  PowerFM: "lg:col-span-4",
  PowerSkills: "lg:col-span-4",
  PowerWF: "lg:col-span-4",
  "PowerAgent Platform": "lg:col-span-4",
};
```

Render only project teams inside:

```tsx
<div data-testid="team-grid" className="core-team-enter core-team-enter-delay grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-12">
  {teamSections.map((section) => (
    <article
      key={section.title}
      data-testid={`team-${sectionSlug(section.title)}`}
      className={`group/team rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/40 ${sectionSpans[section.title]}`}
    >
      <h3 className="mb-4 border-b border-border pb-3 text-lg font-semibold text-foreground">
        {section.title}
      </h3>
      <ul className={`grid gap-x-6 gap-y-2.5 ${section.title === "PowerMCP" ? "sm:grid-cols-2" : "grid-cols-1"}`}>
        {section.members.map((member) => (
          <li key={member.name}>
            <a
              href={member.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/member inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              {member.name}
              <ExternalLink className="h-3 w-3 shrink-0 transition-transform duration-200 group-hover/member:-translate-y-0.5 group-hover/member:translate-x-0.5 motion-reduce:transform-none" />
            </a>
          </li>
        ))}
      </ul>
    </article>
  ))}
</div>
```

Change the content wrapper to `max-w-6xl` and the header margin to `mb-6`.

- [ ] **Step 5: Add the restrained entrance animation and reduced-motion override**

Append to `src/index.css`:

```css
@keyframes core-team-enter {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.core-team-enter { animation: core-team-enter 500ms ease-out both; }
.core-team-enter-delay { animation-delay: 100ms; }

@media (prefers-reduced-motion: reduce) {
  .core-team-enter,
  .core-team-enter-delay { animation: none; }
}
```

- [ ] **Step 6: Run focused and repository verification**

Run: `npm test -- CoreTeam.test.tsx && npm test && npm run build && git diff --check`

Expected: focused test passes, all four test files pass, production build succeeds, and the diff has no whitespace errors.

- [ ] **Step 7: Commit and push**

```bash
git add src/components/sections/CoreTeam.tsx src/components/sections/CoreTeam.test.tsx src/index.css docs/superpowers/plans/2026-07-21-core-team-layout-redesign.md
git commit -m "Redesign core team layout"
git push origin main
```
