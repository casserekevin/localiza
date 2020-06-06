import React from 'react'

import UserFormAboutYou from '../UserForm/UserFormAboutYou'
import UserFormPresentation from '../UserForm/UserFormPresentation'
import UserFormAbilities from '../UserForm/UserFormAbilities'
import UserFormWhatDoYouSearch from '../UserForm/UserFormWhatDoYouSearch'

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