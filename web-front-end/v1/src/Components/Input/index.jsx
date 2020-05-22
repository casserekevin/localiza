import React, { useState } from 'react'

import './style.css'

export default function Input(props) {
    const [params, setParams] = useState(props)
    console.log(params);

    return (
        <input className={params.className} type={params.type} id={params.id} name={params.name}
            value={params.value} onChange={params.onChange} placeholder={params.placeholder} />
    )
}