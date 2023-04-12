import { Homepage, ParticlesBG } from "../components";
import { amogusParticleConfig } from "../utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
	let keylog: Array<string> = [];
	const [showHomePage, setShowHomePage] = useState(true);
	const [fadeAway, setfadeAway] = useState("");

	useEffect(() => {
		const keyHandler = (event: KeyboardEvent) => {
			const command = "rm -rf /";
			keylog.push(event.key);
			if (keylog.join("").includes(command)) {
				document.removeEventListener("keydown", keyHandler);
				setInterval(() => {
					setShowHomePage(false);
				}, 5000);
				setfadeAway("animate-fade");
			}
		};
		document.addEventListener("keydown", keyHandler);
		return () => document.removeEventListener("keydown", keyHandler);
	});

	return (
		<>
			{showHomePage ? (
				<div className={fadeAway}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<Homepage.Hero />
						<Homepage.ProjectsSection />
						<Homepage.SkillsSection />
					</motion.div>
				</div>
			) : (
				<>
					<div className="flex h-screen flex-col items-center justify-center">
						<h1 className="font-jetbrains text-3xl text-white">
							You just hit the home page with a good ol' fashioned
						</h1>
						<h1 className="font-jetbrains text-3xl text-white">
							sudo rm -rf / --no-preserve-root
						</h1>
					</div>
					<ParticlesBG config={amogusParticleConfig} id={"tsp2"} />
				</>
			)}
		</>
	);
}
