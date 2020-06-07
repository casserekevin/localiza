import React, { useState } from 'react'

import './style.css'

export default function InputFile(props) {
    const [params, setParams] = useState(props)

    return (
        <React.Fragment>
            <label className='input-lbl' htmlFor={params.id}>{props.children}</label>
            <input className={params.className} type='file' id={params.id} name={params.name}
                value={params.value} accept={params.accept} />
        </React.Fragment>
    )
}