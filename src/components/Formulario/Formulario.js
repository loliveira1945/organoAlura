import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


export const Formulario = ({ aoColaboradorCadastrado, times, aoCriarTime }) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoColaboradorCadastrado({
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
        <section className='formulario-container'>
            <form className="formulario" onSubmit={ aoSalvar }>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                    valor = { nome }
                    aoAlterado = { valor => setNome(valor)}
                    label = "Nome"
                    placeholder = "Digite o seu nome"
                    obrigatorio = { true }/>
                <Campo
                    valor = { cargo }
                    aoAlterado = { valor => setCargo(valor)}
                    label = "Cargo"
                    placeholder = "Digite o seu cargo"
                    obrigatorio = { true }/>
                <Campo
                    valor = { imagem }
                    aoAlterado = { valor => setImagem(valor)}
                    label = "Imagem"
                    placeholder = "Informe o endereço da imagem"
                    obrigatorio = { true }/>
                <ListaSuspensa 
                    valor = { time }
                    aoAlteradorSelect = { valor => setTime(valor) }
                    label="Time" 
                    itens={ times }
                    obrigatorio = { true }/>
                <Botao texto = 'CADASTRAR'></Botao>
            </form>
            <form className = "formulario" onSubmit = {(evento) => {
                evento.preventDefault()
                aoCriarTime({ nome: nomeTime, cor: corTime })
                setCorTime('')
                setNomeTime('')
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    obrigatorio
                    label = 'Nome'
                    placeholder = 'Digite o nome do time'
                    valor = { nomeTime }
                    aoAlterado = { valor => setNomeTime(valor) }/>
                <Campo
                    obrigatorio
                    label = 'Cor'
                    type = 'color'
                    valor = {corTime}
                    aoAlterado = { valor => setCorTime(valor) }/>
                <Botao texto = 'Criar Time' />
            </form>
        </section>
    )
}