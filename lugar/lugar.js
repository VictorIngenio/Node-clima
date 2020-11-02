const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${ encodedUrl }&appid=a715439c320cd6a488d732f1869628a4`
    });

    const resp = await instance.get();

    const data = resp.data;
    const direction = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direction,
        lat,
        lng
    };
};

module.exports = {
    getLugarLatLng
};