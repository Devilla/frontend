import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { HelpBlock } from 'react-bootstrap';
import './Common.scss';

const PaymentPage = ({
  stripe,
  user,
  plan,
  error,
  handleErrorChange,
  handleSubmit
}) => {

  const submitForm = (event) => {
    event.preventDefault();
    if(!user.username)
      return handleErrorChange('Enter user name', 'nameError');

    if(!plan)
      return handleErrorChange('Select a plan', 'cardError');

    const options = {
      name: user.username
    };

    stripe.createToken(options).then((result) => {
      if (result.error) {
        handleErrorChange(result.error.message, 'cardError');
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
  };

  const style = {base: {
    fontSize: '14px',
    fontFamily: 'Raleway, sans-serif',
    lineHeight: '1.42857143',
    fontWeight: '100',
    color: 'black',
    '::placeholder': {
      color: '#999999'
    }
  }};

  return (
    <div className="credit-form">
      <form onSubmit={(e) => submitForm(e)}>
        <CardElement
          style={style}
        />
        {error &&
          <HelpBlock>
            <p className="error-text">{error}</p>
          </HelpBlock>
        }
        <div className="frmcntl">
          <input className="btn btn-primary auth-payment-button"
            type="submit"
            value="Make Payment"
          />
        </div>
      </form>
    </div>
  );
};


export default injectStripe(PaymentPage);
