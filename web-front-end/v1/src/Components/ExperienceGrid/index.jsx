import React from 'react'

import ExperienceBlock from '../ExperienceBlock'

const ExperienceGrid = (props) => {
    const { experiences, options, functions } = props

    return (
        <div>
            {experiences.map((exp, i) => {
                return (
                    <ExperienceBlock key={i} index={i} experiences={exp} options={options} functions={functions} />
                )
            })}
        </div>
    )
}

export default ExperienceGrid