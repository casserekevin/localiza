import React, { useState } from 'react'

import SkillRow from '../SkillRow'
import './style.css'

const SkillGrid = (props) => { 
    const { habilidades, setSkillName, setNote, deleteSkill, addSkill } = props

    return (
        <div id='skill-grid'>
            <h4>Informe suas habilidades (mínimo 3) e indique quantos anos de experiência você possui em cada uma</h4>
            {habilidades.map((skill, i) => {
                return (
                    <SkillRow key={i} index={i} skill={skill} setSkillName={setSkillName} setNote={setNote} deleteSkill={deleteSkill}/>
                )
            })}
            <button onClick={(e) => addSkill(e)} >Adicionar uma habilidade</button>
            
        </div>
    )
}

export default SkillGrid