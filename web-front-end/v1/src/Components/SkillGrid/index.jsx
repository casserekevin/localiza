import React, { useState } from 'react'

import SkillRow from '../SkillRow'
import './style.css'

export default function SkillGrid() {
    const [ids, setIds] = useState([1, 2, 3])
    let cur = 3

    let addRows = ids.map((id, i) => {
        return <SkillRow key={i} id={id} />
    })

    function addRow(e) {
        e.preventDefault()
        let newIds = ids
        newIds.push(++cur)
        setIds(newIds)
    }

    return (
        <div id='skill-grid'>
            <h4>Informe suas habilidades (mínimo 3) e indique quantos anos de experiência você possui em cada uma</h4>
            {addRows}
            <button onClick={addRow}>Adicionar uma habilidade</button>
            
        </div>
    )
}