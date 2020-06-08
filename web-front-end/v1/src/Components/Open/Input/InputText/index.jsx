import React, { useState } from 'react'

import './style.css'

const InputText = (props) => {
    const { id, textLabel, placeholder, name, value, onChange, index, inline} = props

    return (
        (inline)    ? (
                        <>
                            {textLabel && <label className='input-lbl' htmlFor={id}>{textLabel}</label>}
                            <input id={id} placeholder={placeholder} name={name} value={value} onChange={(index !== undefined) ? ((e) => onChange(index, e.target.value)) : ((e) => onChange(e.target.value))} type='text'/>
                        </>
                )   :(
                        <div className='container-input-text'>
                            {textLabel && <label className='input-lbl' htmlFor={id}>{textLabel}</label>}
                            <input id={id} placeholder={placeholder} name={name} value={value} className='default-input-text' onChange={(index !== undefined) ? ((e) => onChange(index, e.target.value)) : ((e) => onChange(e.target.value))} type='text'/>
                        </div>
                    )

        
    )
}

export default InputText