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
			className="hover:animate-bounce fixed z-10 bottom-6 left-8 whitespace-nowrap group 
                    bg-black bg-opacity-25 rounded-xl shadow-2xl p-2 dark:text-white md:text-[1rem] lg:text-[1.125rem] 
                    inline-block font-jetbrains hover:text-plblue dark:hover:text-pllblue"
		>
			attractBugs()
		</button>
	);
}
