import React from 'react';

// import { Container } from './styles';
import ExperienceGrid from '../../../ExperienceGrid'

const UserFormProfessionalExperiences = (props) => {

    const { state, functions, options } = props

    return (
        <ExperienceGrid compProfile={options.compProfile} />
    )
}

export default UserFormProfessionalExperiences;