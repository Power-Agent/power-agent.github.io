import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import QuickStart from "./QuickStart";

describe("QuickStart", () => {
  it("shows the recent release video instead of the old quick start tutorial", () => {
    render(<QuickStart />);

    expect(screen.queryByText("Get Started")).not.toBeInTheDocument();
    expect(screen.queryByText("Quick Start")).not.toBeInTheDocument();

    expect(screen.getByRole("heading", { name: "Recent Release" })).toBeInTheDocument();
    expect(
      screen.getByText(
        "PowerMCP New Feature Release: Pip Install, Auto Setup, and PowerIO Integration"
      )
    ).toBeInTheDocument();

    expect(screen.getByTitle("PowerMCP New Feature Release")).toHaveAttribute(
      "src",
      "https://www.youtube.com/embed/xwTcNZLmIW8"
    );
    expect(
      document.querySelector('iframe[src*="docs.google.com/gview"]')
    ).not.toBeInTheDocument();
  });
});
