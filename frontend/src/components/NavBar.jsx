import './NavBar.css'
import React from 'react'
import SearchComponent from './SearchComponent'

export default function NarBar(props) {
    return (
        <nav className={props.className}>
            <SearchComponent
                searchOnClick={props.searchOnClick}
                searchCity={props.searchCity}
                searchOnChange={props.searchOnChange}
            />
        </nav>
    )
}