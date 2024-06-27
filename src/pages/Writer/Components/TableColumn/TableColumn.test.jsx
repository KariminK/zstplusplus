import { render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import TableColumn from "./TableColumn";
import userEvent from "@testing-library/user-event";

describe("table column", () => {
  it("renders correctly", () => {
    render(<TableColumn />);
    expect(screen.getByRole("cell")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  it("renders th if header prop is true", () => {
    render(<TableColumn header={true} />);
    expect(screen.getByRole("columnheader")).toBeInTheDocument();
  });
  it("sets inputs value to given in props", () => {
    render(<TableColumn value={"example"} />);
    expect(screen.getByRole("cell")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveValue("example");
  });
  it("fires callback given in props on onChange event", async () => {
    const changeHandler = vitest.fn();
    render(<TableColumn header={true} onInputChange={changeHandler} />);
    const user = userEvent.setup();
    const input = screen.getByRole("textbox");
    await user.type(input, "x");
    expect(changeHandler).toHaveBeenCalled();
  });
});
