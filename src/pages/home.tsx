import { Hero, ParticlesBG } from "../components";
import { amogusParticleConfig, particleConfig } from "../utils";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
	let keylog: Array<string> = [];
	const [showHomePage, setShowHomePage] = useState(true);

	const keyHandler = (event: KeyboardEvent) => {
		const command = "rm -rf /";
		keylog.push(event.key);
		if (keylog.join("").includes(command)) {
			document.removeEventListener("keydown", keyHandler);
			setInterval(() => {
				let root = document.body.querySelector("root");
				if (root) root.innerHTML = "";
				setShowHomePage(false);
			}, 5000);
			document.documentElement.classList.add("animate-fade");
		}
	};
	document.addEventListener("keydown", keyHandler);

	return (
		<>
			{showHomePage ? (
				<>
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
					<ParticlesBG config={particleConfig} />
				</>
			) : (
				<>
					<h1 className="text-white grid h-screen place-items-center text-3xl font-jetbrains">
						You just hit the home page with a good ol' rm -rf /
					</h1>
					<ParticlesBG config={amogusParticleConfig} />
				</>
			)}
		</>
	);
}
