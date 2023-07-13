import './ComponentWrapper.css'
import LineItemWeather from './LineItemWeather'


export default function ComponentWrapper(props) {
    return (
        <div className={props.className}>
            <div className={`wrapper ${props.innerClassName}`}>
                {props.children}
            </div>
        </div>
    )
}