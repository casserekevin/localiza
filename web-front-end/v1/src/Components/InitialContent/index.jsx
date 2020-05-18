import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default function InitialContent() {
    return (
        <div className='initialContent flex-centralizado'>
            <div className='container-initialContent flex-centralizado'>
                <div className='internal-container-initialContent flex-centralizado'>
                    <h1 className='first-publicity'>Oportunidade para todos.</h1>
                    <h4 className='second-publicity'>Escolha a sua! É rápido e fácil!</h4>
                    <Link to='/main'><button className='btn-comece-agora'>Comece agora</button></Link>
                </div>
            </div>
        </div>
    )
}