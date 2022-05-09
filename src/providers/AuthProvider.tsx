import React from "react";
import { AuthContext } from "../context/AuthContext";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  let [user, setUser] = React.useState<any>(null);

  let signin = (newUser: string, callback: VoidFunction) => {
    setUser(newUser);
    callback();
  };

  let signout = (callback: VoidFunction) => {};

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
