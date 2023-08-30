import { useState } from "react";
import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"

function About() {

    const [isFiabilityVisible, setIsFiabilityVisible] = useState(false);
    const [isRespectVisible, setIsRespectVisible] = useState(false);
    const [isServiceVisible, setIsServiceVisible] = useState(false);
    const [isSecurityVisible, setIsSecurityVisible] = useState(false);

    return (
        <>
            <Banner />
            {/* Composants repliables pour afficher différentes sections de la page "À propos" */}
            <Collapse
                title="Fiabilité"
                content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                régulièrement vérifiées par nos équipes."
                className="about fiability"
                isVisible={isFiabilityVisible}
                onClick={() => setIsFiabilityVisible(!isFiabilityVisible)}
            />
            <Collapse 
                title="Respect"
                content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme."
                className="about respect"
                isVisible={isRespectVisible}
                onClick={() => setIsRespectVisible(!isRespectVisible)}
            />
            <Collapse
                title="Service"
                content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme."
                className="about service"
                isVisible={isServiceVisible}
                onClick={() => setIsServiceVisible(!isServiceVisible)}
            />
            <Collapse
                title="Sécurité"
                content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos hôtes."
                className="about security"
                isVisible={isSecurityVisible}
                onClick={() => setIsSecurityVisible(!isSecurityVisible)}
            />
        </>
    )
}

export default About