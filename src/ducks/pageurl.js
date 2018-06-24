import { fromJS, Map, List } from 'immutable';
const action = name => `/pageurl/${name}`;

export const FETCH = action('FETCH');
export const FETCH_ONE = action('FETCH_ONE');
export const CREATE = action('CREATE');
export const REMOVE = action('REMOVE');
export const UPDATE = action('UPDATE');
export const CREATE_SUCCESS = action('CREATE_SUCCESS');
export const FETCH_SUCCESS = action('FETCH_SUCCESS');
export const CLEAR_PAGE_URL = action('CLEAR_PAGE_URL');
export const POP_PAGE_URL = action('POP_PAGE_URL');

export const fetchPageUrl = (pageType, ruleId) => ({ type: FETCH, pageType, ruleId });
export const createPageUrl = (pageurl) => ({ type: CREATE, pageurl });
export const removePageUrl = (id, index) => ({ type: REMOVE, id, index });
export const updatePageUrl = (pageurl) => ({ type: UPDATE, pageurl });
export const successPageUrl = (pageurl) => ({ type: CREATE_SUCCESS, pageurl });
export const fetchSuccess = (pageurl) => ({ type: FETCH_SUCCESS, pageurl });
export const clearPageUrl = (pageurl) => ({ type: CLEAR_PAGE_URL, pageurl });
export const popPageUrl = (index) => ({ type: POP_PAGE_URL, index });

const initialPageUrl = {
  url:'',
  status: '',
  class: ''
};

const initialState = fromJS({
  pageurls: List([]),
  pageurl: initialPageUrl
});

const pageurl = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return state.set("pageurls", action.pageurl);
    case CREATE_SUCCESS:
      return state.set('pageurls', state.get('pageurls').concat(action.pageurl));
    case POP_PAGE_URL:
      return state.set("pageurls", state.get('pageurls').slice(0,action.index).concat(state.get('pageurls').slice(action.index+1)));
    case CLEAR_PAGE_URL:
      return state.set("pageurls", null);
    default:
      return state
  }
}

export default pageurl;
