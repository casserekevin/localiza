import React, { useState } from 'react'

import './style.css'

export default function InputText(props) {
    const [params, setParams] = useState(props)
    console.log(params);


    let defaultClass = params.className ? params.className : 'default-input'

    return (
        <React.Fragment>
            <label className='input-lbl' htmlFor={params.id}>{props.children}</label>
            <input className={defaultClass} type='text' id={params.id} name={params.name}
                value={params.value} onChange={params.onChange} placeholder={params.placeholder} />
        </React.Fragment>
    )
}