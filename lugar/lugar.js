const axios = require('axios');

let getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let location = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeUrl}&key=543a02be40e041e59b7c3879f02ec78c`);

    if (location.data.total_results === 0) {
        throw new Error(`No hay resultado para la ciudad ${direccion}`);
    }
    let loc = location.data.results[0];
    let nombre = loc.formatted;
    let lot = loc.geometry.lat;
    let lng = loc.geometry.lng;

    return {
        direccion: nombre,
        lat: lot,
        lng
    }
}

module.exports = {
    getLugarLatLng
}