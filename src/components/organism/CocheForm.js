import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

import { getCoche, setCoche as setOnDB } from "../../data/coches";

export function CocheForm() {
  const params = useParams();
  const [coche, setCoche] = useState({
    id: 0,
    salida: "",
    llegada: "",
    conductor: "",
    vehiculo: "",
    fecha: "",
  });

  useEffect(() => {
    const c = getCoche(params.cocheId);
    setCoche(c);
  }, [params.cocheId]);

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;
    setCoche((old) => ({
      ...old,
      [name]: value,
    }));
  }

  return (
    <form className="coche--form">
      <div className="coche--form--column">
        <TextField
          id="vehiculo"
          name="vehiculo"
          label="vehiculo"
          value={coche.vehiculo}
          onChange={handleChange}
        />
        <TextField
          id="conductor"
          name="conductor"
          label="Conductor: "
          value={coche.conductor}
          onChange={handleChange}
        />
        <Button className="coche--form--button" onClick={() => setOnDB(coche)}>
          Guardar
        </Button>
      </div>
      <div className="coche--form--column">
        <TextField
          id="salida"
          type="time"
          name="salida"
          label="H. Salida: "
          value={coche.salida}
          onChange={handleChange}
        />
        <TextField
          id="llegada"
          type="time"
          name="llegada"
          label="H. Llegada: "
          value={coche.llegada}
          onChange={handleChange}
        />
        <TextField
          id="fecha"
          type="date"
          name="fecha"
          label="Fecha: "
          value={coche.fecha}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
