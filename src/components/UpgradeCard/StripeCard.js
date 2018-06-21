import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe
} from 'react-stripe-elements';
import { Col, Row } from 'react-bootstrap';
import Button from 'components/Template/customButton';

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
          <Col md={12} className="mb-3 text-muted">
            <label>
              Card number
              <CardNumberElement
                {...createOptions(5)}
              />
            </label>
          </Col>
          <Col md={12} className="mb-3 text-muted">
            <label>
              Expiration date
              <CardExpiryElement
                {...createOptions(fontSize)}
              />
            </label>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3 text-muted">
            <label>
              CVC
              <CardCVCElement
                {...createOptions(fontSize)}
              />
            </label>
          </Col>
          <Col md={12} className="mb-3 text-muted">
            <label>
              Postal code
              <PostalCodeElement
                {...createOptions(fontSize)}
              />
            </label>
          </Col>
        </Row>
        <Row className='upgrade-card-buttons'>
          <div className='col-md-4 pull-left'>
            <Button type='button' icon='chevron-left' bsStyle='info' fill={true} onClick={() => browserHistory.push(currentState === 'upgrade' ? '/billing-details' : '/profile')}>&nbsp;&nbsp;Back&nbsp;&nbsp;</Button>
          </div>
          <div className='col-md-6 pull-right mr-2'>
            <Button type='submit' icon='usd' bsStyle='info' fill={true} >{currentState === 'upgrade' ? 'Upgrade Card' : 'Make Payment'}</Button>
          </div>
        </Row>
      </form>
    );
  }
}

export default injectStripe(StripeCard);
