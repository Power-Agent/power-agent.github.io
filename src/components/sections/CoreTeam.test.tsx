import { render, screen, within } from "@testing-library/react";
import CoreTeam from "./CoreTeam";

it("places the requested members in their destination rosters", () => {
  render(<CoreTeam />);

  const powerMcp = screen.getByRole("heading", { name: "PowerMCP" }).closest("div");
  const platform = screen.getByRole("heading", { name: "PowerAgent Platform" }).closest("div");

  expect(within(powerMcp!).getByRole("link", { name: /Laura Hwa/i })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/laurahwa/",
  );
  expect(within(powerMcp!).getByRole("link", { name: /Leo Winiecki/i })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/leo-winiecki-3337b716a/",
  );
  expect(within(platform!).getByRole("link", { name: /Xiaoyang Wang/i })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/xiaoyang-wang-a04658339/",
  );
  expect(within(platform!).getByRole("link", { name: /Lloyd Pasley/i })).toHaveAttribute(
    "href",
    "https://www.supernaenergy.com/",
  );
  expect(within(platform!).queryByRole("link", { name: /Leo Winiecki/i })).not.toBeInTheDocument();
});
