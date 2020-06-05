import React, { useState } from 'react'

import './style.css'

export default function Input(props) {
    const [params, setParams] = useState(props)

    let defaultClass = params.className ? params.className : 'default-input'

    return (
        <React.Fragment>
            <label className='input-lbl' htmlFor={params.id}>{props.children}</label>
            <input className={defaultClass} type={params.type} id={params.id} name={params.name}
                value={params.value} onChange={params.onChange} placeholder={params.placeholder} />
        </React.Fragment>
    )
}