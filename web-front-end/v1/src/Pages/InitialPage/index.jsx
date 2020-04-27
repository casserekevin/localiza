import React, { Component } from 'react'

import Header from '../../Components/Header'
import InitialContent from '../../Components/InitialContent'
import Footer from '../../Components/Footer'

import './style.css'

export default class InitialPage extends Component {
    render(){
        return (
            <div className='initialPage'>
                <Header isSearchable={false}/>
                {/* <NavBar/> */}
                <InitialContent/>
                <Footer/>
            </div>
        )
    }
}