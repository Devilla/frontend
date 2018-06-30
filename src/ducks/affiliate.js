import { fromJS } from 'immutable';

const action = name => `/affiliate/${name}`;

export const FETCH = action('FETCH');
export const CREATE = action('CREATE');
export const UPDATE = action('UPDATE');
export const REMOVE = action('REMOVE');
export const SUCCESS = action('SUCCESS');
export const FETCH_SUCCESS = action('FETCH_SUCCESS');

export const fetchaffiliate = () => ({ type: FETCH });

const initialState = fromJS({});

const affiliate = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return state.set('contact', action.affiliate);
    case SUCCESS:
      console.log(action.contact);
      return state.set('contact', action.affiliate);
    default:
      return state;
  }
};

export default affiliate;
