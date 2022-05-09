import React from "react";

interface TAuthContext {
  user: string;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export let AuthContext = React.createContext<TAuthContext>(null!);
