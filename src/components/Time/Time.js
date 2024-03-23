import { Colaborador } from '../Colaborador/Colaborador'
import './Time.css'

export const Time = (props) => {
    //posso atribuir o css dos dois jeitos
    const css = { borderColor: props.corIcone }
    return (
        //renderizacao condicional
        (props.colaboradores.length > 0) 
        ? <section 
            className='time' 
            style={{ backgroundColor: props.corFundo }}>
            <h3 style={css}>{ props.nome }</h3>
            <div className='colaboradores'>
                { props.colaboradores.map( colaborador => 
                    <Colaborador
                        key = { colaborador.nome }
                        nome = { colaborador.nome }
                        cargo = { colaborador.cargo }
                        imagem = { colaborador.imagem }
                        corFundo = { props.corIcone }
                    /> 
                )}
                <Colaborador 
                    key = 'chaveAleatoriaUsarioFixoTeste'
                    nome = 'Elon Musk'
                    cargo = 'Diretor executivo da Tesla Motors'
                    imagem = 'https://www.newegg.com/insider/wp-content/uploads/elon-musk.jpeg'
                    corFundo = { props.corIcone }
                />
            </div>
        </section>
        : ''
    )
}