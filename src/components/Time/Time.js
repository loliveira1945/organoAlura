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
            <h3 style={css}>{ props.nomeTime }</h3>
            <div className='colaboradores'>
                { props.colaboradores.map( colaborador => 
                    <Colaborador
                        nome = { colaborador.nome }
                        cargo = { colaborador.cargo }
                        imagem = { colaborador.imagem }
                    /> 
                )}
            </div>
        </section>
        : ''
    )
}