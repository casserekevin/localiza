import React from 'react'

import Header from '../../Components/Open/Header'
import InitialContent from '../../Components/Open/InitialContent'
import Footer from '../../Components/Open/Footer'
import NavBar from '../../Components/Open/NavBar'
import NavItem from '../../Components/Open/NavItem'
import DropdownMenu from '../../Components/Open/DropdownMenu'
import DropdownItem from '../../Components/Open/DropdownItem'

import './style.css'

export default function InitialPage() {
    return (
        <div className='initialPage'>
            <Header isSearchable={false}>
                <NavBar>
                    <NavItem text='Inscrever-se'>
                        <DropdownMenu width='149px'>
                            <DropdownItem text='Como Pessoa' to='/user/sign_up'/>
                            <DropdownItem text='Como Empresa' to='/company/sign_up' />
                        </DropdownMenu>
                    </NavItem>
                    <NavItem text='Entrar'>
                        <DropdownMenu width='149px'>
                            <DropdownItem text='Como Pessoa' to='/user/sign_in' />
                            <DropdownItem text='Como Empresa' to='/company/sign_in' />
                        </DropdownMenu>
                    </NavItem>    
                </NavBar>
            </Header>
            <InitialContent />
            <Footer />
        </div>
    )
}