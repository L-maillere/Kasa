import { useParams } from "react-router-dom"
import { housingList } from "../../datas/housing";
import Carousel from "../../components/Carousel/Carousel";
import HousingDescription from "../../components/HousingDescription/HousingDescription";


function HousingDetails() {
    const { housingId } = useParams(); // Récupère l'ID du logement à partir de l'URL
    const housing = housingList.find(house => house.id === housingId); // Trouve le logement correspondant dans les données

    return (
        <div className="housing-wrapper">
            <Carousel slides={housing.pictures}/>
            <HousingDescription housing={housing}/>
        </div>
    )
}

export default HousingDetails