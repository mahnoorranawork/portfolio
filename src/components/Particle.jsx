import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFountainPreset } from "tsparticles-preset-fountain";


const ParticleBackground = () => {
    const particlesInit = useCallback(async Engine => {

        console.log("init", Engine);

        await loadFountainPreset(Engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            options={{
                preset: "fountain"
            }}
            init={particlesInit}
        />
    );
};

export default ParticleBackground;