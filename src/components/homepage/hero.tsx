import HomeText from "./hometext";
import { ParticlesBG } from "../particles";
import {
	particleConfigLight,
	particleConfigDark,
	isDarkMode,
} from "../../utils";
import { PersonCodingImage } from "../../assets";
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
		<div>
			<ParticlesBG
				id={"tsp1"}
				config={darkMode ? particleConfigDark : particleConfigLight}
			/>
			<HomeText />
			<img
				src={PersonCodingImage}
				className="w-80 relative bottom-20 left-[72%]"
				alt="moyai"
			></img>
			<div className="border-b-[0.1px] border-opacity-10 border-white w-full"></div>
		</div>
	);
}
