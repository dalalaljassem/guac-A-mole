import './App.css';
import React, { useState } from "react";

function App() {

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState();

  const generateIndex = () => {
    setIndex(Math.floor(Math.random() * 6));
  };

  const startGame = () => {
    const timer = setInterval(generateIndex, 2000);
    setTimer(timer);
  };

  const endGame = () => {
    clearInterval(timer);
    setScore(0);
    setIndex(0);
  };

  const onClick = (n) => {
    if (index === n) {
      setScore((score) => score + 1);
    }
  };
  

  return (

    <div className='App'>
      <h1>Guac-A-mole Game!</h1>
      <p>Whack the guac!</p>
      <button className="startBtn" onClick={startGame}>START</button>
      <p>score: {score}</p>
      <p>Timer: {timer}</p>
      <div>
        {Array(6)
          .fill()
          .map((_, n) => {
            if (index === n) {
              return (
                <div className="container">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/184/184517.png"
                    alt="mole"
                    onClick={() => onClick(n)}
                  />
                </div>
              );
            } else {
              return (
                <div className="container">
                  <div className="hole"></div>
                </div>
              );
            }
          })}
      </div>
      <br/>
      <button className="startBtn" onClick={endGame}>END</button>

    </div>
  );
}

export default App;
