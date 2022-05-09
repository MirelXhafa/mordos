import { createAction } from "@reduxjs/toolkit";
import { TAccountSettings } from "../types/TAccountSettings";

const TAG = "[Page - Register - Actions]";

export interface TRegisterFormData {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  isLoggedIn: boolean;
  settings: TAccountSettings;
}

type TPageRegisterLanding = void;
type TPageRegisterDismiss = void;

type TPageRegisterButtonAction = TRegisterFormData | never[];
type TPageRegisterUserSaveSuccess = TRegisterFormData | never[];
type TPageRegisterUserSaveFailure = {
  error: boolean;
  message: string | unknown | undefined;
};

const PageRegisterLanding = createAction<TPageRegisterLanding>(
  `${TAG} Landing`
);
const PageRegisterDismiss = createAction<TPageRegisterDismiss>(`${TAG} Dimiss`);

const PageRegisterButtonPressed = createAction<TPageRegisterButtonAction>(
  `${TAG} Register Button Pressed`
);

const PageRegisterUserSaveSuccess = createAction<TPageRegisterUserSaveSuccess>(
  `${TAG} User Save Success`
);
const PageRegisterUserSaveFailure = createAction<TPageRegisterUserSaveFailure>(
  `${TAG} User Save Failure`
);

const PageRegisterActions = {
  PageRegisterLanding,
  PageRegisterDismiss,
  PageRegisterButtonPressed,
  PageRegisterUserSaveSuccess,
  PageRegisterUserSaveFailure,
};

export default PageRegisterActions;
