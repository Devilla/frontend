import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as api from 'services/api';
import * as actions from 'ducks/campaign';
import { load, loaded } from 'ducks/loading';
import { toast } from 'react-toastify';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000
};

function* fetch() {
  try {
    yield put(load());
    const res = yield call(api.GET, 'campaign');
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

function* create(action) {
  try {
    yield put(load());
    const res = yield call(api.POST, 'campaign', action.campaign);
    if(res.error)
      if(res.message == 'Invalid domain')
        yield toast.error('This website url is Invalid.', toastConfig);
      else
        yield toast.error('This website is already configured with this account', toastConfig);
    else
      yield put(actions.successCampaign(res));
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
    const res = yield call(api.PUT, 'campaign/${action.campaign.id}', action.campaign);
    if(res.error)
      console.log(res.error);
    else {
      let campaign = action.campaign;
      campaign['_id'] = campaign.id;
      yield put(actions.successCampaign(action.campaign));
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
    const res = yield call(api.DELETE, 'campaign/${action.campaignId}');
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.popCampaign(action.index));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    console.log('Failed to fetch doc', error);
    yield toast.error(error.message, toastConfig);
  }
}

function* fetchCampaignsInfo() {
  try {
    yield put(load());
    const res = yield call(api.GET, 'campaign/user/info');
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.fetchDashboardSuccess(res));
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

export function* watchCreate() {
  yield takeLatest(actions.CREATE, create);
}

export function* watchUpdate() {
  yield takeLatest(actions.UPDATE, update);
}

export function* watchRemove() {
  yield takeLatest(actions.REMOVE, remove);
}

export function* watchCampaignInfo() {
  yield takeLatest(actions.FETCH_CAMPAIGN_INFO, fetchCampaignsInfo);
}

export default function* rootSaga() {
  yield [
    fork(watchFetch),
    fork(watchCreate),
    fork(watchUpdate),
    fork(watchRemove),
    fork(watchCampaignInfo)
  ];
}
