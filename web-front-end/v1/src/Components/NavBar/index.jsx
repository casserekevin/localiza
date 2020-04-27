import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default class NavBar extends Component {

    render() {
        return (
            <header className='header'>
                <div className='container-header'>
                    <span className='logo-header'>Localiza</span>
                    <nav className='nav-bar'>
                        <ul className='nav-links'>
                            <li className='nav-link left-line'><Link to='/cadastrar-pessoa'>Increver-se</Link></li>
                            <li className='nav-link'><Link to='/login'>Entrar</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}