import React from 'react';
import { Animated } from "react-animated-css";
import {
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';
import { Elements } from 'react-stripe-elements';
import PaymentPage from './PaymentPage';
import PricePage from 'components/PricePage';

const TrailPayment = ({
  user,
  plan,
  selectedPlan,
  username,
  handleCheckChange,
  handleStateChange,
  handleSubmit
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
                    </FormGroup>
                  </Col>
                </Row>
                <div className="frmcntl auth-card-details">
                  <Elements >
                    <PaymentPage
                      user={user}
                      plan={plan}
                      handleStateChange={handleStateChange}
                      handleSubmit={handleSubmit}
                    />
                  </Elements>
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
