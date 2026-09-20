import { render, screen, within } from "@testing-library/react";
import CoreTeam from "./CoreTeam";

it("places the requested members in their destination rosters", () => {
  render(<CoreTeam />);

  const powerMcp = screen.getByTestId("team-powermcp");
  const platform = screen.getByTestId("team-poweragent-platform");

  expect(within(powerMcp!).getByRole("link", { name: /Laura Hwa/i })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/laurahwa/",
  );
  expect(within(powerMcp!).getByRole("link", { name: /Leo Winiecki/i })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/leo-winiecki-3337b716a/",
  );
  expect(within(powerMcp!).getByRole("link", { name: /Brian Horakh/i })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/brianhorakh/",
  );
  expect(within(powerMcp!).getByRole("link", { name: /Aswin Krishna Poyil/i })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/aswinkrishnapoyil/",
  );
  expect(within(screen.getByTestId("team-powerskills")).getByRole("link", { name: /Steffen Kortmann/i })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/steffen-kortmann-46989a1b3/",
  );
  expect(within(platform!).getByRole("link", { name: /Xiaoyang Wang/i })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/xiaoyang-wang-a04658339/",
  );
  expect(within(platform!).getByRole("link", { name: /Lloyd Pasley/i })).toHaveAttribute(
    "href",
    "https://www.supernaenergy.com/",
  );
  expect(within(platform!).getByRole("link", { name: /Samuel Talkington/i })).toHaveAttribute(
    "href",
    "https://samueltalkington.com/",
  );
  expect(within(platform!).queryByRole("link", { name: /Leo Winiecki/i })).not.toBeInTheDocument();
});

it("renders leadership outside an aligned weighted project grid", () => {
  render(<CoreTeam />);

  const leads = screen.getByTestId("team-leads");
  const teamGrid = screen.getByTestId("team-grid");
  const powerMcp = screen.getByTestId("team-powermcp");
  const powerFm = screen.getByTestId("team-powerfm");

  expect(within(leads).getByRole("link", { name: "Le Xie" })).toHaveAttribute(
    "href",
    "https://seas.harvard.edu/person/le-xie",
  );
  expect(within(leads).getByRole("link", { name: "Qian Zhang" })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/qian-zhang-harvard/",
  );
  const studentLead = within(leads).getByText("Student Lead");
  const facultyLead = within(leads).getByText("Faculty Lead");
  const studentLeadName = within(leads).getByRole("link", { name: "Qian Zhang" });
  const facultyLeadName = within(leads).getByRole("link", { name: "Le Xie" });

  expect(studentLead.compareDocumentPosition(facultyLead) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  expect(studentLeadName).toHaveClass("text-base", "md:text-lg");
  expect(facultyLeadName).toHaveClass("text-base", "md:text-lg");
  expect(within(teamGrid).queryByText("Faculty Lead")).not.toBeInTheDocument();
  expect(powerMcp).toHaveClass("lg:col-span-8");
  expect(powerFm).toHaveClass("lg:col-span-4");
  expect(within(powerMcp).getByRole("list")).toHaveClass("sm:grid-cols-2");
  expect(screen.getByTestId("team-powerskills")).toHaveClass("lg:col-span-4");
  expect(screen.getByTestId("team-powerwf")).toHaveClass("lg:col-span-4");
  expect(screen.getByTestId("team-poweragent-platform")).toHaveClass("lg:col-span-4");
});
