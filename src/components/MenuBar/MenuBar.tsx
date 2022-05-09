import React from "react";
import "./style.css";

interface MenuBarProps {}

const MenuBar: React.FC<MenuBarProps> = () => {
  return (
    <div className="menu-bar">
      <a className="menu-bar-logo">MordOS</a>

      <div className="menu-container">
        <ul>
          <li className="dropdown">
            <a href="#">Profile</a>

            <div className="dropdown-menu"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
