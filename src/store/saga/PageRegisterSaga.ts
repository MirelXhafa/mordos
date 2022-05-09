import { fork } from "child_process";
import { SagaIterator } from "redux-saga";
import {
  call,
  cancel,
  put,
  race,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import Users from "../../utilities/Users/User";
import PageRegisterActions from "../actions/PageRegisterAction";

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

        registerUser = yield call(Users.saveUser, payload);
        const error = registerUser?.error;
        const data = registerUser?.data;
        const errorMessage = registerUser?.message;

        console.log("here: ", registerUser);

        if (!error) {
          yield put(PageRegisterActions.PageRegisterUserSaveSuccess(data));
        } else {
          yield put(
            PageRegisterActions.PageRegisterUserSaveFailure({
              error: true,
              message: errorMessage,
            })
          );
        }
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
