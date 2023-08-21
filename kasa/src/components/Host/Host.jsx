function Host({ housing }) {
    return (
        <div className="housing_host">
            <p className="housing_host_name">{housing.host.name}</p>
            <img className="housing_host_picture" src={housing.host.picture} alt="propriétaire" />
        </div>
    )
}

export default Host