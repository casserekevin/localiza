import React, { useState } from 'react'

import InputText from '../Open/Input/InputText'
import InputRadio from '../Open/Input/InputRadio'
import './style.css'

export default function SkillRow(props) {

    const [id, setId] = useState(props.id)

    function EraseRow(e) {
        e.preventDefault()
        let row = document.getElementById(id)
        row.style.display = 'none'
        e.target.style.display = 'none'
    }

    return (
        <div>
            <button onClick={EraseRow}>X</button>
            <div id={id}>
                <InputText className='skill-input' type='text' id='skill' name='skill' placeholder='Ex: Python' />
                <InputRadio className='skill-radio' type='radio' id='0-1' name='skill-year' vale='0-1'> 0-1 </InputRadio>
                <InputRadio className='skill-radio' type='radio' id='1-2' name='skill-year' vale='1-2'> 1-2 </InputRadio>
                <InputRadio className='skill-radio' type='radio' id='2-3' name='skill-year' vale='2-3' > 2-3 </InputRadio>
                <InputRadio className='skill-radio' type='radio' id='3-4' name='skill-year' vale='3-4' > 3-4 </InputRadio>
                <InputRadio className='skill-radio' type='radio' id='4-5' name='skill-year' vale='4-5' > </InputRadio >
                <InputRadio className='skill-radio' type='radio' id='5+' name='skill-year' vale='5+' > 5+ </InputRadio>
            </div>
        </div>
    )
}