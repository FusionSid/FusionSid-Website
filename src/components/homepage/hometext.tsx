import { styles } from "../../utils";
import { useState, useEffect } from "react";
import WavyText from "../textspan";

export default function HomeText() {
	const linkCodeStyle =
		"text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4rem] " +
		styles.homeTextCode;
	const linkCodeStyle2 =
		"text-[0.8rem] sm:text-[1rem] md:text-[1.5rem] " + styles.homeTextCode;

	const [mobileVersion, setMobileVersion] = useState(
		window.innerWidth <= 885
	);

	useEffect(() => {
		// if window reaches certain width switch to side navbar
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
	return (
		<div className="m-10">
			{!mobileVersion ? (
				<div className="pt-[15vh]">
					<h3 className={linkCodeStyle}>{"void sayHello() {"}</h3>

					<div className="whitespace-nowrap">
						<span className="inline-block w-[3.8rem]"></span>
						<h3 className={linkCodeStyle + " inline-block"}>
							{'printf("'}
						</h3>

						<h3 className="inline-block font-poppinsbold text-[2.5rem] text-black dark:text-white lg:text-[3.4rem] xl:text-[3.8rem] 2xl:text-[4.2rem]">
							Hey! i'm
						</h3>
						<h1 className="xl:leading-[10rem inline-block font-poppinsbold text-[7rem] leading-[7rem] text-[#1761B0] lg:text-[7.75rem] lg:leading-[8.75rem] xl:text-[10rem] 2xl:text-[13rem]">
							<WavyText text="Siddhesh" replay={true} />
						</h1>
						<br />
						<span className="inline-block md:w-[5rem] lg:w-[7rem] xl:w-[6.5rem] 2xl:w-[4.5rem]"></span>
						<h3 className="inline-block font-poppinsbold text-[2.5rem] text-black dark:text-white lg:text-[3.4rem] xl:text-[3.8rem] 2xl:text-[4.2rem]">
							aka
						</h3>
						<h1 className="inline-block font-poppinsbold text-[7rem] leading-[7rem] text-[#D2292D] lg:text-[7.75rem] lg:leading-[7.75rem] xl:text-[10rem]  xl:leading-[10rem] 2xl:text-[13rem] 2xl:leading-[13rem]">
							<WavyText text="FusionSid" replay={true} />
						</h1>
						<h3 className={linkCodeStyle + " z-30 inline-block"}>
							{'")'}
						</h3>
					</div>

					<h3 className={linkCodeStyle}>{"}"}</h3>
				</div>
			) : (
				<>
					<h3 className={linkCodeStyle2}>{"def hello() -> str:"}</h3>
					<br />
					<h3 className={linkCodeStyle2 + " ml-14"}>
						{'return ("""'}
					</h3>
					<br />
					<div className="flex flex-col items-center">
						<h3 className="font-poppinsbold text-[2.5rem] text-black dark:text-white sm:text-[3rem] md:text-[3.5rem]">
							Hey! i'm
						</h3>
						<h1 className="font-poppinsbold text-[4.7rem] leading-[4rem] text-[#1761B0] sm:text-[8rem] sm:leading-[6.5rem] md:text-[9.5rem] md:leading-[7.5rem]">
							<WavyText text="Siddhesh" replay={true} />
						</h1>
						<br />
						<h3 className="font-poppinsbold text-[2.5rem] text-black dark:text-white sm:text-[3rem] md:text-[3.5rem]">
							aka
						</h3>
						<h1 className="font-poppinsbold text-[4.7rem] leading-[4rem] text-[#D2292D] sm:text-[8rem] sm:leading-[7rem] md:text-[9.5rem] md:leading-[7.5rem]">
							<WavyText text="FusionSid" replay={true} />
						</h1>
					</div>
					<br />
					<h3 className={linkCodeStyle2 + " ml-14"}>{'""")'}</h3>
				</>
			)}
		</div>
	);
}
