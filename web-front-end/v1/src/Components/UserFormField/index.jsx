import React from 'react'

import Input from '../Input'
import './style.css'

export default function UserFormField() {
    return (
        <form className='form-field'>
            <h2>Sobre você</h2>
            <Input type='text' id='nome' name='nome'>
                Nome
            </Input>
            <Input type='text' id='sobrenome' name='sobrenome'>
                Sobrenome
            </Input>
            <Input type='text' id='fone' name='fone' placeholder='(51) 92345-6789'>
                Número de Telefone
            </Input>
            <Input type='text' id='cidade' name='cidade'>
                Cidade onde mora
            </Input>
            <Input className='foto-perfil-input' type='file' id='foto-perfil' name='foto-perfil'>
                Foto de perfil
            </Input>

            <h2>Apresentação</h2>
            <Input type='text' id='titulo' name='titulo' placeholder='Ex: Desenvolvedor PHP'>
                Título do seu perfil
            </Input>

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

            <Input type='text' id='linkedin' name='linkedin'>
                Linkedin url
            </Input>
            <Input type='text' id='github' name='github'>
                Github url
            </Input>
            <Input className='cv-input' type='file' id='cv-input' name='cv-input'>
                Anexar seu CV
            </Input>

            <h2>Habilidades</h2>
            <Input type='text' id='foco' name='foco' placeholder='Ex: Mobile'>
                Foco de carreira
            </Input>
            <label className='input-lbl' htmlFor="exp">Experiência</label>
            <div className='comp-radio'>
                <div className='radio-block'>
                    <Input className='radio-input' type='radio' id='junior' name='exp' value='junior' />
                    <label htmlFor="junior">Junior</label>
                </div>

                <div className='radio-block'>
                    <Input className='radio-input' type='radio' id='pleno' name='exp' value='pleno' />
                    <label htmlFor="pleno">Pleno</label>
                </div>

                <div className='radio-block'>
                    <Input className='radio-input' type='radio' id='senior' name='exp' value='senior' />
                    <label htmlFor="senior">Senior</label>
                </div>
            </div>

            <h2>O que você busca</h2>
            <label className='input-lbl'>Tamanho da Empresa</label>
            <Input className='tam-chk' type='checkbox' id='startup' name='tamanho'>
                Startup
            </Input>
            <Input className='tam-chk' type='checkbox' id='peq-med' name='tamanho'>
                Pequena ou Média empresa
            </Input>
            <Input className='tam-chk' type='checkbox' id='grande' name='tamanho'>
                Grande empresa
            </Input>

            <label className='input-lbl'>Tipo(s) de contrato</label>
            <Input className='tipo-con' type='checkbox' id='clt' name='tipo-con'>
                CLT
            </Input>
            <Input className='tipo-con' type='checkbox' id='pj' name='tipo-con'>
                PJ
            </Input>
            <Input className='tipo-con' type='checkbox' id='estagio' name='tipo-con'>
                Estágio
            </Input>

            <Input type='text' name='salario' id='salario'>
                Qual sua pretensão salarial mensal?
            </Input>
            <label className='input-lbl'>Aceita trabalhar remotamente?</label>
            <Input className='remoto-chk' type='checkbox' id='sim' name='remoto-chk'>Sim</Input>
            <Input className='remoto-chk' type='checkbox' id='nao' name='remoto-chk'>Não</Input>

            <label className='input-lbl'>Você é deficiente físico?</label>
            <Input className='pcd-chk' type='checkbox' id='sim' name='pcd-chk'>Sim</Input>
            <Input className='pcd-chk' type='checkbox' id='não' name='pcd-chk'>Não</Input>
        </form>
    )
}