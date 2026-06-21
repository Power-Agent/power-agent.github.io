import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import QuickStart from "./QuickStart";

describe("QuickStart", () => {
  it("does not auto-load the Google Docs viewer for the tutorial", () => {
    render(<QuickStart />);

    expect(
      document.querySelector('iframe[src*="docs.google.com/gview"]')
    ).not.toBeInTheDocument();

    expect(screen.getByRole("link", { name: /open tutorial/i })).toHaveAttribute(
      "href",
      "https://github.com/Power-Agent/PowerMCP/blob/main/PowerMCP_Tutorial.pdf"
    );
  });
});
