import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
	const cubicCurve = [0.27, 0.51, 0.83, 0.67];
	return (
		<motion.div
			className="flex min-h-screen flex-row items-center justify-center"
			animate={{
				opacity: 0,
				transition: {
					duration: 0.6,
					ease: "easeInOut",
					delay: 1.45,
				},
			}}
			initial={{
				opacity: 1,
			}}
		>
			<motion.svg
				animate={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.45,
						ease: "easeInOut",
					},
				}}
				initial={{
					opacity: 0,
					y: 100,
				}}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 347 620"
				className="flex h-[15vh] w-[15vw] items-center justify-center dark:fill-white"
			>
				<g>
					<rect x="157.056" width="33" height="620" rx="7" />

					<motion.rect
						animate={{
							height: 323.597,
							transition: {
								duration: 1.0,
								ease: "easeInOut",
								delay: 0.45,
							},
						}}
						initial={{
							height: 0,
						}}
						y="17.9004"
						width="32.7254"
						height="323.597"
						rx="7"
						transform="rotate(-30 0 17.9004)"
					/>

					<motion.rect
						animate={{
							height: 323.597,
							transition: {
								duration: 1.0,
								ease: "easeInOut",
								delay: 0.45,
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
						transform="rotate(30 318.7 1.53772)"
					/>

					<motion.rect
						animate={{
							height: 323.597,
							transition: {
								duration: 1.0,
								ease: "easeInOut",
								delay: 0.45,
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
						transform="rotate(-150 28.3975 619.606)"
					/>

					<motion.rect
						animate={{
							height: 323.597,
							transition: {
								duration: 1.0,
								ease: "easeInOut",
								delay: 0.45,
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
						transform="rotate(150 347.097 603.243)"
					/>
				</g>
			</motion.svg>
		</motion.div>
	);
};

export default Loader;
