import { TAccountSettings } from "./TAccountSettings";

export type TUserInfo = {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  isLoggedIn: boolean;
  settings: TAccountSettings;
};
