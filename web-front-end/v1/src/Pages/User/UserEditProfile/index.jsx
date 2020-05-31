import React from 'react'
import { Redirect } from 'react-router-dom'

import Header from '../../../Components/Header'
import UserFormField from '../../../Components/UserFormField'
import './style.css'

const UserEditProfile = (props) => {
    const { user, match: { url } } = props

    let action = undefined
    !user.loggedin ? (action = <Redirect to={`/${url}/sign_in`} />)
        : (action = (
            <div>
                <Header />
                <h1 className='edit-header'>Edite o seu perfil profissional</h1>
                <UserFormField />
            </div>
        ))

    return (
        action
    )
}

export default UserEditProfile