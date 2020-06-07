import React from 'react';

// import { Container } from './styles';
import InputRadio from '../../Open/Input/InputRadio'
import InputText from '../../Open/Input/InputText'
import SkillGrid from '../../SkillGrid'

const UserFormAbilities = () => {

    return (
        <div>
            <h2>Habilidades</h2>
            <InputText id='foco' name='foco' placeholder='Ex: Mobile'>
                Foco de carreira
            </InputText>
            <label className='input-lbl' htmlFor="exp">Experiência</label>
            <div className='comp-radio'>
                <div className='radio-block'>
                    <InputRadio id='junior' name='exp' value='junior' />
                    <label htmlFor="junior">Junior</label>
                </div>

                <div className='radio-block'>
                    <InputRadio id='pleno' name='exp' value='pleno' />
                    <label htmlFor="pleno">Pleno</label>
                </div>

                <div className='radio-block'>
                    <InputRadio id='senior' name='exp' value='senior' />
                    <label htmlFor="senior">Senior</label>
                </div>
            </div>
            <SkillGrid />
        </div>
    )
}

export default UserFormAbilities;