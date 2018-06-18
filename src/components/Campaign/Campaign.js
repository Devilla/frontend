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
import CardHeader from 'components/Template/card-with-header';
import Button from 'components/Template/customButton';

import { Integrations1 } from 'img';

const Campaign = ({
  handleNextButton,
  handleCampaignNameChange,
  handleCampaignAuth,
  campaignname,
  errorName,
  handleWebsiteChange,
  handleWebsiteAuth,
  website,
  errorWebsiteUrl,
  isDisabled
}) => {
  return (
    <div className="content fill">
      <Grid fluid="fluid">
        <Row>
          <Col md={6}>
            <CardHeader title="Create Your Campaign"  content={
              <form onSubmit={handleNextButton}>
                <Row>
                  <div className="col-md-12">
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
                  <div className="col-md-12">
                    <FormGroup>
                      <ControlLabel className="text-muted h6">Website URL</ControlLabel>
                      <FormControl
                        type="text"
                        bsClass="form-control"
                        placeholder="http://"
                        id="website"
                        onChange={handleWebsiteChange}
                        onBlur={handleWebsiteAuth}
                        value={website}
                        required={true}
                      />
                      <HelpBlock>
                        <p className="website-error">{errorWebsiteUrl}</p>
                      </HelpBlock>
                    </FormGroup>
                  </div>
                </Row>
                <Button
                  bsStyle="info"
                  pullRight
                  fill
                  type="submit"
                  disabled={isDisabled}
                >
                  Next >
                </Button>
                <div className="clearfix"></div>
              </form>
            }/>
          </Col>
          <Col md ={6}>
            <img alt="background" src={Integrations1} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Campaign;
