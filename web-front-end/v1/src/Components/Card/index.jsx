import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import './style.css'
export default function Card(props) {
    const [oportunity, setOportunity] = useState(props.oportunity)

    return (
        <div className='card-container'>
            <div className='card-logo-name'>
                <FontAwesomeIcon icon={faCamera} size='2x' />
                <h4>{oportunity.name}</h4>
            </div>
            <div className='card-description-tags'>
                <p>{oportunity.description}</p>
                <p>{oportunity.tags.map((t, i) => (<span key={i} className='card-tag'>{t}</span>))}</p>
            </div>
            <div className='card-btn'><button className='card-apply-btn'>Candidatar-se</button></div>
        </div>
    )
}
