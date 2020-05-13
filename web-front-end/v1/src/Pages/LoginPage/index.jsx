import React, { Component } from 'react'

import Login from '../../Components/Login'

import './style.css'

export default class LoginPage extends Component {
    render(){
        return (
            <div className='loginPage'>
                <Login/>
            </div>
        )
    }
}