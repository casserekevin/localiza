import React from 'react'

import SkillRow from '../SkillRow'
import './style.css'

export default function SkillGrid() {
    let rowCount = 3

    function addRow(e) {
        e.preventDefault()
        let grid = document.getElementById('skill-grid')
        console.log(grid);

    }

    return (
        <div id='skill-grid'>
            <h4>Informe suas habilidades (mínimo 3) e indique quantos anos de experiência você possui em cada uma</h4>
            <SkillRow id='1' />
            <SkillRow id='2' />
            <SkillRow id='3' />
            <button onClick={addRow}>Adicionar uma habilidade</button>
        </div>
    )
}