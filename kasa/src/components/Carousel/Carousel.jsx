import { useState } from "react"
import prevArrow from "../../assets/arrow_previous.svg"
import nextArrow from "../../assets/arrow_next.svg"

function Carousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = slides.length;

    const prevSlide = () => {
        setCurrentIndex( currentIndex === 0 ? length - 1 : currentIndex - 1)
    }
    const nextSlide = () => {
        setCurrentIndex( currentIndex === length - 1 ? 0 : currentIndex + 1)
    }
    return (
        <div className="carousel">
            {length > 1 && (
                <button onClick={prevSlide} className="carousel_button prev">
                    <img src={prevArrow} alt="bouton précédent carrousel" />
                </button>
            )}
            {slides.map((slide, index) => (
                <div className="carousel_wrapper" key={index}>
                {index === currentIndex && <img className="carousel_picture" src={slide} alt={`Slide ${index + 1}`} />}
                </div>
            ))}
            {length > 1 && (
                <>
                    <button onClick={nextSlide} className="carousel_button next">
                        <img src={nextArrow} alt="bouton suivant carrousel" />
                    </button>
                    <p className="carousel_index">{currentIndex + 1} / {slides.length}</p>
                </>
            )}
        </div>
    )
}

export default Carousel