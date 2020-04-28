import React, { Component } from 'react'

import Header from '../../Components/Header'
import InitialContent from '../../Components/InitialContent'
import Footer from '../../Components/Footer'
import NavBar from '../../Components/NavBar'
import NavItem from '../../Components/NavItem'

import './style.css'

export default class InitialPage extends Component {
    render(){
        return (
            <div className='initialPage'>
                <Header isSearchable={false}> 
                    <NavBar>
                        <NavItem text='Entrar' to='/login'/>
                        <NavItem text='Inscrever-se' to='/cadastrar-pessoa'/>
                    </NavBar>
                </Header>
                <InitialContent/>
                <Footer/>
            </div>
        )
    }
}