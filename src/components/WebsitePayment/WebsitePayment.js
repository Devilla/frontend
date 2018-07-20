import React, { Component } from 'react';
import WebsitePrice from './WebsitePrice';
import WebsiteCheckout from './WebsiteCheckout';
import './WebsitePayment.scss';

class WebsitePayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planSelected: '',
      externalValue: true,
      planPeriod: 12,
      servicebotPlans: [],
      coupon: ''
    };
  }

  componentWillMount() {
    fetch('https://servicebot.useinfluence.co/api/v1/service-templates/public')
      .then((res) => res.json())
      .then((res) => {
        this.setState({servicebotPlans: res});
      });
  }

  componentDidMount() {
    let scrollElm = document.scrollingElement;
    scrollElm.scrollTop = 0;
  }

  handleMonthChange = () => {
    this.setState({externalValue: false, planPeriod: 1});
  }

  handleYearChange = () => {
    this.setState({externalValue: true, planPeriod: 12});
  }

  handleSwitchChange = (value) => {
    if (value) {
      this.setState({externalValue: true, planPeriod: 12});
    } else {
      this.setState({externalValue: false, planPeriod: 1});
    }
  }

  filterPlanName = (planName) => {
    let res='';

    switch(true) {
      case /\b(Enterprise)\b/m.test(planName) :  res=  'Enterprise' ; break;
      case /\b(Advanced)\b/m.test(planName) :  res=  'Advanced'; break;
      case /\b(Small)\b/m.test(planName) :  res=  'Small'; break;
      case /\b(Startups)\b/m.test(planName) : res=  'Startups'; break;
      default :  break;
    }
    return res;
  }

  stellarFeel = (name) => {
    let stellar ='';
    this.filterPlanName(name) === 'Advanced' ? stellar = 'bg--primary' : stellar = '';
    return stellar;
  }

  renderPriceList = () => {
    let planList;
    if(this.state.coupon) {
      planList = this.state.servicebotPlans.filter(plan => plan.references.service_template_properties.length && plan.references.service_template_properties[0].data.value === this.state.coupon.code);
    } else {
      planList = this.state.servicebotPlans.filter(plan =>
        (this.state.planPeriod == 12 ? plan.interval=='year': plan.interval=='month') &&
        (plan.references.service_template_properties[0].name !== 'coupon')
      );
    }

    planList.sort(function(a, b) {
      return b.amount - a.amount;
    });

    return planList.map(plan => {
      return <div key={plan.name} className="col-md-3 pl-3 pr-0">
        <div className="pricing pricing-1  pr-0 pl-0"  style={{minHeight:'700px'}}>
          <div className={`pricing__head ${this.stellarFeel(plan.name) }  boxed boxed--border boxed--lg`}>
            <h3>{this.filterPlanName(plan.name)}</h3>
            <span className="h1">
              <span className="pricing__dollar">$</span>
              <span>{plan.interval === 'year' ? plan.amount/1000 : plan.amount/100}</span>
            </span>
            {plan.interval === 'year' ?  <p className= {/\b(Advanced)\b/m.test(plan.name) ?' mt-0 mb-0' : 'type--fine-print mt-0 mb-0 '}><i> 2 Months FREE </i></p> :  ''}
          </div>
          <hr/>
          <ul className="h6 plan-list-ul">
            <li>
              <span className="bg--primary-1"></span>
              <span className="h3">
                <div className="plan-details" dangerouslySetInnerHTML={{ __html: plan.details }} />
              </span>
            </li><hr/>
            <li className="text-left pl-5">
              <span className="checkmark bg--primary-1"></span>
              <span className="h5 inline-block">
                Unlimited Notifications</span>
            </li>

            <li className="text-left pl-5">
              <span className="checkmark bg--primary-1"></span>
              <span className="h5 inline-block">Unlimited Domains</span>
            </li>
            <li className="text-left pl-5">
              <span className="checkmark bg--primary-1"></span>
              <span className="h5 inline-block">Custom Settings</span>
            </li>

            <li className="text-left pl-5">
              <span className="checkmark bg--primary-1"></span>
              <span className="h5 inline-block">Elite Club</span>
            </li>
            <li className="text-left pl-5">
              <span className="checkmark bg--primary-1"></span>
              <span className="h5 inline-block">Priority Support</span>
            </li>
            <li className="text-left pl-5">
              <span className="checkmark bg--primary-1"></span>
              <span className="h5 inline-block">Beta Features</span>
            </li>
            <li className="text-left pl-5">
              <span className=" bg--primary-1"></span>
              <span>&nbsp;</span>
            </li>
          </ul>

          {/*should hand;e the access now according to respective item*/}
          <div className="btn btn--primary col-md-12 text-center  starttrial-btn" onClick={() => {this.handlePlanSelect(plan);}} >
            <span className="btn__text">Start Free Trial</span>
          </div>
        </div>
      </div>;
    });
  }

  handlePlanSelect = (plan) => {
    this.setState({selectedPlan: plan});
  }

  clearSelectedPlan = (coupon) => {
    const selectedPlan = this.state.servicebotPlans.filter(plan => plan.references.service_template_properties.length && plan.references.service_template_properties[0].data.value === coupon.code);
    this.setState({ coupon: coupon, selectedPlan: selectedPlan[0]});
  }

  clearCoupon = () => {
    this.setState({coupon: ''});
  }

  render() {
    const { externalValue, selectedPlan, coupon } = this.state;
    return (
      <div className="website-payment-container">
        {!selectedPlan ?
          <WebsitePrice
            externalValue={externalValue}
            handleMonthChange={this.handleMonthChange}
            handleYearChange={this.handleYearChange}
            handleSwitchChange={this.handleSwitchChange}
            renderPriceList={this.renderPriceList}
          />
          :
          <WebsiteCheckout
            coupon={coupon}
            clearCoupon={this.clearCoupon}
            clearSelectedPlan={this.clearSelectedPlan}
            selectedPlan={selectedPlan}
          />
        }
      </div>
    );
  }
}

export default WebsitePayment;
