import { configureStore } from "@reduxjs/toolkit";
import AccountReducer from "./reducers/AccountReducer";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    AccountReducer: AccountReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
