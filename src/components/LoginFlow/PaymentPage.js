import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { toast } from 'react-toastify';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000
};

const PaymentPage = ({
  stripe,
  user,
  plan,
  handleStateChange,
  handleSubmit
}) => {

  const submitForm = (event) => {
    event.preventDefault();
    if(!user.username) {
      return toast.error("Enter user name", toastConfig);
    }

    if(!plan)
      return toast.error("Select a plan", toastConfig);

    const options = {
      name: user.username,
    };

    stripe.createToken(options).then((result) => {
      if (result.error) {
        handleStateChange(result.error.message, 'stripeError');
      } else {
        const data = {
          amount: plan.amount,
          paymentProvider: result.token,
          paymentType: result.token.type,
          user: user._id,
          plan: plan,
        };
        handleSubmit(data, result.token);
      }
    });
  }

  const style = {base: {
    fontSize: '14px',
    fontFamily: 'Raleway, sans-serif',
    lineHeight: '1.42857143',
    fontWeight: '100',
    color: 'black',
    '::placeholder': {
      color: '#999999'
    }
  }}

  return (
    <div className="credit-form">
      <form onSubmit={(e) => submitForm(e)}>
        <CardElement
          style={style}
        />
        <div className="frmcntl">
          <input className="btn btn-primary auth-payment-button"
            type="submit"
            value="Next"
          />
        </div>
      </form>
    </div>
  )
}

export default injectStripe(PaymentPage);
