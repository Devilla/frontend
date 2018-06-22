import React from 'react';
import { Link } from 'react-router';
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
    <div className="content fill upgrade-plan ">
      <Grid fluid="fluid" >
        <Row className="inlineclr">
          <Col md={12}>
            <div className="card-box pt-0 pl-0">
              <h4 className="header-title text-left"><Link to="/Profile"><i className="icon-arrow-left mr-3"></i></Link>Upgrade your Plan</h4>
              <hr/>
              <div className="plans float-right mr-5">
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
                    <span type="button" className="btn btn-primary  waves-light waves-effect number ml-2 pl-4 pr-4" onClick={() => makePayment()}>Proceed </span>
                  </div>
                </Row>
              </div>
            </div>
          </Col>

        </Row>
      </Grid>
      <div className="clearfix"></div>
    </div>
  );
};

export default PlanList;
