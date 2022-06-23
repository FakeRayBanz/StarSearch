import React, { useEffect, useState } from "react";
import warpSpeed from "./components/warpspeed";
import "./App.css";
import Nav from "./components/Nav";
import starwarsimage from "./assets/StarWars.svg";

function App() {
  const [speed, setSpeed] = useState(2);
  const [density, setDensity] = useState(2);
  const [starColor, setStarColor] = useState("#FFFFFF");

  useEffect(() => {
    const x = new warpSpeed("Hyperdrive", {
      speed: speed,
      speedAdjFactor: 0.05,
      density: density,
      shape: "circle",
      warpEffect: true,
      warpEffectLength: 5,
      depthFade: true,
      starSize: 3,
      backgroundColor: "hsla(228, 0%, 0%, 1)",
      starColor: starColor,
    });
  }, [speed, density, starColor]);

  const handleLightSpeed = () => {
    setSpeed(20);
    setDensity(10);
    setStarColor("#c5eafb");

    setTimeout(() => {
      handleSubLightSpeed();
    }, 5000);
  };

  const handleSubLightSpeed = () => {
    setSpeed(2);
    setDensity(2);
    setStarColor("#FFFFFF");
  };

  return (
    <main>
      <Nav />
      <section>
        <canvas id="Hyperdrive"></canvas>
        <img id="starwarsimage" alt="Star Wars Logo" src={starwarsimage} />
        <input id="searchbar" type="search" />
        <div className="button-group">
          <button onClick={handleLightSpeed}>Search</button>
          <button>Random</button>
        </div>
      </section>
    </main>
  );
}

export default App;
