import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className="error-404">
            {/* Message d'erreur pour les pages non trouvées */}
            <div>404</div>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error