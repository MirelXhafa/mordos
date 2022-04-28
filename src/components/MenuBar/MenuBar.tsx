import React from "react";
import "./style.css";

interface MenuBarProps {}

const MenuBar: React.FC<MenuBarProps> = () => {
  return (
    <div className="menu-bar">
      <a className="menu-bar-logo">MordOS</a>

      <div></div>
    </div>
  );
};

export default MenuBar;
