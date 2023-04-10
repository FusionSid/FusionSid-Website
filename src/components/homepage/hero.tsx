import HomeText from "./hometext";
import { ParticlesBG } from "../particles";
import {
	particleConfigLight,
	particleConfigDark,
	isDarkMode,
} from "../../utils";
import { useState } from "react";

export default function Hero() {
	const [darkMode, setDarkMode] = useState(isDarkMode());

	const darkModeUpdateHandler2 = (event: StorageEvent | null = null) => {
		if (localStorage.theme === "light") {
			setDarkMode(false);
		} else {
			setDarkMode(true);
		}
	};
	window.addEventListener("storage", darkModeUpdateHandler2);

	return (
		<>
			<ParticlesBG
				id={"tsp1"}
				config={darkMode ? particleConfigDark : particleConfigLight}
			/>
			<div className="h-screen pt-[15vh] w-full border-b-[0.1px] border-white border-opacity-10">
				<HomeText />
			</div>
		</>
	);
}
