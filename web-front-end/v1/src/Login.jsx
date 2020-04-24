import React, { Component } from 'react'
import './Login.css'

const initialState = {
    user: { login: '', senha: '', lembrar: false }
}

export default class Login extends Component {

    state = { ...initialState }

    updateField(event) {
        const user = { ...this.state.user }
        const target = event.target
        user[event.target.name] = target.type === 'checkbox' ?
            target.checked : target.value
        this.setState({ user })
    }

    save() {
        console.log(this.state.user);
    }

    render() {
        return (
            <div className='container'>
                <h1 className='title'>Localiza</h1>
                {/* Campo Login */}
                <input type='text' name='login'
                    value={this.state.user.login}
                    onChange={e => this.updateField(e)}
                    placeholder='Nome de usuário' />
                {/* Campo Senha */}
                <input type='text' name='senha'
                    value={this.state.user.senha}
                    onChange={e => this.updateField(e)}
                    placeholder='Senha' />
                {/* Checkbox */}
                <div className='check-submit'>
                    <input type='checkbox' id='lembrar' name='lembrar'
                        checked={this.state.lembrar}
                        onChange={e => this.updateField(e)} />
                    <label htmlFor='lembrar'>Lembrar de mim</label>
                    {/* Botao entrar */}
                    <button className='entrar'
                        onClick={e => this.save(e)}>Entrar</button>
                </div>

                <a href='/'>Esqueceu sua senha?</a>
                <hr />
                <p>Não tem uma conta?</p>
                <button>Inscrever-se no Localiza</button>
            </div>
        )
    }
}
