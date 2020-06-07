import React from 'react';

// import { Container } from './styles';
import InputCheckbox from '../../Open/Input/InputCheckbox'
import InputText from '../../Open/Input/InputText'

const UserFormWhatDoYouSearch = () => {

    return (
        <div>
            <h2>O que você busca</h2>
            <label className='input-lbl'>Tamanho da Empresa</label>
            <InputCheckbox id='startup' name='tamanho'>
                Startup
            </InputCheckbox>
            <InputCheckbox id='peq-med' name='tamanho'>
                Pequena ou Média empresa
            </InputCheckbox>
            <InputCheckbox id='grande' name='tamanho'>
                Grande empresa
            </InputCheckbox>

            <label className='input-lbl'>Tipo(s) de contrato</label>
            <InputCheckbox id='clt' name='tipo-con'>
                CLT
            </InputCheckbox>
            <InputCheckbox id='pj' name='tipo-con'>
                PJ
            </InputCheckbox>
            <InputCheckbox id='estagio' name='tipo-con'>
                Estágio
            </InputCheckbox>

            <InputText name='salario' id='salario'>
                Qual sua pretensão salarial mensal?
            </InputText>
            <label className='input-lbl'>Aceita trabalhar remotamente?</label>
            <InputCheckbox id='sim' name='remoto-chk'>Sim</InputCheckbox>
            <InputCheckbox id='nao' name='remoto-chk'>Não</InputCheckbox>

            <label className='input-lbl'>Você é deficiente físico?</label>
            <InputCheckbox id='sim' name='pcd-chk'>Sim</InputCheckbox>
            <InputCheckbox id='não' name='pcd-chk'>Não</InputCheckbox>
        </div>
    )
}

export default UserFormWhatDoYouSearch;