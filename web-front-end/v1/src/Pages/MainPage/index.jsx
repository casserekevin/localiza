import React, { Component, Fragment } from 'react'

import Header from '../../Components/Header'
import Feed from '../../Components/Feed'
import Profile from '../../Components/Profile'
import Messager from '../../Components/Messager'
import NavBar from '../../Components/NavBar'
import NavItem from '../../Components/NavItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'

export default class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <Header isSearchable={true}> 
                    <NavBar>
                        <NavItem text='Início' to='/main'> 
                            <FontAwesomeIcon icon={faHome} size='2x'/>
                        </NavItem>
                        <NavItem text='Mensagens'> 
                            <FontAwesomeIcon icon={faComments} size='2x'/>
                        </NavItem>
                        <NavItem text='Vagas'> 
                            <FontAwesomeIcon icon={faSuitcase} size='2x'/>
                        </NavItem>
                        <NavItem text='Notificações'> 
                            <FontAwesomeIcon icon={faBell} size='2x'/>
                        </NavItem>
                    </NavBar>
                </Header>
                <Feed />
                <Profile />
                <Messager />
            </Fragment>
        )
    }
}