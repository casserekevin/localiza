import React, { useState } from 'react'

import './style.css'

const InputCheckbox = (props) => {
    const { id, textLabel, name, value, className, onChange, index, valueChecked } = props

    return (
        <React.Fragment>
            <input id={id} name={name} value={value} className={className} onChange={(index !== undefined) ? (e) => onChange(index, e.target.value) : (e) => onChange(e.target.value)} type='checkbox' checked={(valueChecked !== undefined) ? valueChecked === value : false}/>
            {textLabel && <label htmlFor={id}>{textLabel}</label>}
        </React.Fragment>
    )
}

export default InputCheckbox