import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as api from 'services/api';
import * as actions from 'ducks/payment';
import { createProfile } from 'ducks/profile';
import { load, loaded } from 'ducks/loading';
import { toast } from 'react-toastify';
import { browserHistory } from 'react-router';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000
};

const getProfile = state => state.getIn(['profile', 'profile']);


function* fetch(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `payment/user`);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.successPayment(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    console.log('Failed to fetch doc', error);
    yield toast.error(error.message, toastConfig);
  }
}

function* fetchInvoices(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `payment/servicebot/invoice`);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.successInvoice(res));
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
    const res = yield call(api.POST, `payment`, action.payment);
    if(res.error)
      console.log(res.error);
    else {
      yield put(actions.successPayment([res]));
      if(action.profile) {
        yield put(createProfile(action.profile));
      } else {
        yield browserHistory.push('billing-details');
      }
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
    const res = yield call(api.PUT, `payment/${action.id}`, action.payment);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.successPayment(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    console.log('Failed to fetch doc', error);
    yield toast.error(error.message, toastConfig);
  }

}

function* updatePaymentMethod(action) {
  try {
    yield put(load());
    const res = yield call(api.PUT, `payment/servicebot/card`, action.details);
    if(res.error)
      console.log(res.error);
    else
      browserHistory.push('/billing-details')
      // yield put(actions.successPayment(res));
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

export function* watchFetchInvoices() {
  yield takeLatest(actions.FETCH_INVOICES, fetchInvoices);
}

export function* watchCreate() {
  yield takeLatest(actions.CREATE, create);
}

export function* watchUpdate() {
  yield takeLatest(actions.UPDATE, update);
}

export function* watchUpdatePaymentMethod() {
  yield takeLatest(actions.UPDATE_PAYMENT_METHOD, updatePaymentMethod);
}

export default function* rootSaga() {
  yield [
    fork(watchFetch),
    fork(watchCreate),
    fork(watchUpdate),
    fork(watchFetchInvoices),
    fork(watchUpdatePaymentMethod)
  ];
}
