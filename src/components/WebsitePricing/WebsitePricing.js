import React, { Component } from 'react';
import { Link } from "react-router";

class WebsitePricing extends Component {
  render() {
    return (
      <div className="main-container">
        <section className="text-center bg--secondary">
          <div className="container">
            <div className="row">
              <div className="col-md-11 col-lg-10">
                <h2>Simple, honest & affordable pricing&nbsp;</h2>
                <p className="lead"> Enjoy any plan free for 7 days </p>
                <p className="lead"> Cancel anytime, No questions asked </p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center cta cta-4 space--xxs border--bottom imagebg" style={{ background: 'linear-gradient(to left, #b721ff,#21d4fd)' }} data-gradient-bg="#b721ff,#21d4fd,#21d4fd,#b721ff">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <span className="label label--inline">Hot!</span>
                <span className="h4"> Save 20% with our Annual plans</span>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="pricing pricing-1 boxed boxed--border boxed--lg">
                  <h4>Free</h4> <span className="h1"><span className="pricing__dollar">$</span>0</span>
                  <p> Our free plan allows you unlimited access to the service with a number of restrictions on customizations </p>
                  <Link className="btn btn--primary" to="">
                    <span className="btn__text">Access Now</span>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="pricing pricing-1 boxed boxed--border boxed--lg boxed--emphasis">
                  <h4>Regular</h4> <span className="h1"><span className="pricing__dollar">$</span>79</span>
                  <p> The regular license allows you to customize, store and even host your website using your platform </p> <span className="label">Best Seller</span>
                  <Link className="btn btn--primary-1" to="">
                    <span className="btn__text">Purchase Now</span>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="pricing pricing-1 boxed boxed--border boxed--lg">
                  <h4>Extended</h4> <span className="h1"><span className="pricing__dollar">$</span>650</span>
                  <p> Extended plans offer full unlimited customization potential and the ability to host multi-site platforms </p>
                  <Link className="btn btn--primary" to="">
                    <span className="btn__text">Purchase Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center imagebg" style={{ background: 'linear-gradient(to left, #b721ff,#21d4fd)' }} data-gradient-bg="#b721ff,#21d4fd,#21d4fd,#b721ff">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <span className="h3"> Looking for a Bigger Plan? &nbsp; <Link to="/contact">Contact us</Link></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WebsitePricing;
