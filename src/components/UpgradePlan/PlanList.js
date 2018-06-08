import React from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import CardHeader from 'components/Template/card-with-header'
import { Animated } from "react-animated-css";
import { browserHistory } from 'react-router';

import Button from 'components/Template/customButton';
import PricePage from 'components/PricePage';

const PlanList = ({ plan, handleCheckChange, makePayment }) => {
  return (
    <div className="content fill upgrade-plan">
      <Grid fluid="fluid" >
        <Row className="inlineclr">
          <Col md={30}>
            <CardHeader title="Upgrade Your current plan" content={
              <div>
                <div className="authpage section innerpage">
                  <div className="container">
                    <div className="flow-wrapper">
                      <Animated className="leftwrap center" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                        <div className="loginfrm" style={{width: '100%'}}>
                          <h3 className="dashed">Confirm you account</h3>
                          <div className="section-divider-line"></div>
                          <div className="frmcntl upgrade-price-div">
                            <PricePage
                              paymentPage={true}
                              selectedPlan={plan}
                              handleCheckChange={handleCheckChange}
                            />
                          </div>
                          <Row className="upgrade-button">
                            <div className="col-md-2 pull-left">
                              <Button type="button" icon="chevron-left" bsStyle="info" fill="fill" onClick={() => browserHistory.push("/profile")}>Back</Button>
                            </div>
                            <div className="col-md-2 pull-right">
                              <Button type="submit" icon="chevron-right" icon_pull="right" bsStyle="info" fill="fill" onClick={() => makePayment()}>Proceed</Button>
                            </div>
                          </Row>
                        </div>
                      </Animated>
                    </div>
                  </div>
                </div>
              </div>
            } />
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default PlanList;
