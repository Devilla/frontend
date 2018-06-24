import { fromJS } from 'immutable';

const action = name => `/contact/${name}`;

export const FETCH = action('FETCH');
export const CREATE = action('CREATE');
export const UPDATE = action('UPDATE');
export const REMOVE = action('REMOVE');
export const SUCCESS = action('SUCCESS');
export const FETCH_SUCCESS = action('FETCH_SUCCESS');

export const fetchcontact = () => ({ type: FETCH });

const initialState = fromJS({});

const contact = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return state.set('contact', action.contact);
    case SUCCESS:
      console.log(action.contact);
      return state.set('contact', action.contact);
    default:
      return state;
  }
};

export default contact;
