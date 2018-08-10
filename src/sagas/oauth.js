import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as api from 'services/api';
import * as actions from 'ducks/oauth';
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
    const res = yield call(api.GET, 'client');
    if (res.error)
      console.log(res.error);
    else
      yield put(actions.createClientOauthSuccess(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* create() {
  try {
    yield put(load());
    const res = yield call(api.POST, 'client');
    if (res.error)
      console.log(res.error);
    else
      yield put(actions.successClientOauth(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }

}

function* update(action) {
  try {
    yield put(load());
    const res = yield call(api.PUT, 'client/${action.client.id}');
    if (res.error)
      console.log(res.error);
    else {
      let client = action.client;
      client['_id'] = client.id;
      yield put(actions.successClientOauth(action.client));
    }
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }

}

export function* watchFetch() {
  yield takeLatest(actions.FETCH_CLIENT_OAUTH, fetch);
}

export function* watchCreate() {
  yield takeLatest(actions.CREATE_CLIENT_OAUTH, create);
}

export function* watchUpdate() {
  yield takeLatest(actions.UPDATE_CLIENT_OAUTH, update);
}

export default function* rootSaga() {
  yield [
    fork(watchFetch),
    fork(watchCreate),
    fork(watchUpdate)
  ];
}
