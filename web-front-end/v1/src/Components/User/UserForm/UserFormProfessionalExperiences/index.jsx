import React from 'react';

// import { Container } from './styles';
import ExperienceGrid from '../../../ExperienceGrid'

const UserFormProfessionalExperiences = (props) => {

    const { state, functions, options } = props

    return (
        <div>
            <h2>Experiências Profissionais</h2>
            <ExperienceGrid experiencias={state.experiences} functions={functions} options={options}/>
        </div>
    )
}

export default UserFormProfessionalExperiences;