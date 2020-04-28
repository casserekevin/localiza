import React from 'react'

import './style.css'


export default function DropdownMenu(props){

    return (
        <div className='dropdown'>
            {props.children}
        </div>
    )
}