let idCount = 3;
const coches = [
    {
        id: 1,
        salida: '12:15',
        llegada: '13:45',
        conductor: 'Carlos D',
        vehiculo: 'Clio',
        fecha: '2022-03-10'
    },
    {
        id: 2,
        salida: '15:00',
        llegada: '15:00',
        conductor: 'Ricard',
        vehiculo: 'Peugeot',
        fecha: '2022-03-10'
    },
    {
        id: 3,
        salida: '11:00',
        llegada: '13:00',
        conductor: 'Adrian',
        vehiculo: 'Clio',
        fecha: '2022-03-14'
    }
];

function getNewId(){
    idCount += 1;
    return idCount;
}

export function getCoches(){
    return coches;
}

export function getCoche(id){
    return coches.find(coche => coche.id == id)
}

export function addNewCoche(){
    const newCar = 
    {
        id: getNewId(),
        salida: '',
        llegada: '',
        conductor: '',
        vehiculo: '',
        fecha: ''
    }

    coches.push(
        
    );
    
    return newCar;
}