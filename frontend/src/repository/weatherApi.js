export default function getWeatherInfo(city, callback) {
    const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&lang=${process.env.REACT_APP_LANG}`
    return fetch(url)
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