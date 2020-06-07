import React from 'react';

// import { Container } from './styles';
import InputCheckbox from '../../Open/Input/InputCheckbox'
import InputText from '../../Open/Input/InputText'
import InputRadio from '../../Open/Input/InputRadio'

const UserFormWhatDoYouSearch = () => {

    return (
        <div>
            <h2>O que você busca</h2>
            <label className='input-lbl'>Tamanho da Empresa</label>
            <div>
                <InputCheckbox id="startup/what-so-you-search" textLabel='Startup' name="startup/what-so-you-search"/>
                <InputCheckbox id="pequena-media/what-so-you-search" textLabel='Pequena ou Média empresa' name="pequena-media/what-so-you-search"/>
                <InputCheckbox id="grande/what-so-you-search" textLabel='Grande Empresa' name="grande/what-so-you-search"/>
            </div>

            <label className='input-lbl'>Tipo(s) de contrato</label>
            <div>
                <InputCheckbox id="clt/what-so-you-search" textLabel='CLT' name="clt/what-so-you-search"/>
                <InputCheckbox id="pj/what-so-you-search" textLabel='PJ' name="pj/what-so-you-search"/>
                <InputCheckbox id="estagio/what-so-you-search" textLabel='Estágio' name="estagio/what-so-you-search"/>
            </div>

            <InputText placeholder='Digite um valor' textLabel='Qual o salário mínimo que você aceita por mês?' name='pretensao-salarial/what-so-you-search' inline={false}/>

            <label className='input-lbl'>Aceita trabalhar remotamente?</label>
            <div>
                <InputRadio id="remotamente/sim/what-so-you-search" textLabel='Sim' name="remotamente/sim/what-so-you-search"/>
                <InputRadio id="remotamente/nao/what-so-you-search" textLabel='Não' name="remotamente/nao/what-so-you-search"/>
            </div>

            <label className='input-lbl'>Você é deficiente físico?</label>
            <div>
                <InputRadio id="deficiente/sim/what-so-you-search" textLabel='Sim' name="deficiente/sim/what-so-you-search"/>
                <InputRadio id="deficiente/nao/what-so-you-search" textLabel='Não' name="deficiente/nao/what-so-you-search"/>
            </div>
        </div>
    )
}

export default UserFormWhatDoYouSearch;