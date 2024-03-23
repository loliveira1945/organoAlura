import './Banner.css'

export const Banner = () => {
    //JSX - como o React trabalha/lê e transforma em elemento no DOM
    return (
        <header className="banner">
            <img src="/images/banner.png" alt="Banner principal da página Organo"/>
        </header>
    )
}