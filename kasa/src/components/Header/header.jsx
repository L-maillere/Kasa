import logo from '../../assets/kasa_logo.svg'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation() // Récupère l'emplacement actuel pour mettre en évidence le lien actif
    return (
        <header className="header">
            {/* Logo qui redirige vers la page d'accueil */}
            <Link className="header_logo_link" to="/">
                <img className="headerLogo" src={logo} alt="logo agence kasa" />
            </Link>
            <nav className="headerNav">
                {/* Liens de navigation avec mise en évidence du lien actif */}
                <Link className={`headerNavLink ${location.pathname === "/" ? "active" : ""} `} to="/">Accueil</Link>
                <Link className={`headerNavLink ${location.pathname === "/about" ? "active" : ""}`} to="/about">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header