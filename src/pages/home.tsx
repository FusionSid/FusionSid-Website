import { Hero } from "../components";
import { motion } from "framer-motion";

export default function Home() {
	let keylog: Array<string> = [];
	const keyHandler = (event: KeyboardEvent) => {
		const command = "rm -rf /";
		keylog.push(event.key);
		if (keylog.join("").includes(command)) {
			setInterval(() => (document.body.className = "hidden"), 5000);
			document.body.className = "animate-fade";
			document.removeEventListener("keydown", keyHandler);
		}
	};
	document.addEventListener("keydown", keyHandler);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Hero />
			<button
				onClick={() => {
					let newTheme =
						localStorage.getItem("theme") === "dark"
							? "light"
							: "dark";
					localStorage.setItem("theme", newTheme);
					window.dispatchEvent(new StorageEvent("storage"));
				}}
				className="hover:animate-bounce fixed z-90 bottom-6 left-8 whitespace-nowrap group 
                    bg-black bg-opacity-25 rounded-xl shadow-2xl p-2 dark:text-white md:text-[1rem] lg:text-[1.125rem] 
                    inline-block font-jetbrains hover:text-plblue dark:hover:text-pllblue"
			>
				attractBugs()
			</button>
		</motion.div>
	);
}
