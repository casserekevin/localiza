import React, { useState } from 'react'

import './style.css'

const InputComboBox = (props) => {
    const { id, name, value, textLabel, onChange, index, options } = props

    const handleChange = (e) => {
        debugger
        if(index === undefined){
            onChange(e.target.value)
        }
        else{
            onChange(index, e.target.value)
        }
    }

    return (
        <div>
            <label htmlFor={id} className='input-lbl' >{textLabel}</label>
            <select id={id} name={name} className='default-input-combobox' value={value} onChange={(e) => handleChange(e)}>
                {options.map((option, i) => {
                    return <option key={i} value={option.value}>{option.text}</option>
                })}
            </select>
        </div>
    )
}

export default InputComboBox