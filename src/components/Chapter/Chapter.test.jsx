import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Chapter from "./Chapter";

describe("Chapter", () => {
  it("Should have id given in props", () => {
    render(<Chapter id="exampleId" />);
    expect(screen.getByRole("main").id).toBe("exampleId");
  });
  it("Should render bunch of CodeSections based on data given in props", () => {});
});
