import React, { useContext } from "react";
import Rules from "./components/rules/Rules";
import styles from "./Game.module.css";
import Animation from "./components/animation/Animation";
import { GameRulesText } from "./Texts";
import Score from "./components/score/Score";
import Controlls from "./components/controlls/Controlls";
import { GameStateContext } from "../../providers/GameState.provider";

const GamePage = () => {
  const { history } = useContext(GameStateContext);
  return (
    <div className={styles.layout}>
      <div className={styles.rules}>
        <Rules content={GameRulesText}></Rules>
      </div>
      <div className={styles.game}>
        <Animation></Animation>
      </div>
      <div className={styles.score}>
        <Score history={history}></Score>
      </div>
      <div className={styles.controlls}>
        <Controlls></Controlls>
      </div>
    </div>
  );
};

export default GamePage;
