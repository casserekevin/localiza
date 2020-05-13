import React, { Component } from 'react'

import Signup from '../../Components/Signup'

import './style.css'

export default class SignupPage extends Component {
    render(){
        return (
            <div className='signupPage'>
                <Signup/>
            </div>
        )
    }
}