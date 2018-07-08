import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as api from 'services/api';
import * as actions from 'ducks/elastic';
import { load, loaded } from 'ducks/loading';
import { toast } from 'react-toastify';
import './toast.scss';


const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

function* fetch(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `elasticsearch/query?trackingId=${action.query}`);
    yield put(actions.fetchSuccess(res));
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

export default function* rootSaga() {
  yield [
    fork(watchFetch),
  ];
}
