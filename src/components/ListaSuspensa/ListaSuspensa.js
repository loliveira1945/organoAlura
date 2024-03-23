import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{ props.label }</label>
            <select
                onChange =  { evento => props.aoAlteradorSelect(evento.target.value) }
                value  = { props.valor }
                required = { props.required 
            }>
                <option value=''>Selecione uma opção</option>
                { props.itens.map(item => 
                    <option key={item}>
                        { item }
                    </option>
                )}
            </select>
        </div>
    )
}