import React, { Component } from 'react';
import {
  ContactAvatar1,
  ContactAvatar2,
  ContactAvatar3,
  ContactAvatar4,
  ContactAvatar5,
  ContactAvatar6
} from 'img';

var Recaptcha = require('react-recaptcha');

class WebsiteContact extends Component {
  componentDidMount() {
    //window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="main-container">
        <section className="cover text-center bg--secondary">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div> <span className="h2"><p>Contact us&nbsp;</p></span> </div>
                <div> <span className="h3 typed-text typed-text--cursor color--primary"> We sit round the clock just for you!</span> </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center ">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="feature feature-8">
                  <img alt="Image" src={ContactAvatar1} />
                  <h5>Kate</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-8">
                  <img alt="Image" src={ContactAvatar2} />
                  <h5>Ram</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-8">
                  <img alt="Image" src={ContactAvatar3} />
                  <h5>Sarah</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-8">
                  <img alt="Image" src={ContactAvatar4} />
                  <h5>Kirti</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-8">
                  <img alt="Image" src={ContactAvatar5} />
                  <h5>Alice</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-8">
                  <img alt="Image" src={ContactAvatar6} />
                  <h5>John</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="switchable bg--secondary">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-5">
                <p className="lead">
                  E:&nbsp;<a href="#">info@useinfluence.co</a>
                  <br />
                </p>
                <p className="lead">
                  Drop a mail anytime, we endeavour to answer all enquiries within 24 hours.
                </p>
                <p className="lead"></p>
              </div>
              <div className="col-md-6 col-12">
                <form className="form-email row" data-recaptcha-theme="light" novalidate="true">
                  <div className="col-md-6 col-12">
                    <label>Your Name:</label>
                    <input type="text" name="Name" className="validate-required" />
                  </div>
                  <div className="col-md-6 col-12">
                    <label>Email Address:</label>
                    <input type="email" name="email" className="validate-required validate-email" />
                  </div>
                  <div className="col-md-12 col-12">
                    <label>Message:</label>
                    <textarea rows="4" name="Message" className="validate-required"></textarea>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="recaptcha">
                      <Recaptcha sitekey="sdfsdfsdfdsfsd" />
                    </div>
                  </div>
                  <button type="submit" className="btn btn--primary type--uppercase">Send Enquiry</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WebsiteContact;
