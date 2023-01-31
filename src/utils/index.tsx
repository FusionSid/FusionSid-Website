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

const techLogoImages = [
	"https://www.svgrepo.com/show/354200/postgresql.svg",
	"https://github.com/Pycord-Development/guide/blob/main/static/img/logo.png?raw=true",
	"https://www.svgrepo.com/show/374094/sqlite.svg",
	"https://www.svgrepo.com/show/354272/redis.svg",
	"https://www.svgrepo.com/show/373924/nginx.svg",
	"https://cdn.worldvectorlogo.com/logos/fastapi-1.svg",
	"https://www.svgrepo.com/show/353564/cloudflare.svg",
	"https://www.svgrepo.com/show/452092/react.svg",
	"https://github.com/Rick-Lang/rickroll-lang/blob/main/img/newlogo.jpg?raw=true",
	"https://www.svgrepo.com/show/452210/git.svg",
	"https://www.svgrepo.com/show/448221/docker.svg",
	"https://www.svgrepo.com/show/452075/node-js.svg",
	"https://www.svgrepo.com/show/374171/vscode.svg",
	"https://www.svgrepo.com/show/374146/typescript-official.svg",
	"https://www.svgrepo.com/show/448245/oracle.svg",
	"https://www.svgrepo.com/show/473611/flask.svg",
	"https://www.svgrepo.com/show/374118/tailwind.svg",
];

const languageLogoImages = [
	"https://www.svgrepo.com/show/452091/python.svg",
	"https://www.svgrepo.com/show/452045/js.svg",
	"https://www.svgrepo.com/show/373482/c.svg",
	"https://www.svgrepo.com/show/452228/html-5.svg",
	"https://www.svgrepo.com/show/452185/css-3.svg",
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
	techLogoImages,
	isDarkMode,
	languageLogoImages,
	particleConfigDark,
	particleConfigLight,
	amogusParticleConfig,
};
