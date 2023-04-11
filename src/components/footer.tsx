import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
	let navigate = useNavigate();
	const linkStyle =
		"hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-black dark:before:bg-white before:absolute before:left-0 before:bottom-0 inline-fold font-jetbrains text-[1.69rem] font-semibold dark:text-white sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem]";

	return (
		<div className="z-9 relative p-10">
			<div className="group">
				<a
					href="https://discord.com/users/624076054969188363"
					target="_blank"
				>
					<FontAwesomeIcon
						className="absolute left-10 top-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#393E46] p-1 text-center text-[2.5rem] text-white sm:h-14 sm:w-14 sm:text-[3rem]"
						icon={["fab", "discord"]}
					/>
				</a>
				<button
					onClick={() => {
						navigator.clipboard.writeText("FusionSid#3645");
						alert("FusionSid#3645 copied to clipboard!");
					}}
					className="invisible absolute left-3.5 top-3  bg-[#393E46] text-white duration-1000 group-hover:visible"
				>
					{"FusionSid#3645\t"}
					{/* @ts-ignore */}
					<FontAwesomeIcon icon={["fa-regular", "fa-copy"]} />
				</button>
			</div>
			<a
				href="https://github.com/FusionSid"
				target="_blank"
				className="absolute right-10 top-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#393E46] p-1 text-center text-[2.5rem] text-white sm:h-14 sm:w-14 sm:text-[3rem]"
			>
				<FontAwesomeIcon icon={["fab", "github"]} />
			</a>
			<a href="https://instagram.com/FusionSid" target="_blank">
				<FontAwesomeIcon
					className="absolute bottom-10 left-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#393E46] p-1 text-center text-[2.5rem] text-white sm:h-14 sm:w-14 sm:text-[3rem]"
					icon={["fab", "instagram"]}
				/>
			</a>
			<a href="https://twitter.com/Fusion_Sid" target="_blank">
				<FontAwesomeIcon
					className="absolute bottom-10 right-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#393E46] p-1 text-center text-[2.5rem] text-white sm:h-14 sm:w-14 sm:text-[3rem]"
					icon={["fab", "twitter"]}
				/>
			</a>

			<div className="flex flex-col items-center justify-center p-10">
				<div className="flex h-24 items-center justify-between pb-4 sm:pb-10">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1090.000000 2001.000000"
						className="flex h-16 w-24 gap-3 hover:animate-spin-slow hover:cursor-pointer dark:fill-white sm:h-14 sm:w-14"
						onClick={() => navigate("/")}
					>
						<g
							transform="translate(0.000000,2001.000000) scale(0.100000,-0.100000)"
							stroke="none"
						>
							<path d="M4953 19990 c-18 -10 -40 -31 -50 -47 -17 -26 -18 -183 -23 -3733 l-5 -3706 -1970 3555 c-1084 1955 -1982 3571 -1997 3592 -57 80 -194 131 -294 110 -66 -13 -371 -179 -421 -229 -72 -72 -106 -193 -80 -287 8 -30 974 -1783 2390 -4338 l2377 -4287 0 -683 0 -682 -2351 -4240 c-1293 -2332 -2367 -4274 -2387 -4315 -32 -65 -36 -84 -36 -146 1 -84 31 -158 86 -211 40 -38 347 -209 403 -224 98 -27 228 12 296 88 19 21 923 1642 2009 3602 l1975 3564 5 -3636 c5 -3635 5 -3636 25 -3663 11 -15 36 -35 55 -45 32 -18 65 -19 456 -19 420 0 421 0 454 22 18 13 43 36 54 51 l21 28 5 3632 5 3631 1978 -3569 c1681 -3034 1984 -3576 2023 -3612 76 -71 189 -100 288 -72 55 15 355 184 394 222 69 66 103 182 83 277 -8 38 -635 1177 -2391 4345 l-2380 4294 0 688 0 688 2401 4330 c1321 2382 2411 4350 2422 4375 15 32 21 66 21 116 0 60 -5 81 -32 137 -40 80 -63 99 -252 203 -210 116 -246 126 -350 100 -80 -21 -144 -66 -184 -130 -18 -28 -930 -1671 -2027 -3650 l-1994 -3599 -5 3696 -5 3696 -21 28 c-11 15 -36 38 -54 51 -33 22 -34 22 -459 22 -405 0 -428 -1 -458 -20z" />
						</g>
					</svg>
					<div className="hidden sm:flex">
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
				</div>
				<div className="flex flex-col gap-4 pb-10 text-center sm:flex-row sm:gap-10 sm:pb-0">
					<Link className={linkStyle} to="/about">
						aboutMe()
					</Link>
					<Link className={linkStyle} to="/projects">
						projects()
					</Link>
					<Link className={linkStyle} to="/contact">
						contact()
					</Link>
				</div>
			</div>
		</div>
	);
}
