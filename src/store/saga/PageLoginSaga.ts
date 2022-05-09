import { SagaIterator } from "redux-saga";
import { cancel, race, take, takeEvery } from "redux-saga/effects"
import { PageLoginActions } from "../actions/PageLoginActions"

function* workerPageLogin(): SagaIterator {
    try{

        let loginUser

        while(true) {

            let whatHappened = yield race({
                dismiss: take(PageLoginActions.pageLoginDimiss)
            })

            if(whatHappened.dismiss) {

                if(loginUser) {
                    yield cancel(loginUser)
                }

                return;
            }
        }

    }catch(e) {
        console.error("Error: ", e)
    }
}

export default function* watchPageLoginSaga() {
    yield takeEvery(PageLoginActions.pageLoginLanding, workerPageLogin)
}