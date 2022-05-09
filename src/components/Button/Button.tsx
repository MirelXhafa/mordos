import React, { CSSProperties } from "react";
import "./styles.css";

interface ButtonProps {
  text: string;
  classNames?: string;
  styles?: CSSProperties;
  block?: boolean;
  [x: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  text,
  classNames,
  styles,
  block,
  ...rest
}) => {
  return (
    <button
      className={`btn ${classNames} ${block ? "btn-block" : ""}`}
      style={styles}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
