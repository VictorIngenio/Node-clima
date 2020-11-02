const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(err => {
//         console.log('Error estatus: ', err.response.status);
//         console.log('Mensaje: ', err.response.statusText);
//     });

// clima.getClima(40.71, -74.01)
//     .then(console.log)
//     .catch(err => {
//         console.log('Error estatus: ', err.response.status);
//         console.log('Mensaje: ', err.response.statusText);
//     });

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direction } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);