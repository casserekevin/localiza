import React, { Component } from 'react'

import './style.css'

export default class NavBar extends Component {

    render() {
        return (
            <nav className='navbar'>
                <ul className='navbar-itens'>
                    { this.props.children }
                </ul>
            </nav>
        )
    }
}