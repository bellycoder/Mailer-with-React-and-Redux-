import "core-js/stable";
import "regenerator-runtime/runtime";

import { put, takeLatest } from 'redux-saga/effects'
import {LIST_FILTERS} from "../actions/list";

// worker Saga: will be fired on LIST_FILTERS.ADD_ELEMENT actions
function* fetchMail() {
    try {
        const mail = yield fetch("/public/mail-data.json").then((res) => res.json());
        console.log(mail);
        for(let i=0;i<mail.length;i++){
            const current = mail[i];
            yield put({type:LIST_FILTERS.ADD_ELEMENT, data: current});  
        }
    } catch (e) {
        console.log(e.message);
    }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
    yield takeLatest(LIST_FILTERS.REQUEST_ELEMENTS, fetchMail);
}

export default mySaga;