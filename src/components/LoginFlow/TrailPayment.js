import React from 'react';
import {Animated} from 'react-animated-css';
import {
  Row,
  Col,
  FormGroup,
  FormControl,
  HelpBlock
} from 'react-bootstrap';
import { Elements } from 'react-stripe-elements';
import PaymentPage from './PaymentPage';
import CouponPage from './CouponPage';
import './TrailPayment.scss';

const TrailPayment = ({
  user,
  plan,
  couponError,
  cardError,
  nameError,
  couponDetails,
  handleErrorChange,
  handleStateChange,
  handleSubmit,
  submitCoupon,
  couponProceed
}) => {
  return (<div className="authpage-container">
    <div className="authpage section innerpage">
      <div className="container">
        <div className="flow-wrapper">
          <Animated className="leftwrap center" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <div className="loginfrm">
              <Row>
                <Col md={12}>
                  <FormGroup className="card-holder">
                    <span className="lead stripe-title">{couponDetails?'Checkout':'Pay with Stripe'}</span>
                    <FormControl type="text" onChange={(e) => handleStateChange(e.target.value, e.target.id)} defaultValue={user.username} placeholder="Enter card holder's name" id="username" key={user.username}/>
                    <HelpBlock>
                      <p className="error-text">{nameError}</p>
                    </HelpBlock>
                  </FormGroup>
                </Col>
              </Row>
              <Row>

                <Col md={12}>
                  {couponDetails?
                    <div className="frmcntl coupon-proceed">
                      <input className="btn btn-primary coupon-payment-button" type="submit" value="Proceed" onClick={couponDetails?couponProceed():null}/>
                      <HelpBlock>
                        <p className="error-text">{cardError}</p>
                      </HelpBlock>
                    </div>
                    :
                    <div className="frmcntl auth-card-details">
                      <Elements >
                        <PaymentPage
                          user={user}
                          plan={plan}
                          error={cardError}
                          handleErrorChange={handleErrorChange}
                          handleSubmit={handleSubmit}
                        />
                      </Elements>
                    </div>
                  }
                </Col>
                <div className="auth-divider">
                  <div className="line-divider text-center"></div>
                  <h3 className="lead line-or">Or</h3>
                </div>
                <Col md={12}>
                  <div className="frmcntl auth-coupon-page">
                    <CouponPage
                      couponDetails={couponDetails}
                      error={couponError}
                      handleStateChange={handleStateChange}
                      submitCoupon={submitCoupon}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Animated>
        </div>
      </div>
    </div>
  </div>);
};

export default TrailPayment;
