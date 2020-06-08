import React from 'react';

// import { Container } from './styles';

import InputText from '../../../Open/Input/InputText'
import InputFile from '../../../Open/Input/InputFile'
import InputTextArea from '../../../Open/Input/InputTextArea'
import InputComboBox from '../../../Open/Input/InputComboBox'

const UserFormPresentation = () => {

    let ingBox = [
        { text: 'Nulo ou pouco conhecimento', value: 'nulo' },
        { text: 'Nível básico', value: 'basico' },
        { text: 'Nível básico a intermediário', value: 'basico-inter' },
        { text: 'Nível intermediário', value: 'intermediario' },
        { text: 'Nível avançado', value: 'avancado' },
        { text: 'Fluente ou nativo', value: 'fluente' }
    ]

    return (
        <div>
            <h2>Apresentação</h2>
            <InputText placeholder='Ex: Desenvolvedor PHP' textLabel='Título do seu perfil' name='presentation/titulo' inline={false}/>

            <InputComboBox textLabel='Nível de Inglês' name='presentation/nivel-ingles' options={ingBox} />

            <InputTextArea placeholder='Conte um pouco sobre você, suas experiências e conquistas.' textLabel='Descrição' name='presentation/description'/>

            <InputText placeholder='Ex: https://www.linkedin.com/in/<seu-usuario>' textLabel='URL do Linkedin' name='presentation/url-linkedin' inline={false}/>
            <InputText placeholder='Ex: https://www.github.com/<seu-usuario>' textLabel='URL do Github' name='presentation/url-github' inline={false}/>
            
            <InputFile textLabel='Anexar se CV' name='presentation/cv'/>
        </div>
    )
}

export default UserFormPresentation;