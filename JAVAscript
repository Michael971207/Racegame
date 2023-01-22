const car = document.getElementById("car");

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") {
    car.style.left = (car.offsetLeft + 10) + "px";
  } else if (event.key === "ArrowLeft") {
    car.style.left = (car.offsetLeft - 10) + "px";
  }
});

/* game.js */
import { useState } from 'react';

function RacingGame() {
  const [carPosition, setCarPosition] = useState({ x: 0, y: 0 });

  function handleKeyDown(event) {
    if (event.key === "ArrowRight") {
      setCarPosition({ x: carPosition.x + 10, y: carPosition.y });
    } else if (event.key === "ArrowLeft") {
      setCarPosition({ x: carPosition.x - 10, y: carPosition.y });
    }
  }

  return (
    <div id="racetrack">
      <div id="car" style={{ left: carPosition.x, bottom: carPosition.y }}>
    </div>
  );
}
