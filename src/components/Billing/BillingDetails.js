import React, {Component} from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import moment from 'moment';
import { fetchPayment, fetchInvoices } from 'ducks/payment' ;
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Table,
  Glyphicon
} from 'react-bootstrap';
import { browserHistory } from 'react-router';
import moment from 'moment';

import CardHeader from 'components/Template/card-with-header'
import Button from 'components/Template/customButton';
import { fetchPayment, fetchInvoices } from 'ducks/payment' ;

import './Billing.css';
import './BillingDetails.scss';

const billingHeader = [
	"Billing Date","Amount","Transaction Id","Interval", "Download"
];

class BillingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planSelected: {}
    };
    props.fetchPayment();
  }

  plansList() {
    const { planSelected } = this.state;
    if(planSelected) {
      return (
        <FormControl componentClass="select" placeholder="select" value={planSelected.name} disabled={true}>
          <option value="select">{planSelected.name}</option>
        </FormControl>
      );
    } else {
      <FormControl componentClass="select" placeholder="select" disabled={true}>
        <option value="select">No Plan Selected</option>
      </FormControl>
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.profile) {
      const { profile } = nextProps;
      let planSelected = profile?profile.plan:{};
      this.setState({planSelected});
    }
  }

  renderPaymentList() {
    if(this.props.payments) {
      this.props.payments.sort((a, b) => {
        return moment(a.createdAt) < moment(b.createdAt) ? 1 : moment(a.createdAt) > moment(b.createdAt) ? -1 : 0;
      })
      return this.props.payments.map((payment, index) => {
        return <tr key={index}>
           <td className="name">{moment(payment.createdAt).format('DD MMM YYYY')}</td>
           <td className="email">${payment.payment_plan.amount/100}</td>
           <td className="location">{payment.subscription_id}</td>
           <td className="country">{payment.payment_plan.interval.charAt(0).toUpperCase() + payment.payment_plan.interval.slice(1)}</td>
           <td className="lastseen"><Glyphicon glyph="download" /></td>
         </tr>
      })
    } else
      return <tr>nothing</tr>
  }

  render() {
    const { planSelected }  = this.state;
    const { profile } = this.props;
    return (
      <div className="content fill billing-details">
        <Grid fluid="fluid">
          <Row className="inlineclr">
            <Col md={12}>
              <div className="card-box pt-0">
                <hr/>
                <div className="Billing-container">
                  <Row>
                    <div className="col-md-4 billing-buttons float-right">
                      <Button
                        onClick={() => browserHistory.push('/Upgrade')}
                        className="btn btn-primary"
                        pullRight="pullRight" fill="fill"
                        type="button"
                        icon="cloud-upload"
                        disabled={false}
                      >
                            Upgrade Plan
                      </Button>

                      <Button
                        onClick={() => browserHistory.push('/card-details?type=upgrade')}
                        className="btn btn-primary"
                        pullRight={true}
                        fill={true}
                        type="button"
                        icon="usd"
                        disabled={false}
                      >
                          Payment Method
                      </Button>
                    </div>
                    <div className="clearfix"></div>
                  </Row>
                  <div className="billing-info-list">
                    <Row className="payment-info">
                      <Col md={6}>
                        <div className="panel panel-default">
                          <div className="panel-heading">Plan Details</div>
                          <div className="panel-body">
                            <FormGroup className="planUp" controlId="formControlsSelect">
                              <ControlLabel>Plan</ControlLabel>{this.plansList()}
                            </FormGroup>
                            <Row className="plan-info-details">
                              <div className="col-md-4">
                                Last Paid: {planSelected.interval?moment(planSelected.interval.updated_at).format('DD MMM YYYY'):"-"}
                              </div>
                              <div className="col-md-4">
                                Billing Cycle: {planSelected.interval?(planSelected.interval.charAt(0).toUpperCase() + planSelected.interval.slice(1)):"-"}
                              </div>
                            </Row>
                            <Row className="plan-info-details">
                              <div className="col-md-4">
                                Visitor Qouta: {profile?profile.uniqueVisitorQouta.toLocaleString():"-"} Unique Visitors
                              </div>
                              <div className="col-md-4">
                                Visitor Qouta Left: {profile?profile.uniqueVisitorsQoutaLeft.toLocaleString():"-"} Unique Visitors
                              </div>
                            </Row>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="payment-info">
                      <div className="panel panel-default">
                        <div className="panel-heading">Payment Info</div>
                        <div className="panel-body">
                          <div className="col-md-4">
                            Next Payment Due Date: {planSelected.interval?moment(planSelected.interval.updated_at).add(planSelected.interval_count, planSelected.interval).format('DD MMM YYYY'):"-"}
                          </div>
                          <div className="col-md-4">
                            Payment Method: {planSelected.interval?'Card':'-'}
                          </div>
                          <div className="col-md-2">
                          </div>
                        </div>
                      </div>
                    </Row>
                    <Row className="payment-info">
                      <div className="panel panel-default">
                        <div className="panel-heading">Invoices</div>
                        <div className="panel-body billing-list">
                          <Table hover className="table-responsive">
                            <thead>
                              <tr>
                                {
                                  billingHeader.map((prop, key) => {
                                      return (
                                      <th  key={key}>{prop}</th>
                                      );
                                  })
                                }
                              </tr>
                            </thead>
                            <tbody>
                               {this.renderPaymentList()}
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>  
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  payments: state.getIn(['payment', 'payments']),
  profile: state.getIn(['profile', 'profile']),
  invoices: state.getIn(['payment', 'invoices'])
});

const mapDispatchToProps = {
  fetchPayment,
  fetchInvoices
};

export default connect(mapStateToProps, mapDispatchToProps)(BillingDetails);
