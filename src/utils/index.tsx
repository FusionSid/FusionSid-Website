import particleConfigDark from "./particle_options_dark.json";
import particleConfigLight from "./particle_options_light.json";
import amogusParticleConfig from "./amongus_particle_options.json";

const styles = {
	homeTextCode: "dark:text-white dark:opacity-10 opacity-20 font-jetbrains",
};

const NavbarLinks: Array<{ id: string; title: string; link: string }> = [
	{ id: "about", title: "About", link: "/about" },
	{ id: "projects", title: "Projects", link: "/projects" },
	{ id: "contact", title: "Contact", link: "/contact" },
];

const isDarkMode = () => {
	if (
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		return true;
	}
	return false;
};

export {
	styles,
	NavbarLinks,
	isDarkMode,
	particleConfigDark,
	particleConfigLight,
	amogusParticleConfig,
};
