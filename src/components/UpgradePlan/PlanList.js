import React from 'react';
import { browserHistory } from 'react-router';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import { Animated } from 'react-animated-css';
import PricePage from 'components/PricePage';

const PlanList = ({ plan, handleCheckChange, makePayment }) => {
  return (
    <div className="content fill upgrade-plan ml-5">
      <Grid fluid="fluid" >
        <Row>
          <Col md={30}>
            <div className="text-center">
              <h3 className="m-b-30 m-t-20 ">Choose your perfect plan</h3>
            </div>
            <div className="mt--3">
              <Row>
                <Animated className="leftwrap center" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                  <PricePage
                    paymentPage={true}
                    selectedPlan={plan}
                    handleCheckChange={handleCheckChange}
                  />
                </Animated>
              </Row>
              <Row className="float-right">
                <div className="m-t-50 ">
                  <span type="button" className="btn btn-custom  waves-light waves-effect number ml-2 pl-4 pr-4" onClick={() => browserHistory.push('/profile')}>&nbsp;&nbsp;Back&nbsp;&nbsp;</span>
                  <span type="button" className="btn btn-custom  waves-light waves-effect number ml-2 pl-4 pr-4" onClick={() => makePayment()}>Proceed </span>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Grid>
      <div className="clearfix"></div>
    </div>
  );
};

export default PlanList;
