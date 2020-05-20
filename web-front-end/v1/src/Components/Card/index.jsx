import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import './style.css'
export default function Card(props) {
    const [oportunity, setOportunity] = useState(props.oportunity)

    return (
        <div className='card-container'>
            <div className='card-logo-name flex-centralizado'>
                <FontAwesomeIcon icon={faCamera} size='2x' />
                <h4>{oportunity.company}</h4>
            </div>
            <div className='card-description-tags'>
                <p className='nome-op'>{oportunity.name}</p>
                <p>{oportunity.description}</p>
                <p>{oportunity.tags.map((t, i) => (<span key={i} className='card-tag'>{t}</span>))}</p>
            </div>
            <div className='card-btn flex-centralizado'><button className='card-apply-btn'>Candidate-se</button></div>
        </div>
    )
}
