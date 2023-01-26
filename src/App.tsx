// hooks
import { useState, useEffect } from "react";

// import router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import * as pages from "./pages";

// import footer and navbar
import { Navbar, Footer } from "./components";

// dark mode
import { NavbarLinks, isDarkMode } from "./constants";

// import base css
import "./App.css";

function App() {
	const [darkMode, setDarkMode] = useState(isDarkMode());

	useEffect(() => {
		const darkModeUpdateHandler = (event: StorageEvent) => {
			setDarkMode(localStorage.theme);
		};
		window.addEventListener("storage", darkModeUpdateHandler);
	});

	return (
		<div className={`${darkMode === "dark" ? "dark " : ""}`}>
			<BrowserRouter>
				<Navbar navlinks={NavbarLinks} />
				<Routes>
					<Route path="/" element={<pages.Home />}></Route>
					<Route path="/about" element={<pages.About />}></Route>
					<Route
						path="/projects"
						element={<pages.Projects />}
					></Route>
					<Route path="/contact" element={<pages.Contact />}></Route>
					<Route
						path="/terminal"
						element={<pages.Terminal />}
					></Route>
					<Route path="/*" element={<pages.NotFound404 />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
