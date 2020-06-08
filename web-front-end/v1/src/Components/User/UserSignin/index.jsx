import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import InputText from '../../Open/Input/InputText'
import InputPassword from '../../Open/Input/InputPassword'
import InputCheckBox from '../../Open/Input/InputCheckbox'

import UserService from '../../../services/userService'

import './style.css'

const initialState = {
    user: { login: '', senha: '', lembrar: false }
}

const UserSignin = (props) => {
    const { setPerson } = props
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        await UserService.loginUser(email, password)
            .then((response) => {
                console.log(response)
                history.push('/user/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <form className='login-container flex-centralizado' onSubmit={handleSubmit}>
            <h1 className='title'>Localiza</h1>
            {/* Campo Login */}
            <InputText placeholder='Endereço de e-mail'  name='user-signin-form/nome' inline={false}/>
            <InputPassword placeholder='Senha'  name='user-signin-form/senha' inline={false}/>
            {/* Checkbox */}
            <div className='check-submit'>
                <InputCheckBox id="user-signin-form/lembrar" textLabel='Lembrar de mim' name="user-signin-form/lembrar"/>
                {/* Botao entrar */}
                <button className='login-btn' type='submit'>Entrar</button>
            </div>
            <hr />
            <a href='/'>Esqueceu sua senha?</a>
            <p><strong>Não tem uma conta?</strong></p>
            <Link to='/user/sign_up'><button className='signup-btn'>Inscrever-se no Localiza</button></Link>
        </form>
    )
}

export default UserSignin 