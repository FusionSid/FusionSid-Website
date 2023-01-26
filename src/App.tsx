// hooks
import { useEffect } from "react";

// import router
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// import pages
import * as pages from "./pages";

// import footer and navbar
import { Navbar, Footer } from "./components";

// dark mode
import { NavbarLinks } from "./utils";

import { AnimatePresence } from "framer-motion";

// import base css
import "./App.css";

export const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<pages.Home />}></Route>
				<Route path="/about" element={<pages.About />}></Route>
				<Route path="/projects" element={<pages.Projects />}></Route>
				<Route path="/contact" element={<pages.Contact />}></Route>
				<Route path="/terminal" element={<pages.Terminal />}></Route>
				<Route path="/*" element={<pages.NotFound404 />}></Route>
			</Routes>
		</AnimatePresence>
	);
};

function App() {
	const html = document.querySelector("html");

	const darkModeUpdateHandler = (event: StorageEvent | null = null) => {
		if (localStorage.theme === "dark") {
			if (html) html.classList.add("dark");
		} else {
			if (html) html.classList.remove("dark");
		}
	};
	window.addEventListener("storage", darkModeUpdateHandler);

	useEffect(() => {
		darkModeUpdateHandler();
		document.body.classList.add(
			...[
				"transition-colors",
				"duration-1000",
				"bg-bglight",
				"dark:bg-bgdark",
			]
		);
	}, []);

	return (
		<div>
			<BrowserRouter>
				<Navbar navlinks={NavbarLinks} />
				<AnimatedRoutes />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
