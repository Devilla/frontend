import { fromJS } from 'immutable';

const action = name => `/auth/${name}`;

export const FETCH = action('FETCH');
export const CREATE = action('CREATE');
export const UPDATE_PROFILE = action('UPDATE_PROFILE');
export const SUCCESS = action('SUCCESS');
export const SUBMIT_ACCOUNT_REQUEST = action('SUBMIT_ACCOUNT_REQUEST');
export const SUBMIT_ACCOUNT_OTP = action('SUBMIT_ACCOUNT_OTP');

export const fetchProfile = () => ({ type: FETCH });
export const createProfile = profile => ({ type: CREATE, profile });
export const updateProfile = profile => ({ type: UPDATE_PROFILE, profile });
export const successProfile = profile => ({ type: SUCCESS, profile });
export const submitAccountRequest = requestType => ({ type: SUBMIT_ACCOUNT_REQUEST, requestType });
export const submitAccountOtp = code => ({ type: SUBMIT_ACCOUNT_OTP, code });

const initialState = fromJS({});

const profile = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return state.set('profile', action.profile);
    default:
      return state;
  }
};

export default profile;
