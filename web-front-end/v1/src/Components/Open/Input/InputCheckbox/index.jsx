import React, { useState } from 'react'

import './style.css'

const InputCheckbox = (props) => {
    const { id, textLabel, name, value, className, onChange, index, valueChecked } = props

    const handleChange = (e) => {
        if(index !== undefined){
            return onChange(index, e.target.value)
        }
        else if(value !== undefined){
            return onChange(valueChecked)
        }
        else{
            onChange(e.target.value)
        }
        
    }

    const handleChecked = () => {
        if(typeof valueChecked === 'boolean'){
            return valueChecked
        }
        else{
            return (valueChecked !== undefined) ? valueChecked === value : false
        }
    }

    return (
        <React.Fragment>
            <input id={id} name={name} value={value} className={className} onChange={(e) => handleChange(e)} checked={handleChecked()} type='checkbox'/>
            {console.log(document.getElementsByName('company-signin-form/lembrar'))}
            {textLabel && <label htmlFor={id}>{textLabel}</label>}
        </React.Fragment>
    )
}

export default InputCheckbox