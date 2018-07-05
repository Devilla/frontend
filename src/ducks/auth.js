import { fromJS, List } from 'immutable';

const action = name => `/auth/${name}`;

export const FETCH = action('FETCH');
export const FETCHROLES = action('FETCHROLES');
export const LOGIN_SUCCESS = action('LOGIN_SUCCESS');
export const CHECK_TOKEN_EXISTS = action('CHECK_TOKEN_EXISTS');
export const FETCH_USER_SUCCESS = action('FETCH_USER_SUCCESS');
export const FETCH_ROLES_SUCCESS = action('FETCH_ROLES_SUCCESS');
export const UPDATE_USER = action('UPDATE_USER');


export const GDPR_FORM = action('GDPR_FORM');
export const GDPR_FORM_ERROR = action('GDPR_FORM_ERROR');

export const FORGOT_PASSWORD = action('FORGOT_PASSWORD');
export const FORGOT_PASSWORD_ERROR = action('FORGOT_PASSWORD_ERROR');
export const CLEAR_FORGOT_PASSWORD_ERROR = action('CLEAR_FORGOT_PASSWORD_ERROR');
export const SOCIAL_LOGIN = action('SOCIAL_LOGIN');
export const VERIFY_USER = action('VERIFY_USER');
export const VALIDATE_COUPON = action('VALIDATE_COUPON');
export const COUPON_SUCCESS = action('COUPON_SUCCESS');
export const COUPON_ERROR = action('COUPON_ERROR');
export const CLEAR_COUPON_ERROR = action('CLEAR_COUPON_ERROR');

export const AFFILIATE = action('AFFILIATE');
export const AFFILIATE_ERROR = action('AFFILIATE_ERROR');
export const CLEAR_AFFILIATE_ERROR = action('CLEAR_AFFILIATE_ERROR');

export const CONTACT_US = action('CONTACT_US');
export const CONTACT_ERROR = action('CONTACT_ERROR');
export const CLEAR_CONTACT_ERROR = action('CLEAR_CONTACT_ERROR');

export const DEMO = action('DEMO');
export const DEMO_ERROR = action('AFFILIATE_ERROR');
export const CLEAR_DEMO_ERROR = action('CLEAR_AFFILIATE_ERROR');

export const fetchUser = () => ({ type: FETCH });
export const fetchRoles = () => ({ type: FETCHROLES });
export const fetchUserSuccess = (user) => ({ type: FETCH_USER_SUCCESS, user });
export const updateUser = (user) => ({ type: UPDATE_USER, user });
export const fetchRolesSuccess = (roles) => ({ type: FETCH_ROLES_SUCCESS, roles });

export const affiliate = (data) => ({ type: AFFILIATE, data});
export const affiliateError = (data) => ({ type: AFFILIATE_ERROR, data });
export const clearAffiliateError = () => ({ type: CLEAR_AFFILIATE_ERROR });

export const contactUs = (data) => ({ type: CONTACT_US, data});
export const contactError = (data) => ({ type: CONTACT_ERROR, data });
export const clearContactError = () => ({ type: CLEAR_CONTACT_ERROR });

export const demo = (data) => ({ type: DEMO, data});
export const demoError = (data) => ({ type: DEMO_ERROR, data });
export const clearDemoError = () => ({ type: CLEAR_DEMO_ERROR });

export const gdprform = (data) => ({ type: GDPR_FORM, data });
export const gdprformError = (error) => ({ type: GDPR_FORM_ERROR, error });

export const forgotPassword = (data) => ({ type: FORGOT_PASSWORD, data });
export const forgotPasswordError = (error) => ({ type: FORGOT_PASSWORD_ERROR, error });
export const clearForgotPasswordError = () => ({ type: CLEAR_FORGOT_PASSWORD_ERROR });
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
  couponError: '',
  forgetError: '',
  affiliateError: '',
  gdprformError:''
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
    case FORGOT_PASSWORD_ERROR:
      return state.set('forgetError', action.error);
    case CLEAR_FORGOT_PASSWORD_ERROR:
      return state.set('forgetError', '');
    case AFFILIATE_ERROR:
      return state.set('affiliateError', action.error);
    case CLEAR_AFFILIATE_ERROR:
      return state.set('affiliateError', '');
    case CONTACT_ERROR:
      return state.set('contactError', action.error);
    case CLEAR_CONTACT_ERROR:
      return state.set('contactError', '');
    case DEMO_ERROR:
      return state.set('demoError', action.error);
    case CLEAR_DEMO_ERROR:
      return state.set('demoError', '');
    case GDPR_FORM_ERROR:
      return state.set('gdprformError', '');

    default:
      return state;
  }
};

export default auth;
