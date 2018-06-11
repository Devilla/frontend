import React, {Component} from 'react';
import { Link } from "react-router";
import Switch from 'react-flexible-switch';


class WebsiteCustomprice extends Component {

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
  componentDidMount() {
    window.scrollTo(0,0);
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

  filterPlanName=(planName)=> {
    let res="";

    switch(true) {

      case /\b(Enterprise)\b/m.test(planName) :  res=  "Enterprise" ; break;
      case /\b(Advanced)\b/m.test(planName) :  res=  "Advanced"; break;
      case /\b(Small)\b/m.test(planName) :  res=  "Small"; break;
      case /\b(Startups)\b/m.test(planName) : res=  "Startups"; break;
    default :  break;
    
    }
    return res;

  }

  stellarFeel = (name) => {
    let stellar ="";
    this.filterPlanName(name) === "Advanced" ? stellar = "bg--primary" : stellar = "";
    return stellar;
  }

  renderPriceList() {

    let planList = this.state.servicebotPlans.filter(plan => this.state.planPeriod === 12 ? plan.interval==='year': plan.interval==='month');
    planList = planList.sort(function(a, b) {
      return b.id - a.id;
    });
    return planList.map(plan => {
      return <div className="col-md-3 pl-3 pr-0">
        <div className="pricing pricing-1  pr-0 pl-0">
     
      <div className={`pricing__head ${this.stellarFeel(plan.name) }  boxed boxed--border boxed--lg`}>
        <h3>{this.filterPlanName(plan.name)}</h3>
          <span className="h1">
            <span className="pricing__dollar">$</span><span>{plan.interval === 'year' ? plan.amount/1200 : plan.amount/100}</span></span>
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

          <Link className="btn btn--primary col-md-12 text-center" to="" >
            <span className="btn__text" >Access Now</span>
          </Link>
        </div>
      </div>
    })
  }

  render() {
    return (
    <div className="main-container">
      <section className="text-center">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-1 mr-0 text-left " id="leftmg"><div><strong onClick={this.handleMonthChange} className="h5 type--bold">Monthly</strong></div></div>
            <div className="col-md-1 col-sm-1 my-auto text-center pl-2">
              <Switch
                circleStyles={{ onColor: 'green', offColor: 'blue', diameter: 18 }}
                switchStyles={{ width: 40 }}
                cssClass="alignCenter"
                value={this.state.externalValue} onChange={this.handleSwitchChange}
              />
            </div>
            <div className="col-md-1 text-left my-auto pl-0 ml-0" ><strong onClick={this.handleYearChange} className="h5 type--bold">Yearly</strong></div>
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

          );
  }
}

export default WebsiteCustomprice;