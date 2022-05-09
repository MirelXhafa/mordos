import React from "react";
import "./styles.css";

interface InputProps {
  name: string;
  value?: string;
  type?: string;
  placeholder?: string;
  hasLabel?: boolean;
  labelText: string;
  errors?: any;
  touched?: any;
  [x: string]: any;
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  type = "text",
  placeholder,
  hasLabel = true,
  labelText,
  errors,
  touched,
  ...rest
}) => {
  return (
    <>
      {hasLabel ? (
        <label
          htmlFor={name}
          className={`form-input-label ${
            errors && errors[name] && touched[name] && "has-error"
          }`}
        >
          {labelText}
        </label>
      ) : null}

      <input
        className={`form-input ${
          errors && errors[name] && touched[name] && "has-error"
        }`}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {errors && errors[name] && touched[name] ? (
        <div className="input-error-container">
          <p>{errors[name]}</p>
        </div>
      ) : null}
    </>
  );
};

export default Input;
