import React from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import { Animated } from 'react-animated-css';
import PricePage from 'components/PricePage';
import './PlanList.scss';

const PlanList = ({ plan, handleCheckChange, setPlanList }) => {
  return (
    <div className="planlist-container">
      <div className="content fill upgrade-plan ">
        <Grid fluid={false} >
          <Row className="inlineclr pt-0">
            <Col md={12}>
              <div className="card-box pt-0">
                <div className="plans">
                  <Row>
                    <Animated className="leftwrap center text-center" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                      <PricePage
                        setPlanList={setPlanList}
                        paymentPage={true}
                        selectedPlan={plan}
                        handleCheckChange={handleCheckChange}
                      />
                    </Animated>
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
