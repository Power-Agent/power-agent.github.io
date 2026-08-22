import { render, screen } from "@testing-library/react";
import ContributorOrigins from "./ContributorOrigins";

it("lists RWTH Aachen University among academic contributors", () => {
  render(<ContributorOrigins />);

  const rwth = screen.getByRole("link", { name: /RWTH Aachen University/i });

  expect(rwth).toHaveAttribute("href", "https://www.rwth-aachen.de/");
  expect(screen.getAllByAltText("RWTH Aachen University logo")).toHaveLength(2);
});
