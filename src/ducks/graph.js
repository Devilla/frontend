import { fromJS} from 'immutable';

const action = name => `/graph/${name}`;

export const COUNTRY_VISITORS = action('COUNTRY_VISITORS');

export const countryVisitors = () => ({ type: COUNTRY_VISITORS });

const initialState = fromJS({});

const graph = (state = initialState) => {

  return state;
};

export default graph;
