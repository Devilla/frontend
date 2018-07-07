import { fromJS, Map } from 'immutable';
const action = name => `/webhooks/${name}`;

export const FETCH_WEBHOOK = action('FETCH_WEBHOOK');
export const FETCH_WEBHOOK_ONE = action('FETCH_WEBHOOK_ONE');
export const CREATE_WEBHOOK = action('CREATE_WEBHOOK');
export const UPDATE_WEBHOOK = action('UPDATE_WEBHOOK');
export const DELETE_WEBHOOK = action('DELETE_WEBHOOK');
export const CREATE_WEBHOOK_SUCCESS = action('CREATE_WEBHOOK_SUCCESS');
export const FETCH_WEBHOOK_SUCCESS = action('FETCH_WEBHOOK_SUCCESS');
export const CLEAR_WEBHOOK = action('CLEAR_WEBHOOK');

export const fetchWebhook = (campId) => ({ type: FETCH_WEBHOOK, campId });
export const fetchOneWebhook = (webhook) => ({ type: FETCH_WEBHOOK_ONE, webhook });
export const createWebhook = (webhooks) => ({ type: CREATE_WEBHOOK, webhooks });
export const updateWebhook = (webhooks) => ({ type: UPDATE_WEBHOOK, webhooks });
export const deleteWebhook = (webhooks) => ({ type: DELETE_WEBHOOK, webhooks });
export const successWebhook = (webhooks) => ({ type: CREATE_WEBHOOK_SUCCESS, webhooks });
export const fetchWebhookSuccess = (webhooks) => ({ type: FETCH_WEBHOOK_SUCCESS, webhooks });
export const clearWebhook = (webhooks) => ({ type: CLEAR_WEBHOOK, webhooks });

const initialState = fromJS({
  webhooks: Map({})
});

const webhooks = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEBHOOK_SUCCESS:
      return state.set('webhooks', action.webhooks);
    case CREATE_WEBHOOK_SUCCESS:
      return state.set('webhook', action.webhooks);
    case CLEAR_WEBHOOK:
      return state.set('webhook', null);
    default:
      return state;
  }
};

export default webhooks;
