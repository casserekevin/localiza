import React, { useState } from 'react'

import Input from '../Input'
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
                <Input className='skill-input' type='text' id='skill' name='skill' placeholder='Ex: Python' />
                <Input className='skill-radio' type='radio' id='0-1' name='skill-year' vale='0-1' />
                <label className='skill-label' htmlFor="0-1">0-1</label>
                <Input className='skill-radio' type='radio' id='1-2' name='skill-year' vale='1-2' />
                <label className='skill-label' htmlFor="1-2">1-2</label>
                <Input className='skill-radio' type='radio' id='2-3' name='skill-year' vale='2-3' />
                <label className='skill-label' htmlFor="2-3">2-3</label>
                <Input className='skill-radio' type='radio' id='3-4' name='skill-year' vale='3-4' />
                <label className='skill-label' htmlFor="3-4">3-4</label>
                <Input className='skill-radio' type='radio' id='4-5' name='skill-year' vale='4-5' />
                <label className='skill-label' htmlFor="4-5">4-5</label>
                <Input className='skill-radio' type='radio' id='5+' name='skill-year' vale='5+' />
                <label className='skill-label' htmlFor="5+">5+</label>
            </div>
        </div>
    )
}