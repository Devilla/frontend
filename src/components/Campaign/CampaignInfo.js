import React from 'react';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';

import { PageSpecific } from 'components';
import './Campaign.scss';

const CampaignInfo = ({
  campaignType,
  campaignname,
  averageCustomer,
  website,
  errorName,
  errorAverageCustomer,
  errorWebsiteUrl,
  handleNextButton,
  handleCampaignStateChange
}) => {
  return (
    <div className="content fill campaign-info-container">
      <Grid>
        <Row>
          <Col md={12}>
            <div className="card-box">
              <h4 className="header-title">Create Your {campaignType == 'page'?'Product Specifc Campaign':'Campaign'}</h4>
              <hr/>
              <form id="campaignForm" onSubmit={handleNextButton}>
                <Row>
                  <div className="col-md-6">
                    <FormGroup>
                      <ControlLabel className="text-muted h6">Name</ControlLabel>
                      <FormControl
                        type="text"
                        bsClass="form-control"
                        id="campaignname"
                        placeholder="example: Acme Co, Blog, Online Store"
                        onChange={handleCampaignStateChange}
                        value={campaignname}
                        required={true}
                      />
                      <HelpBlock>
                        <p className="website-error">{errorName}</p>
                      </HelpBlock>
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <ControlLabel className="text-muted h6">Website URL</ControlLabel>
                      <FormControl
                        type="text"
                        bsClass="form-control"
                        placeholder="http://"
                        id="website"
                        onChange={handleCampaignStateChange}
                        defaultValue={website}
                        required={true}
                      />
                      <HelpBlock>
                        <p className="website-error">{errorWebsiteUrl}</p>
                      </HelpBlock>
                    </FormGroup>
                  </div>
                </Row>
                <Row>
                  <div className="col-md-6">
                    <FormGroup>
                      <ControlLabel className="text-muted h6">Conversions per day</ControlLabel> &nbsp;<i className="fa fa-info-circle" height="50px" width="50px" data-toggle="tooltip"  data-delay='{"show":"0", "hide":"100"}' title="Fill in for better monitoring"> </i>
                      <FormControl
                        type="number"
                        bsClass="form-control"
                        placeholder="Number of customer Signups"
                        id="averageCustomer"
                        onChange={handleCampaignStateChange}
                        value={averageCustomer}
                        required={true}
                      />
                      <HelpBlock>
                        <p className="website-error">{errorAverageCustomer}</p>
                      </HelpBlock>
                    </FormGroup>
                  </div>
                </Row>
                <button
                  type="submit"
                  id="campaignForm"
                  className="btn btn-primary waves-light waves-effect newcamp-btn ml-2 pl-4 pr-4"
                  style={{display: campaignType !== 'page'?'block':'none'}}
                  onClick={handleNextButton}
                >
                  Create Your Campaign
                </button>
                <div className="clearfix"></div>
              </form>
            </div>
          </Col>
        </Row>
        {campaignType == 'page' &&
          <Row className="product-specific-row">
            <Col md={12}>
              <div className="card-box">
                <PageSpecific handleNextButton={handleNextButton} />
              </div>
            </Col>
          </Row>
        }
      </Grid>
    </div>
  );
};

export default CampaignInfo;
