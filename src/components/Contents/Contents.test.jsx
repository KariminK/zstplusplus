import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contents from "./Contents";
import { BrowserRouter } from "react-router-dom";

describe("Contents component", () => {
  it("Should render text given in props in array as links in list", () => {
    render(
      <Contents
        chapters={[
          { to: "example1l", text: "example1" },
          { to: "example2l", text: "example2" },
          { to: "example3l", text: "example3" },
        ]}
      />,
      { wrapper: BrowserRouter }
    );
    const listElements = screen.getAllByRole("listitem");
    const linkElements = screen.getAllByRole("link");
    expect(listElements.length).toBe(3);
    expect(linkElements[0].textContent).toMatch("example1");
    expect(linkElements[1].textContent).toMatch("example2");
    expect(linkElements[2].textContent).toMatch("example3");
    expect(linkElements[0].href).toMatch("example1l");
    expect(linkElements[1].href).toMatch("example2l");
    expect(linkElements[2].href).toMatch("example3l");
  });
  it("Should render nested list if nested array providen", () => {
    render(
      <Contents
        chapters={[
          { to: "example1l", text: "example1" },
          { to: "example2l", text: "example2" },
          [
            { to: "example2.1l", text: "example2.1" },
            { to: "example2.1l", text: "example2.2" },
          ],
        ]}
      />,
      { wrapper: BrowserRouter }
    );
    expect(screen.getAllByRole("listitem").length).toBe(5);
    expect(screen.getByText("example2.1")).toBeInTheDocument();
    expect(screen.getByText("example2.2")).toBeInTheDocument();
  });
});
