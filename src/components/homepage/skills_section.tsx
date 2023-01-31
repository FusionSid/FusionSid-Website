import { techLogoImages, languageLogoImages } from "../../utils";

export default function SkillsSection() {
	const skillsHeader =
		"dark:text-white text-[1.5rem] sm:text-[2rem] font-jetbrains";
	const languageStyle = "w-[25%] md-[20%] rounded mx-auto my-5";
	const technologiesStyle = "w-[25%] sm:w-[50%] rounded mx-auto my-5";

	return (
		<div className="m-5 lg:border-b-[0.1px] border-opacity-10 border-white z-10">
			<h1 className={skillsHeader}>{"<skills>"}</h1>
			<div className="flex justify-center lg:flex-row flex-col">
				<div className="lg:border-r-[0.1px] border-opacity-10 border-white w-full">
					<h1 className="dark:text-white text-[2rem] sm:text-[3rem] font-poppins font-bold text-center m-3">
						Languages
					</h1>
					<div className="grid grid-cols-2">
						{languageLogoImages.map((value) => (
							<img className={languageStyle} src={value} alt="" />
						))}
					</div>
				</div>
				<div className="lg:border-l-[0.1px] border-opacity-10 border-white w-full">
					<h1 className="dark:text-white text-[2rem] sm:text-[3rem] font-poppins font-bold text-center m-3">
						Technologies
					</h1>
					<div className="container mx-auto">
						<div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							{techLogoImages.map((value) => (
								<img
									className={technologiesStyle}
									src={value}
									alt=""
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
