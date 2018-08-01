import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as api from 'services/api';
import * as actions from 'ducks/subcampaign';
import { load, loaded } from 'ducks/loading';
import { toast } from 'react-toastify';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

function* fetchSubCampaign(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `subcampaign/campaign/${action.campId}`);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.fetchSubCampaignSuccess(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* fetchSubCampaignOne(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `subcampaign/${action.webhook}`, );
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.successSubCampaign(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* createSubCampaign(action) {
  try {
    yield put(load());
    const res = yield call(api.POST, 'subcampaign', action.subcampaign);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.fetchSubCampaign(res.campaign));
    yield toast('SubCampaign Saved', toastConfig);
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }

}

function* updateSubCampaign(action) {
  try {
    yield put(load());
    delete action.subcampaign['_id'];
    const res = yield call(api.PUT, `subcampaign/${action.subcampaign.id}`, action.subcampaign);
    if(res.error)
      console.log(res.error);
    else {
      let subcampaign = action.subcampaign;
      subcampaign['_id'] = subcampaign.id;
      yield put(actions.successSubCampaign(subcampaign));
    }
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}

function* deleteSubCampaign(action) {
  try {
    yield put(load());
    delete action.subcampaign['_id'];
    const res = yield call(api.DELETE, `subcampaign/${action.subcampaign.id}`);
    if(res.error)
      console.log(res.error);
    else {
      let subcampaign = action.subcampaign;
      subcampaign['_id'] = subcampaign.id;
      yield put(actions.successSubCampaign(subcampaign));
    }
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}


export function* watchFetchSubCampaign() {
  yield takeLatest(actions.FETCH_SUB_CAMPAIGN, fetchSubCampaign);
}

export function* watchFetchSubCampaignOne() {
  yield takeLatest(actions.FETCH_SUB_CAMPAIGN_ONE, fetchSubCampaignOne);
}

export function* watchCreateSubCampaign() {
  yield takeLatest(actions.CREATE_SUB_CAMPAIGN, createSubCampaign);
}

export function* watchUpdateSubCampaign() {
  yield takeLatest(actions.UPDATE_SUB_CAMPAIGN, updateSubCampaign);
}

export function* watchDeleteSubCampaign() {
  yield takeLatest(actions.DELETE_SUB_CAMPAIGN, deleteSubCampaign);
}

export default function* rootSaga() {
  yield [
    fork(watchFetchSubCampaign),
    fork(watchFetchSubCampaignOne),
    fork(watchCreateSubCampaign),
    fork(watchUpdateSubCampaign),
    fork(watchDeleteSubCampaign)
  ];
}
