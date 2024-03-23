import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{ props.label }</label>
            <select
                onChange =  { evento => props.aoAlteradorSelect(evento.target.value) }
                value  = { props.value }
                required = { props.required 
            }>
                { props.itens.map(item => 
                    <option key={item}>
                        { item }
                    </option>
                )}
            </select>
        </div>
    )
}