const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el Clima',
        demand: true
    }
}).argv;

let getInfo = async(dire) => {

    try {
        let getLocation = await getLugarLatLng(dire);

        let getCli = await getClima(getLocation.lat, getLocation.lng);

        return `El clima en ${getLocation.direccion} es de ${getCli}° `;
    } catch (e) {
        return `No se pudo determinar el clima en ${dire}`;
    }

}

getInfo(argv.direccion).then(console.log).catch(console.log);

// getClima(-12.0621065, -77.0365256).then(console.log).catch(console.log);