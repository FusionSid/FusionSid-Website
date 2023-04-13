import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProjectProp {
	side: "left" | "right";
	name: string;
	description: string | JSX.Element;
	image: string;
	tags: string[];
	github: string;
	link?: string;
}
export default function Project(props: ProjectProp) {
	const [mobileVersion, setMobileVersion] = useState(
		window.innerWidth <= 885
	);

	useEffect(() => {
		const windowWidthListener = (event: Event) => {
			if (window.innerWidth <= 885) {
				setMobileVersion(true);
			} else setMobileVersion(false);
		};
		window.addEventListener("resize", windowWidthListener);
		return () => {
			window.removeEventListener("resize", windowWidthListener);
		};
	});

	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<>
			{!mobileVersion ? (
				<>
					{props.side === "left" ? (
						<div className="relative right-28 flex items-center gap-3">
							<motion.div
								ref={ref}
								animate={controls}
								initial="hidden"
								variants={{
									visible: {
										opacity: 1,
										x: 0,
										transition: {
											duration: 0.55,
											ease: "easeInOut",
										},
									},
									hidden: { opacity: 0, x: -200 },
								}}
								className="z-30"
							>
								<div className="relative left-56 flex flex-col gap-4">
									<p className="font-poppinsbold text-[#D2292D]">
										Featured Project
									</p>
									<h1 className="font-poppinsbold text-[2rem] dark:text-[#CCD6F6]">
										{props.name}
									</h1>
									<div
										className="z-10 flex max-h-[15rem] max-w-[55rem] items-center rounded-xl px-5 py-10 shadow-xl"
										style={{
											background:
												"url(.png), radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(105, 59, 147, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)",
											backgroundBlendMode:
												"overlay, normal",
											backdropFilter: "blur(40px)",
										}}
									>
										<div
											style={{
												background:
													"url(https://grainy-gradients.vercel.app/noise.svg)",
											}}
											className="absolute left-0 top-0 h-full w-full rounded-xl opacity-10"
										></div>
										<p className="z-10 font-jetbrains text-white">
											{props.description}
										</p>
									</div>
									<p className="font-jetbrains uppercase drop-shadow-xl dark:text-[#AAB2CE]">
										{props.tags.join(" ")}
									</p>
									<div className="flex gap-2">
										<a href={props.github} target="_blank">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												role="img"
												viewBox="0 0 24 24"
												fill="none"
												stroke="white"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												className="w-7"
											>
												<title>GitHub</title>
												<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
											</svg>
										</a>
										{props.link && (
											<a
												href={props.link}
												target="_blank"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													role="img"
													viewBox="0 0 24 24"
													fill="none"
													stroke="white"
													stroke-width="2"
													stroke-linecap="round"
													className="w-7"
													stroke-linejoin="round"
												>
													<title>External Link</title>
													<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
													<polyline points="15 3 21 3 21 9"></polyline>
													<line
														x1="10"
														y1="14"
														x2="21"
														y2="3"
													></line>
												</svg>
											</a>
										)}
									</div>
								</div>
							</motion.div>
							<motion.div
								ref={ref}
								animate={controls}
								initial="hidden"
								variants={{
									visible: {
										opacity: 1,
										x: 0,
										transition: {
											duration: 0.55,
											ease: "easeInOut",
										},
									},
									hidden: { opacity: 0, x: 200 },
								}}
								className="h-[28rem] w-[40rem] rounded-xl bg-cover bg-center shadow-xl"
								style={{
									backgroundImage: `url(${props.image})`,
								}}
							></motion.div>
						</div>
					) : (
						<div className="relative left-28 flex items-center gap-3">
							<motion.div
								ref={ref}
								animate={controls}
								initial="hidden"
								variants={{
									visible: {
										opacity: 1,
										x: 0,
										transition: {
											duration: 0.55,
											ease: "easeInOut",
										},
									},
									hidden: { opacity: 0, x: -200 },
								}}
								className="h-[28rem] w-[40rem] rounded-xl bg-cover bg-center shadow-xl"
								style={{
									backgroundImage: `url(${props.image})`,
								}}
							></motion.div>
							<motion.div
								ref={ref}
								animate={controls}
								initial="hidden"
								variants={{
									visible: {
										opacity: 1,
										x: 0,
										transition: {
											duration: 0.55,
											ease: "easeInOut",
										},
									},
									hidden: { opacity: 0, x: 200 },
								}}
								className="z-30"
							>
								<div className="relative right-56 flex flex-col gap-4 text-right">
									<p className="font-poppinsbold text-[#D2292D]">
										Featured Project
									</p>
									<h1 className="font-poppinsbold text-[2rem] dark:text-[#CCD6F6]">
										{props.name}
									</h1>
									<div
										className="z-10 flex max-h-[15rem] max-w-[55rem] items-center rounded-xl px-5 py-10 shadow-xl"
										style={{
											background:
												"url(.png), radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(105, 59, 147, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)",
											backgroundBlendMode:
												"overlay, normal",
											backdropFilter: "blur(40px)",
										}}
									>
										<div
											style={{
												background:
													"url(https://grainy-gradients.vercel.app/noise.svg)",
											}}
											className="absolute left-0 top-0 h-full w-full rounded-xl opacity-10"
										></div>
										<p className="z-10 font-jetbrains text-white">
											{props.description}
										</p>
									</div>
									<p className="font-jetbrains uppercase drop-shadow-xl dark:text-[#AAB2CE]">
										{props.tags.join(" ")}
									</p>
									<div className="ml-auto mr-0 flex gap-2">
										<a href={props.github} target="_blank">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												role="img"
												viewBox="0 0 24 24"
												fill="none"
												stroke="white"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												className="w-7"
											>
												<title>GitHub</title>
												<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
											</svg>
										</a>
										{props.link && (
											<a
												href={props.link}
												target="_blank"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													role="img"
													viewBox="0 0 24 24"
													fill="none"
													stroke="white"
													stroke-width="2"
													stroke-linecap="round"
													className="w-7"
													stroke-linejoin="round"
												>
													<title>External Link</title>
													<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
													<polyline points="15 3 21 3 21 9"></polyline>
													<line
														x1="10"
														y1="14"
														x2="21"
														y2="3"
													></line>
												</svg>
											</a>
										)}
									</div>
								</div>
							</motion.div>
						</div>
					)}
				</>
			) : (
				<>
					<div className="flex items-center">
						<motion.div
							className="min-h-[27rem] max-w-[40rem] rounded-xl bg-cover bg-center shadow-xl"
							style={{
								backgroundImage: `url(${props.image})`,
							}}
						>
							<motion.div
								ref={ref}
								animate={controls}
								initial="hidden"
								variants={{
									visible: {
										opacity: 1,
										transition: {
											duration: 0.7,
											ease: "easeInOut",
										},
									},
									hidden: { opacity: 0},
								}}
								className="relative h-full w-full bg-blue-950 bg-opacity-75 rounded-xl"
							>
								<div
									className="h-full w-full rounded-xl px-5 py-10 shadow-xl"
									style={{
										background:
											"url(.png), radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(105, 59, 147, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)",
										backgroundBlendMode: "overlay, normal",
										backdropFilter: "blur(40px)",
									}}
								>
									<div
										style={{
											background:
												"url(https://grainy-gradients.vercel.app/noise.svg)",
										}}
										className="absolute left-0 top-0 h-full w-full rounded-xl opacity-10"
									></div>

									<div className="flex flex-col gap-7">
										<p className="font-poppinsbold text-[#D2292D]">
											Featured Project
										</p>
										<h1 className="font-poppinsbold text-[2rem] text-[#CCD6F6]">
											{props.name}
										</h1>
										<p className="z-10 font-jetbrains text-white">
											{props.description}
										</p>
										<p className="font-jetbrains uppercase drop-shadow-xl text-[#AAB2CE]">
											{props.tags.join(" ")}
										</p>
										<div className="flex gap-2">
											<a
												href={props.github}
												target="_blank"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													role="img"
													viewBox="0 0 24 24"
													fill="none"
													stroke="white"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
													className="w-7"
												>
													<title>GitHub</title>
													<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
												</svg>
											</a>
											{props.link && (
												<a
													href={props.link}
													target="_blank"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														role="img"
														viewBox="0 0 24 24"
														fill="none"
														stroke="white"
														stroke-width="2"
														stroke-linecap="round"
														className="w-7"
														stroke-linejoin="round"
													>
														<title>
															External Link
														</title>
														<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
														<polyline points="15 3 21 3 21 9"></polyline>
														<line
															x1="10"
															y1="14"
															x2="21"
															y2="3"
														></line>
													</svg>
												</a>
											)}
										</div>
									</div>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</>
			)}
		</>
	);
}
