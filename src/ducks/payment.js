import { fromJS, Map } from 'immutable';

const action = name => `/payment/${name}`;

export const FETCH = action('FETCH');
export const CREATE = action('CREATE');
export const UPDATE = action('UPDATE');
export const SUCCESS = action('SUCCESS');
export const FETCH_INVOICES = action('FETCH_INVOICES');
export const SUCCESS_INVOICE = action('SUCCESS_INVOICE');
export const UPDATE_PAYMENT_METHOD = action('UPDATE_PAYMENT_METHOD');

export const fetchPayment = () => ({ type: FETCH });
export const fetchInvoices = () => ({ type: FETCH_INVOICES });
export const createPayment = (payment) => ({ type: CREATE, payment });
export const updatePayment = (payment) => ({ type: UPDATE, payment });
export const updatePaymentMethod = (details) => ({ type: UPDATE_PAYMENT_METHOD, details });
export const successPayment = (payment) => ({ type: SUCCESS, payment });
export const successInvoice = (invoices) => ({ type: SUCCESS_INVOICE, invoices });

const initialState = fromJS({});

const payment = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return state.set("payments", action.payment);
    case SUCCESS_INVOICE:
      return state.set("invoices", action.invoices);
    default:
      return state
  }
}

export default payment;
