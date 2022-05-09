import { TAccountSettings } from "../../../store/types/TAccountSettings";

export interface TUserModel {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  isLoggedIn: boolean;
  settings: TAccountSettings;
}
