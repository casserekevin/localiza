import React from 'react'
import { Redirect } from 'react-router-dom'


const CompanyDashboard = (props) => {
    const { company, match: { url } } = props 

    let action = undefined
    !company.loggedin && (action = <Redirect to={`/${url}/sign_in`}/>)
    !company.perfilCompleto ? (action = <Redirect to={`/${url}/${company.id}/edit`}/>)
                            : (action = (
                                <div>Company Dashboard</div>
                            ))

    return (
        action
    )
}

export default CompanyDashboard
