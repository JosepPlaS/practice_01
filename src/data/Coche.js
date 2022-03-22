/**
 * Clase para crear un objeto coche
 * @example
 * coche = new Coche({
 *  id: 0,
 *  salida: "10:20",
 *  llegada: "18:00",
 *  conductor: "Pedro",
 *  vehiculo: "Clio",
 *  fecha: "2022-01-01"});
 */
export class Coche {
  /**
   *
   * @param {number} id
   * @param {string} salida
   * @param {string} llegada
   * @param {string} conductor
   * @param {string} vehiculo
   * @param {string} fecha
   */
  constructor(id, salida, llegada, conductor, vehiculo, fecha) {
    this.id = id;
    this.salida = salida;
    this.llegada = llegada;
    this.conductor = conductor;
    this.vehiculo = vehiculo;
    this.fecha = fecha;
  }

  getInfo() {
    return this.conductor + " - " + this.vehiculo;
  }
}
