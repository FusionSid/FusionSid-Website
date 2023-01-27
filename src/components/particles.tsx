import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";

export const ParticlesBG = (props: any) => {
	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			await console.log(container);
		},
		[]
	);

	return (
		<Particles
			id={props.id}
			init={particlesInit}
			loaded={particlesLoaded}
			options={props.config}
		/>
	);
};
