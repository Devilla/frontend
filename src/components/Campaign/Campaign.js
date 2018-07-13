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
import './Campaign.scss';

const Campaign = ({
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
    <div className="content fill campaign-container">
      <Grid>
        <Row>
          <Col md={12}>
            <div className="card-box">
              <h4 className="header-title">Create Your Campaign</h4>
              <hr/>
              <form onSubmit={handleNextButton}>
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
                      <ControlLabel className="text-muted h6">Conversions per day</ControlLabel> &nbsp;<i className="fa fa-info-circle" data-toggle="tooltip" title="Fill in for better monitoring"> </i>
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
                <button type="submit" className="btn btn-primary waves-light waves-effect number ml-2 pl-4 pr-4"> Create Your Campaign </button>
                <div className="clearfix"></div>
              </form>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Campaign;
