import './Campo.css'

export const Campo = ({ label, placeholder, valor, aoAlterado, obrigatorio = false, type = 'text' }) => {

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{ label }</label>
            <input
                value = { valor }
                placeholder = { `${placeholder}` }
                required = { obrigatorio }
                onChange = { aoDigitado }
                type = { type }
            />
        </div>
    )
}