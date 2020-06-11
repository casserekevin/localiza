import React from 'react';

import InputText from '../Open/Input/InputText'
import InputComboBox from '../Open/Input/InputComboBox'
import InputCheckBox from '../Open/Input/InputCheckbox'
import InputTextArea from '../Open/Input/InputTextArea'

export default function ExperienceBlock(props) {
    const { compName, jobStartDate, jobEndDate, firstSkill,
        secondSkill, thirdSkill, fourthSkill, jobActivities } = props.experiences

    const { setCompName, setCompProfile, setJobType, setJobStartDate, setJobEndDate, setOngoingJob,
        setFirstSkill, setSecondSkill, setThirdSkill, setFourthSkill, setJobActivities } = props.functions

    const { compProfile, jobType, mainSkills } = props.options

    const { index } = props
    return (
        <div>
            <InputText placeholder='Ex: Dafiti' textLabel='Nome da empresa' name='comp-name' value={compName} onChange={setCompName} index={index} />
            <InputComboBox textLabel='Perfil da empresa' name='comp-profile' value={compProfile} onChange={setCompProfile} options={compProfile} index={index} />
            <InputComboBox textLabel='Seu cargo nesta empresa' name='job-type' value={jobType} onChange={setJobType} options={jobType} index={index} />
            <InputText placeholder='dd/mm/aaaa' textLabel='Data de início' name='job-start-date' value={jobStartDate} onChange={setJobStartDate} index={index} />
            <InputText placeholder='dd/mm/aaaa' textLabel='Data de término' name='job-end-date' value={jobEndDate} onChange={setJobEndDate} index={index} />
            <InputCheckBox id='ongoing-job' textLabel='Trabalho aqui atualmente' name='ongoing-job' onChange={setOngoingJob} index={index} />
            <InputComboBox textLabel='Quais as 4 principais habilidades que você teve contato neste trabalho?' name='firstSkill' value={firstSkill} onChange={setFirstSkill} options={mainSkills} index={index} />
            <InputComboBox name='secondSkill' value={secondSkill} onChange={setSecondSkill} options={mainSkills} index={index} />
            <InputComboBox name='thirdSkill' value={thirdSkill} onChange={setThirdSkill} options={mainSkills} index={index} />
            <InputComboBox name='fourthSkill' value={fourthSkill} onChange={setFourthSkill} options={mainSkills} index={index} />
            <InputTextArea placeholder='Descreva suas atividades' textLabel='O que você desempenhou em seu trabalho?' name='jobActivities' value={jobActivities} onChange={setJobActivities} />
        </div>
    )
}