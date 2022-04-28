import React from "react";
import "./styles.css";

interface InputProps {
  name?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  hasLabel?: boolean;
  labelText: string;
  [x: string]: any;
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  type = "text",
  placeholder,
  hasLabel = true,
  labelText,
  ...rest
}) => {
  return (
    <>
      {hasLabel ? <label htmlFor={name}>{labelText}</label> : null}

      <input
        className="form-input"
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
};

export default Input;
