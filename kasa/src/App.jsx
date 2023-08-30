import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About/About.jsx"
import HousingDetails from "./pages/HousingDetails/HousingDetails.jsx";
import Error from "./pages/Error/Error.jsx";

function App() {
	return (
		<div>
			<Header />
			<main>
				<Routes>
					{/* Configuration des routes pour le routage de l'application */}
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/housing/:housingId" element={<HousingDetails />} />
					{/* Route générique pour gérer les erreurs 404 */}
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;