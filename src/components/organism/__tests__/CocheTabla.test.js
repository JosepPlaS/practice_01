/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CochesTabla } from "../CochesTabla";

describe("Testing <CochesTabla />", () => {
  beforeEach(() =>
    render(
      <BrowserRouter>
        <CochesTabla />
      </BrowserRouter>
    )
  );

  it("Testing render", () => {
    const tabla = screen.getByRole("table");
    expect(tabla).toBeInTheDocument;
  });
});
