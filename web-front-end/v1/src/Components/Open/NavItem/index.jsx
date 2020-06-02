import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default function NavItem(props) {

    const [open, setOpen] = useState(false)

    let item
    if (props.icon) {
        (!!props.to)
            ? (item = <Link to={props.to}> {
                (<button className='nav-item-btn flex-centralizado'>
                    {props.icon} {props.text}
                </button>)
            }
            </Link>)

            : (item = <button className='nav-item-btn flex-centralizado' onClick={() => setOpen(!open)}>
                {props.icon} {props.text}
            </button>)
    }
    else {
        (!!props.to)
            ? (item = <Link to={props.to}> {
                (<span className='nav-item-span flex-centralizado'>
                    {props.text}
                </span>)
            }
            </Link>)
            : (item = <span className='nav-item-span' onClick={() => setOpen(!open)}>
                {props.text}
            </span>)
    }

    return (
        <li className='nav-item flex-centralizado'>
            {item}

            {open && props.children}
        </li>
    )
}