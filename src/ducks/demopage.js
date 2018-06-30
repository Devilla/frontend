import { fromJS } from 'immutable';

const action = name => `/demo/${name}`;

export const FETCH = action('FETCH');
export const CREATE = action('CREATE');
export const UPDATE = action('UPDATE');
export const REMOVE = action('REMOVE');
export const SUCCESS = action('SUCCESS');
export const FETCH_SUCCESS = action('FETCH_SUCCESS');

export const fetchdemo = () => ({ type: FETCH });

const initialState = fromJS({});

const demo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return state.set('contact', action.demo);
    case SUCCESS:
      console.log(action.contact);
      return state.set('contact', action.demo);
    default:
      return state;
  }
};
export default demo;
