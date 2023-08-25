import logo from '../../assets/kasa_logo.svg'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation()

    return (
        <header className="header">
            <Link className="header_logo_link" to="/">
                <img className="headerLogo" src={logo} alt="logo agence kasa" />
            </Link>
            <nav className="headerNav">
                <Link className={`headerNavLink ${location.pathname === "/" ? "active" : ""} `} to="/">Accueil</Link>
                <Link className={`headerNavLink ${location.pathname === "/about" ? "active" : ""}`} to="/about">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header