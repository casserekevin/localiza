import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import InitialPage from './Pages/InitialPage'
import SigninPage from './Pages/SigninPage'
import SignupPage from './Pages/SignupPage'
import ProtectedCompanyPage from './Pages/Company/ProtectedCompanyPage'
import CompanyProfilePage from './Pages/CompanyProfilePage'

import TestPage from './Pages/TestPage'

import './global.css'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={InitialPage} />
                
                <Route exact path='/user/sign_in' render={(props) => <SigninPage {...props} type='user'/>}/>
                <Route exact path='/user/sign_up' render={(props) => <SignupPage {...props} type='user'/>}/>
                
                <Route exact path='/company/sign_in' render={(props) => <SigninPage {...props} type='company'/> }/>
                <Route exact path='/company/sign_up' render={(props) => <SignupPage {...props} type='company'/>}/>
            
                <Route path='/company' render={(props) => <ProtectedCompanyPage {...props}/>}/>
                    
                    
               
                <Route path='/comp_profile' component={CompanyProfilePage} />
                <Route path='/test' component={TestPage} />
            </Switch>
        </Router>
    )
}

export default App