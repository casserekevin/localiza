import React from 'react'

import ExperienceBlock from '../ExperienceBlock'

const ExperienceGrid = (props) => {
    const { experiencias, options, functions } = props

    return (
        <div>
            {experiencias.map((experiencia, i) => {
                return (
                    <ExperienceBlock key={i} index={i} experiencia={experiencia} options={options} functions={functions} />
                )
            })}
            <button onClick={(e) => functions.addExperiencia(e)} >Adicionar uma experiência</button>
        </div>
    )
}

export default ExperienceGrid