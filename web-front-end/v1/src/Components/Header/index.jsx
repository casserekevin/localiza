import React, { Component } from 'react'

import Logo from '../Logo'
import SearchBar from '../SearchBar'

import './style.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            isSearchable: this.props.isSearchable
        }
    }

    render() {
        return (
            <header className='header'>
                <div className='container-header'>
                    <Logo positionX='left' positionY='center'/>
                    
                    { this.state.isSearchable && ( <SearchBar /> ) }
                    <nav className='nav-bar-main'>
                        <ul className='nav-links-main'>
                            <li className='nav-link-main'>
                                <Link to='/main'>
                                    <button className='main-btns'>
                                        <FontAwesomeIcon icon={faHome} size='2x' transform='up-10 right-21' /> Inicio
                                </button>
                                </Link>
                            </li>
                            <li className='nav-link-main'>
                                <Link to='/main'>
                                    <button className='main-btns'>
                                        <FontAwesomeIcon icon={faComments} size='2x' transform='up-10 right-32' /> Mensagens
                                </button>
                                </Link>
                            </li>
                            <li className='nav-link-main'>
                                <Link to='/main'>
                                    <button className='main-btns'>
                                        <FontAwesomeIcon icon={faSuitcase} size='2x' transform='up-10 right-22' /> Vagas
                                </button>
                                </Link>
                            </li>
                            <li className='nav-link-main'>
                                <Link to='/main'>
                                    <button className='main-btns'>
                                        <FontAwesomeIcon icon={faBell} size='2x' transform='up-10 right-31' /> Notificações
                                </button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}