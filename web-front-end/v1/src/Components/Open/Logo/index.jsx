import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default function Logo(props) {

    const [posX, setPosX] = useState(props.positionX)
    const [posY, setPosY] = useState(props.positionY)

    let style = {}
    if (posX === 'left') {
        style['justifyContent'] = 'flex-start'
    }
    else if (posX === 'center') {
        style['justifyContent'] = 'center'
    }
    else if (posX === 'right') {
        style['justifyContent'] = 'flex-end'
    }

    if (posY === 'top') {
        style['alignItems'] = 'flex-start'
    }
    else if (posY === 'center') {
        style['alignItems'] = 'center'
    }
    else if (posY === 'down') {
        style['alignItems'] = 'flex-end'
    }

    return (
        <div className='logo' style={style}>
            <span >
                <Link to='/main'>Localiza</Link>
            </span>
        </div>
    )
}