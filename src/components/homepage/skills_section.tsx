export default function SkillsSection() {
	const skillsHeader = "dark:text-white text-[1.5rem] sm:text-[2rem] font-jetbrains";
	const languageStyle = "w-[25%] md-[20%] rounded mx-auto my-5";
	const technologiesStyle = "sm-[15%] w-[50%] rounded mx-auto my-5";
	const technologyImages = [
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
	return (
		<div className="m-5 lg:border-b-[0.1px] border-opacity-10 border-white z-10">
			<h1 className={skillsHeader}>{"<skills>"}</h1>
			<div className="flex justify-center lg:flex-row flex-col">
				<div className="lg:border-r-[0.1px] border-opacity-10 border-white w-full">
					<h1 className="dark:text-white text-[2rem] sm:text-[3rem] font-poppins font-bold text-center m-3">
						Languages
					</h1>
					<img
						className={languageStyle}
						src="https://www.svgrepo.com/show/452091/python.svg"
						alt="Python"
					/>
					<img
						className={languageStyle}
						src="https://www.svgrepo.com/show/452045/js.svg"
						alt="image"
					/>
					<img
						className={languageStyle}
						src="https://www.svgrepo.com/show/373482/c.svg"
						alt="image"
					/>
				</div>
				<div className="lg:border-l-[0.1px] border-opacity-10 border-white w-full">
					<h1 className="dark:text-white text-[2rem] sm:text-[3rem] font-poppins font-bold text-center m-3">
						Technologies
					</h1>
					<div className="container mx-auto">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
							{technologyImages.map((value) => (
								<img
									className={technologiesStyle}
									src={value}
									alt="image"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
			<h1 className={skillsHeader}>{"</skills>"}</h1>
		</div>
	);
}
