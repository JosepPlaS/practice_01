import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

import { getCoche, setCoche as setOnDB } from "../../data/coches";

export function CocheForm() {
  const navigate = useNavigate();
  const params = useParams();
  const date = new Date();
  const [coche, setCoche] = useState({
    id: 0,
    salida: getHour(),
    llegada: getHour(),
    conductor: "",
    vehiculo: "",
    fecha: getDate(),
  });

  useEffect(() => {
    if (params.cocheId) {
      const c = getCoche(params.cocheId);
      setCoche(c);
    }
  }, [params.cocheId]);

  function getHour() {
    let horas = date.getHours().toString();
    horas = horas.length > 1 ? horas : "0" + horas;
    let minutos = date.getMinutes().toString();
    minutos = minutos.length > 1 ? minutos : "0" + minutos;

    return horas + ":" + minutos;
  }

  function getDate() {
    let mes = date.getMonth();
    mes = mes.length > 1 ? mes : "0" + mes;
    let dia = date.getDay();
    dia = dia.length > 1 ? dia : "0" + dia;
    return date.getFullYear() + "-" + mes + "-" + dia;
  }

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
        <Button
          className="coche--form--button"
          onClick={() => setOnDB(coche) && navigate("/coches")}
        >
          Guardar
        </Button>
      </div>
      <div className="coche--form--column">
        <TextField
          id="time"
          type="time"
          name="salida"
          label="H. Salida: "
          value={coche.salida || getHour()}
          onChange={handleChange}
        />
        <TextField
          id="time"
          type="time"
          name="llegada"
          label="H. Llegada: "
          value={coche.llegada || getHour()}
          onChange={handleChange}
        />
        <TextField
          id="date"
          type="date"
          name="fecha"
          label="Fecha: "
          value={coche.fecha || getDate()}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
