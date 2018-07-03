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
// import PricePage from 'components/PricePage';
import CouponPage from './CouponPage';
import './TrailPayment.scss';

const TrailPayment = ({
  user,
  plan,
  couponError,
  cardError,
  nameError,
  // selectedPlan,
  coupon,
  couponDetails,
  handleErrorChange,
  // handleCheckChange,
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
              {/* <h3 className="dashed">Confirm you account</h3>
              <div className="section-divider-line"></div>
              <div className="frmcntl auth-price-list">
                <PricePage couponDetails={couponDetails} paymentPage={true} selectedPlan={selectedPlan} handleCheckChange={handleCheckChange}/>
              </div> */}
              <Row>
                <Col md={12}>
                  <FormGroup className="card-holder">
                    <span className="lead h6">Pay with Stripe</span>
                    <FormControl type="text" onChange={(e) => handleStateChange(e.target.value, e.target.id)} defaultValue={user.username} placeholder="Enter Card Holder's Name" id="username" key={user.username}/>
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
                      <input className="btn btn-primary coupon-payment-button" type="submit" value="Proceed" onClick={couponProceed}/>
                      <HelpBlock>
                        <p className="error-text">{cardError}</p>
                      </HelpBlock>
                    </div>
                    :
                    <div className="frmcntl auth-card-details">
                      <Elements >
                        <PaymentPage user={user} plan={plan} error={cardError} handleErrorChange={handleErrorChange} handleSubmit={handleSubmit}/>
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
                    <CouponPage coupon={coupon} couponDetails={couponDetails} error={couponError} handleStateChange={handleStateChange} submitCoupon={submitCoupon}/>
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
