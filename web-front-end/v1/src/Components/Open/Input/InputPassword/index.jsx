import React, { useState } from 'react'

import './style.css'

const InputPassword= (props) => {
    const { id, textLabel, placeholder, name, value, onChange, index, inline} = props

    return (
        (inline)    ? (
                        <>
                            {textLabel && <label className='input-lbl' htmlFor={id}>{textLabel}</label>}
                            <input id={id} placeholder={placeholder} name={name} value={value} onChange={(index !== undefined) ? ((e) => onChange(index, e.target.value)) : ((e) => onChange(e.target.value))} type='password'/>
                        </>
                )   :(
                        <div className='container-input-password'>
                            {textLabel && <label className='input-lbl' htmlFor={id}>{textLabel}</label>}
                            <input id={id} placeholder={placeholder} name={name} value={value} className='default-input-password' onChange={(index !== undefined) ? ((e) => onChange(index, e.target.value)) : ((e) => onChange(e.target.value))} type='password'/>
                        </div>
                    )

        
    )
}

export default InputPassword