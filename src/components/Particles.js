import Particles from "react-tsparticles";
//import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
      },
      particles: {
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 2 },
        },
        opacity: {
          value: { min: 0.2, max: 1 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    //loadSlim(engine);
    loadFull(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;
