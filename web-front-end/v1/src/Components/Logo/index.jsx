import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default class Logo extends Component {
    constructor(props){
        super(props)
        this.state = {
            positionX: this.props.positionX,
            positionY: this.props.positionY
        }
    }
    
    render() {
        let style = {}
        if(this.state.positionX === 'left'){
            style['justifyContent'] = 'flex-start'
        }
        else if(this.state.positionX === 'center'){
            style['justifyContent'] = 'center'
        }
        else if(this.state.positionX === 'right'){
            style['justifyContent'] = 'flex-end'
        }

        if(this.state.positionY === 'top'){
            style['alignItems'] = 'flex-start'
        }
        else if(this.state.positionY === 'center'){
            style['alignItems'] = 'center'
        }
        else if(this.state.positionY === 'down'){
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
}