import React from 'react'

import UserSignin from '../../Components/User/UserSignin'
import CompanySignin from '../../Components/Company/CompanySignin'

import './style.css'

const SigninPage = (props) => {
    const { setCompany, setPerson } = props

    return (
        <div className='signinPage flex-centralizado'>
            {(props.type === 'user') && <UserSignin setPerson={setPerson}/>}
            {(props.type === 'company') && <CompanySignin setCompany={setCompany}/>}
        </div>
    )
}

export default SigninPage