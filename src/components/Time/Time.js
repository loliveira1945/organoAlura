import { Colaborador } from '../Colaborador/Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

export const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    //posso atribuir o css dos dois jeitos
    // const css = { borderColor: time.corSecundaria }
    return (
        //renderizacao condicional
        colaboradores.length > 0
        && <section 
                className = 'time' 
                style = {{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <input 
                type = 'color' 
                className = 'input-cor' 
                value = { time.cor } 
                onChange = {evento => {
                    mudarCor(evento.target.value, time.nome);
                }} />
            <h3 style = {{ borderColor: time.cor }}>{ time.nome }</h3>
            <div className = 'colaboradores'>
                { colaboradores.map((colaborador, indice) => 
                    <Colaborador
                        key = { indice }
                        colaborador = { colaborador }
                        corDeFundo = { time.cor }
                        aoDeletar = { aoDeletar }
                        aoFavoritar = { aoFavoritar }
                    /> 
                )}
            </div>
        </section>
    )
}