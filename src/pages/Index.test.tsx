import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Index from "./Index";

describe("Index", () => {
  it("places the recent release section before the introduction", () => {
    const { container } = render(<Index />);

    const recentReleaseSection = container.querySelector("#quick-start");
    const introductionSection = container.querySelector("#introduction");

    expect(recentReleaseSection).toBeInTheDocument();
    expect(introductionSection).toBeInTheDocument();
    expect(
      recentReleaseSection?.compareDocumentPosition(introductionSection!)
    ).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });
});
