import { Hero } from "../components";

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
		<div className="antialiased transition-colors duration-1000 bg-bglight dark:bg-bgdark">
			<Hero />
		</div>
	);
}
