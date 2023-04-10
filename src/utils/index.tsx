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

const technoligies = [
	[
		"Python",
		"https://www.svgrepo.com/show/452091/python.svg",
		"https://www.python.org/",
	],
	[
		"Typescript",
		"https://www.svgrepo.com/show/374146/typescript-official.svg",
		"https://www.typescriptlang.org/",
	],
	[
		"Fastapi",
		"https://cdn.worldvectorlogo.com/logos/fastapi-1.svg",
		"https://fastapi.tiangolo.com/",
	],
	[
		"Javascript",
		"https://www.svgrepo.com/show/452045/js.svg",
		"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	],
	[
		"Tailwind",
		"https://www.svgrepo.com/show/374118/tailwind.svg",
		"https://tailwindcss.com/",
	],
	[
		"C",
		"https://www.svgrepo.com/show/373482/c.svg",
		"https://en.wikipedia.org/wiki/C_(programming_language)",
	],
	[
		"HTML",
		"https://www.svgrepo.com/show/452228/html-5.svg",
		"https://en.wikipedia.org/wiki/HTML",
	],
	[
		"Css",
		"https://www.svgrepo.com/show/452185/css-3.svg",
		"https://developer.mozilla.org/en-US/docs/Web/CSS",
	],
	[
		"Pycord",
		"https://github.com/Pycord-Development/guide/blob/main/static/img/logo.png?raw=true",
		"https://pycord.dev/",
	],
	[
		"Postgresql",
		"https://www.svgrepo.com/show/354200/postgresql.svg",
		"https://www.postgresql.org/",
	],
	[
		"Sqlite",
		"https://www.svgrepo.com/show/374094/sqlite.svg",
		"https://sqlite.org/index.html",
	],
	[
		"redis",
		"https://www.svgrepo.com/show/354272/redis.svg",
		"https://redis.io/",
	],
	[
		"React js",
		"https://www.svgrepo.com/show/452092/react.svg",
		"https://react.dev/",
	],
	[
		"Git",
		"https://www.svgrepo.com/show/452210/git.svg",
		"https://git-scm.com/",
	],
	[
		"Docker",
		"https://www.svgrepo.com/show/448221/docker.svg",
		"https://www.docker.com/",
	],
	[
		"Node js",
		"https://www.svgrepo.com/show/452075/node-js.svg",
		"https://nodejs.org/en",
	],
	[
		"VsCode",
		"https://www.svgrepo.com/show/374171/vscode.svg",
		"https://code.visualstudio.com/",
	],
	[
		"Oracle",
		"https://www.svgrepo.com/show/448245/oracle.svg",
		"https://www.oracle.com/cloud/",
	],
	[
		"Flask",
		"https://www.svgrepo.com/show/473611/flask.svg",
		"https://flask.palletsprojects.com/en/2.2.x/",
	],
	[
		"Cloudflare",
		"https://www.svgrepo.com/show/353564/cloudflare.svg",
		"https://www.cloudflare.com/",
	],
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
	technoligies,
	isDarkMode,
	particleConfigDark,
	particleConfigLight,
	amogusParticleConfig,
};
