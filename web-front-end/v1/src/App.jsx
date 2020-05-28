import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import InitialPage from './Pages/InitialPage'
import SigninPage from './Pages/SigninPage'
import SignupPage from './Pages/SignupPage'
import MainPage from './Pages/MainPage'
import CompanyProfilePage from './Pages/CompanyProfilePage'

import TestPage from './Pages/TestPage'

import './global.css'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={InitialPage} />
                <Route path='/main' component={MainPage} />
                <Route path='/user/sign_in' render={(props) => <SigninPage {...props} type='user'/>}/>
                <Route path='/company/sign_in' render={(props) => <SigninPage {...props} type='company'/> }/>
                <Route path='/user/sign_up' render={(props) => <SignupPage {...props} type='user'/>}/>
                <Route path='/company/sign_up' render={(props) => <SignupPage {...props} type='company'/>}/>
                <Route path='/comp_profile' component={CompanyProfilePage} />
                <Route path='/test' component={TestPage} />
            </Switch>
        </Router>
    )
}

export default App