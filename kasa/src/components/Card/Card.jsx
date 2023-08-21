import { Link } from 'react-router-dom'

function Card({ housing }) {
    return (
        <Link className='housingCard' to={`/housing/${housing.id}`}>
            <div className='housingCardDescription'>
                <img src={housing.cover} alt={housing.title} />
                <div className='housingCardShadow'>
                    <h2>{housing.title}</h2>
                </div>
            </div>
        </Link>
    )
}

export default Card