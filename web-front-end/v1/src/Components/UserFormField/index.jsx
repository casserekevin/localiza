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
            <Input type='text' id='fone' name='fone'>
                Número de Telefone
            </Input>
            <Input type='text' id='cidade' name='cidade'>
                Cidade onde mora
            </Input>
            <Input className='foto-perfil-input' type='file' id='foto-perfil' name='foto-perfil'>
                Foto de perfil
            </Input>
        </form>
    )
}