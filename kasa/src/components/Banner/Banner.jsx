import { useLocation } from "react-router-dom";
import bannerImg1 from "../../assets/banner_img_1.png";
import bannerImg2 from "../../assets/banner_img_2.png";

function Banner() {
    const location = useLocation();
    // Sélection de l'image de la bannière en fonction de la route actuelle
    const bannerSrc = location.pathname === "/" ? bannerImg1 : bannerImg2;
    const showText = location.pathname === "/";

    return (
        <div className="banner">
            <img className="bannerImg" src={bannerSrc} alt="banner nature"/>
            {/* Condition pour afficher le texte seulement sur la page d'accueil */}
            {showText && <h3 className="bannerText">Chez vous, partout et ailleurs</h3>}
        </div>
    )
}

export default Banner