import { useState } from "react";
import Tags from "../Tags/Tags";
import Host from "../Host/Host";
import Rate from "../Rate/Rate";
import Collapse from "../Collapse/Collapse";

function HousingDescription({ housing }) {

    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
    const [isEquipmentVisible, setIsEquipmentVisible] = useState(false);

    return (
        <>
        <div className="housing_description_top">
            <div className="housing_wrapper left">
                <h1>{housing.title}</h1>
                <h2>{housing.location}</h2>
                <Tags housing={housing} />
            </div>
            <div className="housing_wrapper right">
                <Host housing={housing} />
                <Rate housing={housing} />
            </div>
        </div>
        <div className="housing_description_bottom">
            <div className="collapse-container">
            <Collapse
                title="Description" 
                content={housing.description} 
                className="description"
                isVisible={isDescriptionVisible}
                onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
            />
            </div>
            <div className="collapse-container">
            <Collapse
                title="Équipements"
                content={housing.equipments.map(item => <div key={item}>{item}</div>)}
                className="equipments"
                isVisible={isEquipmentVisible}
                onClick={() => setIsEquipmentVisible(!isEquipmentVisible)}
            />
            </div>
        </div>
        </>
    )
}

export default HousingDescription