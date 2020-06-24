import React, { useState } from 'react';

import InputRadio from '../../../Open/Input/InputRadio'
import InputText from '../../../Open/Input/InputText'
import SkillGrid from '../../../SkillGrid'

import './style.css'

const UserFormAbilities = (props) => {
    const { state, functions } = props

    return (
        <div className='container-abilities'>
            <h2>Habilidades</h2>
            <InputText placeholder='Ex: Mobile' textLabel='Foco de carreira' name='habilidade/foco-carreira' value={state.foco} onChange={functions.setFoco} />

            <label className='input-lbl'>Experiência</label>
            <div >
                <InputRadio id="junior/experience" textLabel='Junior' name="junior/experience" value='junior' onChange={functions.setExperiencia} valueChecked={state.experiencia} />
                <InputRadio id="pleno/experience" textLabel='Pleno' name="pleno/experience" value='pleno' onChange={functions.setExperiencia} valueChecked={state.experiencia} />
                <InputRadio id="senior/experience" textLabel='Senior' name="senior/experience" value='senior' onChange={functions.setExperiencia} valueChecked={state.experiencia} />
            </div>
            <SkillGrid habilidades={state.habilidades} setSkillName={functions.setSkillName} setNote={functions.setNote} deleteSkill={functions.deleteSkill} addSkill={functions.addSkill} />
        </div>
    )
}

export default UserFormAbilities;