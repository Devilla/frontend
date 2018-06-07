import { fromJS, Map } from 'immutable';
const action = name => `/rules/${name}`;

export const FETCH = action('FETCH');
export const FETCH_ONE = action('FETCH_ONE');
export const CREATE = action('CREATE');
export const UPDATE = action('UPDATE');
export const CREATE_SUCCESS = action('CREATE_SUCCESS');
export const FETCH_SUCCESS = action('FETCH_SUCCESS');
export const CLEAR_RULES = action('CLEAR_RULES');

export const fetchRules = () => ({ type: FETCH,  });
export const fetchOneRules = (campId) => ({ type: FETCH_ONE, campId });
export const createRules = (rules) => ({ type: CREATE, rules });
export const updateRules = (rules) => ({ type: UPDATE, rules });
export const successRules = (rules) => ({ type: CREATE_SUCCESS, rules });
export const fetchSuccess = (rules) => ({ type: FETCH_SUCCESS, rules });
export const clearRules = (rules) => ({ type: CLEAR_RULES, rules });

const initialRules = {
  hideNotification: false,
  loopNotification: false,
  delayNotification: false,
  closeNotification: false,
  // hideAnonymous:true,
  // displayNotifications: false,
  initialDelay: 1,
  // bulkData:5,
  // shouldhide:false,
  // recentNumber:5,
  // recentConv:5,
  // convChange:false,
  displayTime: 3,
  delayBetween: 3,
  displayPosition: 'bottom',
  popupAnimation:'fadeinout'
  // hideAnonymousConversion:false
};

const initialState = fromJS({
  rules: [initialRules],
  rule: initialState
});

const rules = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return state.set("rules", action.rules);
    case CREATE_SUCCESS:
      return state.set("rule", action.rules);
    case CLEAR_RULES:
      return state.set("rule", null);
    default:
      return state
  }
}

export default rules;
