import React, { useContext } from "react";
import Container from "../../../../components/decor/container/Container";
import Button from "../../../../components/inputs/button/Button";
import NumberInput from "../../../../components/inputs/numberInput/NumberInput";
import { GameStateContext } from "../../../../providers/GameState.provider";
import {
  RandomButtonLabel,
  ResetButtonLabel,
  RollButtonLabel,
} from "../../Texts";
import styles from "./Controlls.module.css";
const Controlls = () => {
  const { userNumbers, setRandomNumbers, setNumber,errors,playGame,resetGame,history } =
    useContext(GameStateContext);
    console.log(history);
    
  return (
    <Container>
      <div className={styles.layout}>
        <div className={styles.top}>
          <NumberInput
            onChange={(val) => setNumber(0, val)}
            value={userNumbers[0]}
            error={errors[0]}
          ></NumberInput>
          <NumberInput
            onChange={(val) => setNumber(1, val)}
            value={userNumbers[1]}
            error={errors[1]}
          ></NumberInput>
          <NumberInput
            onChange={(val) => setNumber(2, val)}
            value={userNumbers[2]}
            error={errors[2]}
          ></NumberInput>
          <NumberInput
            onChange={(val) => setNumber(3, val)}
            value={userNumbers[3]}
            error={errors[3]}
          ></NumberInput>
          <NumberInput
            onChange={(val) => setNumber(4, val)}
            value={userNumbers[4]}
            error={errors[4]}
          ></NumberInput>
          <NumberInput
            onChange={(val) => setNumber(5, val)}
            value={userNumbers[5]}
            error={errors[5]}
          ></NumberInput>
        </div>
        <div className={styles.middle}>
          <Button onClick={playGame} title={RollButtonLabel}></Button>
        </div>
        <div className={styles.bottom}>
          <Button
            onClick={() => {
              setRandomNumbers();
            }}
            title={RandomButtonLabel}
            style="secondary"
          ></Button>
          <Button title={ResetButtonLabel} onClick={resetGame} style="secondary"></Button>
        </div>
      </div>
      ;
    </Container>
  );
};
export default Controlls;
