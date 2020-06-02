import React from 'react'
import Input from '../Input'

import './style.css'
export default function CompFormField() {
    return (
        <form className='form-field'>
            <Input type='text' id='nomeRH' name='nomeRH'>
                Seu nome
            </Input>
            <label className='input-lbl' htmlFor="cargo">Cargo e área</label>
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
            <Input type='tel' id='fone' name='fone'>
                Seu número de telefone
            </Input>
            <Input type='text' id='site' name='site' >
                Website da Empresa
            </Input>
            <Input type='text' id='nomeEmpresa' name='nomeEmpresa'>
                Nome da empresa
            </Input>
            <Input type='text' id='cnpj' name='cnpj'>
                CNPJ
            </Input>

            <label className='input-lbl' htmlFor="tipo">Tipo de empresa</label>
            <div className='comp-radio'>
                <div className='radio-block'>
                    <Input className='radio-input' type='radio' id='startup' name='tipo' value='startup' />
                    <label htmlFor="startup">Startup</label>
                </div>

                <div className='radio-block'>
                    <Input className='radio-input' type='radio' id='peq_media' name='tipo' value='peq_media' />
                    <label htmlFor="peq_media">Pequena ou Média empresa</label>
                </div>

                <div className='radio-block'>
                    <Input className='radio-input' type='radio' id='grande' name='tipo' value='grande' />
                    <label htmlFor="grande">Grande empresa</label>
                </div>
            </div>
            <label className='input-lbl' htmlFor="descricao">Descrição de sua empresa</label>
            <textarea className='description-box' id='descricao' name='descricao' rows='5' cols='33' placeholder='Conte um pouco sobre sua empresa para que os candidatos saibam mais sobre vocês.' />
        </form>
    )
}