import './LineItemWeather.css'

export default function LineItemWeather(props) {
    return (
        <div className='item-box'>
            <p>{props.children}</p>
            <p className={props.icon ? '' :'item-label'}>{props.label}</p>
            <p className='item'>{props.item}</p>
        </div>
    )
}