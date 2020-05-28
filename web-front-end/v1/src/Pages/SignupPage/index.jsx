import React from 'react'

import UserSignup from '../../Components/Signup/InitialSignup/UserSignup'
import CompanySignup from '../../Components/Signup/InitialSignup/CompanySignup'

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