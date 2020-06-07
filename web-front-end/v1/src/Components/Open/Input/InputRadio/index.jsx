import React, { useState } from 'react'

import './style.css'

export default function InputRadio(props) {
    const [params, setParams] = useState(props)

    return (
        <React.Fragment>
            <input className={params.className} type='radio' id={params.id} name={params.name}
                value={params.value} />
            <label htmlFor={params.id}>{props.children}</label>
        </React.Fragment>
    )
}