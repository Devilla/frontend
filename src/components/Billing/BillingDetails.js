import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import Loading from 'react-loading-animation';
import StripeCard from '../UpgradeCard/StripeCard';
import { Elements } from 'react-stripe-elements';
import { updatePaymentMethod, fetchCards } from 'ducks/payment';

import { fetchInvoices, downloadInvoice } from 'ducks/payment' ;
import {
  Row,
  Col
} from 'react-bootstrap';

import './BillingDetails.scss';
import { UpgradePlan } from 'components';
import { BetaPlanIcon } from 'img';

const billingHeader = [
  'Billing Date', 'Amount', 'Transaction Id', 'Status', 'Download'
];

class BillingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planSelected: '',
      openCloseRowOne: false,
      openCloseRowTwo: false,
      openCloseRowThree: false,
      error: '',
      goback:  false,
      show: false,
      showSavedCards: false,
      showAddCard: false,
      cvv: '',
      planList: []
    };
    props.fetchInvoices();
    props.fetchCards();
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  renderPaymentList() {
    if (this.props.invoices) {
      this.props.invoices.sort((a, b) => {
        return moment(a.created_at) < moment(b.created_at) ? 1 : moment(a.created_at) > moment(b.created_at) ? -1 : 0;
      });
      return this.props.invoices.map((invoice, index) => {
        return <div className="campaign-td2 text-muted font-13" key={index}>
          <div className="name col-md-2 pl-3">{moment(invoice.created_at).format('DD MMM YYYY')}</div>
          <div className="email col-md-2 pl-4">${invoice.amount_due / 100}</div>
          <div className="location col-md-2">{invoice.invoice_id}</div>
          <div className="col-md-2">{invoice.paid?'Paid':'Not Paid'}</div>
          <div className="lastseen col-md-2"><i className="fi-download pl-4" onClick={() => this.props.downloadInvoice(invoice.id)}></i></div>
        </div>;
      });
    } else
      return <div>
        <div>nothing</div>
      </div>;
  }

  openCloseRowOne = (e) => {
    if(e.target.className === 'btn btn-primary')
      return;
    this.setState({openCloseRowOne: !this.state.openCloseRowOne});
  }

  openCloseRowTwo = () => {
    this.setState({openCloseRowTwo: !this.state.openCloseRowTwo});
  }

  openCloseRowThree = () => {
    this.setState({openCloseRowThree: !this.state.openCloseRowThree});
  }

  handleError = (error) => {
    this.setState({error: error});
  }

  arrowUpClick = () => {
    this.setState({ show : !this.state.show});
  }

  openCloseSavedCards = () => {
    this.setState({showSavedCards: !this.state.showSavedCards});
  }

  openCloseAddCard = () => {
    this.setState({showAddCard: !this.state.showAddCard});
  }

  handleSelectedPlan = (plan) => {
    this.setState({planSelected: plan , openCloseRowOne: true, show: true });
  }

  handleCvv = (e) => {
    this.setState({cvv: e.target.value});
  }

  handleCardSelect = (e) => {
    this.setState({selectedCard: e.target.id});
  }

  renderSavedCards = () => {
    const { cards } = this.props;
    const { selectedCard } = this.state;

    if(cards && cards.length)
      return cards.map(savedCard => {
        const card = savedCard.source.card;
        return (
          <Row key={card.id} className="billing-final-info-bottom charge">
            <div className="form-check">
              <label className="form-check-label">
                <input type="radio" id={card.id} className="form-check-input" name="optradio" onChange={(e) => this.handleCardSelect(e)} />
                <img
                  style={
                    card.brand == 'Visa'?
                      { width: '20%', margin: '3px 0px', height: '15px' }
                      :
                      card.brand == 'MasterCard'?
                        { width: '18%', margin: '-5px 0px', height: '25px' }
                        :
                        { width: '25%', margin: '2px 0px', height: '20px' }
                  }
                  src={
                    card.brand == 'Visa'?
                      'http://www.careersinafrica.com/wp-content/uploads/sites/2/2016/01/visa_logo_blu.png'
                      :
                      card.brand == 'MasterCard'?
                        'https://content.heropay.com/wp-content/uploads/2016/11/MasterCard_Logo.png'
                        :
                        'http://www.adcbank.coop/images/rupay.png'
                  }
                />
                <h4>{card.brand} ending in {card.last4}</h4>
              </label>
            </div>
            <h4>{card.name}</h4>
            <h4>{card.exp_month}/{card.exp_year}</h4>
            <div className="form-group">
              <input type="text" className="form-control" id="cvv" placeholder="CVV" onChange={this.handleCvv} disabled={card.id != selectedCard}/>
            </div>
          </Row>
        );
      });
    else
      return (
        <Row className="billing-final-info-bottom charge" style={{justifyContent: 'center'}}>
          <h4>No card saved</h4>
        </Row>
      );
  }

  setPlanList = (planList) => {
    planList.map(plan => {
      if(this.props.params.planId == plan.id)
        this.handleSelectedPlan(plan);
    });
    this.setState({planList});
  }

  render() {
    const { planSelected, error, show, showSavedCards, showAddCard, cvv, selectedCard } = this.state;
    const { profile } = this.props;
    const { openCloseRowOne, openCloseRowTwo, openCloseRowThree } = this.state;

    return (
      <Loading className="transition-item billing-transition-container" style={{width: '10%', height: '700px'}} strokeWidth='2' isLoading={!profile}>

        <div className="billing-container">
          <Row className="billing-row" onClick={(e) => this.openCloseRowOne(e)}>
            <Col md={4} className="row-one-col-one">
              <img src={ BetaPlanIcon } />
              <h5>{planSelected?planSelected.name:profile && profile.plan?profile.plan.name:'SPROUT'}</h5>
            </Col>
            <Col md={5} className="row-one-col-two">
              <div>
                <h6>Billed Monthly</h6>
                <span>Next Billing on {profile && profile.plan ? moment(profile.plan.updated_at).add(profile.plan.interval_count, profile.plan.interval).format('MMMM Do, YYYY') : '-'}</span>
              </div>
            </Col>
            <Col md={3} className="row-one-col-three">
              <button className="btn btn-primary" data-toggle="modal" data-target="#upgradePlanModal">Upgrade Plan</button>
              <i className={openCloseRowOne?'fa fa-angle-up':'fa fa-angle-down'}></i>
            </Col>
          </Row>

          <Row className="billing-info billing-info-one" style={{ display: openCloseRowOne?'block':'none' }}>
            <Col md={12} className="billing-info-one-col-one">
              <Row className="billing-final-info-one estimate">
                <h4>Estimated charge for next cycle</h4>
                <h4>${planSelected?(planSelected.amount/100):0}</h4>
                <i className={show?'fa fa-angle-up drop-down':'fa fa-angle-down drop-down'} onClick={this.arrowUpClick}></i>
              </Row>
              {show ?
                <Row className="billing-final-info-one-bottom estimate">
                  <hr className="style3"></hr>
                  <Row className="billing-final-info-bottom charge">
                    <h4>Plan Details</h4>
                    <h4><div className="font-desc" dangerouslySetInnerHTML={{ __html:  planSelected?planSelected.details:'' }} /> </h4>
                    <h4>${planSelected?(planSelected.amount/100):0}</h4>
                  </Row>
                </Row>
                :
                null
              }

              <Row className="billing-final-info-two estimate">
                <h4>You Pay</h4>
                <h4>${planSelected?(planSelected.amount/100):0}</h4>
              </Row>
            </Col>
          </Row>

          <Row className="billing-row" onClick={this.openCloseRowTwo}>
            <Col md={1} className="row-two-col-one">
              <i className="fa fa-credit-card"></i>
            </Col>
            <Col md={10} className="row-two-col-two">
              <h5>ADD CARD DETAILS</h5>
            </Col>
            <Col md={1} className="row-two-col-three">
              <i className={openCloseRowTwo?'fa fa-angle-up':'fa fa-angle-down'}></i>
            </Col>
          </Row>
          <Row className="billing-info billing-info-two" style={{ display: openCloseRowTwo?'block':'none' }}>
            <Col md={12} className="billing-info-two-col-one">
              <Row className="billing-final-two-info-two estimate" onClick={this.openCloseSavedCards}>
                <h4>Saved Cards</h4>
                <i className={showSavedCards?'fa fa-angle-up drop-down':'fa fa-angle-down drop-down'}></i>
              </Row>
              {showSavedCards ?
                <Row className="billing-final-two-info-two-bottom estimate">
                  <hr className="style3"></hr>
                  {this.renderSavedCards()}
                  <Row className="billing-final-info-bottom-two">
                    <button className="btn btn-primary" disabled={!selectedCard || !cvv || cvv.length != 3}>Make Payment</button>
                  </Row>
                </Row>
                :
                null
              }

              <Row className="billing-final-two-info-two estimate" onClick={this.openCloseAddCard}>
                <h4>Add New Card</h4>
                <i className={showAddCard?'fa fa-angle-up drop-down':'fa fa-angle-down drop-down'}></i>
              </Row>
              {showAddCard ?
                <Row className="billing-final-two-info-two-bottom estimate">
                  <hr className="style3"></hr>
                  <Elements>
                    <StripeCard
                      currentState='upgrade'
                      error={error}
                      handleError={this.handleError}
                      updatePaymentMethod={updatePaymentMethod}
                    />
                  </Elements>
                </Row>
                :
                null
              }
            </Col>
          </Row>
          <Row className="billing-row" onClick={this.openCloseRowThree}>
            <Col md={1} className="row-three-col-one">
              <i className="fa fa-file-text-o"></i>
            </Col>
            <Col md={10} className="row-three-col-two">
              <h5>INVOICE</h5>
            </Col>
            <Col md={1} className="row-three-col-three">
              <i className={openCloseRowThree?'fa fa-angle-up':'fa fa-angle-down'}></i>
            </Col>
          </Row>
          <Row className="billing-info billing-info-three" style={{ display: openCloseRowThree?'block':'none' }}>
            <div className="table-responsive">
              <div className="table table-striped">
                <div className="thead">
                  <div className="tr tab-row2">
                    {
                      billingHeader.map((prop, key) => {
                        return (
                          <div className="col-md-2" key={key}>{prop}</div>
                        );
                      })
                    }
                  </div>
                </div>
                <div className="tbody">
                  {this.renderPaymentList()}
                </div>
              </div>
            </div>
          </Row>
        </div>
        <UpgradePlan plan={planSelected?planSelected:profile && profile.plan?profile.plan:''} handleSelectedPlan={this.handleSelectedPlan} setPlanList={this.setPlanList} />
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  invoices: state.getIn(['payment', 'invoices']),
  cards: state.getIn(['payment', 'cards'])
});

const mapDispatchToProps = {
  fetchInvoices,
  downloadInvoice,
  updatePaymentMethod,
  fetchCards
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(BillingDetails);
