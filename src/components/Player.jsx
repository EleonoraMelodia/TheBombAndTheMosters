import { useRef, useState } from "react";

const Player = () => {
  const [playerName, setPlayer] = useState(false);

  const playerValue = useRef();

  const handleSetPlayer = () => {
    console.log(playerValue);
    setPlayer(playerValue.current.value);
    playerValue.current.value = '';
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown identity"}</h2>
      <p>
        <input ref={playerValue} type="text" />
        <button onClick={handleSetPlayer}>Set Name</button>
      </p>
    </section>
  );
}
export default Player;