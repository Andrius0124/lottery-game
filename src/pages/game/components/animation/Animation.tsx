import React, { LegacyRef, useContext, useEffect, useRef } from "react";
import styles from "./Animation.module.css";
import * as THREE from "three";
import { GameStateContext } from "../../../../providers/GameState.provider";

import { Canvas, createRoot } from "@react-three/fiber";
import Ball from "../../../../components/3d/Ball";

const Animation = () => {
  const { lotteryNumbers } = useContext(GameStateContext);
  const mountRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={mountRef} className={styles.container}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {lotteryNumbers.map((number, i) => {
          return (
            <Ball
              number={number}
              key={i}
              position={[-4 + i * 1.5, 0, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          );
        })}
      </Canvas>
      <div className={styles.numbersOverlay}>
        {lotteryNumbers.map((number, i) => {
          return <h1 key={i}>{number}</h1>;
        })}
      </div>
    </div>
  );
};
export default Animation;
