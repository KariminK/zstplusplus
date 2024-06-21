import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TableRow from "./TableRow";

describe("Table row", () => {
  it("Should render table row with column in amount given in props", () => {
    render(<TableRow columns={3} />);
    expect(screen.getAllByRole("cell")).toHaveLength(3);
  });
  it("Should render row with data given in props in proper columns", () => {
    render(<TableRow columns={2} data={["x", "y"]} />);
    const columns = screen.getAllByRole("textbox");
    expect(columns[0].value).toBe("x");
    expect(columns[1].value).toBe("y");
  });
  it("Should render table row with column headers in amount given in props", () => {
    render(<TableRow columns={2} header={true} />);
    expect(screen.getAllByRole("columnheader")).toHaveLength(2);
  });
});
