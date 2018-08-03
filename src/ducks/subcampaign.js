import { fromJS, Map, List } from 'immutable';
const action = name => `/subcampaigns/${name}`;

export const FETCH_SUB_CAMPAIGN = action('FETCH_SUB_CAMPAIGN');
export const FETCH_SUB_CAMPAIGN_ONE = action('FETCH_SUB_CAMPAIGN_ONE');
export const CREATE_SUB_CAMPAIGN = action('CREATE_SUB_CAMPAIGN');
export const UPDATE_SUB_CAMPAIGN = action('UPDATE_SUB_CAMPAIGN');
export const DELETE_SUB_CAMPAIGN = action('DELETE_SUB_CAMPAIGN');
export const CREATE_SUB_CAMPAIGN_SUCCESS = action('CREATE_SUB_CAMPAIGN_SUCCESS');
export const FETCH_SUB_CAMPAIGN_SUCCESS = action('FETCH_SUB_CAMPAIGN_SUCCESS');
export const CLEAR_SUB_CAMPAIGN = action('CLEAR_SUB_CAMPAIGN');

export const fetchSubCampaign = (subCampId) => ({ type: FETCH_SUB_CAMPAIGN, subCampId });
export const fetchOneSubCampaign = (subcampaign) => ({ type: FETCH_SUB_CAMPAIGN_ONE, subcampaign });
export const createSubCampaign = (subcampaign) => ({ type: CREATE_SUB_CAMPAIGN, subcampaign });
export const updateSubCampaign = (subcampaign) => ({ type: UPDATE_SUB_CAMPAIGN, subcampaign });
export const deleteSubCampaign = (id) => ({ type: DELETE_SUB_CAMPAIGN, id });
export const successSubCampaign = (subcampaign) => ({ type: CREATE_SUB_CAMPAIGN_SUCCESS, subcampaign });
export const fetchSubCampaignSuccess = (subcampaign) => ({ type: FETCH_SUB_CAMPAIGN_SUCCESS, subcampaign });
export const clearSubCampaign = (subcampaign) => ({ type: CLEAR_SUB_CAMPAIGN, subcampaign });

const initialState = fromJS({
  subcampaigns: List([]),
  subcampaign: Map({})
});

const subcampaigns = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUB_CAMPAIGN_SUCCESS:
      return state.set('subcampaigns', action.subcampaign);
    case CREATE_SUB_CAMPAIGN_SUCCESS:
      return state.set('subcampaign', action.subcampaign);
    case CLEAR_SUB_CAMPAIGN:
      return state.set('subcampaign', null);
    default:
      return state;
  }
};

export default subcampaigns;
