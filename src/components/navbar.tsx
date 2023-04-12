import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../utils";
import { useNavigate } from "react-router-dom";
import "./navicon.css";
import { motion } from "framer-motion";

interface NavbarProps {
	navlinks: Array<{ id: string; title: string; link: string }>;
}

export default function Navbar(props: NavbarProps) {
	const [showMobileNav, setShowMobileNav] = useState(
		window.innerWidth <= 885
	);
	const [ShowNavLogoText, setShowNavLogoText] = useState(
		window.innerWidth >= 390
	);
	const [navbarOpen, setNavbarOpen] = useState(false);

	useEffect(() => {
		// if window reaches certain width switch to side navbar
		const windowWidthListener = (event: Event) => {
			if (window.innerWidth <= 885) {
				setShowMobileNav(true);
				setNavbarOpen(false);
			} else {
				setShowMobileNav(false);
			}

			if (window.innerWidth >= 390) {
				setShowNavLogoText(true);
			} else {
				setShowNavLogoText(false);
			}
		};
		window.addEventListener("resize", windowWidthListener);
		return () => {
			window.removeEventListener("resize", windowWidthListener);
		};
	});

	useEffect(() => {
		// close the navbar when someone hits the esc key
		const keyHandler = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				event.preventDefault();
				if (showMobileNav && navbarOpen) {
					setNavbarOpen(!navbarOpen);
				}
			}
		};
		document.addEventListener("keydown", keyHandler);
		return () => {
			document.removeEventListener("keydown", keyHandler);
		};
	});

	const linkCodeStyle =
		"inline-block pr-3 md:text-[1rem] lg:text-[1.125rem] " +
		styles.homeTextCode;
	const underlineTransition =
		"hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-black dark:before:bg-white before:absolute before:left-0 before:bottom-0";

	let navigate = useNavigate();
	const cubicCurve = [0.27, 0.51, 0.83, 0.67];

	return (
		<>
			<nav className="relative z-10 flex h-24 w-full items-center justify-between border-b-[0.1px] border-black border-opacity-10 py-6 dark:border-white dark:border-opacity-10">
				<div className="flex h-24 items-center justify-between">
					<motion.svg
						animate={{
							opacity: 1,
							x: 0,
							transition: {
								duration: 0.45,
								type: "spring",
								delay: 1,
							},
						}}
						initial={{
							opacity: 0,
							x: -100,
						}}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 347 620"
						className="ml-10 mr-2 flex h-12 w-12 gap-3 hover:animate-spin-slow hover:cursor-pointer dark:fill-white lg:h-14 lg:w-14"
						onClick={() => navigate("/")}
					>
						<g>
							<rect x="157.056" width="33" height="620" rx="7" />
							<motion.rect
								animate={{
									height: 323.597,
									transition: {
										duration: 1.0,
										ease: cubicCurve,
										delay: 1.45,
									},
								}}
								initial={{
									height: 0,
								}}
								y="17.9004"
								width="32.7254"
								height="323.597"
								rx="7"
								transform="scale(-1, -1) translate(-190.1, -300) rotate(-30 0 17.9004)"
							/>

							<motion.rect
								animate={{
									height: 323.597,
									transition: {
										duration: 1.0,
										ease: cubicCurve,
										delay: 1.45,
									},
								}}
								initial={{
									height: 0,
								}}
								x="318.7"
								y="1.53772"
								width="32.7254"
								height="323.597"
								rx="7"
								transform="scale(-1, -1) translate(-504, -300) rotate(30 318.7 1.53772)"
							/>

							<motion.rect
								animate={{
									height: 323.597,
									transition: {
										duration: 1.0,
										ease: cubicCurve,
										delay: 1.45,
									},
								}}
								initial={{
									height: 0,
								}}
								x="28.3975"
								y="619.606"
								width="32.7254"
								height="323.597"
								rx="7"
								transform="scale(-1, -1) translate(-190.1, -942.84)  rotate(-150 28.3975 619.606)"
							/>

							<motion.rect
								animate={{
									height: 323.597,
									transition: {
										duration: 1.0,
										ease: cubicCurve,
										delay: 1.45,
									},
								}}
								initial={{
									height: 0,
								}}
								x="347.097"
								y="603.243"
								width="32.7254"
								height="323.597"
								rx="7"
								transform="scale(-1, -1) translate(-504, -942.84) rotate(150 347.097 603.243)"
							/>
						</g>
					</motion.svg>

					{ShowNavLogoText ? (
						<motion.div
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.45,
									type: "spring",
									delay: 0.1,
								},
							}}
							initial={{
								opacity: 0,
								y: 100,
							}}
							className="flex"
						>
							<h3 className="mt-[0.45rem] inline-block px-1 font-jetbrains text-[0.7rem] opacity-20 dark:text-white dark:opacity-10 lg:text-[1rem]">
								{"/*"}
							</h3>
							<Link
								className="text-pllbllue inline-fold font-jetbrains text-[1.75rem] font-semibold dark:text-white lg:text-[1.9rem]"
								to="/"
							>
								FusionSid
							</Link>
							<h3 className="mt-[1rem] inline-block px-1 font-jetbrains text-[0.7rem] opacity-20 dark:text-white dark:opacity-10 lg:text-[1rem]">
								{"*/"}
							</h3>
						</motion.div>
					) : null}
				</div>

				{!showMobileNav ? (
					<ul className="my-24 mr-12 flex flex-row justify-center md:gap-8 lg:gap-16">
						{props.navlinks.map((navItem, index) => (
							<motion.li
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.45,
										type: "spring",
										delay: (index + 2) * 0.1,
									},
								}}
								initial={{
									opacity: 0,
									y: 100,
								}}
								key={navItem.id}
								className={
									"group whitespace-nowrap " +
									underlineTransition
								}
							>
								<h3 className={linkCodeStyle}>{"//"}</h3>
								<Link
									className="inline-block font-jetbrains group-hover:text-pllblue dark:text-white md:text-[1rem] lg:text-[1.125rem]"
									to={navItem.link}
								>
									{navItem.title}
								</Link>
							</motion.li>
						))}
						<motion.li
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.45,
									type: "spring",
									delay: (props.navlinks.length + 2) * 0.1,
								},
							}}
							initial={{
								opacity: 0,
								y: 100,
							}}
							key={props.navlinks.length + 1}
							className={
								"group whitespace-nowrap " + underlineTransition
							}
						>
							<h3 className={linkCodeStyle}>def</h3>
							<Link
								className="inline-block font-jetbrains text-pllblue group-hover:text-black dark:group-hover:text-white md:text-[1rem] lg:text-[1.125rem]"
								to="/terminal"
							>
								Terminal
							</Link>
							<h3 className={linkCodeStyle + " pr-0"}>()</h3>
						</motion.li>
					</ul>
				) : (
					<>
						{navbarOpen ? (
							<div
								id="nav-icon"
								className="open"
								onClick={() => {
									let element =
										document.getElementById("nav-icon");
									if (element)
										element.classList.toggle("open");
									setNavbarOpen(!navbarOpen);
								}}
							>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</div>
						) : (
							<div
								id="nav-icon"
								onClick={() => {
									let element =
										document.getElementById("nav-icon");
									if (element)
										element.classList.toggle("open");
									setNavbarOpen(!navbarOpen);
								}}
							>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</div>
						)}

						<div
							className={`fixed right-0 top-0 z-40 h-full w-full bg-[#9a9787] p-5 text-white duration-300 ease-in-out dark:bg-pgrey ${
								navbarOpen
									? "translate-x-0 "
									: "translate-x-full"
							}`}
						>
							<ul className="m-28 flex flex-col items-center">
								{props.navlinks.map((navItem) => (
									<li
										key={navItem.id}
										className="whitespace-nowrap"
									>
										<Link
											className={
												"inline-block py-5 font-jetbrains text-[2rem] text-black dark:text-white " +
												underlineTransition +
												" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
											}
											to={navItem.link}
											onClick={() =>
												setNavbarOpen(!navbarOpen)
											}
										>
											{`<${navItem.title}/>`}
										</Link>
									</li>
								))}
								<li
									key={props.navlinks.length + 1}
									className="whitespace-nowrap"
								>
									<Link
										className={
											"inline-block py-3 font-jetbrains text-[2rem] text-black dark:text-white " +
											underlineTransition +
											" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
										}
										to="/terminal"
										onClick={() =>
											setNavbarOpen(!navbarOpen)
										}
									>
										{"<Terminal/>"}
									</Link>
								</li>
							</ul>
						</div>
					</>
				)}
			</nav>
		</>
	);
}
