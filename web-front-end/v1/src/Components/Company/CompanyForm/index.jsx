import React from 'react'
import Input from '../../Input'

import InputText from '../../Open/Input/InputText'
import InputComboBox from '../../Open/Input/InputComboBox'
import InputRadio from '../../Open/Input/InputRadio'
import InputTextArea from '../../Open/Input/InputTextArea'

import './style.css'

const CompanyForm = () => {
    let options = [
        { text: 'Analista de RH', value: 'analista-rh' },
        { text: 'Gerente de RH', value: 'gerente-rh' },
        { text: 'Diretor(a) de RH', value: 'diretor-rh' },
        { text: 'Analista de TI', value: 'analista-ti' },
        { text: 'Gerente de TI', value: 'gerente-ti' },
        { text: 'Diretor(a) de TI', value: 'diretor-ti' },
        { text: 'Área de Marketing / Vendas', value: 'marketing-vendas' },
        { text: 'Área de finanças', value: 'finanças' },
        { text: 'CEO / Fundador(a)', value: 'ceo-fundador' },
        { text: 'Outros', value: 'outros' },
    ]

    return (
        <form className='form-field'>
            <InputText placeholder='Ex: Ricardo Valencia' textLabel='Seu nome' name='company-edit-form/nome' inline={false}/>

            <InputComboBox textLabel='Cargo e área' name='company-edit-form/cargo-area' options={options} />
            
            <InputText placeholder='Ex: 55 (51) 998568944' textLabel='Seu número de telefone' name='company-edit-form/telefone' inline={false}/>
            <InputText placeholder='Ex: http://localiza.com.br' textLabel='Website' name='company-edit-form/website' inline={false}/>
            <InputText placeholder='Ex: Dropbox' textLabel='Nome da empresa' name='company-edit-form/nome-empresa' inline={false}/>
            <InputText placeholder='Ex: 28.208.818/0001-13' textLabel='CNPJ' name='company-edit-form/cnpj' inline={false}/>

            <label className='input-lbl'>Tipo de empresa</label>
            <div >
                <InputRadio id="company-edit-form/startup" textLabel='Startup' name="company-edit-form/startup" value='startup'/>
                <InputRadio id="company-edit-form/pequena-media-empresa" textLabel='Pesquena ou Média empresa' name="company-edit-form/pequena-media-empresa" value='pequena ou media empresa'/>
                <InputRadio id="company-edit-form/grande-empresa" textLabel='Grande empresa' name="company-edit-form/grande-empresa" value='grande empresa  '/>
            </div>

            <InputTextArea placeholder='Conte um pouco sobre sua empresa para que os candidatos saibam mais sobre vocês.' textLabel='Descrição de sua empresa' name='company-edit-form/description'/>

        </form>
    )
}

export default CompanyForm