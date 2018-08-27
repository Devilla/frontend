import React, { Component } from 'react';
import { CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe
} from 'react-stripe-elements';
import { Col, Row, HelpBlock } from 'react-bootstrap';
import Button from 'components/Template/customButton';
import './StripeCard.scss';

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
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
    const { stripe, updatePaymentMethod, makePayment, plan, user, handleError } = this.props;
    if (stripe) {
      stripe
        .createToken()
        .then((payload) => {
          if(payload.error)
            return handleError(payload.error.message);
          updatePaymentMethod(payload.token);
          const data = {
            amount: plan.amount,
            paymentProvider: payload.token,
            paymentType: payload.token.type,
            user: user._id,
            plan: plan,
          };
          makePayment(data);
        });
    } else {
      console.log('Stripe.js has not loaded yet.');
    }
  };

  render() {

    const { currentState, fontSize, error } = this.props;
    return (
      <div className="stripe-container">
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
            <HelpBlock>
              <p className="website-error">{error}</p>
            </HelpBlock>
          </Row>
          <Row className='upgrade-card-buttons'>
            <div className='mr-2'>
              <Button type='submit' icon='usd' bsStyle='primary' className='cardpay-btn'  fill={true} >Make Payment</Button>
            </div>

            {currentState !== 'upgrade' ?
              <div className="auth-divider">
                <div className="line-divider"></div>
                <h1 className="pt-1">Or</h1>
                <span className="btn btn-primary ml-2 changeplan-btn mb-3" onClick={() => this.props.goback(true)} >Choose Another Plan</span>
              </div>
              : ' ' }
          </Row>
        </form>
      </div>
    );
  }
}

export default injectStripe(StripeCard);
