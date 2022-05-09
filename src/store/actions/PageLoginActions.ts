import { createAction } from "@reduxjs/toolkit";
import { TUserInfo } from "../types/TUserInfo";

const TAG = "[Page - Login]";

type TPageLoginAuthRequest = {
  username: string;
  password: string;
};

type TPageLoginAuthSuccess = TUserInfo;

const pageLoginAuthRequest = createAction<TPageLoginAuthRequest>(
  `${TAG} Login Auth Request`
);

const pageLoginAuthSuccess = createAction<TPageLoginAuthSuccess>(
  `${TAG} Login Auth Success`
);

export const PageLoginActions = {
  pageLoginAuthRequest,
  pageLoginAuthSuccess,
};
