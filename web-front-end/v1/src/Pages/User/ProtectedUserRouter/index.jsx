import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import TestPage from '../../TestPage'
import UserValidation from '../UserValidation'
import UserDashboard from '../UserDashboard'
import UserEditProfile from '../UserEditProfile'

const ProtectedUserRouter = ({match: {url}}) => {
    let user = {
        loggedin: true,
        perfilCompleto: false,
        id: 1234
    }

    return (
        user.loggedin ? (
            <Switch>
                <Route exact path={`${url}/${user.id}/edit`} render={(props) => <UserEditProfile user={user} {...props}/>}/>
                <Route exact path={`${url}/dashboard`} render={(props) => <UserDashboard user={user} {...props}/>} />
                <Route path={`${url}/`} render={(props) => <UserValidation user={user} {...props}/>
                    
                }/>
            </Switch>  
        ) : (
            <Redirect to={`${url}/sign_in`}/>
        )
        
    )
}

export default ProtectedUserRouter