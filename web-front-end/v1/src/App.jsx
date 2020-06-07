import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import InitialPage from './Pages/InitialPage'
import SigninPage from './Pages/SigninPage'
import SignupPage from './Pages/SignupPage'
import ProtectedCompanyRouter from './Pages/Company/ProtectedCompanyRouter'
import ProtectedUserRouter from './Pages/User/ProtectedUserRouter'

import TestPage from './Pages/TestPage'

import './global.css'

const App = () => {
    const[company, setCompany] = useState({})
    const[person, setPerson] = useState({})

    return (
        <Router>
            <Switch>
                <Route exact path='/' component={InitialPage} />
                
                <Route exact path='/user/sign_in' render={(props) => <SigninPage {...props} type='user' setPerson={setPerson}/>}/>
                <Route exact path='/user/sign_up' render={(props) => <SignupPage {...props} type='user'/>}/>
                
                <Route exact path='/company/sign_in' render={(props) => <SigninPage {...props} type='company' setCompany={setCompany}/> }/>
                <Route exact path='/company/sign_up' render={(props) => <SignupPage {...props} type='company'/>}/>
            
                <Route path='/company' render={(props) => <ProtectedCompanyRouter {...props}/>}/>
                <Route path='/user' render={(props) => <ProtectedUserRouter {...props}/>}/>
                    
                    
                <Route path='/test' component={TestPage} />
            </Switch>
        </Router>
    )
}

export default App