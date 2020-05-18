import React from 'react'
import './style.css'
import Card from '../Card'

const paperInc = {
    name: 'Paper Inc.',
    description: `Empresa líder no mercado de aviões de papel a 
    procura de desenvolvedores remotos de PHP que saibam git. R$ 3000,00 8hrs`,
    tags: ['PHP', 'GIT', 'Remoto'],
    icon: 'faPaperPlane'
}

const cpn = {
    name: 'CPN',
    description: `Centro de Pesquisa Nacional procura desenvolvedores
     front end para sua campanha de marketing. Necessário conhecimento 
     em HTML, CSS, Javascript e React. R$ 5000,00`,
    tags: ['HTML', 'CSS', 'JS', 'React']
}

const nasa = {
    name: 'NASA',
    description: `Busca-se desenvolvedor ninja para comandar novo time
     de desenvolvimento. R$ 20.000,00`,
    tags: ['HOT', 'Ninja', 'Over 9k']
}

export default function Feed() {
    return (
        <div className='feed-body'>
            <Card oportunity={paperInc} />
            <Card oportunity={cpn} />
            <Card oportunity={nasa} />
        </div>
    )
}