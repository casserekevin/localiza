import React, { Component } from 'react'

import Logo from '../Logo'
import SearchBar from '../SearchBar'

import './style.css'

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
                            <li className='nav-link-main'><button>Início</button></li>
                            <li className='nav-link-main'><button>Mensagens</button></li>
                            <li className='nav-link-main'><button>Vagas</button></li>
                            <li className='nav-link-main'><button>Notificações</button></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}