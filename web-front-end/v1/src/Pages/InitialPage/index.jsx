import React, { Component } from 'react'

import NavBar from '../../Components/NavBar'
import InitialContent from '../../Components/InitialContent'
import Footer from '../../Components/Footer'

import './style.css'

export default class InitialPage extends Component {
    render(){
        return (
            <div className='initialPage'>
                <NavBar/>
                <InitialContent/>
                <Footer/>
            </div>
        )
    }
}