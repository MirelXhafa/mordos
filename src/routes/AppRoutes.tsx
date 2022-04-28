import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;