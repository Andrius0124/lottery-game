import React from "react";
import styles from "./NumberInput.module.css";

type NumberInputProps = {
  value?: number;
  onChange?: (value: number) => void;
  error?: boolean;
};

const NumberInput = ({ value, onChange, error }: NumberInputProps) => {
    
  return (
    <input
      onChange={(val) => {
        if (onChange) {
          onChange(Number(val.target.value));
        }
      }}
      className={`${styles.numberInput} ${error ? styles.error : ""}`}
      max={58}
      min={1}
      value={value??""}
      type={"number"}
    ></input>
  );
};
export default NumberInput;
