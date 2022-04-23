import React from "react";
import Card from "../../../../components/decor/card/Card";
import { GameRulesLabel } from "../../Texts";
import styles from "./Rules.module.css";

type RulesProps = {
  content: string;
};

const Rules = ({ content }: RulesProps) => {
  return (
    <Card header={GameRulesLabel}>
      <p className={styles.body}>{content}</p>
    </Card>
  );
};

export default Rules;
