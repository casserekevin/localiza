import React from 'react'

import ExperienceBlock from '../ExperienceBlock'

const ExperienceGrid = (props) => {
    const { compProfile } = props
    return (
        <ExperienceBlock compProfile={compProfile} />
    )
}

export default ExperienceGrid