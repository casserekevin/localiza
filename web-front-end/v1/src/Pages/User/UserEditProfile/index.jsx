import React from 'react'
import { Redirect } from 'react-router-dom'

import Header from '../../../Components/Open/Header'
import UserForm from '../../../Components/User/UserForm'
import './style.css'

const UserEditProfile = (props) => {
    const { user, match: { url } } = props

    let action = undefined
    !user.loggedin ? (action = <Redirect to={`/${url}/sign_in`} />)
        : (action = (
            <div>
                <Header />
                <h1 className='edit-header'>Edite o seu perfil profissional</h1>
                <UserForm />
            </div>
        ))

    return (
        action
    )
}

export default UserEditProfile