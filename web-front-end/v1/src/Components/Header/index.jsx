import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className='header-main'>
                <div className='container-header-main'>
                    <span className='logo-header'><Link to='/main'>Localiza</Link></span>
                    <input className='nav-search-main' type='text' placeholder='pesquisar' />
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