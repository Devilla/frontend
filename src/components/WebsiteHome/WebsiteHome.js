import React, { Component } from 'react';
import { Link } from "react-router";
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
} from 'img';

class WebsiteHome extends Component {

  render() {
    return (
      <div className="main-container">
        <section className="cover imagebg text-center parallax" data-overlay="0">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-10">
                <h1>Increase your website conversions using social proof notifications <br/> </h1>
                <p className="lead col-md-12 text-center"> Influence helps you in converting more customers on your website by showing recent customer activity on your web pages </p>
                <div className="">
                  <form className="form--horizontal row">
                    <div className="col-md-6"> <input type="text" name="email" placeholder="Enter your email" /> </div>
                    <div className="col-md-6"> <button type="submit" className="btn btn--primary type--uppercase">start your free trial</button> </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-1 space--xs bg--secondary">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <p className="lead">You are at right place, we work with amazing companies.<br /></p>
              </div>
              <div className="col-md-8">
                <ul className="list-inline social-list">
                  <li className="list-inline-item"> <img alt="Image" className="image--xxs" src="img/partner-3.png" /> </li>
                  <li className="list-inline-item"> <img alt="Image" className="image--xxs" src="img/partner-2.png" /> </li>
                  <li className="list-inline-item"> <img alt="Image" className="image--xxs" src="img/partner-4.png" /> </li>
                  <li className="list-inline-item"> <img alt="Image" className="image--xxs" src="img/partner-5.png" /> </li>
                  <li className="list-inline-item"> <img alt="Image" className="image--xxs" src="img/partner-6.png" /> </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8">
                <h2>Influence makes conversions easy</h2>
                <p className="lead"> Let your customers do the selling for you. <br /> Put a stamp of Social Proof to BOOST your conversions.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Link to="/" className="block">
                  <div className="feature boxed boxed--border border--round"> <img className="icon-n2" src={ HigherConversion } /> <span className="h4 color--primary"><h5>Higher conversion&nbsp;</h5></span> </div>
                </Link>
              </div>
              <div className="col-md-3">
                <Link to="/" className="block">
                  <div className="feature boxed boxed--border border--round"> <img className="icon-n2" src={ SaveAcquisitions } /> <span className="h4 color--primary"><h5>Save on acquisitions</h5></span> </div>
                </Link>
              </div>
              <div className="col-md-3">
                <Link to="/" className="block">
                  <div className="feature boxed boxed--border border--round"> <img className="icon-n2" src={ IncreaseVisitors } /> <span className="h4 color--primary"><h5>Increase Visitors trust</h5></span> </div>
                </Link>
              </div>
              <div className="col-md-3">
                <Link to="/" className="block">
                  <div className="feature boxed boxed--border border--round"> <img className="icon-n2" src={ SocialInfluence } /> <span className="h4 color--primary"><h5>Social Influence</h5></span> </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center cta cta-4 space--xxxs border--bottom imagebg" style={{ background: 'linear-gradient(to left, #b721ff,#21d4fd)'}} data-gradient-bg="#b721ff,#21d4fd,#21d4fd,#b721ff">
          <div className="container">
            <div className="row">
              <div className="feature2 col-md-12 space--xxxs2">
                <span className="label--inline h4">A Conversion Supercharger! </span>
              </div>
              <div className="feature2 col-md-12 space--xxxs1">
                <form className="form--horizontal row">
                  <div className="col-md-6"> <input type="text" name="search" placeholder="Enter your email." /> </div>
                  <div className="col-md-6"> <button type="submit" className="btn btn--primary type--uppercase">start your 7 days free trial</button> </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8">
                <h2>Features</h2>
                <p className="lead"> Let your customers do the selling for you. <br /> Put a stamp of Social Proof to BOOST your conversions. <br /> Real-time Notifications for new visitors.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="switchable feature-large unpad--bottom switchable--switch">
          <div className="container ">
            <div className="row justify-content-around">
              <div className="col-md-6">
                <div className="switchable__text">
                  <h3>Recent Activity Notifications</h3>
                  <p className="lead"> Show recent signups or purchases on your website. Get your existing customers to sell your products for you on an autopilot mode.</p> <Link to="/">Learn More »</Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-12 text-center">
                <img alt="Image" src={ Device } />
              </div>
            </div>
          </div>
        </section>
        <section className="switchable feature-large unpad--bottom">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-md-6">
                <div className="switchable__text">
                  <h3>Show Live &amp; Realtime Activities</h3>
                  <p className="lead">Show live visitor count notifications. Let your new visitors know they’re not the only ones buying from you. <br /></p> <Link to="/">Learn More »</Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-12 text-center">
                <img alt="Image" src={ Device } />
              </div>
            </div>
          </div>
        </section>
        <section className="switchable feature-large unpad--bottom switchable--switch">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-md-6">
                <div className="switchable__text">
                  <h3>Track Your Customer Journey</h3>
                  <p className="lead"> Get to know about the minute details of your customer's journey on your website. </p> <Link to="/">Learn More »</Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-12 text-center">
                <img alt="Image" src={ Device } />
              </div>
            </div>
          </div>
        </section>
        <section className="switchable feature-large unpad--bottom">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-md-6">
                <div className="switchable__text">
                  <h3>Analytics &amp; Insights</h3>
                  <p className="lead"> Once the visitor/customer enters in their email, we’ll show you who they really are using our intelligence data servers. We keep on adding more features to your analytics.</p> <Link to="">Learn More »</Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-12 text-center">
                <img alt="Image" src={ AnalyticsInsights } />
              </div>
            </div>
          </div>
        </section>
        <section className="cover unpad--bottom switchable text-center-xs switchable--switch">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6 col-lg-5 mt--3">
                <h2>Easiest Setup!</h2>
                <p className="lead"> Anyone can setup Influence following few simple steps.</p>
                <Link className="btn btn--primary type--uppercase" to="#customise-template">
                  <span className="btn__text">Follow the steps</span>
                </Link>
                <span className="block type--fine-print">or <Link to="index.html"> View Demos</Link></span>
              </div>
              <div className="col-md-6">
                <img alt="Image" src={ EasiestSetup } />
              </div>
            </div>
          </div>
        </section>
        <section> </section>
        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8">
                <h2>Tools you need to increase conversions</h2>
                <p className="lead"> An ever-growing stack of advance analytics &amp; conversion tools with proven results.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border"> <img className="icon-n" src={ ActivityNotifications } />
                  <h3>Activity Notifications&nbsp;</h3>
                  <p> Display recent sales &amp; activity and drive users to convert on your website. </p> <Link to=""> Learn More </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border"> <img className="icon-n" src={ LiveViewers } />
                  <h3>Live Viewers</h3>
                  <p> Show your new visitors that they are not the only ones on your website. Instill a 'Fear of missing out'.  </p> <Link to="#"> Learn More </Link> <span className="label">New</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border"> <img className="icon-n" src={ CustomerProfiles } />
                  <h3>Customer Profiles</h3>
                  <p> We will show you the true identities of your customers. Knowing more will help you in selling more!</p> <Link to="#"> Learn More </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border"> <img className="icon-n" src={ CustomerJourneys } />
                  <h3>Customer Journeys</h3>
                  <p> Get to know about your customer's journey before it converts. </p> <Link to="#"> Learn More </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border"> <img className="icon-n" src={ CustomeRules } />
                  <h3>Custom Rules</h3>
                  <p> Control notifications behavior on your website. Customize timings &amp; delays. </p> <Link to="#"> Learn More </Link>
                  <span className="label">New</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border"> <img className="icon-n" src= { MobileReady } />
                  <h3>Mobile Ready</h3>
                  <p> Show notifications to your mobile users as well. Customize behavior according to your user's location. </p> <Link to="#"> Learn More </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="imagebg" style={{ background: 'linear-gradient(to left, #b721ff,#21d4fd)'}} data-gradient-bg="#b721ff,#21d4fd,#21d4fd,#b721ff">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="cta cta-1 cta--horizontal boxed boxed--border text-center-xs">
                  <div className="row justify-content-center p-5">
                    <div className="col-lg-4">
                      <h3>Let's get you started</h3>
                    </div>
                    <div className="col-lg-4">
                      <Link className="btn btn--primary type--uppercase" to="#"> <span className="btn__text">Start your 7 days free trial<br /></span> </Link>
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
