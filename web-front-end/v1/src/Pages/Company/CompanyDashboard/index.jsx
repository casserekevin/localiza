import React from 'react'
import { Redirect } from 'react-router-dom'


const CompanyDashboard = (props) => {
    const { company } = props 

    let action = undefined
    !company.loggedin && (action = <Redirect to='/company/sign_in'/>)
    !company.perfilCompleto ? (action = <Redirect to={`/company/${company.id}/edit`}/>)
                            : (action = (
                                <div>Dashboard</div>
                            ))

    return (
        action
    )
}

export default CompanyDashboard
