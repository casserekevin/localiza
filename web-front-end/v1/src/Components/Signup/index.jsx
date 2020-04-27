import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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

export default class Cadastro extends Component {
    state = { ...initialState }

    updateField(event) {
        const user = { ...this.state.user }
        const target = event.target
        user[target.name] = target.type === 'checkbox' ?
            target.checked : target.value
        this.setState({ user })
    }


    save(e) {
        console.log(this.state)
    }

    radioChanged(e) {
        this.setState({ genero: e.target.value })
    }

    render() {
        return (
            <div className='signup-container'>
                <h1>Cadastre-se no Localiza</h1>
                {/* Email */}
                <input className='signup-input' type='email' id='email' name='email'
                    value={this.state.user.email}
                    onChange={e => this.updateField(e)}
                    placeholder='E-mail' />
                {/* Confirmar Email*/}
                <input className='signup-input' type='email' id='conf_email' name='conf_email'
                    value={this.state.user.conf_email}
                    onChange={e => this.updateField(e)}
                    placeholder='Confirmar e-mail' />
                {/* Senha */}
                <input className='signup-input' type='password' id='senha' name='senha'
                    value={this.state.user.senha}
                    onChange={e => this.updateField(e)}
                    placeholder='Senha' />
                {/* Nome */}
                <input className='signup-input' type='text' id='nome' name='nome'
                    value={this.state.user.nome}
                    onChange={e => this.updateField(e)}
                    placeholder='Nome Completo' />
                {/* Generos */}
                <div className='generos'>
                    <input type='radio' id='masculino' name='genero' value='masculino'
                        checked={this.state.genero === 'masculino'}
                        onChange={e => this.radioChanged(e)} />
                    <label htmlFor='masculino'>Masculino</label>
                    <input type='radio' id='feminino' name='genero' value='feminino'
                        checked={this.state.genero === 'feminino'}
                        onChange={e => this.radioChanged(e)} />
                    <label htmlFor='feminino'>Feminino</label>
                    <input type='radio' id='outro' name='genero' value='outro'
                        checked={this.state.genero === 'outro'}
                        onChange={e => this.radioChanged(e)} />
                    <label htmlFor='outro'>Outro</label>
                </div>
                {/* Termo Contrato */}
                <div className='termos'>
                    <input type='checkbox' id='termos' name='termos'
                        checked={this.state.user.termos}
                        onChange={e => this.updateField(e)} />
                    <label htmlFor='termos'>Concordo com os
                <a href='/'> termos e condições</a> da Localiza</label>
                </div>
                {/* Botão Apply */}
                <Link to='/login'><button className='signup-apply-btn'>Inscrever-se</button></Link>
                <hr className='signup-hr' />
                {/* Botão Facebook */}
                <button className='signup-face'>Continuar com facebook</button>
                <p>Já possui cadastro? <Link to='/login'>Entre</Link></p>
            </div>
        )
    }
}