import React from "react";
import "./styles.css";

interface ContentProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Content: React.FC<ContentProps> = ({ children, className }) => {
  return <div className={`content ${className ?? ""}`}>{children}</div>;
};

export default Content;
