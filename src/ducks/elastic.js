import { fromJS, Map } from 'immutable';

const action = name => `/elastic/${name}`;

export const FETCH = action('FETCH');
export const FETCH_SUCCESS = action('FETCH_SUCCESS');
export const CLEAR_ELASTIC = action('CLEAR_ELASTIC');

export const fetchElastic = (query) => ({ type: FETCH, query });
export const fetchSuccess = (elastic) => ({ type: FETCH_SUCCESS, elastic });
export const clearElastic = () => ({ type: CLEAR_ELASTIC });

const initialState = fromJS({});

const elastic = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return state.set("elastic", action.elastic);
    case CLEAR_ELASTIC:
      return state.set("elastic", undefined);
    default:
      return state
  }
}

export default elastic;
