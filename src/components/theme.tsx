export default function ThemeButton() {
	return (
		<button
			onClick={() => {
				let newTheme =
					localStorage.getItem("theme") === "light"
						? "dark"
						: "light";
				localStorage.setItem("theme", newTheme);
				window.dispatchEvent(new StorageEvent("storage"));
			}}
			className="group fixed bottom-6 right-8 z-10 inline-block whitespace-nowrap 
                    rounded-xl bg-black bg-opacity-25 p-2 font-jetbrains shadow-2xl hover:animate-bounce hover:text-plblue 
                    dark:text-white dark:hover:text-pllblue md:text-[1rem] lg:text-[1.125rem]"
		>
			attractBugs()
		</button>
	);
}
