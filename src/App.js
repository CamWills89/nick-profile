import React from "react";
import Style from "./App.module.scss";
import BaseLayout from "./Components/BaseLayout";
import { HashRouter } from "react-router-dom";
import Home from "./Components/Home";
import Particles from "react-tsparticles";

function App() {
    const particlesInit = (main) => {
      console.log(main);
    };
    const particlesLoaded = (container) => {
      console.log(container);
    };
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          background: {
            color: "blue",
          },
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: { enable: false, force: 60, smooth: 10 },
              },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            move: {
              direction: "none",
              enable: true,
              outModes: "out",
              random: false,
              speed: 0.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 150,
            },
            opacity: {
              animation: {
                enable: true,
                speed: 0.05,
                sync: true,
                startValue: "max",
                count: 1,
                destroy: "min",
              },
              value: {
                min: 0,
                max: 0.5,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className={Style.app}>
        <BaseLayout>
          <Home />
        </BaseLayout>
      </div>
    </HashRouter>
  );
}

export default App;
