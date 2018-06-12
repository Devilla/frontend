import {
  call,
  put,
  fork,
  takeLatest,
  all
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { browserHistory } from 'react-router';
import * as actions from 'ducks/auth';
import { fetchProfile } from 'ducks/profile';
import { fetchPlan } from 'ducks/plan';
import { fetchPayment } from 'ducks/payment';
import { load, loaded } from 'ducks/loading';
import { storeToken } from 'services/Request';

import * as api from 'services/api';
import moment from 'moment';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000
};

export const removeAuthToken = () => localStorage.removeItem('authToken');

export function* isLoggedIn() {
  try{
    yield all([
      put(actions.fetchUser()),
      put(fetchProfile()),
      put(fetchPlan()),
      put(fetchPayment()),
    ]);
  }catch(error)
  {
    yield console.log(error);
  }
}

export function* checkTokenExists(action) {
  const token = action.token;
  try{
    if (token) {
      if(moment().isAfter(moment(token.expiresOn)))
        return yield call(logOut);
      return yield call(isLoggedIn);
    }

    yield call(logOut);
  }catch(error)
  {
    yield console.log(error);
  }

}

export function* logOut() {
  try{
    yield call(removeAuthToken);
    yield call(browserHistory.push, '/login');
  }catch(error){
    yield console.log(error);
  }
}

export function* fetchUser() {
  try {
    yield put(load());
    const res = yield call(api.GET, 'user/me');
    if(!res.error)
      yield put(actions.fetchUserSuccess(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield call(removeAuthToken);
    yield call(browserHistory.push, '/login');
    yield console.log(error);
  }
}

export function* updateUser(action) {
  try {
    yield put(load());
    const res = yield call(api.PUT, `user/${action.user.id}`, action.user);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.fetchUserSuccess(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield toast.error(error.message, toastConfig);
    yield console.log(error);
  }
}

export function* fetchRoles() {
  try {
    yield put(load());
    const res = yield call(api.GET, 'users-permissions/roles');
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.fetchRolesSuccess(res));
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield console.log(error);
  }
}

export function* forgotPassword(action) {
  try {
    yield put(load());
    const res = yield call(api.POST, 'auth/forgot-password', action.data);
    if(res.error)
      console.log(res.error);
    else {
      yield toast.error('Reset link sent.', toastConfig);
      yield browserHistory.push('/login');
    }

    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield console.log(error);
  }
}

export function* socialLogin(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, action.url);
    if(res.error) {
      if(res.message.length)
        yield toast.error(res.message[0].messages[0].id == 'Auth.form.error.email.taken'? 'Email address already taken': 'Email address already registered');
      else
        yield toast.error(res.message.message);
      yield setTimeout(function() {
        browserHistory.push('/login');
      }, 2000);
    } else {
      yield storeToken(res.jwt);
      yield browserHistory.push('/dashboard');
    }
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield browserHistory.push('/login');
    yield console.log(error);
  }
}

export function* verifyUser(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `auth/verify/${action.code}`);
    if(res.error) {
      if(res.message.length)
        yield toast.error(res.message[0].message);
      else
        yield toast.error(res.message.message);
      yield setTimeout(function() {
        browserHistory.push('/login');
      }, 2000);
    } else {
      yield storeToken(res.jwt);
      yield browserHistory.push('/getting-started');
    }
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield browserHistory.push('/login');
    yield console.log(error);
  }
}

export function* validateCoupon(action) {
  try {
    yield put(load());
    const res = yield call(api.GET, `coupon/validate/${action.coupon}`);
    if(res.error) {
      yield put(actions.couponError('Coupon not valid'));
    } else {
      yield put(actions.couponSuccess(res));
    }
    yield put(loaded());
  } catch (error) {
    yield put(loaded());
    yield console.log(error);
  }
}

export function* watchCheckToken() {
  yield takeLatest(actions.CHECK_TOKEN_EXISTS, checkTokenExists);
}

export function* watchFetchUser() {
  yield takeLatest(actions.FETCH, fetchUser);
}

export function* watchFetchRoles() {
  yield takeLatest(actions.FETCHROLES, fetchRoles);
}

export function* watchUpdateUser() {
  yield takeLatest(actions.UPDATE, updateUser);
}

export function* watchForgotPassword() {
  yield takeLatest(actions.FORGOT_PASSWORD, forgotPassword);
}

export function* watchSocialLogin() {
  yield takeLatest(actions.SOCIAL_LOGIN, socialLogin);
}

export function* watchVerifyUser() {
  yield takeLatest(actions.VERIFY_USER, verifyUser);
}

export function* watchValidateCoupon() {
  yield takeLatest(actions.VALIDATE_COUPON, validateCoupon);
}

export default function* rootSaga() {
  yield [
    fork(watchCheckToken),
    fork(watchFetchUser),
    fork(watchUpdateUser),
    fork(watchFetchRoles),
    fork(watchForgotPassword),
    fork(watchSocialLogin),
    fork(watchVerifyUser),
    fork(watchValidateCoupon)
  ];
}
