import React from 'react'
//import { Link } from 'react-router-dom'

import './style.css'

export default function SearchBar() {
    return (
        <div className='container-search-bar flex-centralizado'>
            <input className='search-bar' type='text' placeholder='pesquisar' />
        </div>
    )
}