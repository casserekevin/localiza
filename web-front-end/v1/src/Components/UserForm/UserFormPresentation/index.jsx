import React from 'react';

// import { Container } from './styles';

import InputText from '../../Open/Input/InputText'
import InputFile from '../../Open/Input/InputFile'

const UserFormPresentation = () => {

    return (
        <div>
            <h2>Apresentação</h2>
            <InputText id='titulo' name='titulo' placeholder='Ex: Desenvolvedor PHP'>
                Título do seu perfil
            </InputText>

            <label className='input-lbl' htmlFor="nivel-ingles">Nível de Inglês</label>
            <select className='default-input' name="nivel-ingles" id="nivel-ingles">
                <option value="nulo">Nulo ou pouco conhecimento</option>
                <option value="basico">Nível básico</option>
                <option value="basico-inter">Nível básico a intermediário</option>
                <option value="intermediario">Nível intermediário</option>
                <option value="avancado">Nível avançado</option>
                <option value="fluente">Fluente ou nativo</option>
            </select>

            <label className='input-lbl' htmlFor="descricao">Descrição</label>
            <textarea className='description-box' id='descricao' name='descricao'
                rows='5' cols='33' placeholder='Conte um pouco sobre você, suas experiências e conquistas.' />

            <InputText id='linkedin' name='linkedin'>
                Linkedin url
            </InputText>
            <InputText id='github' name='github'>
                Github url
            </InputText>
            <InputFile id='cv-input' name='cv-input'>
                Anexar seu CV
            </InputFile>
        </div>
    )
}

export default UserFormPresentation;