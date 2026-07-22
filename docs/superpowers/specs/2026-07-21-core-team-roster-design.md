# Core Team Roster Update

## Scope

Update the core-team roster in `src/components/sections/CoreTeam.tsx` without changing its structure or presentation.

## Changes

- Preserve the existing member order in each section.
- Add Laura Hwa and Leo Winiecki to the end of the PowerMCP roster, using their supplied LinkedIn URLs.
- Remove Leo Winiecki from PowerAgent Platform.
- Add Xiaoyang Wang and Lloyd Pasley to the end of the PowerAgent Platform roster, using Xiaoyang's supplied LinkedIn URL and Lloyd's supplied Superna Energy URL.

## Behavior and Verification

The existing member-link rendering remains unchanged: every name links to its provided URL in a new tab with safe external-link attributes. Verification will check the updated roster content and run the project checks available in `package.json`.
