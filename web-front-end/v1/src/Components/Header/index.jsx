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

                    {/* Navbar */}
                    {this.props.children}
                </div>
            </header>
        )
    }
}