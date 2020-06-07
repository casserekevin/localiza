import React, { useState, useEffect} from 'react'

import InputText from '../Open/Input/InputText'
import InputRadio from '../Open/Input/InputRadio'
import './style.css'

export default function SkillRow(props) {
    
    const { index, skill, setSkillName, setNote, deleteSkill } = props

    return (
        <div>
            <button onClick={(e) => deleteSkill(index, e)}>X</button>    
            <InputText placeholder='Ex: Python' name='skill' value={skill.skill} className='skill-row-input-text' inline={true} onChange={setSkillName} index={index}/>
            <InputRadio id={`${index}/0-1/skillpoint`} textLabel='0-1' name={`${index}/skillpoint`} value='0-1' onChange={setNote} index={index} valueChecked={skill.note}/>
            <InputRadio id={`${index}/1-2/skillpoint`} textLabel='1-2' name={`${index}/skillpoint`} value='1-2' onChange={setNote} index={index} valueChecked={skill.note}/>
            <InputRadio id={`${index}/2-3/skillpoint`} textLabel='2-3' name={`${index}/skillpoint`} value='2-3' onChange={setNote} index={index} valueChecked={skill.note}/>
            <InputRadio id={`${index}/3-4/skillpoint`} textLabel='3-4' name={`${index}/skillpoint`} value='3-4' onChange={setNote} index={index} valueChecked={skill.note}/>
            <InputRadio id={`${index}/5+/skillpoint`} textLabel='5+' name={`${index}/skillpoint`} value='5+' onChange={setNote} index={index} valueChecked={skill.note}/>
        </div>
    )
}