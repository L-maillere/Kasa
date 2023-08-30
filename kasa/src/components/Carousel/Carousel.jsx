import { useState } from "react"
import prevArrow from "../../assets/arrow_previous.svg"
import nextArrow from "../../assets/arrow_next.svg"

function Carousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0); // État pour suivre l'index de l'image actuelle
    const length = slides.length;

    // Fonction pour afficher l'image précédente
    const prevSlide = () => {
        setCurrentIndex( currentIndex === 0 ? length - 1 : currentIndex - 1)
    }
    // Fonction pour afficher l'image suivante
    const nextSlide = () => {
        setCurrentIndex( currentIndex === length - 1 ? 0 : currentIndex + 1)
    }
    return (
        <div className="carousel">
            {/* Affiche les boutons de navigation seulement si plusieurs images sont présentes */}
            {length > 1 && (
                <button onClick={prevSlide} className="carousel_button prev">
                    {/* Bouton pour naviguer vers l'image précédente */}
                    <img src={prevArrow} alt="bouton précédent carrousel" />
                </button>
            )}
            {/* Affichage des images du carrousel */}
            {slides.map((slide, index) => (
                <div className="carousel_wrapper" key={index}>
                    {/* Affiche l'image seulement si elle correspond à l'index actuel */}
                    {index === currentIndex && <img className="carousel_picture" src={slide} alt={`Slide ${index + 1}`} />}
                </div>
            ))}
            {length > 1 && (
                <>
                    <button onClick={nextSlide} className="carousel_button next">
                        {/* Bouton pour naviguer vers l'image suivante */}
                        <img src={nextArrow} alt="bouton suivant carrousel" />
                    </button>
                    {/* Affichage de l'index actuel du carrousel */}
                    <p className="carousel_index">{currentIndex + 1} / {slides.length}</p>
                </>
            )}
        </div>
    )
}

export default Carousel