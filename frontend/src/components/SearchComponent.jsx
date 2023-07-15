import './SearchComponent.css'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import useSearchCity from '../hooks/useSearchCity'

export default function SearchComponent(props) {
    const { setOnChange, searchCity } = useSearchCity()

    return (
        <div className='search-component'>
            <input 
                type="text" 
                id='search' 
                placeholder='Digite a cidade a ser pequisada' 
                value={searchCity} 
                onChange={e => setOnChange(e.target.value)} 
            />
            <span className='icon'><AiOutlineSearch size={25} /></span>
        </div>
    )
}