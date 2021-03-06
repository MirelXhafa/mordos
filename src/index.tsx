import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AuthProvider from "./providers/AuthProvider";
import history from "./utilities/history";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

/**
 * HistoryRouter may have some issues with react 18.
 * Hence the name unstable
 */

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <AppRoutes />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </QueryClientProvider>
        </AuthProvider>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
