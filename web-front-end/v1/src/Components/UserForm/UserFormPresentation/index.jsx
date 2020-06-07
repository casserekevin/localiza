import React from 'react';

// import { Container } from './styles';

import InputText from '../../Open/Input/InputText'
import InputFile from '../../Open/Input/InputFile'
import ComboBox from '../../Open/ComboBox'

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

            <ComboBox labelFor='nivel-ingles' label='Nível de Inglês' name='nivel-ingles' id='nivel-ingles' options={ingBox} />

            <label className='input-lbl' htmlFor="descricao">Descrição</label>
            <textarea className='description-box' id='descricao' name='descricao'
                rows='5' cols='33' placeholder='Conte um pouco sobre você, suas experiências e conquistas.' />

            <InputText placeholder='Ex: https://www.linkedin.com/in/<seu-usuario>' textLabel='URL do Linkedin' name='presentation/url-linkedin' inline={false}/>
            <InputText placeholder='Ex: https://www.github.com/<seu-usuario>' textLabel='URL do Github' name='presentation/url-github' inline={false}/>
            <InputFile id='cv-input' name='cv-input'>
                Anexar seu CV
            </InputFile>
        </div>
    )
}

export default UserFormPresentation;