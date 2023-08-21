import arrowCollapse from "../../assets/arrow_collapse.svg"

function Collapse({ title, content, className, isVisible, onClick }) {
    const handleClick = (event) => {
        event.stopPropagation();
        onClick();
    }
    return (
        <div className={`collapse ${className} ${isVisible ? 'show-content' : ''}`}>
            <div className="collapse_header">
                <h3>{title}</h3>
                <img src={arrowCollapse} alt="bouton collapse" onClick={handleClick}/>
            </div>
            <div className={`collapse_${className}_content`}>{content}</div>
        </div>
    )
}
export default Collapse