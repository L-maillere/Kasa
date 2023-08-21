function Tags({ housing }) {
    return (
        <div className="housing_tags-container">
            {housing.tags.map((tag, index) => (
                <span key={index} className="housing_tags">{tag}</span>
            ))}
        </div>
    )
}

export default Tags