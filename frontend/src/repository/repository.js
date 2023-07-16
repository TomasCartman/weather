import weatherApi from './weatherApi'

export default function getWeatherInfoByCity(cityName, callback) {
    return weatherApi(cityName, callback)
}