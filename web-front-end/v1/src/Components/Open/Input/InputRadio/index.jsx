import React, { useState } from 'react'

import './style.css'

export default function InputRadio(props) {
    const [params, setParams] = useState(props)
    console.log(params);

    return (
        <React.Fragment>
            <label className='input-lbl' htmlFor={params.id}>{props.children}</label>
            <input className={params.className} type='radio' id={params.id} name={params.name}
                value={params.value} />
        </React.Fragment>
    )
}