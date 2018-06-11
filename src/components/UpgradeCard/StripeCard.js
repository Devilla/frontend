import { Component } from 'react';
import { injectStripe } from 'react-stripe-elements';
import { browserHistory } from 'react-router';

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        border: '1px solid lightblue !important',
        height: '40px  !important',
        borderRadius: '3px  !important',
        fontSize: '16px',
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
        ...(padding ? { padding } : {}),
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

const handleBlur = () => {
  console.log('[blur]');
};
const handleChange = (change) => {
  console.log('[change]', change);
};
const handleFocus = () => {
  console.log('[focus]');
};
const handleReady = () => {
  console.log('[ready]');
};

class StripeCard extends Component {

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { stripe, currentState, updatePaymentMethod, makePayment, plan, user } = this.props;
    if (stripe) {
      stripe
        .createToken()
        .then((payload) => {
          if (currentState == 'upgrade')
            updatePaymentMethod(payload.token);
          else {
            const data = {
              amount: plan.amount,
              paymentProvider: payload.token,
              paymentType: payload.token.type,
              user: user._id,
              plan: plan,
            };
            makePayment(data);
          }
          console.log('[token]', payload);
        });
    } else {
      console.log('Stripe.js has not loaded yet.');
    }
  };

  render() {
    const { currentState, fontSize } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <Col md={6}>
            <label>
              Card number
              <CardNumberElement
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                onReady={handleReady}
                {...createOptions(5)}
              />
            </label>
          </Col>
          <Col md={6}>
            <label>
              Expiration date
              <CardExpiryElement
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                onReady={handleReady}
                {...createOptions(fontSize)}
              />
            </label>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <label>
              CVC
              <CardCVCElement
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                onReady={handleReady}
                {...createOptions(fontSize)}
              />
            </label>
          </Col>
          <Col md={6}>
            <label>
              Postal code
              <PostalCodeElement
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                onReady={handleReady}
                {...createOptions(fontSize)}
              />
            </label>
          </Col>
        </Row>
        <Row class='upgrade-card-buttons'>
          <div className='col-md-2 pull-left'>
            <Button type='button' icon='chevron-left' bsStyle='info' fill='fill' onClick={() => browserHistory.push(currentState === 'upgrade' ? '/billing-details' : '/profile')}>Back</Button>
          </div>
          <div className='col-md-2 pull-right'>
            <Button type='submit' icon='usd' bsStyle='info' fill='fill' >{currentState === 'upgrade' ? 'Upgrade Card' : 'Make Payment'}</Button>
          </div>
        </Row>
      </form>
    );
  }
}

export default injectStripe(StripeCard);
