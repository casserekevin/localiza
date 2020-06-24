import React from 'react';

// import { Container } from './styles';

import InputText from '../../../Open/Input/InputText'
import InputFile from '../../../Open/Input/InputFile'
import InputTextArea from '../../../Open/Input/InputTextArea'
import InputComboBox from '../../../Open/Input/InputComboBox'

const UserFormPresentation = (props) => {

    const { state, functions, options } = props

    return (
        <div>
            <h2>Apresentação</h2>
            <InputText placeholder='Ex: Desenvolvedor PHP' textLabel='Título do seu perfil' name='presentation/titulo' inline={false} value={state.tituloPerfil} onChange={functions.setTituloPerfil} />

            <InputComboBox textLabel='Nível de Inglês' name='presentation/nivel-ingles' value={state.nivelIngles} onChange={functions.setNivelIngles} options={options.nivelIngles} />

            <InputTextArea placeholder='Conte um pouco sobre você, suas experiências e conquistas.' textLabel='Descrição' name='presentation/description' value={state.descricao} onChange={functions.setDescricao} />

            <InputText placeholder='Ex: https://www.linkedin.com/in/<seu-usuario>' textLabel='URL do Linkedin' name='presentation/url-linkedin' inline={false} value={state.urlLinkedin} onChange={functions.setURLLinkedin} />
            <InputText placeholder='Ex: https://www.github.com/<seu-usuario>' textLabel='URL do Github' name='presentation/url-github' inline={false} value={state.urlGithub} onChange={functions.setURLGithub} />

            <InputFile textLabel='Anexe seu Currículo' textButton='Selecione um arquivo...' name='presentation/curriculo' id='presentation/curriculo' onChange={functions.setCurriculo} />
        </div>
    )
}

export default UserFormPresentation;