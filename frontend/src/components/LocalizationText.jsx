import './LocalizationText.css'
import React from 'react'

export default function LocalizationText(props) {
    return (
        <div className='place-wrapper'>
            <h1 className='city'>{props.city}</h1>
            <h3 className='state'>{props.state}</h3>
            <p className='country'>{props.country}</p>
        </div>
    )
}