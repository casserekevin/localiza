import React from 'react'
import { Redirect } from 'react-router-dom'


const UserDashboard = (props) => {
    const { user, match: { url } } = props 

    let action = undefined
    !user.loggedin && (action = <Redirect to={`/${url}/sign_in`}/>)
    !user.perfilCompleto ? (action = <Redirect to={`/${url}/${user.id}/edit`}/>)
                            : (action = (
                                <div> User Dashboard</div>
                            ))

    return (
        action
    )
}

export default UserDashboard
