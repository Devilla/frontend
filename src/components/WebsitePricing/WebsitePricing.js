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
      return <div className="col-md-3 pl-0 pr-0">
        <div className="pricing pricing-1 boxed boxed--border boxed--lg pr-0 pl-0">
          <h4>{plan.name}</h4>
          <span className="h1">
            <span className="pricing__dollar">${plan.interval === 'year' ? plan.amount/1200 : plan.amount/100}</span></span>
          <span className="type--fine-print">Per Month</span>
          <hr/>
          <ul className="h6">
            <li>
              <span className="bg--primary-1"></span>
              <span className="h3">
                {plan.description}
              </span>
            </li><hr/>
            <li className="text-left pl-5">
              <span className="checkmark bg--primary-1"></span>
              <span>
                Unlimited Notifications</span>
            </li>

            <li className="text-left pl-5">
              <span className="checkmark bg--primary-1"></span>
              <span>Unlimited Domains</span>
            </li>
            <li className="text-left pl-5">
              <span className="checkmark bg--primary-1"></span>
              <span>Custom Settings</span>
            </li>

            <li className="text-left pl-5">
              <span className="checkmark bg--primary-1"></span>
              <span>Elite Club</span>
            </li>
            <li className="text-left pl-5">
              <span className="checkmark bg--primary-1"></span>
              <span>Priority Support</span>
            </li>
            <li className="text-left pl-5">
              <span className="checkmark bg--primary-1"></span>
              <span>Beta Features</span>
            </li>
            <li className="text-left pl-5">
              <span className="checkmark bg--primary-1"></span>
              <span>White Label</span>
            </li>
            <li className="text-left pl-5">
              <span className=" bg--primary-1"></span>
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
            <div className="col-md-1 my-auto" id="leftmg"><div><strong onClick={this.handleMonthChange}>Monthly</strong></div></div>
            <div className="col-sm-1 my-auto text-center">
              <Switch
                circleStyles={{ onColor: 'green', offColor: 'blue', diameter: 18 }}
                switchStyles={{ width: 40 }}
                cssClass="alignCenter"
                value={this.state.externalValue} onChange={this.handleSwitchChange}
              />
            </div>
            <div className="col-md-1 text-left my-auto pl-0 ml-0" ><strong onClick={this.handleYearChange}>Yearly</strong></div>
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

        <section className="bg--secondary">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="text-block">
                                <h4>Frequently Asked Questions</h4>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-block">
                                <h5 className="mb-2">What do you mean by visitors?</h5>
                                <p className="type--fine-print text-justify">
                                    The billing counts unique visitors as the metric for billing. A unique visitor is the one who visits the website page where the pixel code is installed. A visitor can visit the page multiple times on all the pixelated pages but that will be counted as one unique visit only.
                                </p>
                            </div>
                            <div className="text-block">
                                <h5 className="mb-2">But will it work for me?</h5>
                                <p className="type--fine-print text-justify">
                                    Influence works for all the websites and platforms that are out there. We are rolling out more and more integrations every month so that you can sync them up with your favorite services and marketing tools. You can even see the integrations we have listed on our integrations section.
                                </p>
                            </div>
                            <div className="text-block">
                                <h5 className="mb-2">Will Influence work for all the customers on my website?</h5>
                                <p className="type--fine-print text-justify">
                                    Influence not only works for customer details capturing, but it also works for lead captures, webinar pages and other places where you can capture the customer’s details. &nbsp;
                                    <a href="#">Contact Us</a> for info.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-block">
                                <h5 className="mb-2">Are these notifications legit?</h5>
                                <p className="type--fine-print text-justify">
                                     When we thought of building this product, we thought of helping brands and customers bring transparency to each other in the nicest possible manner. If we get to work together and you use our product, all the notifications that you will see on your website will be 100% legit and the data would be the one which your customers would use.

                                </p>
                            </div>
                            <div className="text-block">
                                <h5 className="mb-2">Can I cancel it anytime?</h5>
                                <p className="type--fine-print text-justify">
                                    Yes. You can cancel the subscription whenever you want. If you are in monthly contract you will only be billed on a monthly basis.
                                </p>
                            </div>
                            <div className="text-block">
                                <h5 className="mb-2">What will happen if I get more unique visitors on plan? Will it charge me automatically?</h5>
                                <p className="type--fine-print text-justify">
                                     Once you start inching closer to your traffic limit, we’ll send you notifications before you even actually hit that limit. Once you go above your plan limit we’ll automatically upgrade you for the next plan after your consent for payment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


      </div>
    );
  }
}

export default WebsitePricing;
