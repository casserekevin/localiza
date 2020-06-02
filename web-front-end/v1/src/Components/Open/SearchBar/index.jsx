import React from 'react'
import { FaSearch } from 'react-icons/fa'

import './style.css'

export default function SearchBar() {
    return (
        <div className='container-search-bar flex-centralizado'>
            <div className='search-box'>
                <input className='search-txt' type='text' placeholder='Pesquise' maxLength='25' />
                <span className='search-btn flex-centralizado'><FaSearch color='black' size='20px' /></span>
            </div>
        </div>
    )
}