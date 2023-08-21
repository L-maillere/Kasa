import fullStar from "../../assets/fullStar.svg";
import emptyStar from "../../assets/emptyStar.svg";

function Rate({ housing }) {
    const stars = [1, 2, 3, 4, 5];
    
    return (
        <div className="housing_rate">
            {stars.map((level) => 
            housing.rating >= level ? (
                <img key={level.toString()} src={fullStar} alt="note étoile pleine" />
                ) : (
                <img key={level.toString()} src={emptyStar} alt="note étoile vide" />
            ))}
        </div>
    )
}

export default Rate