import React, { useEffect, useRef, useState } from "react";
import bomb from "../assets/bomb.mp4"

const TimerChallenge = ({
  startGame,
  duration,
  title,
  onBombDisarmed,
  onGameEnd,
  totalBombs,
}) => {
  const [bombActive, setBombActive] = useState(false);
  const [disarmed, setDisarmed] = useState(false); // Stato per tenere traccia se la bomba è stata disinnescata

  const timerRef = useRef(null);

  useEffect(() => {
    if (startGame) {
      setBombActive(true);

      timerRef.current = setTimeout(() => {
        setBombActive(false);
        if (!disarmed) {
          onGameEnd(false); // Segnala al genitore che la bomba è esplosa
        }
      }, duration);

      return () => clearTimeout(timerRef.current);
    }
  }, [startGame]);

  const disinnescaBomba = () => {
    clearTimeout(timerRef.current);
    setBombActive(false);
    setDisarmed(true); // Imposta il flag di disinnescato a true
    onBombDisarmed(); // Informa il genitore del disinnesco della bomba
    checkAllBombsDisarmed(); // Controlla se tutte le bombe sono state disinnescate
  };

  const checkAllBombsDisarmed = () => {
    const tutteLeBombeDisinnescate = totalBombs.every((bomba) => bomba.disarmed);

    if (tutteLeBombeDisinnescate) {
      // Segnala al genitore che tutte le bombe sono state disinnescate e il gioco è stato vinto
      onGameEnd(true);
    }
  };

  useEffect(() => {
    // Chiamare checkAllBombsDisarmed ogni volta che cambia lo stato di totalBombs
    checkAllBombsDisarmed();
  }, [totalBombs]);

  return (
    <div className="challenge-time">
      <h2>{title}</h2>
      {bombActive && <p className="active"> Sta per esplodere... </p>}
      <video autoPlay loop
        src={bomb}

      />
      <button onClick={disinnescaBomba}>Disinnesca</button>
    </div>
  );
};

export default TimerChallenge;
