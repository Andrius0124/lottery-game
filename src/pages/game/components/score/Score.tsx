import React from "react";
import Card from "../../../../components/decor/card/Card";
import { Prize, ScoreLabel, UserNumbers, WinningNumbers } from "../../Texts";
import styles from "./Score.module.css";
type HistoryEntry = {
  playerNumbers: number[];
  lotteryNumbers: number[];
  prize: number;
};
type ScoreProps = {
  history: HistoryEntry[];
};
const Score = ({ history }: ScoreProps) => {
  return (
    <Card header={ScoreLabel}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th >
              <p>#</p>
            </th>
            <th className={styles.numberColumn}>
              <p>{UserNumbers}</p>
            </th>
            <th className={styles.numberColumn}>
              <p>{WinningNumbers}</p>
            </th>
            <th className={styles.prizeColumn}>
              <p>{Prize}</p>
            </th>
          </tr>
        </thead>
          <tbody>
            {history.map((entry, i) => (
              <tr className={styles.historyElement}>
                <td>
                  <p>{i}</p>
                </td>
                <td className={styles.numberColumn}>
                  <p>{entry.playerNumbers.map((v) => `${v} `)}</p>
                </td>
                <td className={styles.numberColumn}>
                  <p>{entry.lotteryNumbers.map((v) => `${v} `)}</p>
                </td>
                <td className={styles.prizeColumn}>
                  <p>{entry.prize}</p>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    </Card>
  );
};
export default Score;
