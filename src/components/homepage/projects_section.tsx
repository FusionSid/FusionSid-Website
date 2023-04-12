import Project from "./project";
import WhenInView from "../inview";
import { projects } from "../../utils";
export default function ProjectsSection() {
	const projectsHeader =
		"dark:text-white text-[1.5rem] sm:text-[2rem] font-jetbrains";

	return (
		<WhenInView
			div={
				<div className="border-b-[0.1px] border-black border-opacity-10 p-5 py-7 dark:border-white dark:border-opacity-10 ">
					<h1 className={projectsHeader}>{"<projects>"}</h1>
					<div className="my-20 flex flex-col items-center justify-center gap-20">
						{projects.map((project) => {
							return <WhenInView div={<Project {...project} />}/>;
						})}
					</div>
					<h1 className={projectsHeader}>{"</projects>"}</h1>
				</div>
			}
		/>
	);
}
