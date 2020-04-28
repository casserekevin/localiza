import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default class NavBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            to: this.props.to
        }
    }

    render() {
        let button_value =  (<button className='nav-item-btn'>
                                {this.props.children} {this.props.text}
                            </button>)
        let span_value =    (<span className='nav-item-span'>
                                {this.props.text}
                            </span>)

        let item
        if(this.props.children){
            (!! this.state.to)
                ?   (item = <Link to={ this.state.to }> { button_value } </Link>) 
                :   (item = button_value)                                 
        }
        else{
            (!! this.state.to)
                ?   (item = <Link to={ this.state.to }> { span_value } </Link>) 
                :   (item = span_value)
        }


        return (
            <li className='nav-item'>
                { item } 
            </li>
        )
    }
}