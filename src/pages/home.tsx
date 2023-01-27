import { Hero, ParticlesBG } from "../components";
import { amogusParticleConfig, particleConfig } from "../utils";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
	let keylog: Array<string> = [];
	const [showHomePage, setShowHomePage] = useState(true);
	const [particleOpacity, setParticleOpacity] = useState("20");
	const [fadeAway, setfadeAway] = useState("");

	const keyHandler = (event: KeyboardEvent) => {
		const command = "rm -rf /";
		keylog.push(event.key);
		if (keylog.join("").includes(command)) {
			document.removeEventListener("keydown", keyHandler);
			setInterval(() => {
				setShowHomePage(false);
			}, 5000);
			setfadeAway("animate-fade");
			setParticleOpacity("40");
		}
	};
	document.addEventListener("keydown", keyHandler);

	return (
		<>
			{showHomePage ? (
				<div className={fadeAway}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="relative z-10"
					>
						<Hero />
						<button
							onClick={() => {
								let newTheme =
									localStorage.getItem("theme") === "dark"
										? "light"
										: "dark";
								localStorage.setItem("theme", newTheme);
								window.dispatchEvent(
									new StorageEvent("storage")
								);
							}}
							className="hover:animate-bounce fixed z-10 bottom-6 left-8 whitespace-nowrap group 
                    bg-black bg-opacity-25 rounded-xl shadow-2xl p-2 dark:text-white md:text-[1rem] lg:text-[1.125rem] 
                    inline-block font-jetbrains hover:text-plblue dark:hover:text-pllblue"
						>
							attractBugs()
						</button>
					</motion.div>
					<ParticlesBG
						opacity={particleOpacity}
						config={particleConfig}
					/>
				</div>
			) : (
				<>
					<div className="flex flex-col items-center justify-center h-screen">
						<h1 className="text-white text-3xl font-jetbrains">
							You just hit the home page with a good ol' fashioned
						</h1>
						<h1 className="text-white text-3xl font-jetbrains">
							sudo rm -rf / --no-preserve-root
						</h1>
					</div>
					<ParticlesBG
						config={amogusParticleConfig}
						opacity={particleOpacity}
					/>
				</>
			)}
		</>
	);
}
