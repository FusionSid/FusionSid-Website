import HomeText from "./hometext";
import { ParticlesBG } from "../particles";
import {
	particleConfigLight,
	particleConfigDark,
	isDarkMode,
} from "../../utils";
import { useState } from "react";
import ScrollDown from "./scrolldown";

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
			<div className="h-screen w-full border-b-[0.1px] border-black border-opacity-10 dark:border-white dark:border-opacity-10">
				<HomeText />
				<ScrollDown />
			</div>
		</>
	);
}
