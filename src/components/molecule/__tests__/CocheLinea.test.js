/* eslint-disable no-undef */
import { Table, TableBody } from "@mui/material";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Coche } from "../../../data/Coche";
import { CocheLinea } from "../CocheLinea";

const testCoche = new Coche(1, "10:10", "12:15", "Pedro", "Clio", "2022-01-01");

describe("Testing <CocheLinea />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="coches/:cocheId"
            element={<div>This is for route testing</div>}
          />
        </Routes>
        <Table>
          <TableBody>
            <CocheLinea coche={testCoche} borrarCoche={() => {}} />
          </TableBody>
        </Table>
      </BrowserRouter>
    );
  });

  it("Testing render", () => {
    const element = screen.getByRole("row");
    expect(element).toBeInTheDocument;
  });

  it("Testing correct data position", () => {
    const elements = screen.getAllByRole("cell");
    expect(elements[0].textContent).toEqual("10:10");
    expect(elements[1].textContent).toEqual("12:15");
    expect(elements[2].textContent).toEqual("Pedro");
    expect(elements[3].textContent).toEqual("Clio");
    expect(elements[4].textContent).toEqual("01/01/2022");
  });

  it("Test routing", () => {
    let routeResult = screen.queryByText("This is for route testing");
    const button = screen.getByText(/editar/i);
    expect(routeResult).toBeNull;
    fireEvent.click(button);
    routeResult = screen.getByText("This is for route testing");
    expect(routeResult).toBeInTheDocument;
  });
});
