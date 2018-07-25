import React, { Component } from 'react';
import {connect} from 'react-redux';
import { browserHistory, Link } from 'react-router';
import moment from 'moment';
import { fetchPayment, fetchInvoices, downloadInvoice } from 'ducks/payment' ;
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  Table
} from 'react-bootstrap';

import Button from 'components/Template/customButton';
import './BillingDetails.scss';

const billingHeader = [
  'Billing Date', 'Amount', 'Transaction Id', 'Status', 'Download'
];

class BillingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planSelected: {}
    };
    props.fetchPayment();
    props.fetchInvoices();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile) {
      const { profile } = nextProps;
      let planSelected = profile ? profile.plan : {};
      this.setState({ planSelected });
    }
  }

  renderPaymentList() {
    if (this.props.invoices) {
      this.props.invoices.sort((a, b) => {
        return moment(a.created_at) < moment(b.created_at) ? 1 : moment(a.created_at) > moment(b.created_at) ? -1 : 0;
      });
      return this.props.invoices.map((invoice, index) => {
        return <tr className=" text-muted font-13" key={index}>
          <td className="name pl-3">{moment(invoice.created_at).format('DD MMM YYYY')}</td>
          <td className="email pl-4">${invoice.amount_due / 100}</td>
          <td className="location">{invoice.invoice_id}</td>
          <td>{invoice.paid?'Paid':'Not Paid'}</td>
          <td className="lastseen"><i className="fi-download pl-4" onClick={() => this.props.downloadInvoice(invoice.id)}></i></td>
        </tr>;
      });
    } else
      return <tr>
        <td>nothing</td>
      </tr>;
  }

  render() {
    const { planSelected } = this.state;
    const { profile } = this.props;
    console.log(planSelected, '============');
    return (
      <div className="content fill billing-details ml-1">
        <Grid fluid={true}>
          <Row className="inlineclr">
            <Col md={12}>
              <div className="card-box pt-0">
                <h4 className="header-title"><Link to="/Profile"><i className="icon-arrow-left mr-3"></i></Link>Billing Details</h4>
                <hr className="short"/>
                <div className="Billing-container">
                  <Row>

                    <div className="col-md-12  billing-buttons">

                      <Button
                        onClick={() => browserHistory.push('/Upgrade')}
                        className="btn btn-primary"
                        pullRight={true}
                        fill={true}
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
                          <div className="card-box">
                            <h4 className="header-title mt-0 m-b-20">Plan details</h4>
                            <div className="panel-body">
                              <hr />
                              <div className="text-left">
                                <div className="text-muted font-13">
                                  <strong>Current Plan : </strong>
                                  <span className="m-l-15">
                                    <FormGroup>
                                      <FormControl
                                        type="text"
                                        bsClass="form-control mt-4"
                                        id="campaignname"
                                        value={profile && profile.plan?profile.plan.name:''}
                                        disabled
                                      />
                                    </FormGroup>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="panel panel-default">
                          <div className="card-box">
                            <h4 className="header-title mt-0 m-b-20">Payment Info </h4>
                            <div className="panel-body">
                              <hr />
                              <div className="text-left">
                                <p className="text-muted font-13">
                                  <strong>Next Payment Due Date : </strong>
                                  <span className="m-l-15">
                                    {planSelected.updated_at ? moment(planSelected.updated_at).add(planSelected.interval_count, planSelected.interval).format('DD MMM YYYY') : '-'}
                                  </span>
                                </p>
                                <p className="text-muted font-13">
                                  <strong>Payment Method : </strong>
                                  <span className="m-l-15">
                                    {planSelected.interval ? 'Card' : '-'}
                                  </span>
                                </p>
                                <p className="text-muted font-13">
                                  <strong>Last Paid : </strong>
                                  <span className="m-l-15">
                                    {planSelected.updated_at ? moment(planSelected.updated_at).format('DD MMM YYYY') : '-'}
                                  </span>
                                </p>
                                <p className="text-muted font-13">
                                  <strong>Billing Cycle : </strong>
                                  <span className="m-l-15">
                                    {planSelected.interval ? (planSelected.interval.charAt(0).toUpperCase() + planSelected.interval.slice(1)) : '-'}
                                  </span>
                                </p>
                                <p className="text-muted font-13">
                                  <strong>Visitor Quota : </strong>
                                  <span className="m-l-15">
                                    {profile ? (profile.uniqueVisitorQouta ? profile.uniqueVisitorQouta.toLocaleString() : '') : '-'} Unique Visitors
                                  </span>
                                </p>
                                <p className="text-muted font-13">
                                  <strong>Visitor Quota Left : </strong>
                                  <span className="m-l-15">
                                    {profile ? (profile.uniqueVisitorQoutaLeft ? profile.uniqueVisitorsQoutaLeft.toLocaleString() : '') : '-'} Unique Visitors
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>


                    <div className="panel panel-default">
                      <div className="card-box">
                        <h4 className="header-title mt-0 m-b-20">Invoices </h4>

                        <Col md={12}>
                          <div className="text-left">
                            <Table className="table-striped">
                              <thead>
                                <tr>
                                  {
                                    billingHeader.map((prop, key) => {
                                      return (
                                        <th className=" h6" key={key}>{prop}</th>
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
                        </Col>

                      </div>
                    </div>

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
  fetchInvoices,
  downloadInvoice
};

export default connect(mapStateToProps, mapDispatchToProps)(BillingDetails);
