import React from 'react';

// import { Container } from './styles';

import InputText from '../../Open/Input/InputText'
import InputFile from '../../Open/Input/InputFile'

const UserFormAboutYou = () => {

    return (
        <React.Fragment>
            <h2>Sobre você</h2>
            <div>
                <InputFile id='foto-perfil' name='foto-perfil'>
                    Foto de perfil
                </InputFile>
                <InputText id='nome' name='nome'>
                    Nome
                </InputText>
                <InputText id='sobrenome' name='sobrenome'>
                    Sobrenome
                </InputText>
                <InputText id='fone' name='fone' placeholder='(51) 92345-6789'>
                    Número de Telefone
                </InputText>
                <InputText id='cidade' name='cidade'>
                    Cidade onde mora
                </InputText>
            </div>
        </React.Fragment>
    )
}

export default UserFormAboutYou;