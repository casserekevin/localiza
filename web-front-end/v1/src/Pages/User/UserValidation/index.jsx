import React from 'react'
import { Redirect } from 'react-router-dom'

const UserValidation = (props) => {
    const {user, match: {url}} = props

    return (
        !user.perfilCompleto ? ( <Redirect to={`${url}/${user.id}/edit`}/>)
                                : ( <Redirect to={`${url}/dashboard`}/>)
    )
}

export default UserValidation
