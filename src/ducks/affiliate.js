import { fromJS } from 'immutable';

const action = name => `/affiliate/${name}`;

export const FETCH_AFFILIATE = action('FETCH_AFFILIATE');
export const CREATE_AFFILIATE = action('CREATE_AFFILIATE');
export const UPDATE_AFFILIATE = action('UPDATE_AFFILIATE');
export const SUCCESS_AFFILIATE = action('SUCCESS_AFFILIATE');
export const CREATE_AFFILIATE_SUCCESS = action('CREATE_AFFILIATE_SUCCESS');
export const AFFILIATE_WITHDRAW = action('AFFILIATE_WITHDRAW');

export const fetchAffiliate = () => ({ type: FETCH_AFFILIATE });
export const createAffiliate = () => ({ type: CREATE_AFFILIATE });
export const updateAffiliate = (client) => ({ type: UPDATE_AFFILIATE, client });
export const successAffiliate = (affiliate) => ({ type: SUCCESS_AFFILIATE, affiliate });
export const createAffiliateSuccess = (affiliate) => ({ type: CREATE_AFFILIATE_SUCCESS, affiliate });
export const affiliateWithdraw = (email) => ({ type: AFFILIATE_WITHDRAW, email });

const initialState = fromJS({
  affiliates: [],
  affiliate: {}
});

const affiliate = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_AFFILIATE_SUCCESS:
      return state.set('affiliates', action.affiliate);
    case SUCCESS_AFFILIATE:
      return state.set('affiliate', action.affiliate);
    default:
      return state;
  }
};

export default affiliate;
