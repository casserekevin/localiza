import React, { useState } from 'react'

import './style.css'

const InputTextArea = (props) => {
    const { id, textLabel, placeholder, name, value, onChange, index } = props

    return (
        <div>
            {textLabel && <label className='input-lbl' htmlFor={id}>{textLabel}</label>}
            <textarea id={id} placeholder={placeholder} name={name} value={value} className='default-textarea' onChange={(index !== undefined) ? (e) => onChange(index, e.target.value) : (e) => onChange(e.target.value)}/>
        </div>
    )
}

export default InputTextArea