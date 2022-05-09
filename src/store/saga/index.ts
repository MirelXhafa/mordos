import { all } from "redux-saga/effects";
import watchPageLoginSaga from "./PageLoginSaga";
import watchPageRegister from "./PageRegisterSaga";

export function* rootSaga() {
  yield all([watchPageRegister(), watchPageLoginSaga()]);
}
