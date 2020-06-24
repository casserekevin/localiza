import React, { useState } from 'react'

import './style.css'
import InputText from '../InputText'

const InputRadio = (props) => {
    const { id, textLabel, name, value, onChange, index, valueChecked } = props

    const handleChange = (e) => {
        debugger
        if(value === undefined){
            return onChange(valueChecked)
        }
        else if(index === undefined){
            return onChange(value)
        }
        else{
            return onChange(index, value)
        }
        
    }

    const handleChecked = () => {
        debugger
        if(typeof valueChecked === 'boolean' && value === undefined){
            return valueChecked
        }
        else if(typeof valueChecked === 'boolean' && value !== undefined){
            return (valueChecked !== undefined) ? valueChecked === value : false
        }
        else{
            return (valueChecked !== undefined) ? valueChecked === value : false
        }
    }

    return (
        <React.Fragment>
            <input id={id} name={name} value={value} type='radio' onChange={(e) => handleChange(e)} checked={handleChecked()}/>
            {textLabel && <label htmlFor={id}>{textLabel}</label>}
        </React.Fragment>
    )
}

export default InputRadio