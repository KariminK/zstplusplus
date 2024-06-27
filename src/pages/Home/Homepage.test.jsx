import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";
describe("Homepage", () => {
  it("renders correctly", () => {
    render(<Homepage />, { wrapper: BrowserRouter });
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(4);
    expect(screen.getByRole("heading", { name: "ZST++" })).toBeInTheDocument();
    expect(links[0].textContent).toMatch("Obiektowe");
    expect(links[1].textContent).toMatch("PPAD");
    expect(links[2].textContent).toMatch("PSI/PPAI");
    expect(links[3].textContent).toMatch("SZBD");
  });
});
