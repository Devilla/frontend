import React, {Component} from 'react';
import { Link } from "react-router";
import {
  Col
} from 'react-bootstrap';
import Switch from 'react-flexible-switch';
import { fetchPlan } from 'ducks/plan';

class WebsitePricing extends Component {

  constructor() {
    super();
    this.state = {
      checked: false,
      externalValue: true,
      country_code: 'USD',
      planPeriod: 12,
      servicebotPlans: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleSwitchChange = this.handleSwitchChange.bind(this);
  }

  componentWillMount() {
    fetch('https://servicebot.useinfluence.co/api/v1/service-templates/public')
    .then((res) => res.json())
    .then((res) => {
      this.setState({servicebotPlans: res});
    });
  }

  handleChange(checked) {
    this.setState({checked});
  }

  handleMonthChange() {
    this.setState({externalValue: false, planPeriod: 1});
  }

  handleYearChange() {
    this.setState({externalValue: true, planPeriod: 12});
  }

  handleSwitchChange(value) {
    if (value) {
      this.setState({externalValue: true, planPeriod: 12});
    } else {
      this.setState({externalValue: false, planPeriod: 1});
    }
  }

  renderPriceList() {
    let planList = this.state.servicebotPlans.filter(plan => this.state.planPeriod == 12 ? plan.interval=='year': plan.interval=='month')
    planList = planList.sort(function(a, b) {
      return b.id - a.id;
    });
    return planList.map(plan => {
      return <div className="col-md-3">
        <div className="pricing pricing-1 boxed boxed--border boxed--lg">
          <h4>{plan.name}</h4>
          <span className="h1">
            <span className="pricing__dollar">${plan.interval === 'year' ? plan.amount/1200 : plan.amount/100}</span></span>
          <span class="type--fine-print">Per Month</span>
          <hr/>
          <ul class="h6">
            <li>
              <span class="checkmark bg--primary-1"></span>
              <span>
                {plan.description}
              </span>
            </li><hr/>
            <li>
              <span class="checkmark bg--primary-1"></span>
              <span>
                Unlimited Notifications</span>
            </li>

            <li>
              <span class="checkmark bg--primary-1"></span>
              <span>Unlimited Domains</span>
            </li>
            <li>
              <span class="checkmark bg--primary-1"></span>
              <span>Custom Settings</span>
            </li>

            <li>
              <span class="checkmark bg--primary-1"></span>
              <span>Elite Club</span>
            </li>
            <li>
              <span class="checkmark bg--primary-1"></span>
              <span>&nbsp;</span>
            </li>
            <li>
              <span class="checkmark bg--primary-1"></span>
              <span>&nbsp;</span>
            </li>
            <li>
              <span class="checkmark bg--primary-1"></span>
              <span>&nbsp;</span>
            </li>
            <li>
              <span class="checkmark bg--primary-1"></span>
              <span>&nbsp;</span>
            </li>
          </ul>

          <Link className="btn btn--primary" to="">
            <span className="btn__text">Access Now</span>
          </Link>
        </div>
      </div>
    })
  }

  render() {
    return (<div className="main-container">
      <section className="text-center bg--secondary">
        <div className="container">
          <div className="row">
            <div className="col-md-11 col-lg-10">
              <h3>Simple, honest & affordable pricing&nbsp;</h3>
              <p className="lead h4">
                Enjoy any plan free for 7 days. Cancel anytime, No questions asked
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center unpad--bottom">
        <div className="container">

          <div className="row text-center">

            <div className="col-md-1 my-auto" id="leftmg">
              <div>
                <strong onClick={this.handleMonthChange}>Monthly</strong>
              </div>
            </div>
            <div className="col-sm-1 my-auto text-center">
              <Switch circleStyles={{
                  onColor: 'green',
                  offColor: 'blue',
                  diameter: 18
                }} switchStyles={{
                  width: 40
                }} cssClass="alignCenter" value=""
                value={this.state.externalValue} onChange={this.handleSwitchChange}
                // onChange={(e) => e != notification.activity ? handleActivityChange(e, notification._id, notification.configurationId) : null}
              />
            </div>
            <div className="col-md-1 text-left my-auto pl-0 ml-0">
              <strong onClick={this.handleYearChange}>Yearly</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="container">
          <div className="row">
            {this.renderPriceList()}
          </div>
        </div>
      </section>
      <section className="text-center imagebg" style={{
          background: 'linear-gradient(to left, #b721ff,#21d4fd)'
        }} data-gradient-bg="#b721ff,#21d4fd,#21d4fd,#b721ff">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span className="h3 my-auto">
                Looking for a Bigger Plan? &nbsp;
                <Link to="/contact">Contact us</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>);
  }
}

export default WebsitePricing;
