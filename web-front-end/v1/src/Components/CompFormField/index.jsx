import React from 'react'
import Input from '../Input'
export default function CompFormField() {
    return (
        <form className='flex-centralizado'>
            <label htmlFor="nomeRH">Seu Nome</label>
            <Input type='text' id='nomeRH' name='nomeRH' placeholder='Tony Montana' />
            <label htmlFor="cargo">Cargo e área</label>
            <select name="cargo" id="cargo">
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
            <Input type='tel' id='fone' name='fone' />
            <label htmlFor="site">Website</label>
            <Input type='text' id='site' name='site' />
            <label htmlFor="nomeEmpresa">Nome da empresa</label>
            <Input type='text' id='nomeEmpresa' name='nomeEmpresa' />
            <label htmlFor="cnpj">CNPJ</label>
            <Input type='text' id='cnpj' name='cnpj' />
            <label htmlFor="tipo">Tipo de empresa</label>

            <Input type='radio' id='startup' name='tipo' value='startup' />
            <label htmlFor="startup">Startup</label>
            <Input type='radio' id='peq_media' name='tipo' value='peq_media' />
            <label htmlFor="peq_media">Pequena ou Média empresa</label>
        </form>
    )
}