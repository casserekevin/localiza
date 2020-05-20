import React, { useState } from 'react'
//import { Link } from 'react-router-dom'

import Logo from '../Logo'

import './style.css'

export default function NavBar() {
    return (
        <footer className='footer flex-centralizado'>
            <div className='container-footer'>
                <Logo positionX='center' positionY='top' />
                <div className='content-footer'>
                    <div>footer-content</div>
                    <div>Direitos Autorais</div>
                </div>
                <div className='social-medias'>social-medias</div>
            </div>
        </footer>
    )
}