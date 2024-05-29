import { describe, expect, it } from "vitest";
import Section from "./Section";
import { render, screen } from "@testing-library/react";

describe("section", () => {
  it("should have title", () => {
    render(<Section title="Example title" />);
    expect(
      screen.getByRole("heading", { name: "Example title" })
    ).toBeInTheDocument();
  });
  it("should have description", () => {
    render(<Section description="example description" />);
    expect(screen.getByRole("paragraph").textContent).toMatch(
      "example description"
    );
  });
  it("should have code example", () => {
    render(<Section code={`XYZ`} />);
    expect(screen.getByRole("code").textContent).toMatch(`XYZ`);
  });
  it("should render table from array given in props using first index array as table heading", () => {
    render(
      <Section
        table={[
          ["head1", "head2", "head3"],
          ["first1", "first2", "first3"],
          ["second1", "second2", "second3"],
        ]}
      />
    );
    const headers = screen.getAllByRole("columnheader");
    expect(headers[0].textContent).toBe("head1");
    expect(headers[2].textContent).toBe("head3");
    const cells = screen.getAllByRole("cell");
    expect(cells[0].textContent).toBe("first1");
    expect(cells[3].textContent).toBe("second1");
  });
});
