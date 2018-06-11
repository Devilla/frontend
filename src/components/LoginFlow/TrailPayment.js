import React from 'react';
import { Animated } from "react-animated-css";
import {
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';
import { Elements } from 'react-stripe-elements';
import PaymentPage from './PaymentPage';
import PricePage from 'components/PricePage';
import CouponPage from './CouponPage';

const TrailPayment = ({
  user,
  plan,
  couponError,
  cardError,
  nameError,
  selectedPlan,
  username,
  coupon,
  handleErrorChange,
  handleCheckChange,
  handleStateChange,
  handleSubmit,
  submitCoupon
}) => {
  return (
    <div>
      <div className="authpage section innerpage">
        <div className="container">
          <div className="flow-wrapper">
            <Animated className="leftwrap center" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
              <div className="loginfrm">
                <h3 className="dashed">Confirm you account</h3>
                <div className="section-divider-line"></div>
                <div className="frmcntl auth-price-list">
                  <PricePage
                    paymentPage={true}
                    selectedPlan={selectedPlan}
                    handleCheckChange={handleCheckChange}
                  />
                </div>
                <Row>
                  <Col md={12}>
                    <FormGroup className="card-holder">
                      <ControlLabel>Card Holder's Name</ControlLabel>
                      <FormControl
                        type="text"
                        onChange={(e) => handleStateChange(e.target.value, e.target.id)}
                        defaultValue={user.username}
                        placeholder="Enter Card Holder's Name"
                        id="username"
                        key={user.username}
                      />
                      <HelpBlock>
                        <p className="error-text">{nameError}</p>
                      </HelpBlock>
                    </FormGroup>
                  </Col>
                </Row>
                <div className="auth-pages">
                  <div className="frmcntl auth-coupon-page">
                    <CouponPage
                      coupon={coupon}
                      error={couponError}
                      handleStateChange={handleStateChange}
                      submitCoupon={submitCoupon}
                    />
                  </div>
                  <div className="auth-divider">
                    <div className="line-divider"></div>
                    <h1>Or</h1>
                  </div>
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
                </div>

              </div>
            </Animated>
          </div>
        </div>
      </div>
    </div>
  );
}


export default TrailPayment;
