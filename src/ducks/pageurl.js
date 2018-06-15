import { fromJS, Map, List } from 'immutable';
const action = name => `/pageurl/${name}`;

export const FETCH_DISPLAY = action('FETCH_DISPLAY');
export const FETCH_LEAD = action('FETCH_LEAD');
export const FETCH_ONE = action('FETCH_ONE');
export const CREATE = action('CREATE');
export const REMOVE = action('REMOVE');
export const UPDATE = action('UPDATE');
export const CREATE_SUCCESS = action('CREATE_SUCCESS');
export const FETCH_SUCCESS = action('FETCH_SUCCESS');
export const CLEAR_PAGE_URL = action('CLEAR_PAGE_URL');
export const POP_PAGE_URL = action('POP_PAGE_URL');

export const fetchDisplayUrl = (pageType, ruleId) => ({ type: FETCH_DISPLAY, pageType, ruleId });
export const fetchLeadUrl = (pageType, ruleId) => ({ type: FETCH_LEAD, pageType, ruleId });
export const createPageUrl = (pageurl) => ({ type: CREATE, pageurl });
export const removePageUrl = (id, index, urlType) => ({ type: REMOVE, id, index, urlType });
export const updatePageUrl = (pageurl, urlType) => ({ type: UPDATE, pageurl, urlType });
export const successPageUrl = (pageurl, urlType) => ({ type: CREATE_SUCCESS, pageurl, urlType });
export const fetchSuccess = (pageurl, urlType) => ({ type: FETCH_SUCCESS, pageurl, urlType });
export const clearPageUrl = (pageurl, urlType) => ({ type: CLEAR_PAGE_URL, pageurl, urlType });
export const popPageUrl = (index, urlType) => ({ type: POP_PAGE_URL, index, urlType });

const initialPageUrl = {
  url:'',
  status: '',
  class: ''
};

const initialState = fromJS({
  pageurls: List([]),
  lead: List([]),
  display: List([]),
  pageurl: initialPageUrl
});

const pageurl = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return state.set(action.urlType, action.pageurl);
    case CREATE_SUCCESS:
      return state.set(action.urlType, state.get(action.urlType).concat(action.pageurl));
    case POP_PAGE_URL:
      return state.set(action.urlType, state.get(action.urlType).slice(0,action.index).concat(state.get(action.urlType).slice(action.index+1)));
    case CLEAR_PAGE_URL:
      return state.set(action.urlType, null);
    default:
      return state
  }
}

export default pageurl;
