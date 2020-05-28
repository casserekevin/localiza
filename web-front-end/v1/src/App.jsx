import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import InitialPage from './Pages/InitialPage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import MainPage from './Pages/MainPage'
import CompanyProfilePage from './Pages/CompanyProfilePage'

import './global.css'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={InitialPage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/main' component={MainPage} />
                <Route path='/user/sign_up' render={(props) => <SignupPage {...props} type='user'/>}/>
                <Route path='/company/sign_up' render={(props) => <SignupPage {...props} type='company'/>}/>
                <Route path='/comp_profile' component={CompanyProfilePage} />
            </Switch>
        </Router>
    )
}

export default App