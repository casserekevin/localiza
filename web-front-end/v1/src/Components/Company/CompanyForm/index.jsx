import React, { useState } from 'react'

import InputFile from '../../Open/Input/InputFile'
import InputText from '../../Open/Input/InputText'
import InputComboBox from '../../Open/Input/InputComboBox'
import InputRadio from '../../Open/Input/InputRadio'
import InputTextArea from '../../Open/Input/InputTextArea'

import './style.css'

const CompanyForm = () => {
    let optionsCargoArea = [
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

    let optionsComoEncontrouLocaliza = [
        { text: 'Alguém da Localiza entrou em contato comigo no Facebook', value: 'contato-localiza-facebook' },
        { text: 'Alguém da Localiza entrou em contato comigo no Linkedin', value: 'contato-localiza-linkedin' },
        { text: 'Alguém da Localiza entrou em contato comigo por Email', value: 'contato-localiza-email' },
        { text: 'Alguém da Localiza entrou em contato comigo de uma outra maneira', value: 'contato-localiza-outra-maneira' },
        { text: 'Vi uma Propaganda/Anúncio', value: 'propaganda-anuncio' },
        { text: 'Recomendação de uma Empresa', value: 'recomendacao-empresa' },
        { text: 'Recomendação de um Programador', value: 'recomendacao-programador' },
        { text: 'Pesquisa no Google', value: 'pesquisa-google' },
        { text: 'Outro', value: 'outro' },
    ]

    const [state, setState] = useState({
        logo: undefined,
        nome: '',
        cargoArea: optionsCargoArea[0].value,
        telefone: '',
        website: '',
        nomeEmpresa: '',
        cnpj: '',
        tipoEmpresa: '',
        descricaoEmpresa: '',
        videoYouTubeEmpresa: '',
        comoEncontrouLocaliza: optionsComoEncontrouLocaliza[0].value
    })

    const setLogo = (newValue) => {
        setState((prevState) => {
            debugger
            let newState = {...prevState}
            newState.logo = newValue
            return newState
        })
    }

    const setNome = (newValue) => {
        setState((prevState) => {
            debugger
            let newState = {...prevState}
            newState.nome = newValue
            return newState
        })
    }

    const setCargoArea = (newValue) => {
        setState((prevState) => {
            debugger
            let newState = {...prevState}
            newState.cargoArea = newValue
            return newState
        })
    }

    const setTelefone = (newValue) => {
        setState((prevState) => {
            debugger
            let newState = {...prevState}
            newState.telefone = newValue
            return newState
        })
    }

    const setWebsite = (newValue) => {
        setState((prevState) => {
            debugger
            let newState = {...prevState}
            newState.website = newValue
            return newState
        })
    }

    const setNomeEmpresa = (newValue) => {
        setState((prevState) => {
            debugger
            let newState = {...prevState}
            newState.nomeEmpresa = newValue
            return newState
        })
    }

    const setCNPJ = (newValue) => {
        setState((prevState) => {
            debugger
            let newState = {...prevState}
            newState.cnpj = newValue
            return newState
        })
    }

    const setTipoEmpresa = (newValue) => {
        setState((prevState) => {
            debugger
            let newState = {...prevState}
            newState.tipoEmpresa = newValue
            return newState
        })
    }

    const setDescricaoEmpresa = (newValue) => {
        setState((prevState) => {
            debugger
            let newState = {...prevState}
            newState.descricaoEmpresa = newValue
            return newState
        })
    }

    const setVideoYouTubeEmpresa = (newValue) => {
        setState((prevState) => {
            debugger
            let newState = {...prevState}
            newState.videoYouTubeEmpresa = newValue
            return newState
        })
    }

    const setComoEncontrouLocaliza = (newValue) => {
        setState((prevState) => {
            debugger
            let newState = {...prevState}
            newState.comoEncontrouLocaliza = newValue
            return newState
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitting...')
    }

    return (
        <form className='form-field' onSubmit={handleSubmit}>
            <InputFile textLabel='Anexe um logo' textButton='Escolha uma imagem' name='company-edit-form/logo' id='company-edit-form/logo' onChange={setLogo}/>

            <InputText placeholder='Ex: Ricardo Valencia' textLabel='Seu nome' name='company-edit-form/nome' inline={false} value={state.nome} onChange={setNome}/>

            <InputComboBox textLabel='Cargo e área' name='company-edit-form/cargo-area' value={state.cargoArea} onChange={setCargoArea} options={optionsCargoArea}  />
            
            <InputText placeholder='Ex: 55 (51) 998568944' textLabel='Seu número de telefone' name='company-edit-form/telefone' inline={false} value={state.telefone} onChange={setTelefone}/>
            <InputText placeholder='Ex: http://localiza.com.br' textLabel='Website' name='company-edit-form/website' inline={false} value={state.website} onChange={setWebsite}/>
            <InputText placeholder='Ex: Dropbox' textLabel='Nome da empresa' name='company-edit-form/nome-empresa' inline={false} value={state.nomeEmpresa} onChange={setNomeEmpresa}/>
            <InputText placeholder='Ex: 28.208.818/0001-13' textLabel='CNPJ' name='company-edit-form/cnpj' inline={false} value={state.cnpj} onChange={setCNPJ}/>

            <label className='input-lbl'>Tipo de empresa</label>
            <div >
                <InputRadio id="company-edit-form/startup" textLabel='Startup' name="company-edit-form/startup" value='startup' onChange={setTipoEmpresa} valueChecked={state.tipoEmpresa}/>
                <InputRadio id="company-edit-form/pequena-media-empresa" textLabel='Pesquena ou Média empresa' name="company-edit-form/pequena-media-empresa" value='pequena ou media empresa' onChange={setTipoEmpresa} valueChecked={state.tipoEmpresa}/>
                <InputRadio id="company-edit-form/grande-empresa" textLabel='Grande empresa' name="company-edit-form/grande-empresa" value='grande empresa' onChange={setTipoEmpresa} valueChecked={state.tipoEmpresa}/>
            </div>

            <InputTextArea placeholder='Conte um pouco sobre sua empresa para que os candidatos saibam mais sobre vocês.' textLabel='Descrição de sua empresa' name='company-edit-form/description' value={state.descricaoEmpresa} onChange={setDescricaoEmpresa}/>
           
            <InputText placeholder='Ex: https://www.youtube.com/watch?v=TNfpr_GUnKA' textLabel='Video Youtube da empresa' name='company-edit-form/video-yt-empresa' inline={false} value={state.videoYouTubeEmpresa} onChange={setVideoYouTubeEmpresa}/>

            <InputComboBox textLabel='Como você encontrou a Localiza?' name='company-edit-form/como-encontrou-localiza' value={state.comoEncontrouLocaliza} onChange={setComoEncontrouLocaliza} options={optionsComoEncontrouLocaliza}/>
            <button type='submit'>Salvar</button>
            {<pre>{JSON.stringify(state, null, 2)}</pre>}
        </form>
    )
}

export default CompanyForm