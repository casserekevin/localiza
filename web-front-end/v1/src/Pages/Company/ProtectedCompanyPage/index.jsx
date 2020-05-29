import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import TestPage from '../../TestPage'

const ProtectedCompanyPage = ({match: {url}}) => {
    let loggedin = true

    return (
        loggedin ? (
            <>
                <Switch>
                    <Route exact path={`${url}/edit`} component={TestPage}/>
                    <Route exact path={`${url}/test1`} component={TestPage}/>
                    <Route path={`${url}/`} render={() => <Redirect to={`${url}/edit`}/>}/>
                </Switch>
            </>  
        ) : (
            <Redirect to={`${url}/sign_in`}/>
        )
        
    )
}

export default ProtectedCompanyPage