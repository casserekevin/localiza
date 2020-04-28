import React, { Component } from 'react'

import Header from '../../Components/Header'
import InitialContent from '../../Components/InitialContent'
import Footer from '../../Components/Footer'
import NavBar from '../../Components/NavBar'
import NavItem from '../../Components/NavItem'
import DropdownMenu from '../../Components/DropdownMenu'
import DropdownItem from '../../Components/DropdownItem'

import './style.css'

export default class InitialPage extends Component {
    render(){
        return (
            <div className='initialPage'>
                <Header isSearchable={false}> 
                    <NavBar>
                        <NavItem text='Inscrever-se'>
                            <DropdownMenu > 
                               <DropdownItem text='Pessoa' to='/cadastrar-pessoa'/>
                               <DropdownItem text='Empresa' to='/cadastrar-pessoa'/>
                            </DropdownMenu>
                        </NavItem>
                        <NavItem text='Entrar' to='/login'/>
                    </NavBar>
                </Header>
                <InitialContent/>
                <Footer/>
            </div>
        )
    }
}