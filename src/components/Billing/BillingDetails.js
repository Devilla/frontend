import React, { Component } from 'react';
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

import CardHeader from 'components/Template/card-with-header';
import Button from 'components/Template/customButton';

import './Billing.css';
import './BillingDetails.scss';

const billingHeader = [
  'Billing Date','Amount','Transaction Id','Interval', 'Download'
];

class BillingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planSelected: {}
    };
    props.fetchPayment();
    // props.fetchInvoices();
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
      </FormControl>;
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.payments != nextProps.payments && nextProps.payments.length) {
      const { payments } = nextProps;
      let planSelected = payments?payments[payments.length-1].payment_plan:{};
      planSelected['updated_at'] = payments?payments[payments.length-1].updated_at:'';
      this.setState({planSelected});
    }
  }

  renderPaymentList() {
    if(this.props.payments) {
      this.props.payments.sort((a, b) => {
        return moment(a.createdAt) < moment(b.createdAt) ? 1 : moment(a.createdAt) > moment(b.createdAt) ? -1 : 0;
      });
      return this.props.payments.map((payment, index) => {
        return <tr key={index}>
          <td className="name">{moment(payment.createdAt).format('DD MMM YYYY')}</td>
          <td className="email">${payment.payment_plan.amount/100}</td>
          <td className="location">{payment.subscription_id}</td>
          <td className="country">{payment.payment_plan.interval.charAt(0).toUpperCase() + payment.payment_plan.interval.slice(1)}</td>
          <td className="lastseen"><Glyphicon glyph="download" /></td>
        </tr>;
      });
    } else
      return <tr>nothing</tr>;
  }

  render() {
    const { planSelected }  = this.state;
    return (
      <div className="content fill billing-details">
        <Grid fluid="fluid">
          <Row className="inlineclr">
            <Col md={30}>
              <CardHeader title="Billing Details"
                content={
                  <div className="Billing-container">
                    <Row>
                      <div className="col-md-4 billing-buttons">
                        <Button onClick={() => browserHistory.push('/Profile')} icon="chevron-left" bsStyle="info" fill="fill" >Back To Profile</Button>
                      </div>
                      <div className="col-md-8 billing-buttons">
                        <div className="">
                          <Button onClick={() => browserHistory.push('/Upgrade')} bsStyle="info" pullRight="pullRight" fill="fill" type="button" icon="cloud-upload" disabled={false}>Upgrade Plan
                          </Button>
                        </div>
                        <div className="">
                          <Button onClick={() => browserHistory.push('/card-details?type=upgrade')} bsStyle="info" pullRight="pullRight" fill="fill" type="button" icon="usd" disabled={false}> Upgrade Payment
                          </Button>
                        </div>
                      </div>
                    </Row>
                    <div className="billing-info-list">
                      <Row className="payment-info">
                        <div className="panel panel-default">
                          <div className="panel-heading">Plan Details</div>
                          <div className="panel-body">
                            <FormGroup className="planUp" controlId="formControlsSelect">
                              <ControlLabel>Plan</ControlLabel>{this.plansList()}
                            </FormGroup>
                            <div className="col-md-4">
                              Last Paid: {planSelected.interval?moment(planSelected.interval.updated_at).format('DD MMM YYYY'):'-'}
                            </div>
                            <div className="col-md-2">
                              Billing Cycle: {planSelected.interval?(planSelected.interval.charAt(0).toUpperCase() + planSelected.interval.slice(1)):'-'}
                            </div>
                          </div>
                        </div>
                      </Row>
                      <Row className="payment-info">
                        <div className="panel panel-default">
                          <div className="panel-heading">Payment Info</div>
                          <div className="panel-body">
                            <div className="col-md-4">
                              Next Payment Due Date: {planSelected.interval?moment(planSelected.interval.updated_at).add(planSelected.interval_count, 'day').format('DD MMM YYYY'):'-'}
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
                  </div>}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  payments: state.getIn(['payment', 'payments']),
  invoices: state.getIn(['payment', 'invoices'])
});

const mapDispatchToProps = {
  fetchPayment,
  fetchInvoices
};

export default connect(mapStateToProps, mapDispatchToProps)(BillingDetails);
