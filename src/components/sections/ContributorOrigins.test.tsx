import { render, screen } from "@testing-library/react";
import ContributorOrigins from "./ContributorOrigins";

it("lists RWTH Aachen University among academic contributors", () => {
  render(<ContributorOrigins />);

  const rwth = screen.getByRole("link", { name: /RWTH Aachen University/i });

  expect(rwth).toHaveAttribute("href", "https://www.rwth-aachen.de/");
  expect(screen.getAllByAltText("RWTH Aachen University logo")).toHaveLength(2);
});

it("lists HABITAT Energy among industry contributors", () => {
  render(<ContributorOrigins />);

  const habitat = screen.getByRole("link", { name: /HABITAT Energy/i });

  expect(habitat).toHaveAttribute("href", "https://habitat.energy/");
  expect(screen.getAllByAltText("HABITAT Energy logo")).toHaveLength(2);
});
