import React from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import { Animated } from 'react-animated-css';
import PricePage from 'components/PricePage';
import './PlanList.scss';

const PlanList = ({ plan, handleCheckChange, makePayment }) => {
  return (
    <div className="planlist-container">
      <div className="content fill upgrade-plan ">
        <Grid fluid={true} >
          <Row className="inlineclr">
            <Col md={12}>
              <div className="card-box pt-0 pl-0">
                <h4 className="header-title text-left">Upgrade your Plan</h4>
                <hr/>
                <div className="plans float-right">
                  <Row>
                    <Animated className="leftwrap center text-center" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                      <PricePage
                        paymentPage={true}
                        selectedPlan={plan}
                        handleCheckChange={handleCheckChange}
                      />
                    </Animated>
                  </Row>
                  <Row className="float-right">
                    <div className="m-t-50 ">
                      <span type="button" className="btn btn-primary  waves-light waves-effect number ml-2 pl-4 pr-4" onClick={() => {this.props.profile && this.props.profile.plan.name!==plan && makePayment();}}>Proceed </span>
                    </div>
                  </Row>
                </div>
              </div>
            </Col>

          </Row>
        </Grid>
        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default PlanList;
