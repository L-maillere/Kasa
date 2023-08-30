import arrowCollapse from "../../assets/arrow_collapse.svg"
import { useState } from "react";

function Collapse({ title, content, className, isVisible, onClick }) {
    const [isRotated, setIsRotated] = useState(false); // État pour suivre si le bouton est tourné ou non

    // Gère le clic sur le bouton collapse
    const handleClick = (event) => {
        event.stopPropagation();
        setIsRotated(!isRotated);
        onClick();
    }
    return (
        <div className={`collapse ${className} ${isVisible ? 'show-content' : ''}`}>
            <div className="collapse_header">
                <h3>{title}</h3>
                {/* Bouton pour afficher ou masquer le contenu */}
                <img 
                    src={arrowCollapse} 
                    alt="bouton collapse" 
                    onClick={handleClick}
                    className={isRotated ? 'rotated' : ''}
                />
            </div>
            <div className={`collapse_${className}_content`}>{content}</div>
        </div>
    )
}
export default Collapse