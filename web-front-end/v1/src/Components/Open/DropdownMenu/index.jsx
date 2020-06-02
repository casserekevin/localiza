import React from 'react'

import './style.css'


export default function DropdownMenu(props){

    let style = {}
    style['width'] = props.width

    return (
        <div className='dropdown' style={style}>
            {props.children}
        </div>
    )
}