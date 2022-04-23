import { createContext, useEffect, useState } from "react";
import { calculatePrize } from "../utils";

type HistoryEntry = {
  playerNumbers: number[];
  lotteryNumbers: number[];
  prize: number;
};
type GameState = {
  userNumbers: number[];
  lotteryNumbers: number[];
  setNumber: (index: number, value: number) => void;
  setRandomNumbers: () => void;
  playGame: () => void;
  history: HistoryEntry[];
  errors: boolean[];
  resetGame: () => void;
};

/** Holds state and state mutations related to the game context
 * @param userNumbers the numbers the user has selected
 * @param lotteryNumbers winning numbers
 * @param setNumber sets the number at the given index
 * @param errors array of indexes that have errors
 * @param history  array of history entries
 * @callback setRandomNumbers  sets random numbers to the userNumbers array
 * @callback playGame  sets random numbers to the lottery array - starts the game
 * @callback resetGame  resets the game
 */
export const GameStateContext = createContext<GameState>({
  userNumbers: [],
  lotteryNumbers: [],
  history: [],
  errors: [],
  setNumber: (index: number, value: number) => {},
  setRandomNumbers: () => [],
  resetGame: () => {},
  playGame: () => {},
});

const GameStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [userNumbers, setUserNumbers] = useState<number[]>([]);
  const [lotteryNumbers, setLotteryNumbers] = useState<number[]>([]);
  const [errors, setErrors] = useState<boolean[]>([]);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const setNumber = (index: number, value: number) => {
    const newUserNumbers = [...userNumbers];
    newUserNumbers[index] = value;
    setUserNumbers(newUserNumbers);
  };
  const getRandomNumberNoDuplicates = (): number[] => {
    const randomNumbers = Array(6)
      .fill(0)
      .map(() => Math.floor(Math.random() * 58 + 1));
    const uniqueNumbers = new Set();
    const duplicates = randomNumbers.filter((n) => {
      if (uniqueNumbers.has(n)) {
        return true;
      }
      uniqueNumbers.add(n);
      return false;
    });
    if (duplicates.length > 0) {
      return getRandomNumberNoDuplicates();
    } else {
      return randomNumbers;
    }
  };
  const setRandomNumbersUser = () => {
    const randomNumbers = getRandomNumberNoDuplicates();
    setUserNumbers(randomNumbers);
    validateUserNumbers(randomNumbers);
  };

  const validateUserNumbers = (valNumbers?: number[]) => {
    const numbers = valNumbers ?? userNumbers;
    console.log(numbers);
    if(numbers.length !== 6){
      return false;
    }
    const errors = numbers.map((n, i) => {
      if (n < 1 || n > 58 || isNaN(n) || !n) {
        return true;
      }
      if (numbers.filter((u) => u === n).length > 1) {
        return true;
      }
      return false;
    });
    setErrors(errors);
    return errors.filter((e) => e).length === 0;
  };

  const playGame = () => {
    if (validateUserNumbers()) {
      const randomNumbers = getRandomNumberNoDuplicates();
      setLotteryNumbers(randomNumbers);
      const matchingNumbers = findMatchingNumbers(randomNumbers);
      const prize = calculatePrize(matchingNumbers.length);
      const historyEntry: HistoryEntry = {
        playerNumbers: userNumbers,
        lotteryNumbers: randomNumbers,
        prize,
      };
      setHistory([...history, historyEntry]);

    }
  };

  const resetGame = () => {
    setUserNumbers([]);
    setLotteryNumbers([]);
    setErrors([]);
    setHistory([]);
  };
  
  const findMatchingNumbers = (lotteryNumbers: number[]): number[] => {
    const matchedNumbers = userNumbers.filter((n) =>
      lotteryNumbers.includes(n)
    );

    return matchedNumbers;
  };

  return (
    <GameStateContext.Provider
      value={{
        setNumber: setNumber,
        userNumbers: userNumbers,
        setRandomNumbers: setRandomNumbersUser,
        playGame: playGame,
        lotteryNumbers: lotteryNumbers,
        history:history,
        errors: errors,
        resetGame: resetGame,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};
export default GameStateProvider;