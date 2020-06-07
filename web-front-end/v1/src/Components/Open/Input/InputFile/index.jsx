import React, { useState } from 'react'

import './style.css'

export default function InputFile(props) {
    const { id, textLabel, name, value, className, onChange, index} = props

    return (
        <div className={className}>
            {textLabel && <label className='input-lbl' htmlFor={id}>{textLabel}</label>}
            <input id={id} name={name} value={value} className='default-input-file' onChange={(index !== undefined) ? ((e) => onChange(index, e.target.value)) : ((e) => onChange(e.target.value))} type='file'/>
        </div>
        
    )
}