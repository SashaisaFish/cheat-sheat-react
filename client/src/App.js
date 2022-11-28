// import modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import pages
import HomePage from "./pages/HomePage.jsx";
import HtmlPage from "./pages/HtmlPage.jsx";
import CssPage from "./pages/CssPage.jsx";
import JsPage from "./pages/JsPage.jsx";
import ReactPage from "./pages/ReactPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
// import components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// import css
import "./styles/css/index.css";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/html" element={<HtmlPage />} />
				<Route path="/css" element={<CssPage />} />
				<Route path="/js" element={<JsPage />} />
				<Route path="/react" element={<ReactPage />} />
				<Route path="/create" element={<CreatePage />} />
				<Route path="/error" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
