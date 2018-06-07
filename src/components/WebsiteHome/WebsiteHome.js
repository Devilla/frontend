import React, { Component } from 'react';
import { Link } from "react-router";
import Slider from 'react-slick';
import Swiver from './WebsiteHome.scss';

import {
  HigherConversion,
  SaveAcquisitions,
  IncreaseVisitors,
  SocialInfluence,
  Device,
  AnalyticsInsights,
  EasiestSetup,
  ActivityNotifications,
  LiveViewers,
  CustomerProfiles,
  CustomerJourneys,
  CustomeRules,
  MobileReady,
  Inc42,
  Tnwg,
  Yourstory,
  HigherConversion2,
  Saveonacquisitions2,
  Visitortrust2,
  Startconverting,
  Socialinfluence2,
  D12, B24,
  Customerjourney5,
  Analyticsinsights10,
  Easiestsetup,
  Activitynotifications2,
  Liveviewers2,
  Customerprofiles2,
  Customerjourney2,
  Customrules2,
  Mobileready2,
  Integration,
  Swivelscreen,
  Sw1,
  Sw2,
  LogoInfluence


} from 'img';
import { browserHistory } from 'react-router';

class WebsiteHome extends Component {

  constructor() {
    super();
    this.state = {
      email: ''
    }
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slideToShow: 1,
      slideToScroll: 1,
      autoplay: true
    };
    return (
      <div className="main-container">
        <section className="cover text-center parallax" data-overlay="0">
          <div className="container">
            <div className="row pb-5">
              <div className="col-md-10 col-lg-10 text-center">
                <h1 className="pt-2">Increase your website conversions using social proof notifications <br /> </h1>
                <p className="typed-text typed-text--cursor h3"> Use Influence and get <span className="type--bold" style={{ color: "#584EEF" }}>3x more business </span>right away &nbsp;</p>
              </div>
            </div>
            <br /> <br />
            <div className="text-center pb-5">
              <form className="form--horizontal row">
                <div className="col-md-3 mr-1 pr-0 ml-0 pl-0"></div>
                <div className="col-md-4 ml-0 pl-0 mr-0 pr-0"> <input type="text" name="email" placeholder="Enter your email" onChange={(e) => this.setState({ email: e.target.value })} /> </div>
                <div className="col-md-2 ml-0 pl-0 mr-0 pr-0"> <button type="submit" onClick={() => browserHistory.push(`/signup?email=${this.state.email}`)} className="btn btn--primary">Start Free Trial</button> </div>
              </form>
            </div>
          </div>
        </section>
        <section className="testimonials-1 space--xs bg--secondary">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <ul className="list-inline social-list">
                  <li className="list-inline-item"> <img alt="Image" className="image--xxs" src={Inc42} /> </li>
                  <li className="list-inline-item"> <img alt="Image" className="image--xxs" src={Tnwg} /> </li>
                  <li className="list-inline-item"> <img alt="Image" className="image--xxs" src={Yourstory} /> </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-10">
                <h2>Influence makes conversions easy</h2>
                <p className="lead"> Let your customers do the selling for you. <br /> Put a stamp of Social Proof to BOOST your conversions.</p>
              </div>
            </div>
          </div>
        </section>


        {/* NEW CHANGES ARE HERE !! */}




        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Link to="/" className="block">
                  <div className="feature boxed boxed--border border--round"> <img className="icon-n1" src={HigherConversion2} /> <span className="h4 color--primary"><h5>Higher conversion&nbsp;</h5></span> </div>
                </Link>
              </div>
              <div className="col-md-3">
                <Link to="/" className="block">
                  <div className="feature boxed boxed--border border--round"> <img className="icon-n1" src={Saveonacquisitions2} /> <span className="h4 color--primary"><h5>Save on acquisitions</h5></span> </div>
                </Link>
              </div>
              <div className="col-md-3">
                <Link to="/" className="block">
                  <div className="feature boxed boxed--border border--round"> <img className="icon-n1" src={Visitortrust2} /> <span className="h4 color--primary"><h5>Increase Visitors trust</h5></span> </div>
                </Link>
              </div>
              <div className="col-md-3">
                <Link to="/" className="block">
                  <div className="feature boxed boxed--border border--round"> <img className="icon-n1" src={Socialinfluence2} /> <span className="h4 color--primary"><h5>Social Influence</h5></span> </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="switchable bg--secondary">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-lg-6 col-md-6 my-auto ml-5">
                <h3 className="text-center">Start your conversion journey!</h3>
                <form>

                  <div className=" text-center ml-2 ">  <button type="submit" className="btn btn--primary col-md-7">Start your free trial</button> </div>

                </form>
              </div>
              <div className="col-lg-5 col-md-2 mr-5">
                <img alt="Conversion" src={Startconverting} />
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8">
                <h2>Features</h2>
                <p className="lead"> Let your customers do the selling for you. <br /> Put a stamp of Social Proof to BOOST conversions. <br /> Real-time Notifications for new visitors.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="switchable feature-large unpad--bottom switchable--switch">
          <div className="container ">
            <div className="row justify-content-around">
              <div className="col-md-6 my-auto">
                <div className="switchable__text">
                  <h3>Recent Activity Notifications</h3>
                  <p className="lead"> Show recent signups or purchases on your website. Get your existing customers to sell your products for you on an autopilot mode.</p> <Link to="/">Learn More »</Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-12 text-center">
                <div className="mainImg">
                  <img alt="Swivelscreen" src={Swivelscreen} />

                  <Slider {...settings} className="im1">
                    <div>
                      <img alt="Sw1" src={Sw1} />
                    </div>
                    <div>
                      <img alt="Sw2" src={Sw2} />
                    </div>
                  </Slider>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="switchable feature-large unpad--bottom">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-md-6 my-auto">
                <div className="switchable__text">
                  <h3>Show Live &amp; Realtime Activities</h3>
                  <p className="lead">Show live visitor count. Let your new visitors know they’re not the only ones buying from you. <br /></p> <Link to="/">Learn More »</Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-12 text-center">
                <div className="mainImg">
                  <img alt="Swivelscreen" src={Swivelscreen} />

                  <Slider {...settings} className="im1">
                    <div>
                      <img alt="Sw1" src={Sw1} />
                    </div>
                    <div>
                      <img alt="Sw2" src={Sw2} />
                    </div>
                  </Slider>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="switchable feature-large unpad--bottom switchable--switch">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-md-6 my-auto">
                <div className="switchable__text">
                  <h3>Text &amp; to be inserted here , Provide it</h3>
                  <p className="lead">Lorem ipsum are you aware of this technology <br /></p> <Link to="/">Learn More »</Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-12 text-center">
                <div className="mainImg">
                  <img alt="Swivelscreen" src={Swivelscreen} />

                  <Slider {...settings} className="im1">
                    <div>
                      <img alt="Sw1" src={Sw1} />
                    </div>
                    <div>
                      <img alt="Sw2" src={Sw2} />
                    </div>
                  </Slider>

                </div>
              </div>
            </div>
          </div>
        </section><hr />
        <section className="switchable feature-large unpad--bottom switchable--switch">
          <div className="container">
            <div className="row justify-content-around mt--2">
              <div className="col-md-6 my-auto">
                <div className="switchable__text">
                  <h3>Track Your Customer Journey</h3>
                  <p className="lead"> Get to know about the minute details of your customer's journey on your website. </p> <Link to="/">Learn More »</Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-7 col-12 text-center">
                <img alt="Image" src={Customerjourney5} />
              </div>
            </div>
          </div>
        </section>
        <section className="switchable feature-large">
          <div className="container">
            <div className="row justify-content-around mt--3 mb--3">
              <div className="col-md-6 my-auto">
                <div className="switchable__text">
                  <h3>Analytics &amp; Insights</h3>
                  <p className="lead"> Find the true identity of your users using our intelligence data servers. We keep on adding more features to your analytics.</p> <Link to="/">Learn More »</Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-7 col-12 text-center">
                <img alt="Image" src={Analyticsinsights10} />
              </div>
            </div><hr></hr>
          </div>
        </section>
        <section className="cover switchable text-center-xs switchable--switch">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6 col-lg-5">
                <h2>Easiest Setup!</h2>
                <p className="lead"> Anyone can setup Influence following few simple steps.</p>
                <Link className="btn btn--primary " to="#customise-template">
                  <span className="btn__text">Follow the steps</span>
                </Link>

              </div>
              <div className="col-md-6">
                <img alt="Image" src={Easiestsetup} />
              </div>
            </div>

          </div>
        </section>

        {/* <section className="text-center pb-2">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8">
                <h2>Tools you need to increase conversions</h2>
                <p className="lead"> An ever-growing stack of advance analytics &amp; conversion tools with proven results.</p>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="text-center unpad--bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-4 pr-0 pb-0 pl-0 pt-0">
                <div className="feature feature-3 boxed boxed--lg boxed--border pr-0 pb-0 pl-0 pt-0"> <img className="icon-n1 mb-0" src={Activitynotifications2} />
                  <h3>Activity Notifications&nbsp;</h3>
                  <p className="mb-0 lead h4"> Display recent sales &amp; activity and drive users to convert on your website. </p>
                </div>
              </div>
              <div className="col-md-4 pr-0 pb-0 pl-0 pt-0">
                <div className="feature feature-3 boxed boxed--lg boxed--border pr-0 pb-0 pl-0 pt-0"> <img className="icon-n1 mb-0" src={Liveviewers2} />
                  <h3>Live Viewers</h3>
                  <p className="mb-0 lead h4"> Show your new visitors that they are not the only ones on your website. Instill a 'Fear of missing out'.  </p>  <span className="label">New</span>
                </div>
              </div>
              <div className="col-md-4 pr-0 pb-0 pl-0 pt-0">
                <div className="feature feature-3 boxed boxed--lg boxed--border pr-0 pb-0 pl-0 pt-0"> <img className="icon-n1 mb-0" src={Customerprofiles2} />
                  <h3>Customer Profiles</h3>
                  <p className="mb-0 lead h4"> We will show you the true identities of your customers. Knowing more will help you in selling more!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4 pr-0 pb-0 pl-0 pt-0">
                <div className="feature feature-3 boxed boxed--lg boxed--border pr-0 pb-0 pl-0 pt-0"> <img className="icon-n1 mb-0" src={Customerjourney2} />
                  <h3>Customer Journeys</h3>
                  <p className="mb-0 lead h4"> Get to know about your customer's journey before it converts. </p>
                </div>
              </div>
              <div className="col-md-4 pr-0 pb-0 pl-0 pt-0">
                <div className="feature feature-3 boxed boxed--lg boxed--border pr-0 pb-0 pl-0 pt-0"> <img className="icon-n1 mb-0" src={Customrules2} />
                  <h3>Custom Rules</h3>
                  <p className="mb-0 lead h4"> Control notifications behavior on your website. Customize timings &amp; delays. </p>
                  <span className="label">New</span>
                </div>
              </div>
              <div className="col-md-4 pr-0 pb-0 pl-0 pt-0">
                <div className="feature feature-3 boxed boxed--lg boxed--border pr-0 pb-0 pl-0 pt-0"> <img className="icon-n1 mb-0" src={Mobileready2} />
                  <h3>Mobile Ready</h3>
                  <p className="mb-0 lead h4"> Show notifications to your mobile users as well. Customize behavior according to your user's location. </p>
                </div>
              </div>
            </div>
          </div>
        </section><hr /> */}

        <section className="col-md-12 pl-0 pt-3 pr-0  " style={{ backgroundColor: "#f3f0ee" }} >
          <div className="container pt-5 pb-5">

            <Slider {...settings}>
              <div>
                <div className="row ">
                  <div className="col-md-4 text-left pt-5 pb-5  ">
                    <img src={LogoInfluence} alt="img" />
                  </div>
                  <div className="col-md-8 text-left pt-5 pb-5">
                    <p className="h3"> “We wanted a solution that integrated all channels and that gave us the flexibility to implement in the way that we needed ”  </p>
                    <p className="h5 small-meta"> – Orlando Gadea Ros, Business Innovation Manager at Stanley Black & Decker </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="row ">
                  <div className="col-md-4 text-left pt-5 pb-5  ">
                    <img src={LogoInfluence} alt="img" />
                  </div>
                  <div className="col-md-8 text-left pt-5 pb-5">
                    <p className="h3"> “We wanted a solution that integrated all channels and that gave us the flexibility to implement in the way that we needed ”  </p>
                    <p className="h5 small-meta"> – Orlando Gadea Ros, Business Innovation Manager at Stanley Black & Decker </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="row ">
                  <div className="col-md-4 text-left pt-5 pb-5  ">
                    <img src={LogoInfluence} alt="img" />
                  </div>
                  <div className="col-md-8 text-left pt-5 pb-5">
                    <p className="h3"> “We wanted a solution that integrated all channels and that gave us the flexibility to implement in the way that we needed ”  </p>
                    <p className="h5 small-meta"> – Orlando Gadea Ros, Business Innovation Manager at Stanley Black & Decker </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        <section className="switchable col-md-12 mb-2">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6 col-lg-5">
                <h2>Power up with Integrations</h2>
                <p className="lead"> Get upto 3x more conversion with integrations into your favorite tools</p>
                <Link className="btn btn--primary " to="/integrations">
                  <span className="btn__text col-md-7">Integration</span>
                </Link>
              </div>
              <div className="col-md-6">
                <img alt="Integration" src={Integration} />
              </div>
            </div>
          </div>
        </section>
        <section className="imagebg" style={{ background: "#14BBFA" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="cta cta-1 cta--horizontal text-center-xs">
                  <div className="row p-2">
                    <div className="col-md-12 text-center ">
                      <span className="h2">This could be the begining of a beautiful relationship</span>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-12 text-center pb-2">
                      <Link className="btn btn--primary " to="/signup"> <span className="btn__text">Start my free trial<br /></span> </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WebsiteHome;
