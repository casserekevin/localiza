import React from 'react'

import UserSignin from '../../Components/User/UserSignin'
import CompanySignin from '../../Components/Company/CompanySignin'

import './style.css'

const SigninPage = (props) => {
    return (
        <div className='signinPage flex-centralizado'>
            {(props.type === 'user') && <UserSignin/>}
            {(props.type === 'company') && <CompanySignin/>}
        </div>
    )
}

export default SigninPage