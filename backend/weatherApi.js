require('dotenv').config({ path: `${__dirname}/.env` })

export default function getWeatherInfo(city, callback) {
    const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}&lang=${process.env.LANG}`
    fetch(url)
        .then(resp => resp.json())
        .then(resp => callback(resp))
}



/*
    INFORMAÇÕES ÚTEIS:

    "location"
    - Nome da cidade
    - Região/Estado
    - País

    "current"
    - Ultima atualização
    - "condition"
        Texto (parcialmente nublado)
        Ícone
        
    - Temperatura em Celsius
    - Sensação térmica
    - É dia/noite


    - Velocidade do vento *
    - Direção do vendo *
    - Precipitação
    - Umidade
    - Raios UV
*/