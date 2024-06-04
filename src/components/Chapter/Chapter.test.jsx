import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Chapter from "./Chapter";

describe("Chapter", () => {
  it("Should have id given in props", () => {
    render(<Chapter id="exampleId" />);
    expect(screen.getByRole("main").id).toBe("exampleId");
  });
  it("Should render bunch of CodeSections based on data given in props", () => {
    render(
      <Chapter
        sections={[
          {
            title: "Example1title",
            description: "Example1description",
            code: `example1code`,
            color: "cyan",
          },
          {
            title: "Example2title",
            description: "Example2description",
            code: `example2code`,
            color: "emerald",
          },
        ]}
      />
    );
    const headings = screen.getAllByRole("heading");
    const descriptions = screen.getAllByRole("paragraph");
    const codes = screen.getAllByRole("code");

    expect(headings[0].textContent).toBe("Example1title");
    expect(headings[1].textContent).toBe("Example2title");
    expect(descriptions[0].textContent).toBe("Example1description");
    expect(descriptions[1].textContent).toBe("Example2description");
    expect(codes[0].textContent).toBe("example1code");
    expect(codes[1].textContent).toBe("example2code");
  });
});
