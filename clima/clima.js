const axios = require('axios');

const getClima = async(lat, lng) => {

    let api = 'bc1d2563d4e848bbf0e44e6b68879e9d';

    let uri = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api}&units=metric`;

    let clima = await axios.get(uri);

    return clima.data.main.temp;
}


module.exports = {
    getClima
}