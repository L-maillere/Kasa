import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card"
import { housingList } from "../../datas/housing"

function Home() {
    return (
        <div className="homeWrapper">
            <Banner />
            <div className="cardsContainer">
                {housingList.map(housing => (
                    <Card key={housing.id} housing={housing} />
                ))}
            </div>
        </div>
    )
}

export default Home