import React from 'react'
import { Redirect } from 'react-router-dom'
import Header from '../../../Components/Open/Header'
import CompanyForm from '../../../Components/Company/CompanyForm'
import './style.css'

const CompanyEditProfile = (props) => {
    const { company, match: { url } } = props

    let action = undefined
    !company.loggedin ? (action = <Redirect to={`/${url}/sign_in`} />)
        : (action = (
            <div>
                <Header />
                <div>
                    <h1 className='edit-header'>Edite o perfil da sua empresa</h1>
                    <CompanyForm />
                </div>
            </div>
        ))

    return (
        action
    )
}

export default CompanyEditProfile