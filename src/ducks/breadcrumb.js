import { Map } from 'immutable';

const action = name => `/breadcrums/${name}`;
const SET_BREAD_CRUMBS = action('SET_BREAD_CRUMBS');

export const setBreadCrumbs = (component) => ({ type: SET_BREAD_CRUMBS, component });

const initialState = Map({
  breadcrumb: [{
    name: 'Home',
    path: '/dashboard'
  }],
});

const breadcrumb = (state = initialState, action) => {
  switch (action.type) {
    case SET_BREAD_CRUMBS:
      return state.set('breadcrumb', action.component);

    default:
      return state;
  }
};

export default breadcrumb;
