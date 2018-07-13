import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as api from 'services/api';
import * as actions from 'ducks/plan';
import { load, loaded } from 'ducks/loading';
import { toast } from 'react-toastify';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

function* fetch() {
  try {
    yield put(load());
    const res = yield call(api.GET, 'plan');
    if (res.error)
      console.log(res.error);
    else
      yield put(actions.successPlan(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* create(action) {
  try {
    yield put(load());
    const res = yield call(api.POST, 'plan', action.profile);
    if (res.error)
      console.log(res.error);
    else
      yield put(actions.successPlan(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }

}

function* update() {
  try {
    yield put(load());
    const res = yield call(api.PUT, 'plan/:_id');
    if (res.error)
      console.log(res.error);
    else
      yield put(actions.successPlan(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

export function* watchFetchPlan() {
  yield takeLatest(actions.FETCH, fetch);
}

export function* watchCreatePlan() {
  yield takeLatest(actions.CREATE, create);
}

export function* watchUpdatePlan() {
  yield takeLatest(actions.UPDATE, update);
}

export default function* rootSaga() {
  yield [
    fork(watchFetchPlan),
    fork(watchCreatePlan),
    fork(watchUpdatePlan)
  ];
}
