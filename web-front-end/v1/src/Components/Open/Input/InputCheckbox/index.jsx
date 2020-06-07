import React, { useState } from 'react'

import './style.css'

export default function InputCheckbox(props) {
    const [params, setParams] = useState(props)

    return (
        <React.Fragment>
            <label className='input-lbl' htmlFor={params.id}>{props.children}</label>
            <input className={params.className} type='checkbox' id={params.id} name={params.name}
                value={params.value} />
        </React.Fragment>
    )
}