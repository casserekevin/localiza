import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import UserService from '../../services/userService'

import './style.css'

const initialState = {
    user: { login: '', senha: '', lembrar: false }
}

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await UserService.loginUser(email, password)
            .then((response) => {
                console.log(response)
                history.push('/main')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <form className='login-container flex-centralizado' onSubmit={handleSubmit}>
            <h1 className='title'>Localiza</h1>
            {/* Campo Login */}
            <input className='login-input' type='email' name='login'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Endereço de e-mail' />
            {/* Campo Senha */}
            <input className='login-input' type='password' name='senha'
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='Senha' />
            {/* Checkbox */}
            <div className='check-submit'>
                <div>
                    <input className='check-input' type='checkbox' id='lembrar' name='lembrar' />
                    <label htmlFor='lembrar'>Lembrar de mim</label>
                </div>
                {/* Botao entrar */}
                <button className='login-btn' type='submit'>Entrar</button>
            </div>
            <hr />
            <a href='/'>Esqueceu sua senha?</a>
            <p><strong>Não tem uma conta?</strong></p>
            <Link to='/cadastrar-pessoa'><button className='signup-btn'>Inscrever-se no Localiza</button></Link>
        </form>
    )
}