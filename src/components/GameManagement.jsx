import React, { useState } from "react";
import TimerChallenge from "./TimerChallenge";
import ResultModal from "./ResultModal";

const GameManagement = () => {
  const NUMERO_TOTALE_BOMBE = 2; // Numero totale di bombe nel gioco

  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [bombsDisarmed, setBombsDisarmed] = useState(0);
  const [bombs, setBombs] = useState(
    Array.from({ length: NUMERO_TOTALE_BOMBE }, (_, index) => ({
      id: index,
      disarmed: false,
    }))
  );

  const handleStartGame = () => {
    setGameStarted(true);
    setGameEnded(false);
    setGameWon(false);
    setGameLost(false);
    setBombsDisarmed(0);
    console.log("Gioco iniziato");
  };

  const handleBombDisarmed = (bombId) => {
    setBombs((prevBombs) =>
      prevBombs.map((bomb) => {
        if (bomb.id === bombId) {
          return { ...bomb, disarmed: true };
        }
        return bomb;
      })
    );
    setBombsDisarmed((prevCount) => prevCount + 1);
  };

  const handleGameEnd = (win) => {
    if (win) {
      setGameWon(true);
      console.log("Hai vinto il gioco!");
    } else {
      setGameLost(true);
      console.log("Hai perso il gioco!");
    }
    setGameEnded(true);
    setGameStarted(false);
  };

  return (
    <div>
      <button className="startGame" onClick={handleStartGame}>Inizia gioco</button>
      
      <div className="gameContainer">
        {gameStarted && (
          <>
            {bombs.map((bomb) => (
              <TimerChallenge
                key={bomb.id}
                startGame={!gameEnded && !gameWon}
                duration={5000}
                title={`Bomba ${bomb.id + 1}`}
                onBombDisarmed={() => handleBombDisarmed(bomb.id)}
                onGameEnd={handleGameEnd}
                totalBombs={bombs}
              />
            ))}
          </>
        )}
   <ResultModal win={gameWon} lose={gameLost} />
      </div>
    </div>
  );
};

export default GameManagement;
