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
import { MdOutlineWatchLater } from 'react-icons/md'
import LocalizationText from '../components/LocalizationText'
import NavBar from '../components/NavBar'
import useSearchCity from '../hooks/useSearchCity'
import useCityData from '../hooks/useCityData'

export default function App() {
  const { cityData, getCityData } = useCityData()
  const { searchCity, setOnChange } = useSearchCity()

  return (
    <div className='main'>
      <NavBar 
        className='navbar' 
        searchOnClick={getCityData}
        searchCity={searchCity}
        searchOnChange={setOnChange}
      />
      <ComponentWrapper className='wrapped-content1'>
        <LineItemWeather
          label='Velocidade do vento:'
          item={`${cityData?.current?.wind_kph}km/h`}>
          <BiWind size={35} />
        </LineItemWeather>
        <LineItemWeather
          label='Direção do vento:'
          item={cityData?.current?.wind_dir}>
          <GiWindsock size={35} />
        </LineItemWeather>
        <LineItemWeather
          label='Precipitação:'
          item={`${cityData?.current?.precip_mm}mm`}>
          <BsCloudRain size={35} />
        </LineItemWeather>
        <LineItemWeather
          label='Umidade:'
          item={`${cityData?.current?.humidity}%`}>
          <WiHumidity size={35} />
        </LineItemWeather>
        <LineItemWeather
          label='Índice UV:'
          item={cityData?.current?.uv}>
          <TbUvIndex size={35} />
        </LineItemWeather>
      </ComponentWrapper>
      <LocalizationText
        city={cityData?.location?.name}
        state={cityData?.location?.region}
        country={cityData?.location?.country}
        className='wrapped-content4'
      />
      <ComponentWrapper className='wrapped-content2'>
        <LineItemWeather
          label='Temperatura:'
          item={`${cityData?.current?.temp_c}°C`}>
          <BsThermometerHalf size={35} />
        </LineItemWeather>
        <LineItemWeather
          label='Sensação Térmica:'
          item={`${cityData?.current?.feelslike_c}°C`}>
          <PiThermometerBold size={35} />
        </LineItemWeather>
        <LineItemWeather
          label={cityData?.current?.is_day ? 'Dia' : 'Noite'}>
          <BiSun size={35} />
        </LineItemWeather>
      </ComponentWrapper>
      <ComponentWrapper className='wrapped-content3'>
        <LineItemWeather
          label='Última atualização:'
          item={cityData?.current?.last_updated}>
          <MdOutlineWatchLater size={35} />
        </LineItemWeather>
        <LineItemWeather
          label='ICON'
          item={cityData?.current?.condition.text}>
        </LineItemWeather>
      </ComponentWrapper>
    </div>
  )
}