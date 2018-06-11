import {Component} from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  Tabs,
  Tab
} from 'react-bootstrap';
import { Elements } from 'react-stripe-elements';

import CardHeader from 'components/Template/card-with-header'
import StripeCard from './StripeCard';
import { updatePaymentMethod, createPayment } from 'ducks/payment';
import { updateProfile } from 'ducks/profile';
import './UpgradeCard.scss';

class UpgradeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: 'upgrade',
      key: 1
    };
    this.handleSelect =  this.handleSelect.bind(this);
    this.makePayment = this.makePayment.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    if(this.props.location && this.props.location.query.type == "upgrade")
      this.setState({currentState: 'upgrade'});
    else
      this.setState({currentState: 'payment'});
  }

  handleSelect(key) {
    this.setState({ key });
  }

  makePayment(data, token) {
    let profile = {};
    profile['plan'] = this.props.plan;
    profile['id'] = this.props.profile._id;
    this.props.updateProfile(profile);
    this.props.createPayment(data);
  }

  render() {
    const { updatePaymentMethod, plan, user } = this.props;
    const { currentState, key } = this.state;
    return (<div className="content fill ">
      <Grid fluid="fluid">
        <Row className="inlineclr">
          <Col md={30}>
            <CardHeader title={currentState==="upgrade"?"Upgrade Payment Method" : "Make Payment"}
              content={
                <div className = "upgrade-card-container" >
                  <div className="panel panel-default">
                    <div className="panel-heading">Pay with</div>
                    <div className="panel-body">
                      <Tabs
                        defaultActiveKey={1}
                        animation={true}
                        activeKey={key}
                        onSelect={this.handleSelect}
                        id="controlled-tab-example"
                      >
                        <Tab eventKey={1} title="Credit Card">
                          <Row className="visa">
                            <div className="col-md-6 tab-name">
                              Credit Card Details
                            </div>
                          </Row>
                          <Row className="visa credit-card-details">
                            <Elements>
                              <StripeCard
                                plan={plan}
                                user={user}
                                makePayment={this.makePayment}
                                updatePaymentMethod={updatePaymentMethod}
                                currentState={currentState}
                              />
                            </Elements>
                          </Row>
                        </Tab>
                        <Tab eventKey={2} title="Debit Card">
                          <Row className="visa">
                            <div className="col-md-6 tab-name">
                              Debit Card
                            </div>
                          </Row>
                          <Row className="visa">
                            <div className="col-md-6">
                              <FormGroup>
                                <FormControl
                                  type="text"
                                  value=""
                                  placeholder="4*** **** **** 2006"
                                  id="VisaNumber"
                                  onChange={(e) => this.handleStateChange(e)}
                                />
                              </FormGroup>
                            </div>
                          </Row>
                        </Tab>
                        <Tab eventKey={3} title="Paypal">
                          <Row className="visa">
                            <div className="col-md-6 tab-name">
                              Paypal
                            </div>
                          </Row>
                          <Row className="visa">
                            <div className="col-md-6">
                              <FormGroup>
                                <FormControl
                                  type="text"
                                  value=""
                                  placeholder="4*** **** **** 2006"
                                  id="VisaNumber"
                                  onChange={(e) => this.handleStateChange(e)}
                                />
                              </FormGroup>
                            </div>
                          </Row>
                        </Tab>
                        <Tab eventKey={4} title="Bitcoin">
                          <Row className="visa">
                            <div className="col-md-6 tab-name">
                              Bitcoin
                            </div>
                          </Row>
                          <Row className="visa">
                            <div className="col-md-6">
                              <FormGroup>
                                <FormControl
                                  type="text"
                                  value=""
                                  placeholder="4*** **** **** 2006"
                                  id="VisaNumber"
                                  onChange={(e) => this.handleStateChange(e)}
                                />
                              </FormGroup>
                            </div>
                          </Row>
                        </Tab>
                        <Tab eventKey={5} title="Saved Cards">
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </div>
              }
            />
          </Col>
        </Row>
      </Grid>
    </div>)
  }
}

const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  user: state.getIn(['auth', 'user'])
  // planList: state.getIn(['plan', 'plan'])
});

const mapDispatchToProps = {
  updatePaymentMethod,
  createPayment,
  updateProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(UpgradeCard);
