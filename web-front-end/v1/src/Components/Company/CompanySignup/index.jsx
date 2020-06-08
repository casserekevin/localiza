import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import InputText from '../../Open/Input/InputText'
import InputPassword from '../../Open/Input/InputPassword'
import InputCheckBox from '../../Open/Input/InputCheckbox'

import UserService from '../../../services/userService'

import './style.css'

const initialState = {
    user: {
        email: '',
        conf_email: '',
        senha: '',
        nome: '',
        nascimento: '',
        genero: '',
        termos: false
    },
}

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [conf_email, setConf_Email] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await UserService.registerUser(name, email, password)
            .then((response) => {
                console.log(response)
                history.push('/company')
            })
            .catch((error) => {
                console.log(error)
            })

    }


    return (
        <form className='signup-container flex-centralizado' onSubmit={handleSubmit}>
            <h1>Cadastre-se no Localiza</h1>
            <InputText placeholder='Nome Completo'  name='company-signup-form/nome' inline={false}/>
            <InputText placeholder='E-mail'  name='company-signup-form/email' inline={false}/>
            <InputText placeholder='Confirmar E-mail'  name='company-signup-form/confirmar-email' inline={false}/>
            <InputPassword placeholder='Senha'  name='company-signup-form/senha' inline={false}/>
            
            {/* Termo Contrato */}
            <div className='termos'>
                <InputCheckBox id="company-signup-form/termos-condicoes" textLabel='Concordo com os termos e condições do Localiza' name="company-signup-form/termos-condicoes"/>
            </div>
            {/* Botão Apply */}
            <button className='signup-apply-btn' type='submit'>Inscrever-se</button>
            <hr className='signup-hr' />
            <p>Já possui cadastro? <Link to='/company/sign_in'>Entre</Link></p>
        </form>
    )
}