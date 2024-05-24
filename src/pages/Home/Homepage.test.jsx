import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";
describe("Homepage", () => {
  it("Should have 'ZST++ heading'", () => {
    render(<Homepage />, { wrapper: BrowserRouter });
    expect(screen.getByRole("heading", { name: "ZST++" })).toBeInTheDocument();
  });
  it("Should have three links: Obiektowe, PPSI, PSI/PPAI", () => {
    render(<Homepage />, { wrapper: BrowserRouter });
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(4);
    expect(links[0].textContent).toMatch("Obiektowe");
    expect(links[1].textContent).toMatch("PPSI");
    expect(links[2].textContent).toMatch("PSI/PPAI");
    expect(links[3].textContent).toMatch("SZBD");
  });
});
