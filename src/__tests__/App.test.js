// @ts-nocheck
/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import { App } from "../App";

describe("Testing <App />", () => {
  beforeEach(() => render(<App />));

  it("Testing render", () => {
    const header = screen.getByTestId("coche--header");
    expect(header).toBeInTheDocument;
  });

  it("Testing nav buttons and table render", () => {
    const inicio = screen.getByText("Inicio");
    const coches = screen.getByText("Coches");
    fireEvent.click(coches);
    const tablaBefore = screen.getByRole("table");
    expect(tablaBefore).toBeInTheDocument;
    fireEvent.click(inicio);
    const tablaAfter = screen.queryByRole("table");
    expect(tablaAfter).toBeNull;
  });

  it("Testing form from añadir", () => {
    const coches = screen.getByText("Coches");
    fireEvent.click(coches);
    const anadir = screen.getByText("Añadir");
    fireEvent.click(anadir);
    const form = screen.getByTestId("coche--form");
    expect(form).toBeInTheDocument;
  });

  it("Testing form from editar", () => {
    const coches = screen.getByText("Coches");
    fireEvent.click(coches);
    const editar = screen.getAllByText("Editar");

    fireEvent.click(editar[0]);

    const form = screen.getByTestId("coche--form");
    expect(form).toBeInTheDocument;
  });

  it("Testing eliminar", () => {
    const coches = screen.getByText("Coches");
    fireEvent.click(coches);
    const eliminar = screen.getAllByText("Eliminar");
    const rowsBefore = screen.getAllByRole("row");
    fireEvent.click(eliminar[0]);
    const rowsAfter = screen.getAllByRole("row");
    expect(rowsAfter).toHaveLength(rowsBefore.length - 1);
  });
});
