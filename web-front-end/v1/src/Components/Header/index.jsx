import React from 'react'

import Logo from '../Logo'
import SearchBar from '../SearchBar'

import './style.css'


export default function Header(props) {

    return (
        <header className='header'>
            <div className='container-header'>
                <Logo positionX='left' positionY='center' />

                {props.isSearchable && (<SearchBar />)}

                {/* Navbar */}
                {props.children}
            </div>
        </header>
    )
}