import { all } from "redux-saga/effects";
import watchPageRegister from "./PageRegisterSaga";

export function* rootSaga() {
  yield all([watchPageRegister()]);
}
