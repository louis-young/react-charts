import { render, screen } from "@testing-library/react";
import { Tooltip } from "..";

describe("Tooltip", () => {
  it("renders the tooltip text", () => {
    const text = "__TEXT__";

    render(<Tooltip text={text} />);

    const tooltipText = screen.getByText(text);

    expect(tooltipText).toBeInTheDocument();
  });
});
