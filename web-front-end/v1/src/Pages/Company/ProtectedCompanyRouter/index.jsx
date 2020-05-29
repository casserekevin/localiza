import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import TestPage from '../../TestPage'
import CompanyValidation from '../CompanyValidation'
import CompanyDashboard from '../CompanyDashboard'
import CompanyEditProfile from '../CompanyEditProfile'

const ProtectedCompanyRouter = ({match: {url}}) => {
    let company = {
        loggedin: false,
        perfilCompleto: true,
        id: 1234
    }

    return (
        company.loggedin ? (
            <Switch>
                <Route exact path={`${url}/${company.id}/edit`} render={(props) => <CompanyEditProfile company={company} {...props}/>}/>
                <Route exact path={`${url}/dashboard`} render={(props) => <CompanyDashboard company={company} {...props}/>} />
                <Route path={`${url}/`} render={(props) => <CompanyValidation company={company} {...props}/>
                    
                }/>
            </Switch>  
        ) : (
            <Redirect to={`${url}/sign_in`}/>
        )
        
    )
}

export default ProtectedCompanyRouter