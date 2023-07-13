import './App.css'
import ComponentWrapper from '../components/ComponentWrapper'
import LineItemWeather from '../components/LineItemWeather'
import { BsThermometerHalf } from 'react-icons/bs'
import { PiThermometerBold } from 'react-icons/pi'
import { BiSun } from 'react-icons/bi'
import { BiWind } from 'react-icons/bi'
import { GiWindsock } from 'react-icons/gi'
import { BsCloudRain } from 'react-icons/bs'
import { WiHumidity } from 'react-icons/wi'
import { TbUvIndex } from 'react-icons/tb'
import LocalizationText from '../components/LocalizationText'

export default function App() {
  return (
    <div className='main'>
      <ComponentWrapper className='wrapped-content3'>
        <LineItemWeather label='Última atualização:' item='16:23'><TbUvIndex size={35} /></LineItemWeather>
        <LineItemWeather label='ICON' item='Parcialmente Nublado'></LineItemWeather>
      </ComponentWrapper>
      <LocalizationText city='Fortaleza' state='Ceará' country='Brasil' />
      <ComponentWrapper className='wrapped-content2 container-flex-start-end'>
        <LineItemWeather label='Temperatura:' item='30°C'><BsThermometerHalf size={35} /></LineItemWeather>
        <LineItemWeather label='Sensação Térmica:' item='32°C'><PiThermometerBold size={35} /></LineItemWeather>
        <LineItemWeather label='Dia'><BiSun size={35} /></LineItemWeather>
      </ComponentWrapper>
      <ComponentWrapper className='wrapped-content1'>
        <LineItemWeather label='Velocidade do vento:' item='5km/h'><BiWind size={35} /></LineItemWeather>
        <LineItemWeather label='Direção do vento' item='NNE'><GiWindsock size={35} /></LineItemWeather>
        <LineItemWeather label='Precipitação:' item='45mm'><BsCloudRain size={35} /></LineItemWeather>
        <LineItemWeather label='Umidade:' item='65%'><WiHumidity size={35} /></LineItemWeather>
        <LineItemWeather label='Índice UV:' item='8'><TbUvIndex size={35} /></LineItemWeather>
      </ComponentWrapper>

    </div>
  )
}