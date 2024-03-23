import './Rodape.css'

export const Rodape = () => {
    return (
        <div className='rodapeApp'>
            <img src="/images/fundo.png" alt="Ícones de efeite no rodapé" className='efeito'/>
            <div className='icones'>
                <a href='https://github.com/loliveira1945' target='_blank' rel="noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href='https://www.instagram.com/oliveira.vargass/' target='_blank' rel="noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href='https://www.linkedin.com/in/lucasalvesoliveira2042/' target='_blank' rel="noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
            <div className='logo'>
                <img src="/images/logo.png" alt="Logo da marca Organo"/>
            </div>
            <div className='desenvolvedor'>
                <p>Desenvolvido por Lucas Alves Oliveira</p>
            </div>
        </div>
    )
}