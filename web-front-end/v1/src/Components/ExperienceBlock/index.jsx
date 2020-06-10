import React from 'react';

import InputText from '../Open/Input/InputText'
import InputComboBox from '../Open/Input/InputComboBox'

export default function ExperienceBlock(props) {
    const { index, options, compName, setCompName, compProfile, setCompProfile } = props
    return (
        <div>
            <InputText placeholder='Ex: Dafiti' textLabel='Nome da empresa' name='comp-name' value={compName} onChange={setCompName} index={index} />
            <InputComboBox textLabel='Perfil da empresa' name='comp-profile' value={compProfile} onChange={setCompProfile} options={compProfile} index={index} />
        </div>
    )
}