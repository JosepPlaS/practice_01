import { Coche } from "../data/Coche";

/**
 * Base de datos emulada.
 * @type {Storage}
 */
const fakeDB = window.localStorage;

/**
 * Variable utilizada para asignar id's
 * @type {number}
 */
var idCount = fakeDB.length + 1;

/**
 * Variable utilizada para que la "Base de datos" no este vacia
 * y poder hacer pruebas.
 * @type {Array<Coche>}
 */
const coches = [
  new Coche(1, "12:15", "13:45", "Carlos D", "Clio", "2022-03-10"),
  new Coche(2, "15:00", "15:00", "Ricard", "Peugeot", "2022-03-10"),
  new Coche(3, "11:00", "13:00", "Adrian", "Clio", "2022-03-14"),
];

/**
 * Esta funcion inicia la "Base de datos" y le coloca valores
 * por defecto si no existen
 * @returns {void}
 */
export function init() {
  if (fakeDB.length === 0) {
    coches.map((coche) =>
      fakeDB.setItem(coche.id.toString(), JSON.stringify(coche))
    );
    idCount = fakeDB.length + 1;
  }
}

/**
 * Funcion que devuelve todas las lineas almacenadas en la base de datos
 * @returns {Array<Coche>}
 */
export function getCoches() {
  const temp = [];
  for (let i = 0; i < 100; i++) {
    const coche = JSON.parse(fakeDB.getItem((i + 1).toString()));

    if (coche) {
      const { id, llegada, salida, conductor, vehiculo, fecha } = coche;
      temp.push(new Coche(id, llegada, salida, conductor, vehiculo, fecha));
    }
  }

  return temp;
}

/**
 * Funcion que a traves de la id, devuelve la linea correspondiente
 * de la base de datos
 * @param {string} idCoche
 * @returns {Coche}
 */
export function getCoche(idCoche) {
  const { id, llegada, salida, conductor, vehiculo, fecha } = JSON.parse(
    fakeDB.getItem(idCoche.toString())
  );
  return new Coche(id, llegada, salida, conductor, vehiculo, fecha);
}

/**
 * Funcion que inserta o edita un coche de la base de datos, segun su id
 * @param {Coche} coche
 * @returns {boolean}
 */
export function setCoche(coche) {
  if (coche.id) {
    fakeDB.setItem(coche.id.toString(), JSON.stringify(coche));
  } else {
    coche.id = idCount++;
    fakeDB.setItem(coche.id.toString(), JSON.stringify(coche));
  }
  return true;
}

/**
 * Funcion utilizada para borrar una linea de la base de datos.
 * @param {number} id
 */
export function deleteCoche(id) {
  fakeDB.removeItem(id.toString());
}
