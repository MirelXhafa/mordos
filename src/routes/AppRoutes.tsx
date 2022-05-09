import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Init from "../utilities/Init";

const AppRoutes = () => {
  useEffect(() => {
    Init.createDatabase();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
