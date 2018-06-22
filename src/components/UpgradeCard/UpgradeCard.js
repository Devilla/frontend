import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { updatePaymentMethod, createPayment } from 'ducks/payment';
import { updateProfile } from 'ducks/profile';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
} from 'react-bootstrap';
import { Elements } from 'react-stripe-elements';
import Button from 'components/Template/customButton';
import StripeCard from './StripeCard';
import { browserHistory } from 'react-router';
import './UpgradeCard.scss';

class UpgradeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: 'upgrade',
      key: 1,
      activeClass: 1
    };
    this.handleSelect =  this.handleSelect.bind(this);
    this.makePayment = this.makePayment.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    if(this.props.location && this.props.location.query.type == 'upgrade')
      this.setState({currentState: 'upgrade'});
    else
      this.setState({currentState: 'payment'});
  }

  handleSelect(key) {
    this.setState({ key });
  }

  setActiveState(val) {
    this.setState({activeClass: val});
  }

  makePayment(data) {
    let profile = {
      plan: this.props.plan,
      id: this.props.profile._id,
      uniqueVisitorQouta: this.props.profile.uniqueVisitorQouta + Number(this.props.plan.description),
      uniqueVisitorsQoutaLeft: this.props.profile.uniqueVisitorsQoutaLeft + Number(this.props.plan.description)
    };
    this.props.createPayment(data, profile, true);
  }

  render() {
    const { updatePaymentMethod, plan, user } = this.props;
    const { currentState, activeClass } = this.state;
    return (<div className="content fill ">
      <Grid fluid={true}>
        <Row >
          <Col md={12}>
            <div className="card-box pt-0 pl-0">
              <h4 className="header-title text-left"><Link to="/Profile"><i className="icon-arrow-left mr-3"></i></Link>Upgrade your Plan</h4>
              <hr/>
              <div className = "upgrade-card-container" >
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="col-md-12">
                      <div className="card-box">
                        <ul className="nav nav-pills navtab-bg nav-justified pull-in new-campaign-tab-pills">
                          <li className="nav-item waves-effect">
                            <a data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 1?'active':''}`} onClick={() => this.setActiveState(1)}>
                              <i className="fi-layers mr-2"></i>Credit Card
                            </a>
                          </li>
                          <li className="nav-item waves-effect">
                            <a data-toggle="tab" aria-expanded="true" className={`nav-link ${activeClass == 2?'active':''}`} onClick={() => this.setActiveState(2)}>
                              <i className="fi-mail mr-2"></i>Debit Card
                            </a>
                          </li>
                          <li className="nav-item waves-effect">
                            <a data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 3?'active':''}`} onClick={() => this.setActiveState(3)}>
                              <i className="fi-layers mr-2"></i> Paypal
                            </a>
                          </li>
                          <li className="nav-item waves-effect">
                            <a data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 4?'active':''}`} onClick={() => this.setActiveState(4)}>
                              <i className="fi-layers mr-2"></i> Bitcoin
                            </a>
                          </li>
                          <li className="nav-item waves-effect">
                            <a data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 5?'active':''}`} onClick={() => this.setActiveState(5)}>
                              <i className="fi-layers mr-2"></i> Saved card
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div className={`tab-pane ${activeClass == 1?'show active':''}`} id="credit">
                            <Row>
                              <div className="col-md-12 tab-name mb-5 text-muted">
                                  Credit Card Details
                              </div>
                            </Row>
                            <Row className="visa  credit-card-details">
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
                          </div>

                          <div className={`tab-pane ${activeClass == 2?'show active':''}`} id="debit">
                            <Row className="visa">
                              <div className="col-md-6 tab-name mb-5 text-muted">
                                  Debit Card
                              </div>
                            </Row>
                            <Row className="visa">
                              <div className="col-md-4">
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
                            <Row className='upgrade-card-buttons'>
                              <div className='col-md-4 pull-left'>
                                <Button type='button' icon='chevron-left' bsStyle='primary' fill={true} onClick={() => browserHistory.push(currentState === 'upgrade' ? '/billing-details' : '/profile')}>&nbsp;&nbsp;Back&nbsp;&nbsp;</Button>
                              </div>

                            </Row>
                          </div>

                          <div className={`tab-pane ${activeClass == 3?'show active':''}`} id="paypal">
                            <Row className="visa">
                              <div className="col-md-6 tab-name mb-5 text-muted">
                                  Paypal
                              </div>
                            </Row>
                            <Row className="visa">
                              <div className="col-md-4">
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
                            <Row className='upgrade-card-buttons'>
                              <div className='col-md-4 pull-left'>
                                <Button type='button' icon='chevron-left' bsStyle='primary' fill={true} onClick={() => browserHistory.push(currentState === 'upgrade' ? '/billing-details' : '/profile')}>&nbsp;&nbsp;Back&nbsp;&nbsp;</Button>
                              </div>
                            </Row>
                          </div>
                          <div className={`tab-pane ${activeClass == 4?'show active':''}`} id="bitcoin">
                            <Row className="visa">
                              <div className="col-md-6 tab-name mb-5 text-muted">
                                  Bitcoin
                              </div>
                            </Row>
                            <Row className="visa">
                              <div className="col-md-4">
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
                            <Row className='upgrade-card-buttons'>
                              <div className='col-md-4 pull-left'>
                                <Button type='button' icon='chevron-left' bsStyle='primary' fill={true} onClick={() => browserHistory.push(currentState === 'upgrade' ? '/billing-details' : '/profile')}>&nbsp;&nbsp;Back&nbsp;&nbsp;</Button>
                              </div>

                            </Row>
                          </div>
                          <div className={`tab-pane ${activeClass == 5?'show active':''}`} id="savedcards">
                            <Row className="visa">
                              <div className="col-md-6 tab-name mb-5 text-muted">
                                  Saved Cards
                              </div>
                            </Row>
                            <Row className="visa">
                              <div className="col-md-4">
                                <FormGroup>
                                  <FormControl
                                    type="text"
                                    value=""
                                    placeholder="4*** **** **** 2006"
                                    id="VisaNumber"
                                    onChange={(e) => this.handleStateChange(e)}
                                    disabled
                                  />
                                </FormGroup>
                              </div>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>);
  }
}

const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  user: state.getIn(['auth', 'user'])
});

const mapDispatchToProps = {
  updatePaymentMethod,
  createPayment,
  updateProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(UpgradeCard);
