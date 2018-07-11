import { fromJS } from 'immutable';

const action = name => `/configuration/${name}`;

export const REVIEW = action('REVIEW');
export const FETCH = action('FETCH');
export const FETCH_CAMPAIGN_CONFIG = action('FETCH_CAMPAIGN_CONFIG');
export const CREATE = action('CREATE');
export const UPDATE = action('UPDATE');
export const SUCCESS = action('SUCCESS');
export const CREATE_SUCCESS = action('CREATE_SUCCESS');
export const CLEAR = action('CLEAR');

export const review = (data) => ({ type: REVIEW, data });
export const fetchConfiguration = (campId) => ({ type: FETCH, campId });
export const fetchCampaignConfiguration = (campId , notifId) => ({ type: FETCH_CAMPAIGN_CONFIG, campId, notifId });
export const createConfiguration = (configuration) => ({ type: CREATE, configuration });
export const updateConfiguration = (configuration) => ({ type: UPDATE, configuration });
export const successConfiguration = (configuration) => ({ type: SUCCESS, configuration });
export const createSuccess = (configuration) => ({ type: CREATE_SUCCESS, configuration });
export const clearConfiguration = () => ({ type: CLEAR });

const initialConfig = {
  activity: false,
  panelStyle: { // TODO: Take style values from server
    radius: 50,
    borderWidth: 0,
    borderColor: {
      r: 200,
      g: 200,
      b: 200,
      a: 0.80
    },
    shadow: {
      r: 0,
      g: 0,
      b: 0,
      color: 'lightgrey'
    },
    blur: 0,
    color: {
      r: 0,
      g: 149,
      b: 247,
      a: 1
    },
    linkColor: {
      r: 0,
      g: 137,
      b: 216,
      a: 1
    },
    backgroundColor: {
      r: 255,
      g: 255,
      b: 255,
      a: 1
    },
    fontFamily: 'inherit',
    fontWeight: 'normal',
    linkFontFamily: 'inherit',
    linkFontWeight: 'normal',
    selectDurationData: 'hours',
    selectLastDisplayConversation: 'hours',
    bulkData: 5,
    recentNumber: 5,
    recentConv: 5,
    hideAnonymousConversion: true,
    onlyDisplayNotification: false,
    liveVisitorCount: 0
  },
  visitorText: '',
  contentText: '',
  notificationUrl: '',

  // Oauth variables
  clientId: '',
  clientSecret: '',
  clientname: '',
  errorname: '',
  authorizedOrigin: '',
  redirectURI: '',
  errorName: '',
  errorURI: '',
  errorAuthorizedOrigin: ''
};

const initialState = fromJS({
  configuration: initialConfig
});

const configuration = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return state.set('configurations', action.configuration);
    case CREATE_SUCCESS:
      return state.set('configuration', action.configuration);
    case CLEAR:
      return state.set('configuration', initialConfig);

    default:
      return state;
  }
};

export default configuration;
