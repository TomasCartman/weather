import './SearchComponent.css'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchComponent(props) {
    return (
        <div className='search-component'>
            <input 
                type="text" 
                id='search' 
                placeholder='Digite a cidade a ser pequisada' 
                value={props.searchCity} 
                onChange={e => props.searchOnChange(e.target.value)} 
            />
            <span className='icon' onClick={() => props.searchOnClick(props.searchCity)} ><AiOutlineSearch size={25} /></span>
        </div>
    )
}