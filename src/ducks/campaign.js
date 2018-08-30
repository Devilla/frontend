import { fromJS } from 'immutable';

const action = name => `/campaign/${name}`;

export const FETCH = action('FETCH');
export const CREATE = action('CREATE');
export const UPDATE = action('UPDATE');
export const REMOVE = action('REMOVE');
export const SUCCESS = action('SUCCESS');
export const FETCH_SUCCESS = action('FETCH_SUCCESS');
export const POP_CAMPAIGN = action('POP_CAMPAIGN');
export const CLEAR_CAMPAIGN = action('CLEAR_CAMPAIGN');
export const FETCH_CAMPAIGN_INFO = action('FETCH_CAMPAIGN_INFO');
export const FETCH_DASHBOARD_SUCCESS = action('FETCH_DASHBOARD_SUCCESS');
export const ADD_SUB_DOMAIN = action('ADD_SUB_DOMAIN');
export const FETCH_SUB_DOMAIN = action('FETCH_SUB_DOMAIN');
export const SUB_DOMAIN_SUCCESS = action('SUB_DOMAIN_SUCCESS');
export const CLEAR_SUB_DOMAIN = action('CLEAR_SUB_DOMAIN');
export const REMOVE_SUB_DOMAIN = action('REMOVE_SUB_DOMAIN');
export const POP_SUB_DOMAIN = action('POP_SUB_DOMAIN');
export const SUCCESS_UPDATE = action('SUCCESS_UPDATE');

export const fetchCampaign = () => ({ type: FETCH });
export const createCampaign = (campaign, pages) => ({ type: CREATE, campaign, pages });
export const updateCampaign = (campaign, index) => ({ type: UPDATE, campaign, index });
export const removeCampaign = (index, campaignId) => ({ type: REMOVE, index, campaignId });
export const popCampaign = (index) => ({ type: POP_CAMPAIGN, index });
export const successCampaign = (campaign) => ({ type: SUCCESS, campaign });
export const fetchSuccess = (campaign) => ({ type: FETCH_SUCCESS, campaign });
export const clearCampaign = () => ({ type: CLEAR_CAMPAIGN });
export const fetchCampaignInfo = () => ({ type: FETCH_CAMPAIGN_INFO });
export const fetchDashboardSuccess = (campaign) => ({ type: FETCH_DASHBOARD_SUCCESS, campaign });
export const addSubdomain = (domain) => ({ type: ADD_SUB_DOMAIN, domain });
export const fetchSubdomain = (campaignId) => ({ type: FETCH_SUB_DOMAIN, campaignId });
export const subDomainSuccess = (domain) => ({ type: SUB_DOMAIN_SUCCESS, domain });
export const clearSubDomain = () => ({ type: CLEAR_SUB_DOMAIN });
export const removeSubDomain = (id, index) => ({ type: REMOVE_SUB_DOMAIN, id, index });
export const popSubDomain = (index) => ({ type: POP_SUB_DOMAIN, index });
export const successUpdate = (campaign, index) => ({ type: SUCCESS_UPDATE, campaign, index });

const initialState = fromJS({});
let campaigns;
const campaign = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return state.set('campaigns', action.campaign);
    case SUCCESS:
      return state.set('campaign', action.campaign);
    case SUCCESS_UPDATE:
      campaigns = state.get('campaigns');
      delete campaigns[action.index];
      campaigns[action.index] = action.campaign;
      return state.set('campaigns', JSON.parse(JSON.stringify(campaigns)));
    case CLEAR_CAMPAIGN:
      return state.set('campaign', {});
    case POP_CAMPAIGN:
      return state.set('campaigns', state.get('campaigns').slice(0, action.index).concat(state.get('campaigns').slice(action.index+1)));
    case FETCH_DASHBOARD_SUCCESS:
      return state.set('campaignInfo', action.campaign);
    case SUB_DOMAIN_SUCCESS:
      return state.set('subdomain', action.domain);
    case POP_SUB_DOMAIN:
      return state.set('subdomain', state.get('subdomain').slice(0, action.index).concat(state.get('subdomain').slice(action.index+1)));
    case CLEAR_SUB_DOMAIN:
      return state.set('subdomain', '');
    default:
      return state;
  }
};

export default campaign;
