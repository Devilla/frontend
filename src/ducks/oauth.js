import { fromJS } from 'immutable';

const action = name => `/oauth/${name}`;

export const FETCH_CLIENT_OAUTH = action('FETCH_CLIENT_OAUTH');
export const CREATE_CLIENT_OAUTH = action('CREATE_CLIENT_OAUTH');
export const UPDATE_CLIENT_OAUTH = action('UPDATE_CLIENT_OAUTH');
export const DELETE_CLIENT_OAUTH = action('DELETE_CLIENT_OAUTH');
export const SUCCESS_CLIENT_OAUTH = action('SUCCESS_CLIENT_OAUTH');
export const CREATE_CLIENT_OAUTH_SUCCESS = action('CREATE_CLIENT_OAUTH_SUCCESS');
export const POP_CLIENT_OAUTH = action('POP_CLIENT_OAUTH');

export const fetchClientOauth = () => ({ type: FETCH_CLIENT_OAUTH });
export const createClientOauth = () => ({ type: CREATE_CLIENT_OAUTH });
export const updateClientOauth = (oauth) => ({ type: UPDATE_CLIENT_OAUTH, oauth });
export const deleteClientOauth = (id, index) => ({ type: DELETE_CLIENT_OAUTH, id, index });
export const successClientOauth = (oauth) => ({ type: SUCCESS_CLIENT_OAUTH, oauth });
export const createClientOauthSuccess = (oauth) => ({ type: CREATE_CLIENT_OAUTH_SUCCESS, oauth });
export const popClientOauth = (index) => ({ type: POP_CLIENT_OAUTH, index });

const initialState = fromJS({
  oauths: [],
  oauth: {}
});

const oauth = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CLIENT_OAUTH_SUCCESS:
      return state.set('oauths', action.oauth);
    case SUCCESS_CLIENT_OAUTH:
      return state.set('oauth', action.oauth);
    case POP_CLIENT_OAUTH:
      return state.set('oauths', state.get('oauths').slice(0, action.index).concat(state.get('oauths').slice(action.index+1)));
    default:
      return state;
  }
};

export default oauth;
