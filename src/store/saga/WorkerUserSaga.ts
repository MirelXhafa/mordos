import { toast } from "react-toastify";
import { SagaIterator } from "redux-saga";
import { call, cancel, cancelled, put } from "redux-saga/effects";
import { TUserModel } from "../../utilities/Users/Models/UserModel";
import Users from "../../utilities/Users/User";
import { PageLoginActions } from "../actions/PageLoginActions";
import PageRegisterActions from "../actions/PageRegisterAction";

export function* workerSaveUser(payload: TUserModel): SagaIterator {
  try {
    let response = yield call(Users.saveUser, payload);

    const error = response?.error;
    const data = response?.data;

    if (!error) {
      yield put(PageRegisterActions.PageRegisterUserSaveSuccess(data));
    } else {
      throw new Error();
    }
  } catch (e) {
    yield put(
      PageRegisterActions.PageRegisterUserSaveFailure({
        error: true,
        message: e,
      })
    );
  } finally {
    if (yield cancelled()) {
      yield put(PageRegisterActions.PageRegisterDismiss());
      yield cancel();
    }
  }
}

export function* workerUserSignIn(payload: {
  username: string;
  password: string;
}): SagaIterator {
  try {
    const response = yield call(
      Users.signin,
      payload.username,
      payload.password
    );

    const error = response?.error;
    const data = response?.data;

    if (!error) {
      yield put(PageLoginActions.pageLoginAuthSuccess(data));
    } else {
      throw new Error(response?.message);
    }
  } catch (e) {
    const parsedError = JSON.parse(JSON.stringify(e));

    yield put(
      PageLoginActions.pageLoginAuthFailure({
        hasError: true,
        message: e,
      })
    );

    yield call([toast, "error"], parsedError.message);
  } finally {
    if (yield cancelled()) {
      yield cancel();
      yield put(PageLoginActions.pageLoginDimiss());
    }
  }
}
