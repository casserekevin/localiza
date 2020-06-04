import React from 'react'

import Input from '../Input'
import InputText from '../Open/Input/InputText'
import InputFile from '../Open/Input/InputFile'
import InputCheckbox from '../Open/Input/InputCheckbox'
import InputRadio from '../Open/Input/InputRadio'
import SkillGrid from '../SkillGrid'

import './style.css'

const UserForm = () => {
    return (
        <form className='form-field'>
            <h2>Sobre você</h2>
            <InputFile id='foto-perfil' name='foto-perfil'>
                Foto de perfil
            </InputFile>
            <InputText id='nome' name='nome'>
                Nome
            </InputText>
            <InputText id='sobrenome' name='sobrenome'>
                Sobrenome
            </InputText>
            <InputText id='fone' name='fone' placeholder='(51) 92345-6789'>
                Número de Telefone
            </InputText>
            <InputText id='cidade' name='cidade'>
                Cidade onde mora
            </InputText>

            <h2>Apresentação</h2>
            <InputText id='titulo' name='titulo' placeholder='Ex: Desenvolvedor PHP'>
                Título do seu perfil
            </InputText>

            <label className='input-lbl' htmlFor="nivel-ingles">Nível de Inglês</label>
            <select className='default-input' name="nivel-ingles" id="nivel-ingles">
                <option value="nulo">Nulo ou pouco conhecimento</option>
                <option value="basico">Nível básico</option>
                <option value="basico-inter">Nível básico a intermediário</option>
                <option value="intermediario">Nível intermediário</option>
                <option value="avancado">Nível avançado</option>
                <option value="fluente">Fluente ou nativo</option>
            </select>

            <label className='input-lbl' htmlFor="descricao">Descrição</label>
            <textarea className='description-box' id='descricao' name='descricao'
                rows='5' cols='33' placeholder='Conte um pouco sobre você, suas experiências e conquistas.' />

            <InputText id='linkedin' name='linkedin'>
                Linkedin url
            </InputText>
            <InputText id='github' name='github'>
                Github url
            </InputText>
            <InputFile id='cv-input' name='cv-input'>
                Anexar seu CV
            </InputFile>

            <h2>Habilidades</h2>
            <InputText id='foco' name='foco' placeholder='Ex: Mobile'>
                Foco de carreira
            </InputText>
            <label className='input-lbl' htmlFor="exp">Experiência</label>
            <div className='comp-radio'>
                <div className='radio-block'>
                    <InputRadio id='junior' name='exp' value='junior' />
                    <label htmlFor="junior">Junior</label>
                </div>

                <div className='radio-block'>
                    <InputRadio id='pleno' name='exp' value='pleno' />
                    <label htmlFor="pleno">Pleno</label>
                </div>

                <div className='radio-block'>
                    <InputRadio id='senior' name='exp' value='senior' />
                    <label htmlFor="senior">Senior</label>
                </div>
            </div>

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
            <SkillGrid />
        </form>
    )
}

export default UserForm