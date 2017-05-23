import Axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=90b0b659a72c332236084d5a9725b7e4';

export default {
    getTemp(location) {
        const encodedLocation = encodeURIComponent(location);
        const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return Axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (err) {
            throw new Error(err.response.data.message);
        });
    }
}
