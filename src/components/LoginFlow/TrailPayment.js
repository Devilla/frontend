import React, {Component} from 'react';
import { Animated } from "react-animated-css";
import {
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { Elements } from 'react-stripe-elements';
import PaymentPage from './PaymentPage';
import PricePage from 'components/PricePage';

const TrailPayment = ({
  user,
  plan,
  selectedPlan,
  username,
  stripeError,
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
              <div className="loginfrm" style={{width: '100%'}}>
                <h3 className="dashed">Confirm you account</h3>
                <div className="section-divider-line"></div>
                <div className="frmcntl" style={{display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: '25px'}}>
                  <PricePage
                    paymentPage={true}
                    selectedPlan={selectedPlan}
                    handleCheckChange={handleCheckChange}
                  />
                </div>
                <Row>
                  <Col md={12}>
                    <FormGroup style={{textAlign: 'initial'}} className="card-holder">
                      <ControlLabel style={{fontWeight: '500'}}>Card Holder's Name</ControlLabel>
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
                <div className="frmcntl" style={{padding:'1% 2%', border: '1px solid #cccccc', height: '45px', borderRadius: '4px', background: 'white'}}>
                  <Elements >
                    <PaymentPage
                      user={user}
                      plan={plan}
                      stripeError={stripeError}
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
      <ToastContainer hideProgressBar={true} />
    </div>
  );
}


export default TrailPayment;
