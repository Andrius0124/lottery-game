import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  title: string;
  style?: "primary" | "secondary";
  onClick?: () => void;
};
const Button = ({ title,style,onClick }: ButtonProps) => {
    const getButtonStyle=()=>{
        switch(style){
            case "primary":
                return styles.primary;
            case "secondary":
                return styles.secondary;
            default:
                return styles.primary;
        }
    }

  return (
    <div onClick={onClick} className={`${styles.button} ${getButtonStyle()}`}>
      <p>{title}</p>
    </div>
  );
};
export default Button;
