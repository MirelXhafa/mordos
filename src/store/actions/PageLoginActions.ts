import { createAction } from "@reduxjs/toolkit";
import { TError } from "../types/TError";
import { TUserInfo } from "../types/TUserInfo";

const TAG = "[Page - Login]";

type TPageLoginLanding = void;
type TPageLoginDismiss = void;

type TPageLoginAuthRequest = {
  username: string;
  password: string;
};

type TPageLoginAuthSuccess = TUserInfo;
type TPageLoginAuthFailure = TError;

const pageLoginLanding = createAction<TPageLoginLanding>(`${TAG} Landing`);
const pageLoginDimiss = createAction<TPageLoginDismiss>(`${TAG} Dismiss`);

const pageLoginAuthRequest = createAction<TPageLoginAuthRequest>(
  `${TAG} Login Auth Request`
);

const pageLoginAuthSuccess = createAction<TPageLoginAuthSuccess>(
  `${TAG} Login Auth Success`
);

const pageLoginAuthFailure = createAction<TPageLoginAuthFailure>(
  `${TAG} Login Auth Failure`
);

export const PageLoginActions = {
  pageLoginLanding,
  pageLoginDimiss,
  pageLoginAuthRequest,
  pageLoginAuthSuccess,
  pageLoginAuthFailure,
};
