require('dotenv').config();
const axios = require('axios');
const env = process.env;

const getWeather = async city => {
    return await axios.get('http://api.weatherstack.com/current', {
        params: {
            access_key: env.WEATHERSTACK_API_KEY,
            query: city
        }
    }).then(response => response.data)
}

getWeather('Bishkek').then(response => console.log(response))