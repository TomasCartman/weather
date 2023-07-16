import { useState } from 'react'
import weatherApi from '../repository/repository'
import useSearchCity from './useSearchCity'

const mockResponse = {
    "location": {
        "name": "Sao Paulo",
        "region": "Sao Paulo",
        "country": "Brazil"
    },
    "current": {
        "last_updated": "2023-07-16 14:45",
        "temp_c": 23.0,
        "is_day": 1,
        "condition": {
            "text": "Sol",
            "code": 1000
        },
        "wind_kph": 13.0,
        "wind_dir": "W",
        "precip_mm": 0.0,
        "humidity": 41,
        "feelslike_c": 23.9,
        "uv": 6.0
    }
}

export default function useCityData() {
    const [cityData, setCityData] = useState(mockResponse)

    const getCityData = searchCity => {
        weatherApi(searchCity)
            .then(resp => resp.json())
            .then(resp => setCityData(resp))
    }

    return {
        cityData,
        getCityData
    }
}