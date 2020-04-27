import React, { Component, Fragment } from 'react'
import Header from '../../Components/Header'
import Feed from '../../Components/Feed'
import Profile from '../../Components/Profile'
import Messager from '../../Components/Messager'

export default class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <Header isSearchable={true}/>
                <Feed />
                <Profile />
                <Messager />
            </Fragment>
        )
    }
}