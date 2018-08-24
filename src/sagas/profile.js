import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as api from 'services/api';
import * as actions from 'ducks/profile';
import { load, loaded } from 'ducks/loading';
import { toast } from 'react-toastify';
import { browserHistory } from 'react-router';
import { fetchUser } from 'ducks/auth';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

function* fetch() {
  try {
    yield put(load());
    const res = yield call(api.GET, 'profile');
    if (res.error) {
      if (res.statusCode == 401) {
        localStorage.removeItem('authToken');
        browserHistory.push('/login');
      }
    } else
      yield put(actions.successProfile(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* create(action) {
  try {
    yield put(load());
    const res = yield call(api.POST, 'profile', action.profile);
    if (res.error) {
      console.log(res.error);
    } else {
      yield put(actions.successProfile(res));
    }
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* update(action) {
  try {
    yield put(load());
    delete action.profile['_id'];
    const res = yield call(api.PUT, `profile/${action.profile.id}`, action.profile);
    if (res.error)
      console.log(res.error);
    else
      yield put(actions.successProfile(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* accountRequest(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `profile/otp/${action.requestType}`);
    if (res.error)
      console.log(res.error);
    else
      yield toast('Mail sent', toastConfig);
    //   yield put(actions.successAccountRequest(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* submitAccountOtp(action) {
  try {
    yield put(load());
    const res = yield call(api.POST, 'profile/otp/submit', action.code);
    if (res.error)
      console.log(res.error);
    else {
      if(res.code) {
        yield put(fetchUser());
        yield toast(`Account ${action.code.type == 'pause'?'Paused':action.code.type == 'running'?'Resumed':'Deleted'}`, toastConfig);
      } else
        yield put(actions.successAccountOtpRequest(res.code));
    }

    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

export function* watchFetch() {
  yield takeLatest(actions.FETCH, fetch);
}

export function* watchCreate() {
  yield takeLatest(actions.CREATE, create);
}

export function* watchUpdate() {
  yield takeLatest(actions.UPDATE_PROFILE, update);
}

export function* watchSubmitAccountRequest() {
  yield takeLatest(actions.SUBMIT_ACCOUNT_REQUEST, accountRequest);
}

export function* watchSubmitAccountOtp() {
  yield takeLatest(actions.SUBMIT_ACCOUNT_OTP, submitAccountOtp);
}

export default function* rootSaga() {
  yield [
    fork(watchFetch),
    fork(watchCreate),
    fork(watchUpdate),
    fork(watchSubmitAccountRequest),
    fork(watchSubmitAccountOtp)
  ];
}
