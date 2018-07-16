import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as api from 'services/api';
import * as actions from 'ducks/graph';
import { load, loaded } from 'ducks/loading';
import { toast } from 'react-toastify';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

function* countryVisitors() {

  console.log("<=====Saga Response====>");
  try {
    yield put(load());
    const res = yield call(api.POST, 'http://35.202.85.190:5601/elasticsearch/_msearch',headers: [
      'Content-Type':'application/x-ndjson',
      'kbn-xsrf': 'reporting'
    ],
     body:[
     {"index":["filebeat-*"],"ignore_unavailable":true,"preference":1531657334094}
  {"size":0,"_source":{"excludes":[]},"aggs":{"2":{"terms":{"field":"json.value.geo.country","size":100,"order":{"2-orderAgg":"desc"}},"aggs":{"1":{"cardinality":{"field":"json.value.visitorId"}},"2-orderAgg":{"cardinality":{"field":"json.value.visitorId"}}}}},"stored_fields":["*"],"script_fields":{},"docvalue_fields":["@timestamp"],"query":{"bool":{"must":[{"match_all":{}},{"range":{"@timestamp":{"gte":1531593000000,"lte":1531679399999,"format":"epoch_millis"}}}],"filter":[],"should":[],"must_not":[]}}}]
);
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
  }
}
export function* watchCountryVisitors() {
  yield takeLatest(actions.COUNTRY_VISITORS, countryVisitors);
}

export default function* rootSaga() {
  yield [
    fork(watchCountryVisitors)
  ];
}
