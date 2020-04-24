import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Login from './Login'
import Cadastro from './Cadastro'

export default props =>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/cadastrar' component={Cadastro} />
    </Switch>