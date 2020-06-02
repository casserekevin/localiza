import React, { useState } from 'react'

import './style.css'

export default function NavBar(props) {
    return (
        <nav className='navbar'>
            <ul className='navbar-itens'>
                {props.children}
            </ul>
        </nav>
    )
}