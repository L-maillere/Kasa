import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./pages/About/About.jsx";
import Error from "./pages/Error/Error.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import HousingDetails from "./pages/HousingDetails/HousingDetails.jsx";
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Router>
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
    	</Router>
 	 </React.StrictMode>
);