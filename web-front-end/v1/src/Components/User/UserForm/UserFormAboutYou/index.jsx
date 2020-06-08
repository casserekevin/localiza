import React from 'react';

// import { Container } from './styles';

import InputText from '../../../Open/Input/InputText'
import InputFile from '../../../Open/Input/InputFile'

const UserFormAboutYou = () => {

    return (
        <React.Fragment>
            <h2>Sobre você</h2>
            <div>
                <InputFile textLabel='Foto de Perfil' name='about-you/foto-perfil'/>
            
                <InputText placeholder='Digite o seu nome' textLabel='Nome' name='about-you/nome' inline={false}/>
                <InputText placeholder='Digite o seu sobrenome' textLabel='Sobrenome' name='about-you/sobrenome' inline={false}/>
                <InputText placeholder='Ex: (51) 92345-6789' textLabel='Telefone' name='about-you/telefone' inline={false}/>
                <InputText placeholder='Ex: São Paulo' textLabel='Cidade' name='about-you/cidade' inline={false}/>
            </div>
        </React.Fragment>
    )
}

export default UserFormAboutYou;