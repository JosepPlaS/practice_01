import { useEffect, useState } from "react";
import {  Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

import { getCoche } from "../../data/coches";

export function CocheForm() {
  const params = useParams();
  const [coche, setCoche] = useState({ salida: "" });

  // const txtSalida = useRef();
  // const txtEntrada = useRef();
  useEffect(() => {
    const c = getCoche(params.cocheId);
    console.log(c);
    setCoche(c);
  }, [params.cocheId]);

  return (
    <form className="coche--form" component="form">
      <div className="coche--form--column">
        <TextField
          id="vehiculo"
          label="vehiculo"
          type="text"
          value={coche.vehiculo}
        />
        <TextField
          id="conductor"
          label="conductor"
          type="text"
          value={coche.conductor}
        />
        <Button className="coche--form--button">Guardar</Button>
      </div>
      <div className="coche--form--column">
        <TextField
          id="salida"
          label="salida"
          type="text"
          value={coche.salida}
        />
        <TextField
          id="llegada"
          label="llegada"
          type="text"
          value={coche.llegada}
        />
        <TextField id="fecha" label="fecha" type="text" value={coche.fecha} />
      </div>
    </form>
  );
}
