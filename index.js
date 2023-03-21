require('dotenv');
const axios = require('axios');
// console.log(process.env)
const api_key = process.env.WEATHER_API;

axios.get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=paris&aqi=no`)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
