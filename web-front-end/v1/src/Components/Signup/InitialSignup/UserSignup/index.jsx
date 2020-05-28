import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import UserService from '../../../../services/userService'

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
                history.push('/main')

            })
            .catch((error) => {
                console.log(error)
            })

    }


    return (
        <form className='signup-container flex-centralizado' onSubmit={handleSubmit}>
            <h1>Cadastre-se no Localiza</h1>
            {/* Email */}
            <input className='signup-input' type='email' id='email' name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='E-mail' />
            {/* Confirmar Email*/}
            <input className='signup-input' type='email' id='conf_email' name='conf_email'
                value={conf_email}
                onChange={e => setConf_Email(e.target.value)}
                placeholder='Confirmar e-mail' />
            {/* Senha */}
            <input className='signup-input' type='password' id='senha' name='senha'
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='Senha' />
            {/* Nome */}
            <input className='signup-input' type='text' id='nome' name='nome'
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Nome Completo' />
            {/* Generos */}
            <div className='generos'>
                <input type='radio' id='masculino' name='genero' value='masculino' />
                <label htmlFor='masculino'>Masculino</label>
                <input type='radio' id='feminino' name='genero' value='feminino' />
                <label htmlFor='feminino'>Feminino</label>
                <input type='radio' id='outro' name='genero' value='outro' />
                <label htmlFor='outro'>Outro</label>
            </div>
            {/* Termo Contrato */}
            <div className='termos'>
                <input type='checkbox' id='termos' name='termos' />
                <label htmlFor='termos'>Concordo com os
            <a href='/'> termos e condições</a> da Localiza</label>
            </div>
            {/* Botão Apply */}
            <button className='signup-apply-btn' type='submit'>Inscrever-se</button>
            <hr className='signup-hr' />
            {/* Botão Facebook */}
            <button className='signup-face' >Continuar com facebook</button>
            <p>Já possui cadastro? <Link to='/login'>Entre</Link></p>
        </form>
    )
}