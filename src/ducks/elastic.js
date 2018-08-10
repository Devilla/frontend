import { fromJS} from 'immutable';

const action = name => `/elastic/${name}`;

export const FETCH = action('FETCH');
export const FETCH_SUCCESS = action('FETCH_SUCCESS');
export const CLEAR_ELASTIC = action('CLEAR_ELASTIC');
export const COUNTRY_VISITORS = action('COUNTRY_VISITORS');
export const MAP_GRAPH = action('MAP_GRAPH');
export const MAP_SUCCESS = action('MAP_SUCCESS');

export const countryVisitors = () => ({ type: COUNTRY_VISITORS });
export const fetchElastic = (query) => ({ type: FETCH, query });
export const fetchSuccess = (elastic) => ({ type: FETCH_SUCCESS, elastic });
export const clearElastic = () => ({ type: CLEAR_ELASTIC });
export const mapGraph = (trackingIds) => ({ type: MAP_GRAPH, trackingIds });
export const mapSuccess = (mapData) => ({ type: MAP_SUCCESS, mapData });

const initialState = fromJS({});

const elastic = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return state.set('elastic', action.elastic);
    case CLEAR_ELASTIC:
      return state.set('elastic', undefined);
    case MAP_SUCCESS:
      return state.set('map', action.mapData);
    default:
      return state;
  }
};

export default elastic;
