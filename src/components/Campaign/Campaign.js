import React from 'react';
import { Link } from 'react-router';
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
  handleNextButton,
  handleCampaignNameChange,
  handleCampaignAuth,
  campaignname,
  errorName,
  handleWebsiteChange,
  website,
  errorWebsiteUrl,
  isDisabled
}) => {
  return (
    <div className="content fill campaign-container">
      <Grid>
        <Row>
          <Col md={12}>
            <div className="card-box">
              <h4 className="header-title"><Link to="/dashboard"><i className="icon-arrow-left mr-3"></i></Link>Create Your Campaign</h4>
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
                        onChange={handleCampaignNameChange}
                        onBlur={handleCampaignAuth}
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
                        onChange={handleWebsiteChange}
                        value={website}
                        required={true}
                      />
                      <HelpBlock>
                        <p className="website-error">{errorWebsiteUrl}</p>
                      </HelpBlock>
                    </FormGroup>
                  </div>
                </Row>

                <button type="submit" className="btn btn-primary waves-light waves-effect number ml-2 pl-4 pr-4" disabled={isDisabled}> Create Your Campaign </button>
                {/*}<Button
                  bsStyle="info"
                  pullRight
                  fill
                  type="submit"

                >
                  Next >
                </Button>*/}
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
