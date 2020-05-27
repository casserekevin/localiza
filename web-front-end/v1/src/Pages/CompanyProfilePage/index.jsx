import React from 'react'
import Header from '../../Components/Header'
import CompFormField from '../../Components/CompFormField'
import './style.css'

export default function CompanyProfilePage() {
    return (
        <div>
            <Header />
            <div>
                <h1>Edite o perfil da sua empresa</h1>
                <CompFormField />
            </div>
        </div>
    )
}