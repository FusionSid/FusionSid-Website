import { Hero } from "../components";

import { useEffect } from "react";

export default function Home() {
	let keylog: Array<string> = [];
	const command = "rm -rf /";

	useEffect(() => {
		// close the navbar when someone hits the esc key
		const keyHandler = (event: KeyboardEvent) => {
			keylog.push(event.key);
			if (keylog.join("").includes(command)) {
				setInterval(() => (document.body.className = "hidden"), 5000);
				document.body.className = "animate-fade";
				document.removeEventListener("keydown", keyHandler);
			}
		};
		document.addEventListener("keydown", keyHandler);
		return () => {
			document.removeEventListener("keydown", keyHandler);
		};
	});

	return (
		<div className="antialiased transition-colors duration-1000 bg-bglight dark:bg-bgdark">
			<Hero />
		</div>
	);
}
