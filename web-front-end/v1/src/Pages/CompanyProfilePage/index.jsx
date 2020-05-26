import React from 'react'
import Header from '../../Components/Header'
import CompFormField from '../../Components/CompFormField'
import './style.css'

export default function CompanyProfilePage() {
    return (
        <div>
            <Header />
            <h1 className='flex-centralizado'>Edite o perfil da sua empresa</h1>
            <CompFormField />
        </div>
    )
}