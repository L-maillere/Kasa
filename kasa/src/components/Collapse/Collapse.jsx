import arrowCollapse from "../../assets/arrow_collapse.svg"
import { useState } from "react";

function Collapse({ title, content, className, isVisible, onClick }) {
    const [isRotated, setIsRotated] = useState(false);

    const handleClick = (event) => {
        event.stopPropagation();
        setIsRotated(!isRotated);
        onClick();
    }
    return (
        <div className={`collapse ${className} ${isVisible ? 'show-content' : ''}`}>
            <div className="collapse_header">
                <h3>{title}</h3>
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