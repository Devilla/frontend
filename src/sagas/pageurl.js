import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as api from 'services/api';
import * as actions from 'ducks/pageurl';
import { load, loaded } from 'ducks/loading';
import { toast } from 'react-toastify';
import './toast.scss';


const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

function* fetchDisplay(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `notificationpath/rules/display/${action.ruleId}`);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.fetchSuccess(res, 'display'));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    console.log('Failed to fetch doc', error);
    yield toast.error(error.message, toastConfig);
  }
}

function* fetchLead(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `notificationpath/rules/lead/${action.ruleId}`);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.fetchSuccess(res, 'lead'));
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
    const res = yield call(api.GET, `notificationpath/campaign/${action.campId}`, );
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.successPageUrl(res));

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
    const res = yield call(api.POST, 'notificationpath', action.pageurl);
    if(res.error)
      console.log(res.error);
    else {
      yield put(actions.successPageUrl(res, action.pageurl.type));
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
    delete action.pageurl['_id'];
    const res = yield call(api.PUT, `notificationpath/${action.pageurl.id}`, action.pageurl);
    if(res.error)
      console.log(res.error);
    else {
      let pageurl = action.pageurl;
      pageurl['_id'] = pageurl.id;
      yield put(actions.successPageUrl(pageurl, action.urlType));
    }
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    console.log('Failed to fetch doc', error);
    yield toast.error(error.message, toastConfig);
  }
}

function* remove(action) {
  try {
    yield put(load());
    const res = yield call(api.DELETE, `notificationpath/${action.id}`);
    if(res.error)
      console.log(res.error);
    else {
      yield put(actions.popPageUrl(action.index, action.urlType));
    }
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    console.log('Failed to fetch doc', error);
    yield toast.error(error.message, toastConfig);
  }
}

export function* watchFetchDisplay() {
  yield takeLatest(actions.FETCH_DISPLAY, fetchDisplay);
}

export function* watchFetchLead() {
  yield takeLatest(actions.FETCH_LEAD, fetchLead);
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

export function* watchRemove() {
  yield takeLatest(actions.REMOVE, remove);
}

export default function* rootSaga() {
  yield [
    fork(watchFetchDisplay),
    fork(watchFetchLead),
    fork(watchFetchOne),
    fork(watchCreate),
    fork(watchUpdate),
    fork(watchRemove)
  ];
}
