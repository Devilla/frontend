import { fromJS, Map, List } from 'immutable';
const action = name => `/leads/${name}`;

export const FETCH = action('FETCH');
export const FETCH_ONE = action('FETCH_ONE');
export const CREATE = action('CREATE');
export const REMOVE = action('REMOVE');
export const UPDATE = action('UPDATE');
export const CREATE_SUCCESS = action('CREATE_SUCCESS');
export const FETCH_SUCCESS = action('FETCH_SUCCESS');
export const CLEAR_LEADS = action('CLEAR_LEADS');
export const POP_LEAD = action('POP_LEAD');

export const fetchLeads = (type, ruleId) => ({ type: FETCH, type, ruleId });
export const createLeads = (leads) => ({ type: CREATE, leads });
export const removeLead = (id, index) => ({ type: REMOVE, id, index });
export const updateLeads = (leads) => ({ type: UPDATE, leads });
export const successLeads = (leads) => ({ type: CREATE_SUCCESS, leads });
export const fetchSuccess = (leads) => ({ type: FETCH_SUCCESS, leads });
export const clearLeads = (leads) => ({ type: CLEAR_LEADS, leads });
export const popLead = (index) => ({ type: POP_LEAD, index });

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
    case POP_LEAD:
      return state.set("leads", state.get('leads').slice(0,action.index).concat(state.get('leads').slice(action.index+1)));
    case CLEAR_LEADS:
      return state.set("lead", null);
    default:
      return state
  }
}

export default leads;
