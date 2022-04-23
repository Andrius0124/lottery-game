import React from "react";
import Divider from "../divider/Divider";
import styles from "./Card.module.css";

type CardProps = {
    header: string;
}
const Card = (props: React.PropsWithChildren<CardProps>) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.header}>{props.header}</h2>
      <Divider />
      {props.children}
    </div>
  );
};

export default Card;
