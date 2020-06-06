import React, { useState } from 'react'

import './style.css'

export default function ComboBox(props) {
    const [params, setParams] = useState(props)

    const addOptions = params.options.map((option, i) => {
        return <option key={i} value={option.value}>{option.text}</option>
    })

    let defaultClass = params.className ? params.className : 'default-input'
    return (
        <div>
            <label className='input-lbl' htmlFor={params.labelFor}>{params.label}</label>
            <select className={defaultClass} name={params.name} id={params.id}>
                {addOptions}
            </select>
        </div>
    )
}