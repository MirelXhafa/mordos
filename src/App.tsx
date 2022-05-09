import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuBar from "./components/MenuBar/MenuBar";
import MainContent from "./pages/MainContent/MainContent";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <MainContent />
    </div>
  );
}

export default App;
