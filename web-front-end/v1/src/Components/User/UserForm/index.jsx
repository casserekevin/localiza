import React from 'react'

import UserFormAboutYou from './UserFormAboutYou'
import UserFormPresentation from './UserFormPresentation'
import UserFormAbilities from './UserFormAbilities'
import UserFormWhatDoYouSearch from './UserFormWhatDoYouSearch'

import './style.css'

const UserForm = () => {
    return (
        <form className='form-field'>
            <UserFormAboutYou />
            <UserFormPresentation />
            <UserFormAbilities />
            <UserFormWhatDoYouSearch />
        </form>
    )
}

export default UserForm