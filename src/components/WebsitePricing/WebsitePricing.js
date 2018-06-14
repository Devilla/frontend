import {React,fetch, Component} from 'react';
import { Link } from 'react-router';
import Switch from 'react-flexible-switch';

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
    fetch('https://servicebot.useinfluence.co/api/v1/service-templates/public').then((res) => res.json()).then((res) => {
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

  renderPriceList() {
    let planList = this.state.servicebotPlans.filter(plan => this.state.planPeriod === 12 ? plan.interval==='year': plan.interval==='month');
    planList = planList.sort(function(a, b) {
      return b.id - a.id;
    });
    return planList.map(plan => {
      return <div className="col-md-3 pl-0 pr-0">
        <div className="pricing pricing-1 boxed boxed--border boxed--lg pr-0 pl-0">


          <h3>{this.filterPlanName(plan.name)}</h3>
          <span className="h1">
            <span className="pricing__dollar">${plan.interval === 'year' ? plan.amount/1200 : plan.amount/100}</span></span>

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

          <Link className="btn btn--primary col-md-12 text-center" to="">
            <span className="btn__text">Access Now</span>
          </Link>
        </div>
      </div>;
    });
  }

  render() {
    return (<div className="main-container">
      <section className="text-center bg--secondary">
        <div className="container">
          <div className="row">
            <div className="col-md-11 col-lg-10">
              <h2>Simple, honest & affordable pricing&nbsp;</h2>
              <p className="lead h4">
                Enjoy any plan free for 7 days. Cancel anytime, No questions asked
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-1 mr-3 text-left " id="leftmg"><div><strong onClick={this.handleMonthChange} className="h3 type--bold">Monthly</strong></div></div>
            <div className="col-md-1 col-sm-1 my-auto text-center pl-4">
              <Switch
                circleStyles={{ onColor: 'green', offColor: 'blue', diameter: 18 }}
                switchStyles={{ width: 40 }}
                cssClass="alignCenter"
                value={this.state.externalValue} onChange={this.handleSwitchChange}
              />
            </div>
            <div className="col-md-1 text-left my-auto pl-0 ml-0" ><strong onClick={this.handleYearChange} className="h3 type--bold">Yearly</strong></div>
          </div>
        </div>
      </section>

      <section className="text-center unpad--top">
        <div className="container">
          <div className="row">
            {this.renderPriceList()}
          </div>
        </div>
      </section><hr className="my-auto col-md-6" />
      <section className="text-center pt-5 mt-4 mb-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-10 col-lg-7">
              <div className="cta">

                <span className="h2 my-auto pb-5">
                Looking for a Bigger Plan? &nbsp;

                </span>
                <Link className="btn btn--primary " to=""><span className="btn__text">Contact Us</span><br/></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="text-center imagebg" style={{
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
      </section> */}

      <section className="bg--secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-block">
                <h2 className="pt-3">Frequently asked questions
                </h2><h4>  Need more help? Check out our Help Center </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-block">
                <h4 className="mb-2 type--bold">What do you mean by visitors?</h4>
                <p className="type--fine-print text-justify  h3">
                                    The billing counts unique visitors as the metric for billing. A unique visitor is the one who visits the website page where the pixel code is installed. A visitor can visit the page multiple times on all the pixelated pages but that will be counted as one unique visit only.
                </p>
              </div>
              <hr/>
              <div className="text-block">
                <h4 className="mb-2 type--bold">But will it work for me?</h4>
                <p className="type--fine-print text-justify h3">
                                    Influence works for all the websites and platforms that are out there. We are rolling out more and more integrations every month so that you can sync them up with your favorite services and marketing tools. You can even see the integrations we have listed on our integrations section.
                </p>
              </div>
              <hr/>
              <div className="text-block ">
                <h4 className="mb-2 type--bold">Will Influence work for all the customers on my website?</h4>
                <p className="type--fine-print text-justify h3">
                                    Influence not only works for customer details capturing, but it also works for lead captures, webinar pages and other places where you can capture the customer’s details. &nbsp;

                </p>
              </div>

              <hr/>
              <div className="text-block ">
                <h4 className="mb-2 type--bold">Are these notifications legit?</h4>
                <p className="type--fine-print text-justify h3">
                                     When we thought of building this product, we thought of helping brands and customers bring transparency to each other in the nicest possible manner. If we get to work together and you use our product, all the notifications that you will see on your website will be 100% legit and the data would be the one which your customers would use.

                </p>
              </div>
              <hr/>
              <div className="text-block ">
                <h4 className="mb-2 type--bold">Can I cancel it anytime?</h4>
                <p className="type--fine-print tesxt-justify h3">
                                    Yes. You can cancel the subscription whenever you want. If you are in monthly contract you will only be billed on a monthly basis.
                </p>
              </div>
              <hr/>
              <div className="text-block">
                <h4 className="mb-2 type--bold">What will happen if I get more unique visitors on plan? Will it charge me automatically?</h4>
                <p className="type--fine-print text-justify h3">
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
