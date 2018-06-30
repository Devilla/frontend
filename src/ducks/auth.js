import { fromJS, Map, List } from 'immutable';

const action = name => `/auth/${name}`;

export const FETCH = action('FETCH');
export const FETCHROLES = action('FETCHROLES');
export const LOGIN_SUCCESS = action('LOGIN_SUCCESS');
export const CHECK_TOKEN_EXISTS = action('CHECK_TOKEN_EXISTS');
export const FETCH_USER_SUCCESS = action('FETCH_USER_SUCCESS');
export const FETCH_ROLES_SUCCESS = action('FETCH_ROLES_SUCCESS');
export const UPDATE = action('UPDATE');

export const AFFILIATE_SUCCESS = action('AFFILIATE_SUCCESS');

export const FORGOT_PASSWORD = action('FORGOT_PASSWORD');
export const SOCIAL_LOGIN = action('SOCIAL_LOGIN');
export const VERIFY_USER = action('VERIFY_USER');
export const VALIDATE_COUPON = action('VALIDATE_COUPON');
export const COUPON_SUCCESS = action('COUPON_SUCCESS');
export const COUPON_ERROR = action('COUPON_ERROR');
export const CLEAR_COUPON_ERROR = action('CLEAR_COUPON_ERROR');

export const fetchUser = () => ({ type: FETCH });
export const fetchRoles = () => ({ type: FETCHROLES });
export const fetchUserSuccess = (user) => ({ type: FETCH_USER_SUCCESS, user });
export const updateUser = (user) => ({ type: UPDATE, user });
export const fetchRolesSuccess = (roles) => ({ type: FETCH_ROLES_SUCCESS, roles });

export const affiliateSuccess = (data) => ({ type: AFFILIATE_SUCCESS, data });

export const forgotPassword = (data) => ({ type: FORGOT_PASSWORD, data });
export const socialLogin = (url) => ({ type: SOCIAL_LOGIN, url });
export const verifyUser = (code) => ({ type: VERIFY_USER, code });
export const validateCoupon = (coupon) => ({ type: VALIDATE_COUPON, coupon });
export const couponSuccess = (coupon) => ({ type: COUPON_SUCCESS, coupon });
export const couponError = (error) => ({ type: COUPON_ERROR, error });
export const clearCouponError = () => ({ type: CLEAR_COUPON_ERROR });

export const loginSuccess = (res) => ({ type: LOGIN_SUCCESS, res });
export const checkTokenExists = (token) => ({ type: CHECK_TOKEN_EXISTS, token });

const initialState = fromJS({
  user: {},
  roles: List([]),
  coupon: '',
  couponError: ''
});

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('user', action.res.user);
    case FETCH_USER_SUCCESS:
      return state.set('user', action.user);
    case FETCH_ROLES_SUCCESS:
      return state.set('roles', action.roles.roles);
    case COUPON_SUCCESS:
      return state.set('coupon', action.coupon).set('couponError', '');
    case COUPON_ERROR:
      return state.set('couponError', action.error);
    case CLEAR_COUPON_ERROR:
      return state.set('coupon', '').set('couponError', '');
    default:
      return state
  }
}

export default auth;
