import React from 'react';
import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as api from 'services/api';
import * as actions from 'ducks/payment';
import { createProfile, updateProfile, successProfile } from 'ducks/profile';
import { load, loaded } from 'ducks/loading';
import { toast } from 'react-toastify';
import { browserHistory } from 'react-router';
import Popup from 'react-popup';
import { base } from 'services/api';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

function* fetch() {
  try {
    yield put(load());
    const res = yield call(api.GET, 'payment/user');
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.successPayment(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* fetchInvoices() {
  try {
    yield put(load());
    const res = yield call(api.GET, 'payment/servicebot/invoice');
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.successInvoice(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* create(action) {
  try {
    yield put(load());
    const res = yield call(api.POST, 'payment', action.payment);
    if(res.error) {
      Popup.create({
        title: 'Payment failed',
        content: <div style={{padding: '30px 15px', fontSize: 'medium'}}>
          Payment failed due to {res.error}
        </div>,
        buttons: {}
      }, true);
    } else {
      yield put(actions.successPayment([res]));
      if(action.update) {
        yield put(updateProfile(action.profile));
        yield browserHistory.push(action.profile.route?'dashboard':'billing-details');
      } else {
        yield put(createProfile(action.profile));
      }
      Popup.create({
        title: 'Payment successful',
        content: <div style={{padding: '30px 15px', fontSize: 'medium'}}>
          {action.profile.plan.name} has been successfully activated for your account
        </div>,
        buttons: {}
      }, true);
      yield put(setTimeout(function(){ Popup.close(); }, 3000));
    }
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    console.log('Failed to fetch doc', error);
    Popup.create({
      title: 'Payment failed',
      content: <div style={{padding: '30px 15px', fontSize: 'medium'}}>
        Payment failed due to Card Declined
      </div>,
      buttons: {}
    }, true);
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
    yield toast.error(error.message, toastConfig);
  }
}

function* downloadInvoice(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `payment/invoice/${action.invoice_id}`);
    if(res.error)
      console.log(res.error);
    require('downloadjs')(base + res.path);
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* updatePaymentMethod(action) {
  try {
    yield put(load());
    const res = yield call(api.PUT, 'payment/servicebot/card', action.details);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.fetchCards());
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* fetchCards() {
  try {
    yield put(load());
    const res = yield call(api.GET, 'payment/servicebot/card');
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.fetchCardsSuccess(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* createAgreement(action) {
  try {
    yield put(load());
    const res = yield call(api.POST, 'paypalpayments/agreement', action.details);
    if(res.error)
      console.log(res.error);
    else {
      let redirectLink = res.links.filter(link => link.method == 'REDIRECT')[0].href;
      let acceptLink = res.links.filter(link => link.method == 'POST')[0].href;
      localStorage.setItem('redirectLink', redirectLink);
      localStorage.setItem('acceptLink', acceptLink);
      window.open(`${redirectLink}?acceptLink=${acceptLink}`,'_self');
    }

    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* createPaypalPayment(action) {
  try {
    yield put(load());
    const res = yield call(api.POST, 'paypalpayments/payment', action.token);

    if(res.error)
      yield toast.error(res.message.message, toastConfig);
    else {
      yield toast.info('Payment Successful', toastConfig);
      yield put(successProfile(res));
    }

    yield browserHistory.push('billing-details');
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
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

export function* watchDownloadInvoice() {
  yield takeLatest(actions.DOWNLOAD_INVOICE, downloadInvoice);
}

export function* watchUpdatePaymentMethod() {
  yield takeLatest(actions.UPDATE_PAYMENT_METHOD, updatePaymentMethod);
}

export function* watchFetchCards() {
  yield takeLatest(actions.FETCH_CARDS, fetchCards);
}

export function* watchCreateAgreement() {
  yield takeLatest(actions.CREATE_AGREEMENT, createAgreement);
}

export function* watchCreatePaypalPayment() {
  yield takeLatest(actions.CREATE_PAYPAL_PAYMENT, createPaypalPayment);
}

export default function* rootSaga() {
  yield [
    fork(watchFetch),
    fork(watchCreate),
    fork(watchUpdate),
    fork(watchFetchInvoices),
    fork(watchUpdatePaymentMethod),
    fork(watchDownloadInvoice),
    fork(watchFetchCards),
    fork(watchCreateAgreement),
    fork(watchCreatePaypalPayment)
  ];
}
