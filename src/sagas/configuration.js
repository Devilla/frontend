import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as api from 'services/api';
import * as actions from 'ducks/configuration';
import { load, loaded } from 'ducks/loading';
import { toast } from 'react-toastify';


const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

function* fetch(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `configuration/${action.campId}`);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.successConfiguration(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    console.log('Failed to fetch doc', error);
    // yield toast.error(error.message, toastConfig);
  }
}


export function* reviewRedirect(action) {
  try {
    yield put(load());
    console.log(action.url,'Action Is here buddy!');
    const res = yield call(api.GET, action.url);

    if(res.error)
      console.log(res.error);
    else
      yield put(actions.successConfiguration(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield console.log(error);
  }
}


function* fetchCampaignConfiguration(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `configuration/campaign/${action.campId}/${action.notifId}`);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.createSuccess(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    console.log('Failed to fetch doc', error);
  }
}

function* create(action) {
  try {
    yield put(load());
    const res = yield call(api.POST, 'configuration', action.configuration);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.createSuccess(res));
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
    const campId =  action.configuration.campaign;
    delete action.configuration['campaign'];
    const res = yield call(api.PUT, `configuration/${action.configuration.id}`, action.configuration);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.fetchConfiguration(campId));
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

export function* watchReviewRedirect() {
  yield takeLatest(actions.REVIEW_REDIRECT, reviewRedirect);
}

export function* watchFetchCampaignConfig() {
  yield takeLatest(actions.FETCH_CAMPAIGN_CONFIG, fetchCampaignConfiguration);
}

export function* watchCreate() {
  yield takeLatest(actions.CREATE, create);
}

export function* watchUpdate() {
  yield takeLatest(actions.UPDATE, update);
}

export default function* rootSaga() {
  yield [
    fork(watchFetch),
    fork(watchCreate),
    fork(watchUpdate),
    fork(watchFetchCampaignConfig),
    fork(watchReviewRedirect)
  ];
}
