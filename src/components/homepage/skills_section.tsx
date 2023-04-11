import { technoligies } from "../../utils";
import Tilt from "react-parallax-tilt";
import WhenInView from "../inview";
import { motion } from "framer-motion";
export default function SkillsSection() {
	const skillsHeader =
		"dark:text-white text-[1.5rem] sm:text-[2rem] font-jetbrains";
	const technologiesStyle = "w-[25%] sm:w-[45%] rounded mx-auto my-10 drop-shadow-2xl";

	return (
		<WhenInView
			div={
				<div className="border-b-[0.1px] border-black border-opacity-10 p-5 py-7 dark:border-white dark:border-opacity-10">
					<h1 className={skillsHeader}>{"<skills>"}</h1>
					<div className="flex flex-col justify-center lg:flex-row">
						<div className="container mx-auto">
							<div className="my-10 grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
								{technoligies
									.map((value) => ({
										value,
										sort: Math.random(),
									}))
									.sort((a, b) => a.sort - b.sort)
									.map(({ value }) => value)
									.map(([name, image, link], index) => (
										<Tilt>
											<motion.div
												variants={{
													visible: {
														opacity: 1,
														y: 0,
														transition: {
															duration: 0.55,
															ease: "easeInOut",
															delay: index * 0.2,
														},
													},
													hidden: {
														opacity: 0,
														y: 200,
													},
												}}
											>
												<a
													href={link}
													target="_blank"
													className="flex flex-col rounded-xl border-2 border-black border-opacity-10 pb-5 text-center uppercase shadow-xl hover:cursor-pointer dark:border-white dark:border-opacity-10 dark:text-[#BDEBEA]"
												>
													<img
														className={
															technologiesStyle
														}
														src={image}
														alt={name}
													/>
													<h1>{name}</h1>
												</a>
											</motion.div>
										</Tilt>
									))}
								<h1 className="dark:text-white">
									(not in any particular order)
								</h1>
							</div>
						</div>
					</div>
					<h1 className={skillsHeader}>{"</skills>"}</h1>
				</div>
			}
		/>
	);
}
