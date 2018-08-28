import React from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

const CampaignType = ({handleCampaignType}) => {
  return (
    <Grid className="campaign-type-container">
      <Row>
        <Col md={12}>
          <div className="card-box">
            <Row>
              <h4 className="header-title">Choose Campaign Type</h4>
            </Row>
            <Row className="campaign-type-content">
              <Col md={5}>
                <Row className="campaign-type-button">
                  <button className="btn btn-primary" onClick={() => handleCampaignType('default')}>Default Campaign</button>
                </Row>
                <Row className="campaign-type-info">
                  <Col>
                    <p>All notification will be display over website pages</p>
                  </Col>
                </Row>
              </Col>
              <Col md={2} className="campaign-type-divider">
                <h4>Or</h4>
                <div className="divider"></div>
              </Col>
              <Col md={5}>
                <Row className="campaign-type-button">
                  <button className="btn btn-primary" onClick={() => handleCampaignType('page')}>Page Specifc Campaign</button>
                </Row>
                <Row className="campaign-type-info">
                  <Col>
                    <p>For online stores & ecommerce:</p>
                    <p>Notification specific to that Page/Product will be shown</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default CampaignType;
