import { TableRow, TableCell } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export function CocheLinea({ coche }) {
  const { id, salida, llegada, conductor, vehiculo, fecha } = coche;
  const temp = fecha.split("-", 3);
  const fechaSpain = temp[2] + "/" + temp[1] + "/" + temp[0];

  return (
    <TableRow>
      <TableCell>{salida}</TableCell>
      <TableCell>{llegada}</TableCell>
      <TableCell>{conductor}</TableCell>
      <TableCell>{vehiculo}</TableCell>
      <TableCell>{fechaSpain}</TableCell>
      <TableCell></TableCell>
      <TableCell align="center">
        <Link to={`/coches/${id}`} key={id}>
          <Button>Editar</Button>
        </Link>
        <Button>Eliminar</Button>
      </TableCell>
    </TableRow>
  );
}
