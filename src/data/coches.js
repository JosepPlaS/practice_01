const fakeDB = window.localStorage;

const coches = [
  {
    id: 1,
    salida: "12:15",
    llegada: "13:45",
    conductor: "Carlos D",
    vehiculo: "Clio",
    fecha: "2022-03-10",
  },
  {
    id: 2,
    salida: "15:00",
    llegada: "15:00",
    conductor: "Ricard",
    vehiculo: "Peugeot",
    fecha: "2022-03-10",
  },
  {
    id: 3,
    salida: "11:00",
    llegada: "13:00",
    conductor: "Adrian",
    vehiculo: "Clio",
    fecha: "2022-03-14",
  },
];

export function init() {
  coches.map((coche) => fakeDB.setItem(coche.id, JSON.stringify(coche)));
}

export function getCoches() {
  const temp = [];
  for (let i = 0; i < fakeDB.length; i++) {
    const coche = JSON.parse(fakeDB.getItem(i + 1));
    coche && temp.push(coche);
  }

  return temp;
}

export function getCoche(id) {
  return JSON.parse(fakeDB.getItem(id));
}

export function setCoche(coche) {
  console.log(fakeDB.length);
  fakeDB.setItem(coche.id, JSON.stringify(coche));
  console.log("Se ha actualizado el coche");
}
