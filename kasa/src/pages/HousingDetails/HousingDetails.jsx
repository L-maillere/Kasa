import { useParams } from "react-router-dom"
import { housingList } from "../../datas/housing";
import Carousel from "../../components/Carousel/Carousel";
import HousingDescription from "../../components/HousingDescription/HousingDescription";


function HousingDetails() {
    const { housingId } = useParams();
    const housing = housingList.find(house => house.id === housingId);

    return (
        <div className="housing-wrapper">
            <Carousel slides={housing.pictures}/>
            <HousingDescription housing={housing}/>
        </div>
    )
}

export default HousingDetails