# Core Team Roster Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the PowerMCP and PowerAgent Platform core-team rosters with the supplied members and external profile links.

**Architecture:** `CoreTeam.tsx` stores the roster as local section arrays and renders each member through the existing shared anchor markup. Modify only those arrays so the existing presentation, new-tab behavior, and safe external-link attributes remain intact.

**Tech Stack:** React 18, TypeScript, Vite, Vitest, Testing Library.

## Global Constraints

- Preserve existing roster order and append new members to their destination sections.
- Use the supplied URLs verbatim.
- Do not alter the core-team layout or member-link rendering behavior.

---

### Task 1: Update and verify the core-team roster

**Files:**
- Modify: `src/components/sections/CoreTeam.tsx:21-35,64-70`
- Create: `src/components/sections/CoreTeam.test.tsx`

**Interfaces:**
- Consumes: The `teamSections` member arrays in `CoreTeam.tsx`.
- Produces: Rendered PowerMCP and PowerAgent Platform lists containing the requested members and links.

- [ ] **Step 1: Write the failing test**

```tsx
import { render, screen, within } from "@testing-library/react";
import CoreTeam from "./CoreTeam";

it("places the requested members in their destination rosters", () => {
  render(<CoreTeam />);
  const powerMcp = screen.getByRole("heading", { name: "PowerMCP" }).closest("div");
  const platform = screen.getByRole("heading", { name: "PowerAgent Platform" }).closest("div");

  expect(within(powerMcp!).getByRole("link", { name: /Laura Hwa/i })).toHaveAttribute("href", "https://www.linkedin.com/in/laurahwa/");
  expect(within(powerMcp!).getByRole("link", { name: /Leo Winiecki/i })).toHaveAttribute("href", "https://www.linkedin.com/in/leo-winiecki-3337b716a/");
  expect(within(platform!).getByRole("link", { name: /Xiaoyang Wang/i })).toHaveAttribute("href", "https://www.linkedin.com/in/xiaoyang-wang-a04658339/");
  expect(within(platform!).getByRole("link", { name: /Lloyd Pasley/i })).toHaveAttribute("href", "https://www.supernaenergy.com/");
  expect(within(platform!).queryByRole("link", { name: /Leo Winiecki/i })).not.toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- CoreTeam.test.tsx`

Expected: FAIL because the requested roster entries are not yet present.

- [ ] **Step 3: Write minimal implementation**

```tsx
// Append to PowerMCP members:
{ name: "Laura Hwa", url: "https://www.linkedin.com/in/laurahwa/" },
{ name: "Leo Winiecki", url: "https://www.linkedin.com/in/leo-winiecki-3337b716a/" },

// Replace the PowerAgent Platform Leo entry with:
{ name: "Xiaoyang Wang", url: "https://www.linkedin.com/in/xiaoyang-wang-a04658339/" },
{ name: "Lloyd Pasley", url: "https://www.supernaenergy.com/" },
```

- [ ] **Step 4: Run verification**

Run: `npm test -- CoreTeam.test.tsx && npm run lint && npm run build`

Expected: all commands exit successfully.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/CoreTeam.tsx src/components/sections/CoreTeam.test.tsx docs/superpowers/plans/2026-07-21-core-team-roster-update.md
git commit -m "Update core team rosters"
```
