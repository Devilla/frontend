import { Component } from 'react';
import { browserHistory } from 'react-router';
import './Billing.css';

export default class Billing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="content fill ">
      <Grid fluid="fluid">
        <Row className="inlineclr">
          <Col md={30}>
            <CardHeader title="Billing / Payment Details"
              content={
                <div className="Billing-container " >
                  <Row>
                    <div className="col-md-10">
                      <strong>
                        Pay with</strong>
                    </div>
                    <div className="col-md-1">
                      <Button bsStyle="info">Edit</Button>
                    </div>
                  </Row>
                  <Row className="marginTop">
                    <div className="col-md-1">
                      <Button type="checkbox">Credit Card</Button>
                    </div>
                    <div className="col-md-1">
                      <Button type="checkbox">Debit Card</Button>
                    </div>
                    <div className="col-md-1">
                      <Button type="checkbox">Paypal</Button>
                    </div>
                    <div className="col-md-1">
                      <Button type="checkbox">Bitcoin</Button>
                    </div>
                  </Row>
                  <Row className="visa">
                    <div className="col-md-1">
                      VISA
                </div>
                    <div className="col-md-6">
                      <FormGroup>
                        <FormControl type="text" value="" placeholder="4*** **** **** 2006" id="VisaNumber" onChange={(e) => this.handleStateChange(e)} />
                      </FormGroup>
                    </div>
                  </Row>

                  <Row>
                    <div className="col-md-1">
                      Address :
                </div>
                    <div className="col-md-6">
                      <FormGroup>
                        <FormControl type="text" value="" placeholder="Address Line 1" id="address" onChange={(e) => this.handleStateChange(e)} />
                      </FormGroup>
                    </div>
                  </Row>
                  <Row>
                    <div className="col-md-4">
                      <FormGroup>
                        <FormControl type="text" value="" placeholder="Address Line 2" id="address2" onChange={(e) => this.handleStateChange(e)} />
                      </FormGroup>
                    </div>
                    <div className="col-md-1">
                      Postal Code:
                </div>
                    <div className="col-md-2">
                      <FormGroup>
                        <FormControl type="text" value="" placeholder="" id="postalcode" onChange={(e) => this.handleStateChange(e)} />
                      </FormGroup>
                    </div>
                  </Row>
                  <Row>
                    <div className="col-md-2">
                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Country</ControlLabel>
                        <FormControl type="text" value="Country" placeholder="COUNTRY" id="state" onChange={(e) => this.handleStateChange(e)} />
                      </FormGroup>
                    </div>
                    <div className="col-md-2">
                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>State</ControlLabel>
                        <FormControl type="text" value="STATE" placeholder="STATE" id="state" onChange={(e) => this.handleStateChange(e)} />
                      </FormGroup>
                    </div>
                    <div className="col-md-2">
                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>City</ControlLabel>
                        <FormControl type="text" value="City" placeholder="CITY" id="state" onChange={(e) => this.handleStateChange(e)} />
                      </FormGroup>
                    </div>
                  </Row>
                  <Row>
                    <div className="Previous">
                      <Button onClick={() => browserHistory.push('/billingFinal')} bsStyle="info" pullLeft="pullLeft" fill="fill" type="button" icon="share-alt">
                        Previous
                  </Button>
                    </div>
                    <div className="Cancel">
                      <Button bsStyle="warning" pullRight="pullRight" fill="fill" type="button">
                        Cancel
                  </Button>
                    </div>
                    <div className="Update">
                      <Button bsStyle="success" pullRight="pullRight" fill="fill" type="button">
                        Update
                  </Button>
                    </div>
                  </Row>
                </div>} />
          </Col>
        </Row>
      </Grid>
      <ToastContainer hideProgressBar={true} />
    </div>);
  }
}
