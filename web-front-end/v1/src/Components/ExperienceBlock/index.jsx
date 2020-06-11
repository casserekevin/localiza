import React from 'react';

import InputText from '../Open/Input/InputText'
import InputComboBox from '../Open/Input/InputComboBox'
import InputCheckBox from '../Open/Input/InputCheckbox'
import InputTextArea from '../Open/Input/InputTextArea'

export default function ExperienceBlock(props) {
    const { index, experiencia, functions, options } = props
    
    return (
        <div>
            <InputText placeholder='Ex: Dafiti' textLabel='Nome da empresa' name='professional-experiences/nome-empresa' value={experiencia.nomeEmpresa} onChange={functions.setNomeEmpresa} index={index} />
            <InputComboBox textLabel='Perfil da empresa' name='professional-experiences/perfil-empresa' value={experiencia.perfilEmpresa} onChange={functions.setPerfilEmpresa} options={options.perfilEmpresa} index={index} />
            <InputComboBox textLabel='Seu cargo nesta empresa' name='professional-experiences/tipo-cargo' value={experiencia.tipoCargo} onChange={functions.setTipoCargo} options={options.tipoCargo} index={index} />
            <InputText placeholder='dd/mm/aaaa' textLabel='Data de início' name='professional-experiences/data-inicio' value={experiencia.dataInicio} onChange={functions.setDataInicio} index={index} />
            <InputText placeholder='dd/mm/aaaa' textLabel='Data de término' name='professional-experiences/data-termino' value={experiencia.dataTermino} onChange={functions.setDataTermino} index={index} />
            <InputCheckBox id='professional-experiences/trabalha-aqui-atualmente' textLabel='Trabalho aqui atualmente' name='professional-experiences/trabalha-aqui-atualmente' onChange={functions.setTrabalhaAquiAtualmente} valueChecked={experiencia.trabalhaAquiAtualmente} index={index} />
            <InputComboBox textLabel='Quais as 4 principais habilidades que você teve contato neste trabalho?' name='professional-experiences/primeiraHabilidade' value={experiencia.primeiraHabilidade} onChange={functions.setPrimeiraHabilidade} options={options.habilidades} index={index} />
            <InputComboBox name='professional-experiences/segundaHabilidade' value={experiencia.segundaHabilidade} onChange={functions.setSegundaHabilidade} options={options.habilidades} index={index} />
            <InputComboBox name='professional-experiences/terceiraHabilidade' value={experiencia.terceiraHabilidade} onChange={functions.setTerceiraHabilidade} options={options.habilidades} index={index} />
            <InputComboBox name='professional-experiences/quartaHabilidade' value={experiencia.quartaHabilidade} onChange={functions.setQuartaHabilidade} options={options.habilidades} index={index} />
            <InputTextArea placeholder='Descreva suas atividades' textLabel='O que você desempenhou em seu trabalho?' name='professional-experiences/descricaoAtividades' value={experiencia.descricaoAtividades} onChange={functions.setDescricaoAtividades} index={index}/>
        </div>
    )
}