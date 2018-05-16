import { fromJS, Map, List } from 'immutable';
const action = name => `/leads/${name}`;

export const FETCH = action('FETCH');
export const FETCH_ONE = action('FETCH_ONE');
export const CREATE = action('CREATE');
export const UPDATE = action('UPDATE');
export const CREATE_SUCCESS = action('CREATE_SUCCESS');
export const FETCH_SUCCESS = action('FETCH_SUCCESS');
export const CLEAR_LEADS = action('CLEAR_LEADS');
export const PUSH_LEADS = action('PUSH_LEADS');

export const fetchLeads = (ruleId) => ({ type: FETCH, ruleId });
export const createLeads = (leads) => ({ type: CREATE, leads });
export const updateLeads = (leads) => ({ type: UPDATE, leads });
export const successLeads = (leads) => ({ type: CREATE_SUCCESS, leads });
export const fetchSuccess = (leads) => ({ type: FETCH_SUCCESS, leads });
export const clearLeads = (leads) => ({ type: CLEAR_LEADS, leads });
export const pushLeads = (leads) => ({ type: PUSH_LEADS, leads });

const initialLeads = {
  url:'',
  status: '',
  class: ''
};

const initialState = fromJS({
  leads: List([]),
  lead: initialState
});

const leads = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return state.set("leads", action.leads);
    case CREATE_SUCCESS:
      return state.set('leads', state.get('leads').concat(action.leads));
    case PUSH_LEADS:
      return state.set("lead", null);
    case CLEAR_LEADS:
      return state.set("lead", null);
    default:
      return state
  }
}

export default leads;
