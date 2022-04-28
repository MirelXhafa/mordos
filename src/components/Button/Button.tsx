import React, { CSSProperties } from "react";
import "./styles.css";

interface ButtonProps {
  text: string;
  classNames?: string;
  styles?: CSSProperties;
  block?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, classNames, styles, block }) => {
  return (
    <button
      className={`btn ${classNames} ${block ? "btn-block" : ""}`}
      style={styles}
    >
      {text}
    </button>
  );
};

export default Button;
