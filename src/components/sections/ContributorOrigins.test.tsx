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

it("lists AEMO among industry contributors", () => {
  render(<ContributorOrigins />);

  const aemo = screen.getByRole("link", { name: /AEMO/i });

  expect(aemo).toHaveAttribute("href", "https://aemo.com.au/");
  expect(screen.getAllByAltText("AEMO logo")).toHaveLength(2);
});

it("lists FAU Erlangen-Nürnberg among academic contributors", () => {
  render(<ContributorOrigins />);

  const fau = screen.getByRole("link", { name: /FAU Erlangen-Nürnberg/i });

  expect(fau).toHaveAttribute("href", "https://www.fau.eu/");
  expect(screen.getAllByAltText("FAU Erlangen-Nürnberg logo")).toHaveLength(2);
});

it("lists The University of Hong Kong among academic contributors", () => {
  render(<ContributorOrigins />);

  const hku = screen.getByRole("link", { name: /The University of Hong Kong/i });

  expect(hku).toHaveAttribute("href", "https://www.hku.hk/");
  expect(screen.getAllByAltText("The University of Hong Kong logo")).toHaveLength(2);
});
