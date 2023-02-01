import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../utils";
import { useNavigate } from "react-router-dom";
import "./navicon.css";

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

	return (
		<>
			<nav className="relative z-10 flex h-24 w-full items-center justify-between border-b-[0.1px] border-white border-opacity-10 py-6">
				<div className="flex h-24 items-center justify-between">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1090.000000 2001.000000"
						className="ml-10 mr-2 flex h-12 w-12 gap-3 hover:animate-spin-slow dark:fill-white lg:h-14 lg:w-14"
						onClick={() => navigate("/")}
					>
						<g
							transform="translate(0.000000,2001.000000) scale(0.100000,-0.100000)"
							stroke="none"
						>
							<path d="M4953 19990 c-18 -10 -40 -31 -50 -47 -17 -26 -18 -183 -23 -3733 l-5 -3706 -1970 3555 c-1084 1955 -1982 3571 -1997 3592 -57 80 -194 131 -294 110 -66 -13 -371 -179 -421 -229 -72 -72 -106 -193 -80 -287 8 -30 974 -1783 2390 -4338 l2377 -4287 0 -683 0 -682 -2351 -4240 c-1293 -2332 -2367 -4274 -2387 -4315 -32 -65 -36 -84 -36 -146 1 -84 31 -158 86 -211 40 -38 347 -209 403 -224 98 -27 228 12 296 88 19 21 923 1642 2009 3602 l1975 3564 5 -3636 c5 -3635 5 -3636 25 -3663 11 -15 36 -35 55 -45 32 -18 65 -19 456 -19 420 0 421 0 454 22 18 13 43 36 54 51 l21 28 5 3632 5 3631 1978 -3569 c1681 -3034 1984 -3576 2023 -3612 76 -71 189 -100 288 -72 55 15 355 184 394 222 69 66 103 182 83 277 -8 38 -635 1177 -2391 4345 l-2380 4294 0 688 0 688 2401 4330 c1321 2382 2411 4350 2422 4375 15 32 21 66 21 116 0 60 -5 81 -32 137 -40 80 -63 99 -252 203 -210 116 -246 126 -350 100 -80 -21 -144 -66 -184 -130 -18 -28 -930 -1671 -2027 -3650 l-1994 -3599 -5 3696 -5 3696 -21 28 c-11 15 -36 38 -54 51 -33 22 -34 22 -459 22 -405 0 -428 -1 -458 -20z" />
						</g>
					</svg>
					{ShowNavLogoText ? (
						<div className="flex">
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
						</div>
					) : null}
				</div>

				{!showMobileNav ? (
					<ul className="my-24 mr-12 flex flex-row justify-center md:gap-8 lg:gap-16">
						{props.navlinks.map((navItem) => (
							<li
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
							</li>
						))}
						<li
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
						</li>
					</ul>
				) : (
					<>
						<div
							id="nav-icon"
							onClick={() => {
								let element =
									document.getElementById("nav-icon");
								if (element) element.classList.toggle("open");
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

						<div
							className={`fixed top-0 right-0 z-40 h-full w-full bg-[#9a9787] p-5 text-white duration-300 ease-in-out dark:bg-pgrey ${
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
