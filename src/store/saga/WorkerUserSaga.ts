import { SagaIterator } from "redux-saga";
import { call, cancel, cancelled, put } from "redux-saga/effects";
import { TUserModel } from "../../utilities/Users/Models/UserModel";
import Users from "../../utilities/Users/User";
import PageRegisterActions from "../actions/PageRegisterAction";

export function* workerSaveUser(payload: TUserModel): SagaIterator {
    try{
        let response = yield call(Users.saveUser, payload)

        const error = response?.error
        const data = response?.data

        if (!error) {
            yield put(PageRegisterActions.PageRegisterUserSaveSuccess(data))
        } else {
            throw new Error()
        }

    }catch(e) {
        yield put(PageRegisterActions.PageRegisterUserSaveFailure({
            error: true,
            message: e
        }))
    } finally {
        if(yield cancelled()) {
            yield put(PageRegisterActions.PageRegisterDismiss())
            yield cancel()
        }
    }
}