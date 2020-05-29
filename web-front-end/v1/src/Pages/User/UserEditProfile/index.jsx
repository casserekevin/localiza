import React from 'react'
import { Redirect } from 'react-router-dom'
import './style.css'

const UserEditProfile = (props) => {
    const { user, match: { url } } = props 

    let action = undefined
    !user.loggedin   ? (action = <Redirect to={`/${url}/sign_in`}/>)
                        : (action = (
                            <div>
                                User edit profile
                            </div>
                        ))

    return (
        action
    )
}

export default UserEditProfile