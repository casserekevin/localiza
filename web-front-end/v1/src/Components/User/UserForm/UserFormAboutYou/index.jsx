import React, { useState } from 'react';

// import { Container } from './styles';

import InputText from '../../../Open/Input/InputText'
import InputFile from '../../../Open/Input/InputFile'

const UserFormAboutYou = (props) => {
    const { state, functions } = props
    

    return (
        <React.Fragment>
            <h2>Sobre você</h2>
            <div>
                <InputFile textLabel='Foto de Perfil' textButton='Escolha uma imagem' name='about-you/foto-perfil' id='about-you/foto-perfil' onChange={functions.setFotoPerfil}/>

            
                <InputText placeholder='Digite o seu nome' textLabel='Nome' name='about-you/nome' inline={false} value={state.nome} onChange={functions.setNome}/>
                <InputText placeholder='Digite o seu sobrenome' textLabel='Sobrenome' name='about-you/sobrenome' inline={false} value={state.sobrenome} onChange={functions.setSobrenome}/>
                <InputText placeholder='Ex: (51) 92345-6789' textLabel='Telefone' name='about-you/telefone' inline={false} value={state.telefone} onChange={functions.setTelefone}/>
                <InputText placeholder='Ex: São Paulo' textLabel='Cidade' name='about-you/cidade' inline={false} value={state.cidade} onChange={functions.setCidade}/>
            </div>
        </React.Fragment>
    )
}

export default UserFormAboutYou;