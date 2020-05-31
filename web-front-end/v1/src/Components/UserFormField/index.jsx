import React from 'react'

import Input from '../Input'
import './style.css'

export default function UserFormField() {
    return (
        <form className='form-field'>
            <h2>Sobre você</h2>
            <Input type='text' id='nome' name='nome'>
                Nome
            </Input>
            <Input type='text' id='sobrenome' name='sobrenome'>
                Sobrenome
            </Input>
            <Input type='text' id='fone' name='fone' placeholder='(51) 92345-6789'>
                Número de Telefone
            </Input>
            <Input type='text' id='cidade' name='cidade'>
                Cidade onde mora
            </Input>
            <Input className='foto-perfil-input' type='file' id='foto-perfil' name='foto-perfil'>
                Foto de perfil
            </Input>

            <h2>Apresentação</h2>
            <Input type='text' id='titulo' name='titulo' placeholder='Ex: Desenvolvedor PHP'>
                Título do seu perfil
            </Input>

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

            <Input type='text' id='linkedin' name='linkedin'>
                Linkedin url
            </Input>
            <Input type='text' id='github' name='github'>
                Github url
            </Input>
            <Input className='cv-input' type='file' id='cv-input' name='cv-input'>
                Anexar seu CV
            </Input>

            <h2>Habilidades</h2>

        </form>
    )
}