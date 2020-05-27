import React from 'react'
import Input from '../Input'

import './style.css'
export default function CompFormField() {
    return (
        <form className='formField'>
            <label htmlFor="nomeRH">Seu Nome</label>
            <Input className='default-input' type='text' id='nomeRH' name='nomeRH' placeholder='Ex: Tony Montana' />
            <label htmlFor="cargo">Cargo e área</label>
            <select className='default-input' name="cargo" id="cargo">
                <option value="analistaRH">Analista de RH</option>
                <option value="gerenteRH">Gerente de RH</option>
                <option value="diretorRH">Diretor(a) de RH</option>
                <option value="analistaTI">Analista de TI</option>
                <option value="gerenteTI">Gerente de TI</option>
                <option value="diretorTI">Diretor(a) de TI</option>
                <option value="areaMarketing">Área de Marketing / Vendas</option>
                <option value="areaFinancas">Área de Finanças</option>
                <option value="ceo">CEO / Fundador(a)</option>
                <option value="outro">Outros</option>
            </select>
            <label htmlFor="fone">Seu número de telefone</label>
            <Input className='default-input' type='tel' id='fone' name='fone' />
            <label htmlFor="site">Website</label>
            <Input className='default-input' type='text' id='site' name='site' />
            <label htmlFor="nomeEmpresa">Nome da empresa</label>
            <Input className='default-input' type='text' id='nomeEmpresa' name='nomeEmpresa' />
            <label htmlFor="cnpj">CNPJ</label>
            <Input className='default-input' type='text' id='cnpj' name='cnpj' />

            <label htmlFor="tipo">Tipo de empresa</label>
            <div className='comp-radio'>

                <div className='radio-block'>
                    <Input type='radio' id='startup' name='tipo' value='startup' />
                    <label htmlFor="startup">Startup</label>
                </div>

                <div className='radio-block'>
                    <Input type='radio' id='peq_media' name='tipo' value='peq_media' />
                    <label htmlFor="peq_media">Pequena ou Média empresa</label>
                </div>

                <div className='radio-block'>
                    <Input type='radio' id='grande' name='tipo' value='grande' />
                    <label htmlFor="grande">Grande empresa</label>
                </div>
            </div>

            <label htmlFor="descricao">Descrição de sua empresa</label>
            <textarea className='comp-description' id='descricao' name='descricao' rows='5' cols='33' placeholder='Conte um pouco sobre sua empresa para que os candidatos saibam mais sobre vocês.' />
        </form>
    )
}