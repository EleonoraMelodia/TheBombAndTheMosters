import { useState } from "react";
import GameManagement from "./GameManagement";
import Player from "./Player";
import antagonista from "../assets/agonista.png";
import protagonista from "../assets/protagonista.png";
import slave from "../assets/slave.png"

const Welcome = () => {
  const [openTheGame, setOpenTheGame] = useState(false);
  const [goInAction, setGoInAction] = useState(false);
  const [dontOpenTheGame, setDontOpenTheGame] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [playNow, setPlayNow] = useState(false);

  const handleOpenTheGame = () => {
    setOpenTheGame(true);
    setDontOpenTheGame(false);
  };

  const handleAction = () => {
    setGoInAction(true);
    setDontOpenTheGame(false);
  };

  const handleStartGame = () => {
    setStartGame(true);
    setDontOpenTheGame(false);
  };

  const handleDontOpen = () => {
    setDontOpenTheGame(true);
    setStartGame(false);
    setOpenTheGame(false);
    setGoInAction(false);
  };

  const handlePlayNow = () => {
    setPlayNow(true);
    setDontOpenTheGame(false);
    setStartGame(false);
    setOpenTheGame(false);
    setGoInAction(false);
  };

  return (
    <div>
      <Player />
      {!playNow && !dontOpenTheGame && (
        <div className="welcomeContainer">
          <h2 className="title">the world is in serious danger...</h2>
          <div className="buttonContainer">
            <button className="buttonGame" onClick={handleDontOpen}>
              Well, I don't care!
            </button>
            <button className="buttonGame" onClick={handleOpenTheGame}>
              What happend?{" "}
            </button>
          </div>

          {openTheGame && (
            <div>
              <div className="storyCardsContainer">
                <div className="storyCards">
                  <h3>
                    A bad alien is going to eplode the planet for warming his.
                  </h3>
                  <img
                    className="charectersImg"
                    src={antagonista}
                    alt="antagonista"
                  />
                </div>

                <button onClick={handleAction}>
                  What can I do for helping the world narrator?
                </button>
              </div>
              {goInAction && (
                <div className="storyCardsContainer">
                  <div className="storyCards">
                    <h3>
                      You have to help Carlo who is the unique unlucky being who
                      can see the bombs, but as you can see is so nervous to act
                      alone
                    </h3>
                    <img
                      className="charectersImg"
                      src={protagonista}
                      alt="protagonista"
                    />
                  </div>
                  <div className="buttonContainer">
                    <button className="buttonGame" onClick={handleStartGame}>
                      Let's go!
                    </button>
                    <button className="buttonGame" onClick={handleDontOpen}>
                      It's ok, ill'go to the alien planet...
                    </button>
                  </div>
                </div>
              )}
              <div>
                {startGame && (
                  <button onClick={handlePlayNow}> Go to the game </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {playNow && <GameManagement />}

      {dontOpenTheGame && (
        <div className="storyCards">
          <h2> The world exploded and you are the aliens's slave for ever
            <img src={slave} alt="slave" />
          </h2>
        </div>
      )}
    </div>
  );
};

export default Welcome;
