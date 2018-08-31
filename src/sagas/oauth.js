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
    const res = yield call(api.PUT, `client/${action.client.id}`, action.client);
    if (res.error)
      console.log(res.error);
    yield toast.error('Client Configuration Saved', toastConfig);
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* deleteClientOauth(action) {
  try {
    yield put(load());
    const res = yield call(api.DELETE, `client/${action.id}`);
    if (res.error)
      console.log(res.error);
    else
      yield put(actions.popClientOauth(action.index));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* OauthGetAccessToken(action) {
  try {
    yield put(load());
    const res = yield call(api.POST, `oauth/access_token/${action.requestType}`, action.requestDetails);
    console.log(res);
    // if (res.error)
    //   console.log(res.error);
    // else
    //   yield put(actions.popClientOauth(action.index));
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

export function* watchDelete() {
  yield takeLatest(actions.DELETE_CLIENT_OAUTH, deleteClientOauth);
}

export function* watchOauthGetAccessToken() {
  yield takeLatest(actions.OAUTH_GET_ACCESS_TOKEN, OauthGetAccessToken);
}

export default function* rootSaga() {
  yield [
    fork(watchFetch),
    fork(watchCreate),
    fork(watchUpdate),
    fork(watchDelete),
    fork(watchOauthGetAccessToken)
  ];
}
