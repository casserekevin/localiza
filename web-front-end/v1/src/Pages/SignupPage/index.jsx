import React from 'react'

import UserSignup from '../../Components/User/UserSignup'
import CompanySignup from '../../Components/Company/CompanySignup'

import './style.css'

const SignupPage = (props) => {
    return (
        <div className='signupPage flex-centralizado'>
            {(props.type === 'user') && <UserSignup/>}
            {(props.type === 'company') && <CompanySignup/>}
        </div>
    )
}

export default SignupPage