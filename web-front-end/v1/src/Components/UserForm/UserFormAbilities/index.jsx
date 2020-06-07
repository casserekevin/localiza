import React, { useState } from 'react';

import InputRadio from '../../Open/Input/InputRadio'
import InputText from '../../Open/Input/InputText'
import SkillGrid from '../../SkillGrid'

import './style.css'

const UserFormAbilities = () => {
    const [habilidade, setHabilidade] = useState({
        foco: '',
        experiencia: '',
        habilidades: [{
            skill: '',
            note: undefined
        },
        {
            skill: '',
            note: undefined
        },
        {
            skill: '',
            note: undefined
        }]
    })

    const setFoco = (newValue) => {
        setHabilidade((prevState) => {
            let newObj = {...prevState}
            newObj.foco = newValue
            return newObj
        })
    }

    const setExperiencia = (newValue) => {
        setHabilidade((prevState) => {
            let newObj = {...prevState}
            newObj.experiencia = newValue
            return newObj
        })
    }


    const setSkillName = (index, newValue) => {
        setHabilidade((prevState) => { 
            let newObj = {...prevState}
            newObj.habilidades[index].skill = newValue
            console.log(newObj)
            return newObj
        })
    }

    const setNote = (index, newValue) => {
        setHabilidade((prevState) => { 
            let newObj = {...prevState}
            newObj.habilidades[index].note = newValue
            console.log(newObj)
            return newObj
        })
    }

    const deleteSkill = (index, e) => {
        e.preventDefault()
        setHabilidade((prevState) => { 
            let newObj = {...prevState}
            newObj.habilidades = newObj.habilidades.filter((element, indexArr) => indexArr !== index) 
            console.log(newObj)
            return newObj
        })
    }

    const addSkill = (e) => {
        e.preventDefault()
        setHabilidade((prevState) => { 
            let newObj = {...prevState}
            newObj.habilidades.push({skill: '', note: undefined})
            console.log(newObj)
            return newObj
        })
    }

    

    return (
        <div className='container-abilities'>
            <h2>Habilidades</h2>
            <InputText placeholder='Ex: Mobile' textLabel='Foco de carreira' name='habilidade/foco-carreira' value={habilidade.foco} onChange={setFoco}/>

            <label className='input-lbl'>Experiência</label>
            <div >
                <InputRadio id="junior/experience" textLabel='Junior' name="junior/experience" value='junior' onChange={setExperiencia} valueChecked={habilidade.experiencia}/>
                <InputRadio id="pleno/experience" textLabel='Pleno' name="pleno/experience" value='pleno' onChange={setExperiencia} valueChecked={habilidade.experiencia}/>
                <InputRadio id="senior/experience" textLabel='Senior' name="senior/experience" value='senior' onChange={setExperiencia} valueChecked={habilidade.experiencia}/>
            </div>
            <SkillGrid habilidades={habilidade.habilidades} setSkillName={setSkillName} setNote={setNote} deleteSkill={deleteSkill} addSkill={addSkill}/>
            <pre>{JSON.stringify(habilidade, null, 2)}</pre>
        </div>
    )
}

export default UserFormAbilities;