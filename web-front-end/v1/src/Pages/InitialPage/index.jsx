import React from 'react'

import Header from '../../Components/Header'
import InitialContent from '../../Components/InitialContent'
import Footer from '../../Components/Footer'
import NavBar from '../../Components/NavBar'
import NavItem from '../../Components/NavItem'
import DropdownMenu from '../../Components/DropdownMenu'
import DropdownItem from '../../Components/DropdownItem'

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