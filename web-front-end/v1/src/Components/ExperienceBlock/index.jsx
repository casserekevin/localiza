import React from 'react';

import InputText from '../Open/Input/InputText'
import InputComboBox from '../Open/Input/InputComboBox'
import InputCheckBox from '../Open/Input/InputCheckbox'
import InputTextArea from '../Open/Input/InputTextArea'

export default function ExperienceBlock(props) {
    const { index, nomeEmpresa, dataInicioExp, dataTerminoExp, primeiraHabilidade,
        segundaHabilidade, terceiraHabilidade, quartaHabilidade, atividadesEmprego } = props.experiencias

    const { setnomeEmpresa, setperfilEmpresa, settipoCargo, setdataInicioExp, setdataTerminoExp, setOngoingJob,
        setprimeiraHabilidade, setsegundaHabilidade, setterceiraHabilidade, setquartaHabilidade, setatividadesEmprego } = props.functions

    const { perfilEmpresa, tipoCargo, principaisHabilidades } = props.options
    return (
        <div>
            <InputText placeholder='Ex: Dafiti' textLabel='Nome da empresa' name='comp-name' value={nomeEmpresa} onChange={setnomeEmpresa} index={index} />
            <InputComboBox textLabel='Perfil da empresa' name='comp-profile' value={perfilEmpresa} onChange={setperfilEmpresa} options={perfilEmpresa} index={index} />
            <InputComboBox textLabel='Seu cargo nesta empresa' name='job-type' value={tipoCargo} onChange={settipoCargo} options={tipoCargo} index={index} />
            <InputText placeholder='dd/mm/aaaa' textLabel='Data de início' name='job-start-date' value={dataInicioExp} onChange={setdataInicioExp} index={index} />
            <InputText placeholder='dd/mm/aaaa' textLabel='Data de término' name='job-end-date' value={dataTerminoExp} onChange={setdataTerminoExp} index={index} />
            <InputCheckBox id='ongoing-job' textLabel='Trabalho aqui atualmente' name='ongoing-job' onChange={setOngoingJob} index={index} />
            <InputComboBox textLabel='Quais as 4 principais habilidades que você teve contato neste trabalho?' name='primeiraHabilidade' value={primeiraHabilidade} onChange={setprimeiraHabilidade} options={principaisHabilidades} index={index} />
            <InputComboBox name='segundaHabilidade' value={segundaHabilidade} onChange={setsegundaHabilidade} options={principaisHabilidades} index={index} />
            <InputComboBox name='terceiraHabilidade' value={terceiraHabilidade} onChange={setterceiraHabilidade} options={principaisHabilidades} index={index} />
            <InputComboBox name='quartaHabilidade' value={quartaHabilidade} onChange={setquartaHabilidade} options={principaisHabilidades} index={index} />
            <InputTextArea placeholder='Descreva suas atividades' textLabel='O que você desempenhou em seu trabalho?' name='atividadesEmprego' value={atividadesEmprego} onChange={setatividadesEmprego} />
        </div>
    )
}