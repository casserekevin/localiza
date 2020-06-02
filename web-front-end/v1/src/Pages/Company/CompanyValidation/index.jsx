import React from 'react'
import { Redirect } from 'react-router-dom'

const CompanyValidation = (props) => {
    const {company, match: {url}} = props

    return (
        !company.perfilCompleto ? ( <Redirect to={`${url}/${company.id}/edit`}/>)
                                : ( <Redirect to={`${url}/dashboard`}/>)
    )
}

export default CompanyValidation
