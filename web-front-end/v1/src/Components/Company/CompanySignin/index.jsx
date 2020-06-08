import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import InputText from '../../Open/Input/InputText'
import InputPassword from '../../Open/Input/InputPassword'
import InputCheckBox from '../../Open/Input/InputCheckbox'

import UserService from '../../../services/userService'

import './style.css'

const CompanySignin = (props) => {
    const { setCompany } = props
    const history = useHistory()

    const [state, setState] = useState({
        email: '', 
        senha: '', 
        lembrar: false
    })


    const setEmail = (newValue) => {
        setState((prevState) => {
            let newState = {...prevState}
            newState.email = newValue
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

    const setLembrar = (newValue) => {
        setState((prevState) => {
            let newState = {...prevState}
            newState.lembrar = !newValue
            return newState
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await UserService.loginUser(state.email, state.senha)
            .then((response) => {
                console.log(response)
                history.push('/company')
            })
            .catch((error) => {
                console.log(error)
            })
    }
    



    return (
        <form className='login-container flex-centralizado' onSubmit={handleSubmit}>
            <h1 className='title'>Localiza</h1>
            {/* Campo Login */}
            <InputText placeholder='Endereço de e-mail' name='company-signin-form/nome' inline={false} value={state.email} onChange={setEmail}/>
            <InputPassword placeholder='Senha' name='company-signin-form/senha' inline={false} value={state.senha} onChange={setSenha}/>
            {/* Checkbox */}
            <div className='check-submit'>
                <InputCheckBox id="company-signin-form/lembrar" textLabel='Lembrar de mim' name="company-signin-form/lembrar" value={state.lembrar} onChange={setLembrar} valueChecked={state.lembrar}/>
                {/* Botao entrar */}
                <button className='login-btn' type='submit'>Entrar</button>
            </div>
            <hr />
            <a href='/'>Esqueceu sua senha?</a>
            <p><strong>Não tem uma conta?</strong></p>
            <Link to='/company/sign_up'><button className='signup-btn'>Inscrever-se no Localiza</button></Link>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </form>
    )
}

export default CompanySignin