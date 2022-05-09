import { createSelector } from "@reduxjs/toolkit";
import { getAccountReducer } from "../reducers";
import * as fromReducer from "../reducers/AccountReducer";

export const selectAccountLoading = createSelector(
  getAccountReducer,
  fromReducer.getLoading
);

export const selectAccountUserInfo = createSelector(
  getAccountReducer,
  fromReducer.getUserInfo
);
