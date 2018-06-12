import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import { toast } from 'react-toastify';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000
};

const PaymentPage = ({stripe, user, amount, plan, planList, setError, stripeError, handleStateChange, handleSubmit, load}) => {

  const findObjectByKey = (array, key, value) => {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  }

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
    height: '50px',
    fontSize: '14px',
    fontFamily: 'Raleway, sans-serif',
    border: '1px solid #cccccc',
    lineHeight: '1.42857143',
    borderColor: 'hsla(0, 0%, 100%, .2)',
    borderRadius: '2px',
    fontWeight: '100',
    color: 'black',
    '::placeholder': {
      height: '30px',
      color: '#999999',
    },
  }}

  return (
    <div className="credit-form">
      <form onSubmit={(e) => submitForm(e)}>
        <CardElement
          style={style}
        />
        <div className="frmcntl">
          <input className="btn btn-primary"
            type="submit"
            value="Next"
            style={{width: '50%', height: '45px'}}
          />
        </div>
      </form>
    </div>
  )
}


export default injectStripe(PaymentPage);
