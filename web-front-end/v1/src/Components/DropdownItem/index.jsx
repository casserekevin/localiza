import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

export default function DropdownItem(props){
    
    return (
        <Link className='dropdown-item' to={props.to}>
            {props.text}
        </Link>
    )
}

