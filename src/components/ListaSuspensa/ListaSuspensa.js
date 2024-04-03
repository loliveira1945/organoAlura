import './ListaSuspensa.css'

export const ListaSuspensa = ({label, itens,  valor, aoAlteradorSelect, obrigatorio = false}) => {
    return (
        <div className='lista-suspensa'>
            <label>{ label }</label>
            <select
                onChange =  { evento => aoAlteradorSelect(evento.target.value) }
                value  = { valor }
                required = { obrigatorio } >
                <option value = ''>Selecione uma opção</option>
                { itens.map(item => 
                    <option key = { item }>
                        { item }
                    </option>
                )}
            </select>
        </div>
    )
}