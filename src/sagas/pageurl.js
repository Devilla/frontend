import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as api from 'services/api';
import * as actions from 'ducks/pageurl';
import { load, loaded } from 'ducks/loading';
import { toast } from 'react-toastify';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000
};

function* fetch(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `notificationpath/rules/${action.pageType}/${action.ruleId}`);
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
    const res = yield call(api.POST, `notificationpath`, action.pageurl);
    if(res.error)
      console.log(res.error);
    else {
      yield put(actions.successPageUrl(res));
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
      pageurl["_id"] = pageurl.id;
      yield put(actions.successPageUrl(pageurl));
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
      yield put(actions.popPageUrl(action.index));
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

export function* watchRemove() {
  yield takeLatest(actions.REMOVE, remove);
}

export default function* rootSaga() {
  yield [
    fork(watchFetch),
    fork(watchFetchOne),
    fork(watchCreate),
    fork(watchUpdate),
    fork(watchRemove)
  ];
}
