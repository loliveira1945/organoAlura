import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


export const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        //limpar form ao cadastrar
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return (
        <section className='formulario'>
            <form onSubmit={ aoSalvar }>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    valor = { nome }
                    aoAlterado = { valor => setNome(valor)}
                    label = "Nome"
                    placeholder = "Digite o seu nome"
                    obrigatorio = { true }/>
                <CampoTexto
                    valor = { cargo }
                    aoAlterado = { valor => setCargo(valor)}
                    label = "Cargo"
                    placeholder = "Digite o seu cargo"
                    obrigatorio = { true }/>
                <CampoTexto
                    valor = { imagem }
                    aoAlterado = { valor => setImagem(valor)}
                    label = "Imagem"
                    placeholder = "Informe o endereço da imagem"
                    obrigatorio = { true }/>
                <ListaSuspensa 
                    valor = { time }
                    aoAlteradorSelect = { valor => setTime(valor) }
                    label="Time" 
                    itens={ props.times }
                    obrigatorio = { true }/>
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}