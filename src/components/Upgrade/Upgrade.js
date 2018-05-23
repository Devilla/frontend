import React, { Component } from 'react';
import {
  Grid, Row, Col, Button, Glyphicon, FormGroup,
  ControlLabel, FormControl
} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import { connect } from 'react-redux';
import './Upgrade.css';

import CardHeader from 'components/Template/card-with-header'
import FormInputs from 'components/Template/FormTemp';
import { ToastContainer, toast } from 'react-toastify';
import Label from 'react-flexible-switch/lib/Label';
import Switch from 'react-flexible-switch';
import Footer from '../_common/Footer';




export default class Upgrade extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content fill backgroundclr">
        <Grid fluid="fluid" >
          <Row className="inlineclr">
            <Col md={30}>
              <CardHeader title="Upgrade Your current plan" content={
                <div>

                  <Row className="notification-button-row">
                    <Col md={3}>
                      <div>
                        <div class="col-md-2">
                          <FormGroup>
                            <ControlLabel></ControlLabel>
                            <div><Button bsStyle="info" type="checkbox">Startup</Button></div>
                            <div><p>20,000 unique visiters</p></div>
                            <div><strong>$19</strong></div>

                          </FormGroup>
                        </div>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div >
                        <div class="col-md-2 marginLeft">
                          <FormGroup>
                            <ControlLabel></ControlLabel>
                            <div><Button bsStyle="info" type="checkbox">Small Bussiness</Button></div>
                            <div><p>65,000 unique visiters</p></div>
                            <div><strong>$45</strong></div>
                          </FormGroup>
                        </div>

                      </div>
                    </Col>
                    <Col md={3}>
                      <div>
                        <div class="col-md-2">
                          <FormGroup>
                            <ControlLabel>Upto 60% saving than previous plan.</ControlLabel>
                            <div><Button bsStyle="info" type="checkbox">Advanced</Button></div>
                            <div><p>250,000 unique visiters</p></div>
                            <div><p>White Label</p></div>
                            <div><strong>Priority Support</strong></div>
                            <div><strong>$73</strong></div>
                          </FormGroup>
                        </div>
                      </div>

                    </Col>
                    <Col md={3}>
                      <div>
                        <div class="col-md-2 cardView">
                          <FormGroup>
                            <ControlLabel></ControlLabel>
                            <div><Button bsStyle="info" type="checkbox">Pro</Button></div>
                            <div><p>500,000 unique visiters</p></div>
                            <div><p>White Label</p></div>
                            <div><strong>Priority Support</strong></div>
                            <div><strong>$180</strong></div>
                          </FormGroup>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row id="togglemy">
                  <Col md={1} id="leftmg"><div><strong>Monthly</strong></div></Col>
                <Col md={1}>  <div className="notification-toggle">
                    <Switch
                      circleStyles={{ onColor: 'green', offColor: 'blue', diameter: 18 }}
                      switchStyles={{ width: 50 }}
                      cssClass="alignCenter"
                      value=""
                    // onChange={(e) => e != notification.activity ? handleActivityChange(e, notification._id, notification.configurationId) : null}
                    />
                  </div>
                  </Col>
                  <Col md={1}>
                  <div><strong>Yearly</strong></div>
                  </Col>
                </Row>

                <div id="Footer"><p>Note : We use prorating process for subscriptions.<a href="#">Learn More</a></p></div>
                <div  className="Previous"> <Button onClick={()=> browserHistory.push('/Profile')}
                      bsStyle="info"
                      pullLeft
                      fill
                      type="button"
                      icon="share-alt"
                      >
                        Previous
                    </Button>
                    </div>
                </div>
              } />
            </Col>
          </Row>
        </Grid>
        <ToastContainer hideProgressBar={true} />
      </div>
    )
  }
}

