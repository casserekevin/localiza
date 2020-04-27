import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default class InitialContent extends Component {

    render() {
        return (
            <div className='initialContent'>
                <div className='container-initialContent'>
                    <div className='internal-container-initialContent'>
                        <h1 className='first-publicity'>Oportunidade para todos.</h1>
                        <h4 className='second-publicity'>Escolha a sua! É rápido e fácil!</h4>
                        <Link to='/main'><button className='btn-comece-agora'>Comece agora</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}