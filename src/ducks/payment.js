import { fromJS } from 'immutable';

const action = name => `/payment/${name}`;

export const FETCH = action('FETCH');
export const CREATE = action('CREATE');
export const UPDATE = action('UPDATE');
export const SUCCESS = action('SUCCESS');
export const FETCH_INVOICES = action('FETCH_INVOICES');
export const DOWNLOAD_INVOICE = action('DOWNLOAD_INVOICE');
export const SUCCESS_INVOICE = action('SUCCESS_INVOICE');
export const UPDATE_PAYMENT_METHOD = action('UPDATE_PAYMENT_METHOD');
export const FETCH_CARDS = action('FETCH_CARDS');
export const FETCH_CARDS_SUCCESS = action('FETCH_CARDS_SUCCESS');
export const CREATE_AGREEMENT = action('CREATE_AGREEMENT');
export const CREATE_PAYPAL_PAYMENT = action('CREATE_PAYPAL_PAYMENT');

export const fetchPayment = () => ({ type: FETCH });
export const fetchInvoices = () => ({ type: FETCH_INVOICES });
export const createPayment = (payment, profile, update) => ({ type: CREATE, payment, profile, update });
export const updatePayment = (payment) => ({ type: UPDATE, payment });
export const updatePaymentMethod = (details) => ({ type: UPDATE_PAYMENT_METHOD, details });
export const downloadInvoice = (invoice_id) => ({ type: DOWNLOAD_INVOICE, invoice_id });
export const successPayment = (payment) => ({ type: SUCCESS, payment });
export const successInvoice = (invoices) => ({ type: SUCCESS_INVOICE, invoices });
export const fetchCards = () => ({ type: FETCH_CARDS });
export const fetchCardsSuccess = (cards) => ({ type: FETCH_CARDS_SUCCESS, cards });
export const createAgreement = (details) => ({ type: CREATE_AGREEMENT, details });
export const createPaypalPayment = (token) => ({ type: CREATE_PAYPAL_PAYMENT, token });

const initialState = fromJS({});

const payment = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return state.set('payments', action.payment);
    case SUCCESS_INVOICE:
      return state.set('invoices', action.invoices);
    case FETCH_CARDS_SUCCESS:
      return state.set('cards', action.cards);
    default:
      return state;
  }
};

export default payment;
