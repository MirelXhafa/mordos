import { createReducer } from "@reduxjs/toolkit";
import { PageLoginActions } from "../actions/PageLoginActions";
import PageRegisterActions from "../actions/PageRegisterAction";
import { TError } from "../types/TError";
import { TUserInfo } from "../types/TUserInfo";

interface TLastLoginUser extends TUserInfo {
  deviceId: string;
}

type TAccountReducerState = {
  loading: boolean;
  error: TError;
  userInfo: TUserInfo | never[];
  lastLoginUser: TLastLoginUser;
};

const INITIAL_STATE: TAccountReducerState = {
  loading: false,
  error: {
    hasError: false,
  },
  userInfo: {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    isLoggedIn: false,
    settings: {
      timezone: "",
    },
  },
  lastLoginUser: {
    deviceId: "",
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    isLoggedIn: false,
    settings: {
      timezone: "",
    },
  },
};

export default createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(PageLoginActions.pageLoginAuthRequest, (state) => {
      state.loading = true;
      state.error.hasError = false;
    })
    .addCase(PageLoginActions.pageLoginAuthSuccess, (state, action) => {
      state.loading = false;
      state.error.hasError = false;
      state.userInfo = action.payload;
    })
    .addCase(PageRegisterActions.PageRegisterButtonPressed, (state) => {
      state.loading = true;
      state.error.hasError = false;
    })
    .addCase(
      PageRegisterActions.PageRegisterUserSaveSuccess,
      (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      }
    )
    .addCase(
      PageRegisterActions.PageRegisterUserSaveFailure,
      (state, action) => {
        state.loading = false;
        state.error.hasError = true;
        state.error.hasError = action.payload.error;
        state.error.message = action.payload.message;
      }
    );
});

export const getLoading = (state: TAccountReducerState) => state.loading;
export const getUserInfo = (state: TAccountReducerState) => state.userInfo;
