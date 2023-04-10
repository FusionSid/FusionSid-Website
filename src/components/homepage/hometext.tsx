import { styles } from "../../utils";
import { useState, useEffect } from "react";
export default function HomeText() {
	const linkCodeStyle =
		"text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4rem] " +
		styles.homeTextCode;

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
				<>
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
							Siddhesh
						</h1>
						<br />
						<span className="inline-block md:w-[5rem] lg:w-[7rem] xl:w-[6.5rem] 2xl:w-[4.5rem]"></span>
						<h3 className="inline-block font-poppinsbold text-[2.5rem] text-black dark:text-white lg:text-[3.4rem] xl:text-[3.8rem] 2xl:text-[4.2rem]">
							aka
						</h3>
						<h1 className="inline-block font-poppinsbold text-[7rem] leading-[7rem] text-[#D2292D] lg:text-[7.75rem] lg:leading-[7.75rem] xl:text-[10rem]  xl:leading-[10rem] 2xl:text-[13rem] 2xl:leading-[13rem]">
							FusionSid
						</h1>
						<h3 className={linkCodeStyle + " inline-block"}>
							{'")'}
						</h3>
					</div>

					<h3 className={linkCodeStyle}>{"}"}</h3>
				</>
			) : (
				<></>
			)}
		</div>
	);
}
