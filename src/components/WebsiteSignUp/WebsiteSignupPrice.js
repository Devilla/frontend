import React, { Component } from 'react';
import { Link } from 'react-router';
import './WebsiteSignupPrice.scss';

class WebsiteSignupPrice extends Component {

  constructor() {
    super();
    this.state = {
      checked: false,
      externalValue: true,
      country_code: 'USD',
      planPeriod: 12,
      servicebotPlans: []
    };
  }

  componentWillMount() {
    fetch('https://servicebot.useinfluence.co/api/v1/service-templates/public')
      .then((res) => res.json())
      .then((res) => {
        this.setState({servicebotPlans: res});
      });
  }


  handleChange = (checked) => {
    this.setState({checked});
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

    let planList =this.state.servicebotPlans.filter(plan =>
      (this.state.planPeriod == 12 ? plan.interval=='year': plan.interval=='month') &&
      (plan.references.service_template_properties[0].name !== 'coupon')
    );
    return planList.map(plan => {
      return <div key={plan.name} className="col-md-3 pl-3 pr-0">
        <div className="pricing pricing-1  pr-0 pl-0"  style={{minHeight:'700px'}}>
          <div className={`pricing__head ${this.stellarFeel(plan.name) }  boxed boxed--border boxed--lg`}>
            <h3>{this.filterPlanName(plan.name)}</h3>
            <span className="h1">
              <span className="pricing__dollar">$</span>
              <span>{plan.interval === 'year' ? plan.amount/1200 : plan.amount/100}</span>
            </span>
          </div>
          <hr/>
          <ul className="h6 ">
            <li>
              <span className="bg--primary-1"></span>
              <span className="h3">
                {plan.description}
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
              <span className="checkmark bg--primary-1"></span>
              <span className="h5 inline-block">White Label</span>
            </li>
            <li className="text-left pl-5">
              <span className=" bg--primary-1"></span>
              <span>&nbsp;</span>
            </li>
          </ul>


          {/*should hand;e the access now according to respective item*/}
          <Link className="btn btn--primary col-md-12 text-center  starttrial-btn" to="/signup" >
            <span className="btn__text" onClick={(e) => {this.props.handleCheckChange(e);}}>Start Free Trial</span>
          </Link>
        </div>
      </div>;
    });
  }

  render() {
    return (
      <div className="websitesignuppricing-container">
        <div className="main-container">
          <h2 className="text-center btn" disabled  > STEP 2</h2>
          <p className="plantitle"> &nbsp;&nbsp;Choose Your Dream Plan.</p>
          <section className="text-center no-brdr-top">
            <div className="container">
              <div className="row justify-content-center">
               
                <div className="col-md-1 mr-0 text-left " id="leftmg"><div><strong onClick={this.handleMonthChange} className="h5 type--bold">Monthly</strong></div></div>
                <div className="col-md-1 col-sm-1 my-auto text-center pl-2">
                  <input className="tgl tgl-ios" id="cb2" type="checkbox"  defaultChecked={this.state.externalValue}/>
                  <label className="tgl-btn toggleId"  htmlFor="cb2"  onClick={() => this.handleSwitchChange(!this.state.externalValue)}></label>
                </div>
                <div className="text-left my-auto" ><strong onClick={this.handleYearChange} className="h5 type--bold">Yearly</strong></div>
              </div>

            </div>
          </section>

          <section className="text-center unpad--top">
            <div className="container">
              <div className="row">
                {this.renderPriceList()}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default WebsiteSignupPrice;
