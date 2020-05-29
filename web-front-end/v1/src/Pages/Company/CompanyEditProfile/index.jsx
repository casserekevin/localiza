import React from 'react'
import { Redirect } from 'react-router-dom'
import Header from '../../../Components/Header'
import CompFormField from '../../../Components/CompFormField'
import './style.css'

const CompanyEditProfile = (props) => {
    const { company } = props 

    let action = undefined
    !company.loggedin   ? (action = <Redirect to='/company/sign_in'/>)
                        : (action = (
                            <div>
                                <Header />
                                <div>
                                    <h1>Edite o perfil da sua empresa</h1>
                                    <CompFormField />
                                </div>
                            </div>
                        ))

    return (
        action
    )
}

export default CompanyEditProfile