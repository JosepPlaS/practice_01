import { TableRow, TableCell } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function CocheLinea({ coche, borrarCoche }) {
  const { id, salida, llegada, conductor, vehiculo, fecha } = coche;
  let navigate = useNavigate();

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
        <Button onClick={() => navigate(`/coches/${id}`)}>Editar</Button>
        <Button onClick={() => borrarCoche(id)}>Eliminar</Button>
      </TableCell>
    </TableRow>
  );
}
