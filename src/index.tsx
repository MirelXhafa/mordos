import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AuthProvider from "./providers/AuthProvider";
import history from "./utilities/history";

/**
 * HistoryRouter may have some issues with react 18.
 * Hence the name unstable
 */

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
