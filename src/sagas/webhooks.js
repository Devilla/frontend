import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as api from 'services/api';
import * as actions from 'ducks/webhooks';
import { load, loaded } from 'ducks/loading';
import { toast } from 'react-toastify';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000
};

function* fetch(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `webhooks/campaign/${action.campId}`);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.fetchWebhookSuccess(res));
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
    const res = yield call(api.GET, `webhooks/${action.webhook}`, );
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.successWebhook(res));
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
    const res = yield call(api.POST, 'webhooks', action.webhooks);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.fetchWebhook(res.campaign));
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
    delete action.webhooks['_id'];
    const res = yield call(api.PUT, `webhooks/${action.webhooks.id}`, action.webhooks);
    if(res.error)
      console.log(res.error);
    else {
      let webhooks = action.webhooks;
      webhooks['_id'] = webhooks.id;
      yield put(actions.successWebhook(webhooks));
    }
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    console.log('Failed to fetch doc', error);
    yield toast.error(error.message, toastConfig);
  }
}

function* deleteWebhook(action) {
  try {
    yield put(load());
    delete action.webhooks['_id'];
    const res = yield call(api.DELETE, `webhooks/${action.webhooks.id}`);
    if(res.error)
      console.log(res.error);
    else {
      let webhooks = action.webhooks;
      webhooks['_id'] = webhooks.id;
      yield put(actions.successWebhook(webhooks));
    }
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    console.log('Failed to fetch doc', error);
    yield toast.error(error.message, toastConfig);
  }
}


export function* watchFetchWebhook() {
  yield takeLatest(actions.FETCH_WEBHOOK, fetch);
}

export function* watchFetchWebhookOne() {
  yield takeLatest(actions.FETCH_WEBHOOK_ONE, fetchOne);
}

export function* watchCreateWebhook() {
  yield takeLatest(actions.CREATE_WEBHOOK, create);
}

export function* watchUpdateWebook() {
  yield takeLatest(actions.UPDATE_WEBHOOK, update);
}

export function* watchDeleteWebook() {
  yield takeLatest(actions.DELETE_WEBHOOK, deleteWebhook);
}

export default function* rootSaga() {
  yield [
    fork(watchFetchWebhook),
    fork(watchFetchWebhookOne),
    fork(watchCreateWebhook),
    fork(watchUpdateWebook),
    fork(watchDeleteWebook)
  ];
}
