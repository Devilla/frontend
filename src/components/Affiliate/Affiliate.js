import React, { Component } from 'react';
import { Link } from "react-router";
import { browserHistory } from 'react-router';
import { toast } from 'react-toastify';
import { Alert, HelpBlock } from 'react-bootstrap';

export default class Affiliate extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div className="main-container">
        <section className="text-center" style={{ paddingTop: '100px' }}>
          <div className="container ">
            <div className="row">
              <div className="col-md-8">
                <h2>Influence Affiliate Program</h2>
                <p className="lead">
                  Join the Influence affiliate program to help us grow and expand our customer base.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="imageblock switchable feature-large bg--secondary space--sm">
          <div className="imageblock__content col-lg-6 col-md-4 pos-right">
            <div className="background-image-holder">
              <img alt="image" src="img/education-1.jpg" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-7">
                <h2>What is the Influence Affiliate Program?</h2>
                <p className="lead">
                  Influence Affiliate program is an opportunity for you to make money by promoting business software made by a leader in the SaaS industry. The list of products includes, but not limited to, Freshdesk - A customer support tool, Freshservice - A service desk software, Freshsales - A CRM and more. Over 150000 businesses worldwide use our products to create an amazing experience for their customers, both internal and external.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Link to="/" className="block">
                  <div className="feature boxed boxed--border border--round left"><span className="h4 color--primary"><h4>Promoting made easy&nbsp;</h4></span> <img className="icon-n1" src="" />
                    <p class="align-center text-left">Promoting the products has never been easier. All you need to do from your end is let the world know about our amazing products and share a referral link with them. We will provide all the support you need, to be successful, from our end. </p>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="/" className="block">
                  <div className="feature boxed boxed--border border--round"> <span className="h4 color--primary"><h4>Easy money</h4></span> <img className="icon-n1" src="" />
                    <p class="align-center text-left lead">Everytime you bring in a lead who is happy to sign a contract with us, we are twice as happy to share a part of the deal value with you. If the referral goes on to sign a long-term agreement with Freshworks, your reward also grows accordingly. </p>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="/" className="block">
                  <div className="feature boxed boxed--border border--round"><span className="h4 color--primary"><h4>On-time Payment</h4></span>
                    <img className="icon-n1" src="" /><p  class="align-center text-left lead">It cannot get sweeter than this. You just take care of spreading the word about  Freshworks and leave the rest to us. We will ensure you are paid on-time for your efforts and in your local currency, for your convenience.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center " style={{background:"#14BBFA"}}>
          <div className="container pt-5" >
            <div className="row">
              <div className="col-md-10 col-lg-8">
                <div className="cta">
                  <h2  style={{color:"white", fontWeight:"Bold"}}>So what are you waiting for?</h2>
                  <p className="lead"  style={{color:"white"}}>
                      Join us today to be a part of something exciting and start making money.
                  </p>
                  <Link className="btn btn--primary type--uppercase" to="/affiliateregister">
                    <span className="btn__text">
                      BECOME A INFLUENCE AFFILIATE
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
