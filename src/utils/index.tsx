import particleConfigDark from "./particle_options_dark.json";
import particleConfigLight from "./particle_options_light.json";
import amogusParticleConfig from "./amongus_particle_options.json";
import { UntitledChat, WhyBot, FSApi } from "../assets";

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
interface ProjectProp {
	side: "left" | "right";
	name: string;
	description: string | JSX.Element;
	image: string;
	tags: string[];
	github: string;
	link?: string;
}
const projects: ProjectProp[] = [
	{
		side: "left",
		image: UntitledChat,
		name: "Untitled Chat",
		description: (
			<span>
				Untitled Chat is an end to end voice and text chat app. Untitled
				Chat provides users with an encrypted chat connection to the
				person they want to talk to. Untitled chat is open source, free
				and does not sell your data.{" "}
				<span className="text-red-500">
					(Untitled Chat is being rewritten so it is not functional
					right now)
				</span>
			</span>
		),
		tags: [
			"Encryption",
			"Redis",
			"Rabbitmq",
			"Fastapi",
			"React",
			"postgresql",
			"electron",
		],
		github: "https://github.com/Untitled-Chat-App",
	},
	{
		side: "right",
		image: WhyBot,
		name: "Why Bot",
		description: (
			<span>
				Why bot is an open source, multi-purpose discord bot made to
				enhance your discord experience. Why bot has over one hundred
				commands and many features. Why bot was made with python using
				the pycord library. This is also the project that made me really
				intrested in programming and when i'm bored of programming i
				come back and start a rewrite of it.{" "}
				<a
					href="https://discord.com/oauth2/authorize?client_id=896932646846885898&permissions=8&scope=bot%20applications.commands"
					className="text-blue-500 underline"
				>
					Invite The Bot
				</a>
			</span>
		),
		tags: ["Discord", "OSS", "Pycord", "Postgresql", "redis", "Asyncio"],
		github: "https://github.com/FusionSid/Why-Bot/tree/rewrite-the-rewrite",
		link: "https://why.fusionsid.xyz/",
	},
	{
		side: "left",
		image: FSApi,
		name: "FusionSidAPI",
		description: (
			<span>
				FusionSidAPI is a multi-purpose REST API that can do several
				things such as temporary file hosting, meme/image generation,
				text conversion, code execution, discord status cards and much
				much more. FusionSidAPI also has a{" "}
				<a
					href="https://pypi.org/project/fusionsidsapi/"
					className="text-blue-500 underline"
				>
					Python Wrapper (FusionSidAPI.py)
				</a>{" "}
				for you to use it easily in your python project.
			</span>
		),
		tags: ["Fastapi", "Pillow", "docker", "pycord", "API", "python"],
		github: "https://github.com/FusionSid/FusionSidAPI",
		link: "https://api.fusionsid.xyz/",
	},
];

export {
	styles,
	NavbarLinks,
	technoligies,
	isDarkMode,
	particleConfigDark,
	particleConfigLight,
	amogusParticleConfig,
	projects,
};
