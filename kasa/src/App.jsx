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
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/housing/:housingId" element={<HousingDetails />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;