import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Button, TextField } from "@mui/material";
import { getCoches, deleteCoche } from "../../data/coches";
import { CocheLinea } from "../molecule/CocheLinea";

/**
 * Tabla de objetos Coche
 * @Component
 */
export function CochesTabla() {
  let navigate = useNavigate();
  const [coches, setCoches] = useState(getCoches());
  const [filter, setFilter] = useState("");

  function borrarCoche(id) {
    deleteCoche(id);
    setCoches(getCoches());
  }

  return (
    <>
      <TableContainer data-testid="coche--tabla" className="coches--tabla">
        <Table data-testid="tabla">
          <TableHead>
            <TableRow>
              <TableCell>H.Salida: </TableCell>
              <TableCell>H. llegada: </TableCell>
              <TableCell>Vehiculo: </TableCell>
              <TableCell>Conductor: </TableCell>
              <TableCell>Fecha: </TableCell>
              <TableCell align="right">
                <Button onClick={() => navigate("/coches/crear")}>
                  Añadir
                </Button>
              </TableCell>
              <TableCell align="center">
                <TextField
                  id="outlined-basic"
                  label="Filtro: "
                  variant="outlined"
                  onChange={(txt) => setFilter(txt.target.value)}
                  value={filter}
                ></TextField>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coches
              .filter(
                (coche) =>
                  coche.conductor
                    .toLowerCase()
                    .includes(filter.toLowerCase()) ||
                  coche.vehiculo.toLowerCase().includes(filter.toLowerCase())
              )
              .map((coche) => (
                <CocheLinea
                  key={coche.id}
                  coche={coche}
                  borrarCoche={borrarCoche}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
