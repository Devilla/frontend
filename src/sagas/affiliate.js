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

function* fetchAffiliate() {
  try {
    yield put(load());
    const res = yield call(api.GET, 'affiliate');
    if (res.error) {
      if (res.statusCode == 401) {
        localStorage.removeItem('authToken');
        browserHistory.push('/login');
      }
    } else
      yield put(actions.successAffiliate(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* createAffiliate(action) {
  try {
    yield put(load());
    const res = yield call(api.POST, 'affiliate', action.affiliate);
    if (res.error) {
      console.log(res.error);
    } else {
      yield put(actions.successAffiliate(res));
    }
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* updateAffiliate(action) {
  try {
    yield put(load());
    delete action.affiliate['_id'];
    const res = yield call(api.PUT, `affiliate/${action.affiliate.id}`, action.affiliate);
    if (res.error)
      console.log(res.error);
    else
      yield put(actions.successAffiliate(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* affiliateWithdraw(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `affiliate/otp/${action.requestType}`);
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


export function* watchFetch() {
  yield takeLatest(actions.FETCH_AFFILIATE, fetchAffiliate);
}

export function* watchCreate() {
  yield takeLatest(actions.CREATE_AFFILIATE, createAffiliate);
}

export function* watchUpdate() {
  yield takeLatest(actions.UPDATE_AFFILIATE, updateAffiliate);
}

export function* watchAffiliateWithdraw() {
  yield takeLatest(actions.AFFILIATE_WITHDRAW, affiliateWithdraw);
}

export default function* rootSaga() {
  yield [
    fork(watchFetch),
    fork(watchCreate),
    fork(watchUpdate),
    fork(watchAffiliateWithdraw)
  ];
}
