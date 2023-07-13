import weatherApi from '../../../backend/weatherApi'

export default function getWeatherInfoByCity(cityName, callback) {
    weatherApi(cityName, callback)
}