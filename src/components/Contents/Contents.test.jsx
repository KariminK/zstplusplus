import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contents from "./Contents";

describe("Contents component", () => {
  it("Should render text given in props in array as list", () => {
    render(<Contents chapters={["example1", "example2", "example3"]} />);
    const listElements = screen.getAllByRole("listitem");
    expect(listElements.length).toBe(3);
    expect(listElements[0].textContent).toMatch("example1");
    expect(listElements[1].textContent).toMatch("example2");
    expect(listElements[2].textContent).toMatch("example3");
  });
  it("Should render nested list if nested array providen", () => {
    render(
      <Contents
        chapters={["example1", "example2", ["example2.1", "example2.2"]]}
      />
    );
    expect(screen.getAllByRole("listitem").length).toBe(5);
    expect(screen.getByText("example2.1")).toBeInTheDocument();
    expect(screen.getByText("example2.2")).toBeInTheDocument();
  });
});
