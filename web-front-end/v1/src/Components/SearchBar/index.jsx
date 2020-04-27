import React, { Component } from 'react'
//import { Link } from 'react-router-dom'

import './style.css'

export default class SearchBar extends Component {
    render() { 

        return (
            <div className='container-search-bar'>
                <input className='search-bar' type='text' placeholder='pesquisar' />
            </div>
        )
    }
}