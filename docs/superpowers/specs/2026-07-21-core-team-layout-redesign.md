# Core Team Layout Redesign

## Goal

Redesign the Core Team section so leadership is visually distinct, the larger PowerMCP roster has appropriate space, and every project block aligns cleanly across desktop, tablet, and mobile layouts.

## Visual Direction

Use a calm, editorial directory treatment with rigorous grid alignment, light borders, generous spacing, and restrained motion. PowerMCP should be visually prominent because of its roster size, but the section should still read as one cohesive team rather than a collection of unrelated cards.

## Content Hierarchy

The section header remains “Meet the Team / Core Team.” Faculty Lead Le Xie and Student Lead Qian Zhang move out of the project grid and appear immediately below the header in a centered, cardless leadership row. A subtle divider separates the two roles on desktop; the entries stack without the divider on narrow screens.

The project teams retain their current member names, URLs, and order.

## Grid and Alignment

The section content width increases from `max-w-4xl` to `max-w-6xl`.

On large screens, use a twelve-column grid:

- PowerMCP spans eight columns and displays its members in two columns.
- PowerFM spans four columns beside PowerMCP. Its seven single-column member rows align naturally with PowerMCP's seven member rows.
- PowerSkills, PowerWF, and PowerAgent Platform each span four columns in an equal-height second row.

At tablet widths, PowerMCP spans the full available width and the remaining teams use two columns. At mobile widths, every project occupies one column. Project headings, dividers, member baselines, padding, and link spacing remain consistent across all blocks.

## Styling

Project blocks keep a light border and subtle radius but use no decorative shadow. The treatment should feel closer to an aligned directory than a dashboard-card mosaic. Member names remain left-aligned. Existing typography and primary color tokens remain unchanged.

## Interaction and Accessibility

Use CSS-only motion so no dependency is added:

- Apply a short, restrained entrance animation to the leadership row and team grid.
- Shift a project block's border color subtly on hover.
- Move the external-link icon a small distance on member-link hover.
- Disable movement when `prefers-reduced-motion: reduce` is active.

All links continue to open in a new tab and retain `rel="noopener noreferrer"`. Keyboard focus must remain visible through the site's existing focus styles.

## Component Structure

In `CoreTeam.tsx`, separate leadership data from project-team data. Render the leadership row once beneath `SectionHeader`, then render only project teams through the responsive grid. Keep the change local to the Core Team section; do not refactor unrelated shared components.

## Verification

Update `CoreTeam.test.tsx` to verify that:

- The two leadership links render in the leadership region outside the project grid.
- PowerMCP receives the wide-grid layout and two-column member list classes.
- The remaining project blocks receive their intended responsive span classes.
- Existing member names and supplied URLs remain present.

Run the focused component test, the full test suite, and the production build. Report repository-wide lint failures separately if they remain limited to pre-existing unrelated files.
