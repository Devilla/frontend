import { fromJS } from 'immutable';

const action = name => `/auth/${name}`;

export const FETCH = action('FETCH');
export const CREATE = action('CREATE');
export const UPDATE_PROFILE = action('UPDATE_PROFILE');
export const SUCCESS = action('SUCCESS');
export const SUBMIT_ACCOUNT_REQUEST = action('SUBMIT_ACCOUNT_REQUEST');
export const SUBMIT_ACCOUNT_OTP = action('SUBMIT_ACCOUNT_OTP');
export const SUCCESS_ACCOUNT_OTP_REQUEST = action('SUCCESS_ACCOUNT_OTP_REQUEST');
export const CLEAR_RESPONSE = action('CLEAR_RESPONSE');

export const fetchProfile = () => ({ type: FETCH });
export const createProfile = profile => ({ type: CREATE, profile });
export const updateProfile = profile => ({ type: UPDATE_PROFILE, profile });
export const successProfile = profile => ({ type: SUCCESS, profile });
export const submitAccountRequest = requestType => ({ type: SUBMIT_ACCOUNT_REQUEST, requestType });
export const submitAccountOtp = code => ({ type: SUBMIT_ACCOUNT_OTP, code });
export const successAccountOtpRequest = code => ({ type: SUCCESS_ACCOUNT_OTP_REQUEST, code });
export const clearResponse = () => ({ type: CLEAR_RESPONSE });

const initialState = fromJS({});

const profile = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return state.set('profile', action.profile);
    case SUCCESS_ACCOUNT_OTP_REQUEST:
      return state.set('otp_response', action.code);
    case CLEAR_RESPONSE:
      return state.set('otp_response', '');
    default:
      return state;
  }
};

export default profile;
