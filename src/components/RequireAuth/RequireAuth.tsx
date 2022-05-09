import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/hooks";

type RequireAuthProps = {
  children: JSX.Element;
};

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const auth = useAuth();
  const location = useNavigate();

  if (auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
