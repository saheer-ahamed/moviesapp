import React from 'react'
import './Header.css'
import { UilSearch } from '@iconscout/react-unicons'

const Header = () => {
    return (
        <header>
            <h2>WOOKIE MOVIES</h2>
            <div className="search">
                <UilSearch className="search-icon" size="30" />
                <input type="text" />
            </div>
        </header>
    )
}

export default Header