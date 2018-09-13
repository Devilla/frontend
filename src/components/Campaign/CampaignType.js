import React from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

const CampaignType = ({handleCampaignType}) => {
  return (
    <Grid data-transition-id="campaign-type-page" className="campaign-type-container">
      <Row>
        <Col md={12}>
          <div className="card-box">
            <Row>
              <h4 className="header-title">Choose Campaign Type</h4>
            </Row>
            <Row className="campaign-type-content">
              <Col md={5} className="left-content pr-0 mr-0">
                <Row className="campaign-type-button ml-5">
                  <button className="btn btn-normal-campaign" onClick={() => handleCampaignType('default')}><i className=" fa fa-fire mr-2"></i>Normal Campaign</button>
                </Row>
                <Row className="campaign-type-info ml-5 mt-4">
                  <Col>
                    <p className="campaign-type-info">All notifications will be displayed on all the pages.</p>
                  </Col>
                </Row>
              </Col>
              <Col md={2} className="campaign-type-divider pl-0 pr-0">
                <h4 className="content">Or</h4>
                <div className="divider"></div>
              </Col>
              <Col md={5} className="right-content pl-0 ml-0">
                <Row className="campaign-type-button mr-5">
                  <button className="btn btn-product-specific" onClick={() => handleCampaignType('page')}><i className=" fa fa-bolt mr-2"></i>Product Specifc Campaign</button>
                </Row>
                <Row className="campaign-type-info mr-5 mt-4">
                  <Col>
                    <p className="mb-0 campaign-type-info">For online Stores or Ecommerce websites.</p>
                    <p className="mt-0 campaign-type-info">Notification specific to that Page/Product will be shown</p>
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
