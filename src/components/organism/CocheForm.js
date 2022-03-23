import { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

import { getCoche, setCoche } from "../../data/coches";

/**
 * Formulario para crear o editar un Ccoche
 * @Component
 */
export function CocheForm() {
  const navigate = useNavigate();
  const params = useParams();
  const date = new Date();

  useEffect(() => {
    if (params.cocheId) {
      const c = getCoche(params.cocheId);
      reset(c);
    }
  }, [params.cocheId]);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      id: 0,
      vehiculo: "",
      conductor: "",
      salida: getHour(),
      llegada: getHour(),
      fecha: getDate(),
    },
  });

  /**
   * Transforma la hora a un formato adecuado
   * @returns {string} HH:MM
   */
  function getHour() {
    let horas = date.getHours().toString();
    horas = horas.length > 1 ? horas : "0" + horas;
    let minutos = date.getMinutes().toString();
    minutos = minutos.length > 1 ? minutos : "0" + minutos;

    return horas + ":" + minutos;
  }

  /**
   * Transforma la fecha a un formato adecuado
   * @returns {string} AAAA-MM-DD
   */
  function getDate() {
    let mes = date.getMonth().toString();
    mes = mes.length > 1 ? mes : "0" + mes;
    let dia = date.getDay().toString();
    dia = dia.length > 1 ? dia : "0" + dia;
    return date.getFullYear() + "-" + mes + "-" + dia;
  }

  const onSubmit = (data) => setCoche(data) && navigate("/coches");

  return (
    <form
      className="coche--form"
      data-testid="coche--form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="coche--form--column">
        <Controller
          name="vehiculo"
          control={control}
          render={({ field }) => (
            <TextField name="vehiculo" label="Vehiculo: " {...field} />
          )}
        />
        <Controller
          name="conductor"
          control={control}
          render={({ field }) => (
            <TextField
              id="conductor"
              name="conductor"
              label="Conductor: "
              {...field}
            />
          )}
        />
        <Button className="coche--form--button" type="submit">
          Guardar
        </Button>
      </div>
      <div className="coche--form--column">
        <Controller
          name="salida"
          control={control}
          render={({ field }) => (
            <TextField
              id="time"
              type="time"
              name="salida"
              label="H. Salida: "
              InputLabelProps={{ shrink: true }}
              {...field}
            />
          )}
        />
        <Controller
          name="llegada"
          control={control}
          render={({ field }) => (
            <TextField
              id="time"
              type="time"
              name="llegada"
              label="H. Llegada: "
              InputLabelProps={{ shrink: true }}
              {...field}
            />
          )}
        />
        <Controller
          name="fecha"
          control={control}
          render={({ field }) => (
            <TextField
              id="date"
              type="date"
              name="fecha"
              label="Fecha: "
              InputLabelProps={{ shrink: true }}
              {...field}
            />
          )}
        />
      </div>
    </form>
  );
}
