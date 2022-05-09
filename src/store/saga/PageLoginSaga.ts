import { SagaIterator } from "redux-saga";
import { fork, cancel, race, take, takeEvery, call } from "redux-saga/effects";
import history from "../../utilities/history";
import { PageLoginActions } from "../actions/PageLoginActions";
import { workerUserSignIn } from "./WorkerUserSaga";

function* workerPageLogin(): SagaIterator {
  try {
    let loginUser;

    while (true) {
      let whatHappened = yield race({
        authRequest: take(PageLoginActions.pageLoginAuthRequest),
        authSuccess: take(PageLoginActions.pageLoginAuthSuccess),
        dismiss: take(PageLoginActions.pageLoginDimiss),
      });

      if (whatHappened.authRequest) {
        const { payload } = whatHappened.authRequest;
        loginUser = yield fork(workerUserSignIn, payload);
      } else if (whatHappened.authSuccess) {
        yield call([history, history.push], "/");
      } else if (whatHappened.dismiss) {
        if (loginUser) {
          yield cancel(loginUser);
        }

        return;
      }
    }
  } catch (e) {
    console.error("Error: ", e);
  }
}

export default function* watchPageLoginSaga() {
  yield takeEvery(PageLoginActions.pageLoginLanding, workerPageLogin);
}
