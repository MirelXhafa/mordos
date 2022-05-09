import { SagaIterator } from "redux-saga";
import {
  call,
  cancel,
  put,
  race,
  take,
  takeEvery,
  takeLatest,
  fork
} from "redux-saga/effects";
import history from "../../utilities/history";
import Users from "../../utilities/Users/User";
import PageRegisterActions from "../actions/PageRegisterAction";
import { workerSaveUser } from "./WorkerUserSaga";

function* workerPageRegister(): SagaIterator {
  try {
    let registerUser;

    const whatHappened = yield race({
      registerButtonPress: take(PageRegisterActions.PageRegisterButtonPressed),
      dimiss: take(PageRegisterActions.PageRegisterDismiss),
    });

    while (true) {
      if (whatHappened.registerButtonPress) {
        const { payload } = whatHappened.registerButtonPress;

        registerUser = yield fork(workerSaveUser, payload)

        yield call([history, history.push], '/login')

      } else if (whatHappened.dimiss) {
        if (registerUser) {
          yield cancel(registerUser);
        }

        return;
      }
    }
  } catch (error) {
    console.error("Error: ", error);
    return;
  }
}

export default function* watchPageRegister() {
  yield takeEvery(PageRegisterActions.PageRegisterLanding, workerPageRegister);
}
