import { call, put, select, fork, takeLatest } from 'redux-saga/effects';
import * as api from 'services/api';
import * as actions from 'ducks/leads';
import { load, loaded } from 'ducks/loading';
import { ToastContainer, toast } from 'react-toastify';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000
};

function* fetch(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `lead/rules/${action.ruleId}`);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.fetchSuccess(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    console.log('Failed to fetch doc', error);
    yield toast.error(error.message, toastConfig);
  }
}

function* fetchOne(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `lead/campaign/${action.campId}`, );
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.successLeads(res));

    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    console.log('Failed to fetch doc', error);
    yield toast.error(error.message, toastConfig);
  }
}

function* create(action) {
  try {
    yield put(load());
    const res = yield call(api.POST, `lead`, action.leads);
    if(res.error)
      console.log(res.error);
    else {
      yield put(actions.successLeads(res));
    }

    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    console.log('Failed to fetch doc', error);
    yield toast.error(error.message, toastConfig);
  }

}

function* update(action) {
  try {
    yield put(load());
    delete action.leads['_id'];
    const res = yield call(api.PUT, `lead/${action.leads.id}`, action.leads);
    if(res.error)
      console.log(res.error);
    else {
      let leads = action.leads;
      leads["_id"] = leads.id;
      yield put(actions.successLeads(leads));
    }
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    console.log('Failed to fetch doc', error);
    yield toast.error(error.message, toastConfig);
  }

}

export function* watchFetch() {
  yield takeLatest(actions.FETCH, fetch);
}

export function* watchFetchOne() {
  yield takeLatest(actions.FETCH_ONE, fetchOne);
}

export function* watchCreate() {
  yield takeLatest(actions.CREATE, create);
}

export function* watchUpdate() {
  yield takeLatest(actions.UPDATE, update);
}

export default function* rootSaga() {
  yield [
    fork(watchFetch),
    fork(watchFetchOne),
    fork(watchCreate),
    fork(watchUpdate)
  ];
}
