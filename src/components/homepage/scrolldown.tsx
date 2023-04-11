import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const ScrollDown = () => {
	const { scrollYProgress } = useScroll();
	const [divOpacity, setDivOpacity] = useState(1);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		setDivOpacity((1 - latest) ** 15);
	});

	return (
		<motion.div style={{ opacity: divOpacity }}>
			<div className="absolute hidden md:flex w-full items-center justify-center md:bottom-7">
				<div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-black p-2 dark:border-white">
					<motion.div
						animate={{
							y: [0, 24, 0],
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							repeatType: "loop",
						}}
						className="mb-1 h-3 w-3 rounded-full bg-black dark:bg-white"
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default ScrollDown;
