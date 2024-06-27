import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Writer from "./Writer";
import { describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Writer Component", () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup();
    render(<Writer />);
  });

  it("renders correctly", () => {
    expect(screen.getByText("Writer")).toBeInTheDocument();
    expect(screen.getByLabelText("Tytuł:")).toBeInTheDocument();
    expect(screen.getByLabelText("Opis:")).toBeInTheDocument();
    expect(screen.getByLabelText("Kod:")).toBeInTheDocument();
  });

  it("handles title input change", async () => {
    const titleInput = screen.getByLabelText("Tytuł:");
    await user.type(titleInput, "New Title");
    expect(titleInput).toHaveValue("New Title");
  });

  it("handles description input change", async () => {
    const descriptionInput = screen.getByLabelText("Opis:");
    await user.type(descriptionInput, "New Description");
    expect(descriptionInput).toHaveValue("New Description");
  });

  it("handles code input change", async () => {
    const codeInput = screen.getByLabelText("Kod:");
    await user.type(codeInput, "New Code");
    expect(codeInput).toHaveValue("New Code");
  });

  it("handles Tab key press in code input", async () => {
    const codeInput = screen.getByLabelText("Kod:");
    await user.type(codeInput, "Initial Code");
    await user.keyboard("{Tab}");
    expect(codeInput).toHaveValue("Initial Code\t");
  });

  it("generates correct output", async () => {
    const titleInput = screen.getByLabelText("Tytuł:");
    const descriptionInput = screen.getByLabelText("Opis:");
    const codeInput = screen.getByLabelText("Kod:");
    const outputTextarea = screen.getByRole("textbox", { name: "Output:" });

    await user.type(titleInput, "Title");
    await user.type(descriptionInput, "Description");
    await user.type(codeInput, "Code");

    const expectedOutput =
      '{"title":"Title","description":"Description","code":"Code","table":[]}'
        .replace(/\n/g, "\\n")
        .replace(/\t/g, "\\t");

    expect(outputTextarea).toHaveValue(expectedOutput);
  });
});
