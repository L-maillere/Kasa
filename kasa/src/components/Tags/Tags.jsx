function Tags({ housing }) {
    return (
        <div className="housing_tags-container">
            {/* Génération dynamique des tags pour un logement */}
            {housing.tags.map((tag, index) => (
                <span key={index} className="housing_tags">{tag}</span>
            ))}
        </div>
    )
}

export default Tags