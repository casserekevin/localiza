import React, { Component } from 'react'
//import { Link } from 'react-router-dom'

import './style.css'

export default class NavBar extends Component {

    render() {
        return (
            <footer className='footer'>
                <div className='container-footer'>
                    <div className='logo-footer'>
                        <span>Localiza</span>
                    </div>
                    <div className='content-footer'>
                        <div>footer-content</div>
                        <div>Direitos Autorais</div>
                    </div>
                    <div className='social-medias'>social-medias</div>
                </div>
            </footer>
        )
    }
}