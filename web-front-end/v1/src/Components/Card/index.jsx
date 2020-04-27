import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import './style.css'
export default class Card extends Component {
    state = { ...this.props.company }

    render() {
        return (
            <div className='card-container'>
                <div className='card-logo-name'>
                    <FontAwesomeIcon icon={faCamera} size='2x' />
                    <h4>{this.state.name}</h4>
                </div>
                <div className='card-description-tags'>
                    <p>{this.state.description}</p>
                    <p>{this.state.tags.map(t => (<span className='card-tag'>{t}</span>))}</p>
                </div>
                <div className='card-btn'><button className='card-apply-btn'>Candidatar-se</button></div>
            </div>
        )
    }
}
