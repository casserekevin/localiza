import React, { useState } from 'react'

import './style.css'

const InputCheckbox = (props) => {
    const { id, textLabel, name, value, className, onChange, index, valueChecked } = props

    const handleChange = (e) => {
        debugger
        if(value === undefined){
            if(index === undefined){
                return onChange(valueChecked)
            }
            else{
                return onChange(index, valueChecked)
            }
        }
        else if(index === undefined){
            return onChange(value)
        }
        else{
            return onChange(index, value)
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
            {textLabel && <label htmlFor={id}>{textLabel}</label>}
        </React.Fragment>
    )
}

export default InputCheckbox