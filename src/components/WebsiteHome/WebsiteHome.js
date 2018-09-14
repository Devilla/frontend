import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import NotificationView from './NotificationView';
import './WebsiteHome.scss';
import {
  Marvel,
  Illustration,
  Swivelscreen,
  sideScreen_1,
  arrow_up,
  NewIntegrate,
  NewInstall,
  NewGoLive

} from 'img';
import { browserHistory } from 'react-router';

class WebsiteHome extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  constructor() {
    super();
    this.state = {
      email: '',
      notificationPanelStyle :{ // TODO: Take style values from server
        radius: 5,
        borderWidth: 0,
        borderColor: {
          r: 200,
          g: 200,
          b: 200,
          a: 0.80
        },
        shadow: {
          r: 0,
          g: 0,
          b: 0,
          color: 'lightgrey'
        },
        blur: 0,
        color: {
          r: 0,
          g: 149,
          b: 247,
          a: 1
        },
        linkColor: {
          r: 0,
          g: 137,
          b: 216,
          a: 1
        },
        backgroundColor: {
          r: 255,
          g: 255,
          b: 255,
          a: 1
        },
        fontFamily: 'inherit',
        fontWeight: 'normal',
        linkFontFamily: 'inherit',
        linkFontWeight: 'normal',
        selectDurationData: 'hours',
        selectLastDisplayConversation: 'hours',
        bulkData: 5,
        liveVisitorCount: 0,
        recentNumber: 5,
        recentConv: 5,
        hideAnonymousConversion: true,
        onlyDisplayNotification: false,
        visitorText: ' people '
      },
      notificationTab: 1,
      animation: 'fadeInUp',
      display: 'none'
    };
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({ animation: 'fadeInUp slower', display: 'block', notificationTab: this.state.notificationTab == 3?1: this.state.notificationTab+1});
      setTimeout(() => {
        this.setState({animation: 'fadeOutDown slower'});
      }, 6000);
      setTimeout(() => {
        this.setState({display: 'none'});
      }, 7000);
    }, 8000);
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

    const { display, animation,notificationTab } = this.state;
    return (
      <div className="transition-item websitehome-container">
        <div className="main-container">
          <section className="pl-3 pr-3 pt-5 text-center row" data-overlay="0">
            <div className="container col-md-6 pt-5">
              <div className="row pb-5">
                <div className="main-title-container">
                  <h2 className="main-title">Boost your Sales and Leads conversions by 17% in less than 10 minutes! <br /> </h2>
                  <p className="typed-text typed-text--cursor sub-title pt-2"> Single line of 'code' <span>|</span> No tech-skills required <span>|</span> Trusted by 1000+ websites </p>
                </div>
              </div>
              <br />
              <div className="text-center pb-5 starttrial-form">
                <form className="form--horizontal row">
                  <div className="col-md-2 mr-1 pr-0 ml-0 pl-0"></div>
                  <div className="col-md-5 ml-0 pl-0 mr-0 pr-0"> <input type="text" name="email" placeholder="Enter your email" onChange={(e) => this.setState({ email: e.target.value })} /> </div>
                  <div className="col-md-3 ml-0 pl-0 mr-0 ml-0 pr-0 "> <button type="submit" onClick={() => browserHistory.push(`/signup?email=${this.state.email}`)} className="btn btn--primary freetrial-btn ml-0">Start Free Trial</button> </div>

                </form>
                <ul className="mobile-view">
                  <li className="bullet-inline">Free 7-day trial</li>
                  <li className="bullet-inline">Easy setup</li>
                  <li className="bullet-inline">Cancel any time</li>
                </ul>

              </div>
            </div>

            <div className="container col-md-5 pr-0 pt-4" style={{display: window && window.screen.availWidth<768?'none':'block'}}>
              <img alt="homescreen" src={sideScreen_1} className="mb-1" style={{height: '400px'}} />
              <div className="im1  website-home-top-image">
                <NotificationView tab={notificationTab} animation={animation} display={display} position='' notificationPanelStyle={this.state.notificationPanelStyle}/>
              </div>
            </div>

          </section>

          <div className="container mt-4 mb-5">
            <div className="row text-center notification-served-container">
              <div className="col-md-3">
                <div className="row">
                  <img alt="arrow-up" src={arrow_up} className="col-sm-1 num-arrow mr-0 mb-0 p-0" />
                  <h1 className="homescreen-num col-sm-7 mb-0 ml-0 p-0">0.25M+</h1>
                </div>
                <span className="homescreen-num-text">Notifications Served</span>
              </div>
              <div className="col-md-3">
                <div className="row">
                  <img alt="arrow-up" src={arrow_up} className="col-sm-1 num-arrow mr-0 mb-0 p-0" />
                  <h1 className="homescreen-num col-sm-7 mb-0 ml-0 p-0">1.2K+</h1>
                </div>
                <span className="homescreen-num-text">Happy Customers</span>
              </div>
              <div className="col-md-3">
                <div className="row">
                  <img alt="arrow-up" src={arrow_up} className="col-sm-1 num-arrow mr-0 mb-0 p-0" />
                  <h1 className="homescreen-num col-sm-7 mb-0 ml-0 p-0">100K+</h1>
                </div>
                <span className="homescreen-num-text">Website Impressions</span>
              </div>
              <div className="col-md-3">
                <div className="row">
                  <img alt="arrow-up" src={arrow_up} className="col-sm-1 num-arrow mr-0 mb-0 p-0" />
                  <h1 className="homescreen-num col-sm-7 mb-0 ml-0 p-0">1.8x</h1>
                </div>
                <span className="homescreen-num-text">Avg. Conversion Boosts</span>
              </div>
            </div>
          </div>

          <section className="col-md-12 p-0" style={{ backgroundColor: '#00B7FF' }} >
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6 text-left pt-5 pb-5 ">
                  <h2 className="color--white blue-strip-affiliate mb-0"> 1000+ brands are using Influence to get more sales </h2>
                </div>
                <div className="col-md-6 text-left">
                  <img src={Marvel} alt="img" className="enterprise-logo" />
                </div>
              </div>
            </div>
          </section>



          <section className="text-center pt-5">
            <div className="container ">
              <div className="row">
                <div className="col-md-10 col-lg-8">
                  <h2 className="pt-1 heading-texts mb-0">Features</h2>
                </div>
              </div>
            </div>
          </section>
          <section className="switchable feature-large unpad--bottom switchable--switch">
            <div className="container ">
              <div className="row justify-content-around">
                <div className="col-md-5 feature-text-1">
                  <div className="features-text switchable__text">
                    <h3 className="heading-texts-sub">Recent user activity</h3>
                    <p className="sub-title"> Show notifications of:</p> <br/>
                    <ol className="para-heading"><li className="para-text"> Recent Signups </li> <li className="para-text"> Recent Purchases</li> <li className="para-text"> Recent Subscriptions, and many more.. </li> </ol>
                    <Link to="/signup" className="btn btn-trial">Forever Free Trial »</Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-12 text-center">
                  <div className="mainImg">
                    <img alt="Swivelscreen" src={Swivelscreen} />
                    <Slider {...settings} className="im1">
                      <div><NotificationView tab='1' animation='' display='block' position='' notificationPanelStyle={this.state.notificationPanelStyle}/></div>
                      <div><NotificationView tab='1.1' animation='' display='block' position='' notificationPanelStyle={this.state.notificationPanelStyle}/></div>
                    </Slider>


                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="switchable feature-large unpad--bottom">
            <div className="container">
              <div className="row justify-content-around">
                <div className="col-md-5 feature-text-2">
                  <div className="switchable__text">
                    <h3 className="heading-texts-sub">Live user activity</h3>
                    <p className="sub-title"> Show live activity of:</p> <br/>
                    <ol className="para-heading"><li className="para-text"> Users active on the website </li> <li className="para-text"> Users viewing a product/page</li> <li className="para-text"> And many more customizations.. </li> </ol>
                    <Link to="/signup" className="btn btn-trial">Forever Free Trial »</Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-12 text-center">
                  <div className="mainImg">
                    <img alt="Swivelscreen" src={Swivelscreen} style={{marginleft: '1%'}} />

                    <Slider {...settings} className="im1">
                      <div><NotificationView tab='2' animation='' display='block' position='' notificationPanelStyle={this.state.notificationPanelStyle}/></div>
                      <div><NotificationView tab='2.1' animation='' display='block' position='' notificationPanelStyle={this.state.notificationPanelStyle}/></div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="switchable feature-large unpad--bottom switchable--switch">
            <div className="container">
              <div className="row justify-content-around">
                <div className="col-md-5 feature-text-3">
                  <div className="features-text switchable__text">
                    <h3 className="heading-texts-sub">Group activity</h3>
                    <p className="sub-title"> Show 'activity' over a period of time:</p> <br/>
                    <ol className="para-heading"><li className="para-text"> Total Signups happened</li> <li className="para-text"> Total Product Purchases</li> <li className="para-text"> Total Subscriptions, and many more.. </li> </ol>
                    <Link to="/signup" className="btn btn-trial">Forever Free Trial »</Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-12 text-center">
                  <div className="mainImg">
                    <img alt="Swivelscreen" src={Swivelscreen} />

                    <Slider {...settings} className="im1 fire-notification-container">
                      <div><NotificationView tab='3' animation='' display='block' position='' notificationPanelStyle={this.state.notificationPanelStyle}/></div>
                      <div><NotificationView tab='3.1' animation='' display='block' position='' notificationPanelStyle={this.state.notificationPanelStyle}/></div>
                    </Slider>

                  </div>
                </div>
              </div>
            </div>
          </section>




          <section className="bg-start pt-4 pb-5">
            <div className="container">
              <div className="row">
                <h2 className="col-md-12 text-center heading-texts"> Start in 5 minutes! </h2>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="text-center"> <img className="icon-n2 mb-3" alt="Image" src={NewInstall} style={{height: '4.7em', opacity: '0.9'}} />
                    <div className="">
                      <h3 className="heading-texts-sub mb-1">1. Create Campaign</h3>
                      <p className="start-para-text">Follow the no-brainer steps.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center"> <img className="icon-n2 mb-3" alt="Image" src={NewIntegrate} style={{height: '4.7em', opacity: '0.9'}} />
                    <div className="">
                      <h3 className="heading-texts-sub mb-1">2. Install Your Pixel</h3>
                      <p className="start-para-text"> Copy &amp; paste the pixel in the head tag of website.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center"> <img className="icon-n2 mb-3" alt="Image" src={NewGoLive} style={{height: '4.7em', opacity: '0.9'}} />
                    <div className="">
                      <h3 className="heading-texts-sub mb-1">3. Go Live</h3>
                      <p className="start-para-text"> Launch, sit back & relax!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="switchable col-md-12 mb-5 mt-5 pt-2">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-6 col-lg-5 integration-title">
                  <h2 className="main-title ml-0 mb-3 pr-0">Power up with Integrations</h2>
                  <p className="para-text mb-4 mr-5 pr-5"> Get upto 3x more conversion with integrations into your favorite tools.</p>
                  <Link className="btn btn--primary integration-btn" to="/integrations">
                    <span className="btn__text col-md-7">Integrations</span>
                  </Link>
                </div>
                <div className="col-md-6">
                  <img alt="Integration" src={Illustration}  className="integration-image"/>
                </div>
              </div>
            </div>
          </section>
          <section className="imagebg pt-4 pb-4" style={{ background: '#14BBFA' }}>
            <div className="container pb-5 pt-5">
              <div className="row">
                <div className="col-md-12">
                  <div className="cta cta-1 cta--horizontal text-center-xs">
                    <div className="row">
                      <div className="col-md-12 text-center ">
                        <span className="h2">Ready to boost up your conversion rates ?</span>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-12 text-center pb-2">
                        <Link className="btn btn-bottom" to="/signup"> <span className="btn__text2">Start forever free trial<br /></span> </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default WebsiteHome;
