import React, { useState } from 'react'

import UserFormAboutYou from './UserFormAboutYou'
import UserFormPresentation from './UserFormPresentation'
import UserFormAbilities from './UserFormAbilities'
import UserFormWhatDoYouSearch from './UserFormWhatDoYouSearch'

import './style.css'
import UserFormProfessionalExperiences from './UserFormProfessionalExperiences'

const UserForm = () => {

    const options = {
        nivelIngles: [
            { text: 'Nulo ou pouco conhecimento', value: 'nulo' },
            { text: 'Nível básico', value: 'basico' },
            { text: 'Nível básico a intermediário', value: 'basico-intermediario' },
            { text: 'Nível intermediário', value: 'intermediario' },
            { text: 'Nível avançado', value: 'avancado' },
            { text: 'Fluente ou nativo', value: 'fluente' }
        ],
        compProfile: [
            { text: 'Trabalhador autônomo (freelancer)', value: 'autonomo' },
            { text: 'Negócio Próprio', value: 'empresa-propria' },
            { text: 'Startup', value: 'startup' },
            { text: 'Pequena ou média empresa', value: 'peq-med' },
            { text: 'Grande empresa', value: 'grande' }
        ],
        jobType: [
            { text: 'Estagiário', value: 'estagiario' },
            { text: 'Júnior', value: 'junior' },
            { text: 'Pleno', value: 'pleno' },
            { text: 'Sênior', value: 'senior' }
        ],
        mainSkills: [
            { text: 'PHP', value: 'php' },
            { text: 'ReactJS', value: 'react' },
            { text: 'Java', value: 'java' },
            { text: 'Python', value: 'python' }
        ]
    }

    const [state, setState] = useState({
        UserFormAboutYou: {
            fotoPerfil: undefined,
            nome: '',
            sobrenome: '',
            telefone: '',
            cidade: ''
        },
        UserFormPresentation: {
            tituloPerfil: '',
            nivelIngles: options.nivelIngles[0].value,
            descricao: '',
            urlLinkedin: '',
            urlGithub: '',
            curriculo: undefined
        },
        UserFormAbilities: {
            foco: '',
            experiencia: '',
            habilidades: [{
                skill: '',
                note: undefined
            },
            {
                skill: '',
                note: undefined
            },
            {
                skill: '',
                note: undefined
            }]
        },
        UserFormWhatDoYouSearch: {
            tamanhoEmpresa: [
                undefined,
                undefined,
                undefined
            ],
            tipoContrato: [
                undefined,
                undefined,
                undefined
            ],
            salarioMinimo: '',
            aceitaTrabalharRemotamente: false,
            deficienteFisico: false
        },
        UserFormProfessionalExperiences: {
            experiences: [{
                compName: '',
                jobStartDate: '',
                jobEndDate: '',
                firstSkill: '',
                secondSkill: '',
                thirdSkill: '',
                fourthSkill: '',
                jobActivities: ''
            }]
        }
    })

    const functions = {
        UserFormAboutYou: {
            setFotoPerfil: (newValue) => {
                setState((prevState) => {
                    debugger
                    let newState = { ...prevState }
                    newState.UserFormAboutYou.fotoPerfil = newValue
                    return newState
                })
            },
            setNome: (newValue) => {
                setState((prevState) => {
                    debugger
                    let newState = { ...prevState }
                    newState.UserFormAboutYou.nome = newValue
                    return newState
                })
            },
            setSobrenome: (newValue) => {
                setState((prevState) => {
                    debugger
                    let newState = { ...prevState }
                    newState.UserFormAboutYou.sobrenome = newValue
                    return newState
                })
            },
            setTelefone: (newValue) => {
                setState((prevState) => {
                    debugger
                    let newState = { ...prevState }
                    newState.UserFormAboutYou.telefone = newValue
                    return newState
                })
            },
            setCidade: (newValue) => {
                setState((prevState) => {
                    debugger
                    let newState = { ...prevState }
                    newState.UserFormAboutYou.cidade = newValue
                    return newState
                })
            }
        },
        UserFormPresentation: {
            setTituloPerfil: (newValue) => {
                setState((prevState) => {
                    debugger
                    let newState = { ...prevState }
                    newState.UserFormPresentation.tituloPerfil = newValue
                    return newState
                })
            },
            setNivelIngles: (newValue) => {
                setState((prevState) => {
                    debugger
                    let newState = { ...prevState }
                    newState.UserFormPresentation.nivelIngles = newValue
                    return newState
                })
            },
            setDescricao: (newValue) => {
                setState((prevState) => {
                    debugger
                    let newState = { ...prevState }
                    newState.UserFormPresentation.descricao = newValue
                    return newState
                })
            },
            setURLLinkedin: (newValue) => {
                setState((prevState) => {
                    debugger
                    let newState = { ...prevState }
                    newState.UserFormPresentation.urlLinkedin = newValue
                    return newState
                })
            },
            setURLGithub: (newValue) => {
                setState((prevState) => {
                    debugger
                    let newState = { ...prevState }
                    newState.UserFormPresentation.urlGithub = newValue
                    return newState
                })
            },
            setCurriculo: (newValue) => {
                setState((prevState) => {
                    debugger
                    let newState = { ...prevState }
                    newState.UserFormPresentation.curriculo = newValue
                    return newState
                })
            }

        },
        UserFormAbilities: {
            setFoco: (newValue) => {
                setState((prevState) => {
                    let newState = { ...prevState }
                    newState.UserFormAbilities.foco = newValue
                    return newState
                })
            },
            setExperiencia: (newValue) => {
                setState((prevState) => {
                    let newState = { ...prevState }
                    newState.UserFormAbilities.experiencia = newValue
                    return newState
                })
            },
            setSkillName: (index, newValue) => {
                setState((prevState) => {
                    let newState = { ...prevState }
                    newState.UserFormAbilities.habilidades[index].skill = newValue
                    console.log(newState)
                    return newState
                })
            },
            setNote: (index, newValue) => {
                setState((prevState) => {
                    let newState = { ...prevState }
                    newState.UserFormAbilities.habilidades[index].note = newValue
                    console.log(newState)
                    return newState
                })
            },
            deleteSkill: (index, e) => {
                e.preventDefault()
                setState((prevState) => {
                    let newState = { ...prevState }
                    newState.UserFormAbilities.habilidades = newState.UserFormAbilities.habilidades.filter((element, indexArr) => indexArr !== index)
                    console.log(newState)
                    return newState
                })
            },
            addSkill: (e) => {
                e.preventDefault()
                setState((prevState) => {
                    let newState = { ...prevState }
                    newState.UserFormAbilities.habilidades.push({ skill: '', note: undefined })
                    console.log(newState)
                    return newState
                })
            }
        },
        UserFormWhatDoYouSearch: {
            setTamanhoEmpresa: (index, newValue) => {
                setState((prevState) => {
                    debugger
                    let newState = { ...prevState }
                    if (newState.UserFormWhatDoYouSearch.tamanhoEmpresa[index] === newValue) {
                        newState.UserFormWhatDoYouSearch.tamanhoEmpresa[index] = undefined
                    }
                    else {
                        newState.UserFormWhatDoYouSearch.tamanhoEmpresa[index] = newValue
                    }
                    return newState
                })
            },
            setTipoContrato: (index, newValue) => {
                setState((prevState) => {
                    debugger
                    let newState = { ...prevState }
                    if (newState.UserFormWhatDoYouSearch.tipoContrato[index] === newValue) {
                        newState.UserFormWhatDoYouSearch.tipoContrato[index] = undefined
                    }
                    else {
                        newState.UserFormWhatDoYouSearch.tipoContrato[index] = newValue
                    }
                    return newState
                })
            },
            setSalarioMinimo: (newValue) => {
                setState((prevState) => {
                    let newState = { ...prevState }
                    newState.UserFormWhatDoYouSearch.salarioMinimo = newValue
                    return newState
                })
            },
            setAceitaTrabalharRemotamente: (newValue) => {
                setState((prevState) => {
                    let newState = { ...prevState }
                    newState.UserFormWhatDoYouSearch.aceitaTrabalharRemotamente = newValue
                    return newState
                })
            },
            setDeficienteFisico: (newValue) => {
                setState((prevState) => {
                    let newState = { ...prevState }
                    newState.UserFormWhatDoYouSearch.deficienteFisico = newValue
                    return newState
                })
            }
        },
        UserFormProfessionalExperiences: {
            setCompName: (index, newValue) => {
                setState((prevState) => {
                    let newState = { ...prevState }
                    newState.UserFormProfessionalExperiences.experiences[index].compName = newValue
                    return newState
                })
            }
        }
    }

    return (
        <form className='form-field'>
            <UserFormAboutYou state={state.UserFormAboutYou} functions={functions.UserFormAboutYou} />
            <UserFormPresentation state={state.UserFormPresentation} functions={functions.UserFormPresentation} options={options} />
            <UserFormAbilities state={state.UserFormAbilities} functions={functions.UserFormAbilities} />
            <UserFormProfessionalExperiences state={state.UserFormProfessionalExperiences} functions={functions.UserFormProfessionalExperiences} options={options} />
            <UserFormWhatDoYouSearch state={state.UserFormWhatDoYouSearch} functions={functions.UserFormWhatDoYouSearch} />
            {<pre>{JSON.stringify(state, null, 2)}</pre>}
        </form>
    )
}

export default UserForm