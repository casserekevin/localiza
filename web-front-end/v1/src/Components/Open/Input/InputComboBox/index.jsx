import React, { useState } from 'react'

import './style.css'

const InputComboBox = (props) => {
    const { id, textLabel, name, onChange, index, options } = props

    return (
        <div>
            <label className='input-lbl' htmlFor={id}>{textLabel}</label>
            <select className='default-input-combobox' name={name} id={id}>
                {options.map((option, i) => {
                    return <option key={i} value={option.value}>{option.text}</option>
                })}
            </select>
        </div>
    )
}

export default InputComboBox