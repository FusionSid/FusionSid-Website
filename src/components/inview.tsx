import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type intoViewProps = {
	div: JSX.Element;
};
const WhenInView = (props: intoViewProps) => {
	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={{
				visible: {
					opacity: 1,
					y: 0,
					transition: { duration: 0.55, ease: "easeInOut" },
				},
				hidden: { opacity: 0, y: 200 },
			}}
		>
			{props.div}
		</motion.div>
	);
};
export default WhenInView;
