import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import InputText from '../../Open/Input/InputText'
import InputPassword from '../../Open/Input/InputPassword'
import InputCheckBox from '../../Open/Input/InputCheckbox'

import UserService from '../../../services/userService'

import './style.css'

export default function SignUp() {

    const history = useHistory()

    const [state, setState] = useState({
        nome: '',
        email: '', 
        confirmarEmail: '',
        senha: '', 
        concordarTermos: false
    })

    const setNome = (newValue) => {
        setState((prevState) => {
            let newState = {...prevState}
            newState.nome = newValue
            return newState
        })
    }

    const setEmail = (newValue) => {
        setState((prevState) => {
            let newState = {...prevState}
            newState.email = newValue
            return newState
        })
    }

    const setConfirmarEmail = (newValue) => {
        setState((prevState) => {
            let newState = {...prevState}
            newState.confirmarEmail = newValue
            return newState
        })
    }

    const setSenha = (newValue) => {
        setState((prevState) => {
            let newState = {...prevState}
            newState.senha = newValue
            return newState
        })
    }

    const setConcordarTermos = (newValue) => {
        setState((prevState) => {
            let newState = {...prevState}
            newState.concordarTermos = !newValue
            return newState
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await UserService.registerUser(state.nome, state.email, state.senha)
            .then((response) => {
                console.log(response)
                history.push('/company')
            })
            .catch((error) => {
                console.log(error.response)
            })

    }


    return (
        <form className='signup-container flex-centralizado' onSubmit={handleSubmit}>
            <h1>Cadastre-se no Localiza</h1>
            <InputText placeholder='Nome Completo'  name='user-signup-form/nome' inline={false} value={state.nome} onChange={setNome}/>
            <InputText placeholder='E-mail'  name='user-signup-form/email' inline={false} value={state.email} onChange={setEmail}/>
            <InputText placeholder='Confirmar E-mail'  name='user-signup-form/confirmar-email' inline={false} value={state.confirmarEmail} onChange={setConfirmarEmail}/>
            <InputPassword placeholder='Senha'  name='user-signup-form/senha' inline={false} value={state.senha} onChange={setSenha}/>
            
            {/* Termo Contrato */}
            <div className='termos'>
                <InputCheckBox id="user-signup-form/termos-condicoes" textLabel='Concordo com os termos e condições do Localiza' name="user-signup-form/termos-condicoes" valueChecked={state.concordarTermos} onChange={setConcordarTermos}/>
            </div>
            {/* Botão Apply */}
            <button className='signup-apply-btn' type='submit'>Inscrever-se</button>
            <hr className='signup-hr' />
            <p>Já possui cadastro? <Link to='/user/sign_in'>Entre</Link></p>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </form>
    )
}