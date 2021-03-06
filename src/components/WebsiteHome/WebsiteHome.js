import React, { Component } from 'react';
import { Link } from "react-router";
import Slider from 'react-slick';
import  './WebsiteHome.scss';

import {
  // HigherConversion,
  // SaveAcquisitions,
  // IncreaseVisitors,
  // SocialInfluence,
  // Device,
  // AnalyticsInsights,
  // EasiestSetup,
  // ActivityNotifications,
  // LiveViewers,
  // CustomerProfiles,
  // CustomerJourneys,
  // CustomeRules,
  // MobileReady,
  // Inc42,
  // Tnwg,
  // Yourstory,
  // HigherConversion2,
  // Saveonacquisitions2,
  // Visitortrust2,
  // Startconverting,
  // Socialinfluence2,
  // D12, B24,
  // Customerjourney5,
  // Analyticsinsights10,
  // Easiestsetup,
  // Marvel,
  // Activitynotifications2,
  // Liveviewers2,
  // Customerprofiles2,
  // Customerjourney2,
  // Customrules2,
  // Mobileready2,
  Marvel,
  Integration,
  Swivelscreen,
  Sw1,
  Sw2,
  LogoInfluence,
  Lawsikho,
  Stagephod,
  Userc,
  Userr,
  Carpathy


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
    
        <p><br /></p><hr className="my-auto col-md-6" />
 
        <section className="col-md-12 pl-0 pt-3 pr-0 unpad--bottom " style={{ backgroundColor: "#00B7FF" }} >
          <div className="container pt-5 pb-5">
            <div className="row  ">
            <div className="col-md-6 text-left pt-5 pb-5 ">
                <h2 className="color--white "> Thousands of brands are using Influence to get more customers </h2>
              </div>
              <div className="col-md-6 text-left pt-5 pb-5  pl-3">
                <img src={Marvel} alt="img" className="enterprise-logo"/>
              </div>
            </div>
          </div>
      </section>



          <section className="text-center pt-5">
            <div className="container ">
              <div className="row">
                <div className="col-md-10 col-lg-8">
                  <h1 className="pt-5">Features</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="switchable feature-large unpad--bottom switchable--switch">
            <div className="container ">
              <div className="row justify-content-around">
                <div className="col-md-6 my-auto">
                  <div className="switchable__text">
                    <h3>Recent user activity</h3>
                    <p className="lead"> You can show your recent user activity to all your visitors and push to buy sign up more for your offerings </p> <Link to="/">Learn More »</Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-12 text-center">
                  <div className="mainImg">
                    <img alt="Swivelscreen" src={Swivelscreen} />

                    <Slider {...settings} className="im1">
                      <div>
                        <img alt="Sw1" src={Userc} />
                      </div>
                      <div>
                        <img alt="Sw2" src={Userr} />
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
                    <h3>Live users activity</h3>
                    <p className="lead"> Show your visitors how many live people are seeing your offerings and influence them to buy from you <br /></p> <Link to="/">Learn More »</Link>
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
                    <h3>Group activity</h3>
                    <p className="lead">Show overall number of people that have signed up on your website <br /></p> <Link to="/">Learn More »</Link>
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
 

          <section className="col-md-12 pl-0 pt-3 pr-0  " style={{ backgroundColor: "#f3f0ee" }} >
            <div className="container pt-5 pb-5">

              <Slider {...settings}>
                <div>
                  <div className="row ">
                    <div className="col-md-4 text-left pt-5 pb-5  ">
                      <img src={Carpathy} alt="img" />
                    </div>
                    <div className="col-md-8 text-left pt-5 pb-5">
                      <p className="h3"> “We wanted a solution that could help us in increasing our conversions on our portal. We got an instant conversions boost after using Influence on our main portal ”  </p>
                      <p className="h5 lead"> – Carpathy, Akshat Lavania</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row ">
                    <div className="col-md-4 text-left pt-5 pb-5  ">
                      <img src={Stagephod} alt="img" />
                    </div>
                    <div className="col-md-8 text-left pt-5 pb-5">
                      <p className="h3"> “ We got an instant boost of 84% in our landing page conversions after using influence ”  </p>
                      <p className="h5 lead"> – Stagephod, Nikhilesh Tayal</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row ">
                    <div className="col-md-4 text-left pt-5 pb-5  ">
                      <img src={Lawsikho} alt="img" />
                    </div>
                    <div className="col-md-8 text-left pt-5 pb-5">
                      <p className="h3"> “Great Tool. Gave us instant boost of 36% on our landing pages on an average ”  </p>
                      <p className="h5 lead"> – LawSikho, Abhyudya Aggarwal </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </section>
          <section className="switchable col-md-12 mb-5 mt-5">
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
          <section className="imagebg " style={{ background: "#14BBFA" }}>
            <div className="container pb-5 pt-5">
              <div className="row">
                <div className="col-md-12">
                  <div className="cta cta-1 cta--horizontal text-center-xs">
                    <div className="row p-2">
                      <div className="col-md-12 text-center ">
                        <span className="h2">Ready to boost up your conversion rates ?</span>
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
