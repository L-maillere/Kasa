import { BrowserRouter as Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/home.jsx";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
import Error from "./pages/Error/error.jsx";

function App() {
	return (
		<div>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;