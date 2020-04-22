import "core-js/stable";
import "regenerator-runtime/runtime";

import { put, takeLatest, select} from 'redux-saga/effects'
import {LIST_FILTERS} from "../actions/list";

const getList = (state) => state.List;

// worker Saga: will be fired on LIST_FILTERS.ADD_ELEMENT actions
function* fetchMail() {
    try {
        const mail = yield fetch("/public/mail-data.json").then((res) => res.json());
        for(let i=0;i<mail.length;i++){
            const current = mail[i];
            yield put({type:LIST_FILTERS.ADD_ELEMENT, data: current});  
        }
        let {filterBy} = yield select(getList);
        yield put({type:LIST_FILTERS.FILTER_MESSAGES, filter: filterBy, reset: false}); //borra mensaje actual
    } catch (e) {
        console.log(e.message);
    }
}

function* filterMail(actions){
    let {messageList} = yield select(getList);
    let newFilter = messageList.filter((current)=> {
        for (let [key, value] of Object.entries(actions.filter)) {
            if(!current.hasOwnProperty(key) || (typeof value === "boolean" && current[key] !== value) || (typeof value === "string" && !current[key].includes(value))){
                return false;
            }
        }
       return true;
    });
    yield put({type:LIST_FILTERS.SAVE_OBJECTS, data: newFilter, reset: actions.reset});
}

/*
  Alternatively you may use takeLatest.es not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
    yield takeLatest(LIST_FILTERS.REQUEST_ELEMENTS, fetchMail);
    yield takeLatest(LIST_FILTERS.FILTER_MESSAGES, filterMail);
}



export default mySaga;