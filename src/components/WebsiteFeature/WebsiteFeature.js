import React, { Component } from 'react';
import {
  Tbars,
  Smallicon,
  Ticon,
  Profile,
} from 'img';
import { Link } from 'react-router';
import './WebsiteFeature.scss';

class WebsiteFeature extends Component {

  render() {

    return (
      <div className="WebsiteFeature-container">
        <div className="main-container" >
          <section className="cover text-center mt-5 mb-5  " data-overlay="0">
            <div className="container  mt-4 mb-5 pb-0 pt-0">
              <div className="row">
                <div className="col-md-10 col-lg-10">
                  <h2>Power in your hands!</h2>
                  <p className="lead col-md-12 text-center"> From a team of passionate creators & creative thinkers.</p>
                  <Link className="btn btn--primary type--uppercase" to="#"> <span className="btn__text">Try influence now</span> </Link>
                  <div></div>
                </div>
              </div>
            </div>
          </section>
          <hr className="my-auto col-md-6" />
          <section className="imageblock switchable feature-large unpad--top unpad--bottom space--sm">
            <div className="imageblock__content col-lg-6 col-md-4 pos-right">

              <img alt="newimage" src={Tbars} />

            </div>
            <div className="container unpad--bottom">
              <div className="row">
                <div className="col-lg-5 col-md-7">
                  <h2>Customer Activity Notifications</h2>
                  <p className="lead">
                                      A stamp of 'Social Proof' & trust for your business. Designed to target customer psyche.
                  </p>
                </div>
              </div>

            </div>

          </section>
          <hr className="my-auto col-md-6 text-right" />
          <section className="imageblock switchable switchable--switch unpad--top unpad--bottom feature-large  space--sm">
            <div className="imageblock__content col-lg-6 col-md-4 pos-right">

              <img alt="newimage" src={Smallicon} />

            </div>
            <div className="container unpad--bottom">
              <div className="row">
                <div className="col-lg-5 col-md-7">
                  <h2>Plug &amp; Play</h2>
                  <p className="lead">
                          Carefully set configurations, start in less than 3 minutes.
                  </p>
                </div>
              </div>

            </div>

          </section>
          <hr className="my-auto col-md-6" />
          <section className="imageblock switchable feature-large unpad--top unpad--bottom space--sm">
            <div className="imageblock__content col-lg-6 col-md-4 pos-right">

              <img alt="newimage" src={Ticon} />

            </div>
            <div className="container unpad--bottom">
              <div className="row">
                <div className="col-lg-5 col-md-7">
                  <h2>Customize Your Own</h2>
                  <p className="lead">
                                      Everything is customizable! From notification designs to their behaviour.
                  </p>
                </div>
              </div>
                          =
            </div>

          </section>
          <hr className="my-auto col-md-6 text-right" />
          <section className="imageblock switchable switchable--switch  unpad--top unpad--bottom feature-large space--sm">
            <div className="imageblock__content col-lg-6 col-md-4 pos-right">

              <img alt="newimage" className="profile" src={Profile} />

            </div>
            <div className="container unpad--bottom">
              <div className="row">
                <div className="col-lg-5 col-md-7">
                  <h2>Customer Identity & Analytics</h2>
                  <p className="lead">
                                      Know the true identity of your customer. Analyse your customer's path & behaviour on your web pages.
                  </p>
                </div>
              </div>

            </div>
          </section>
          <hr className="my-auto col-md-6 text-right" />

        </div>
      </div>
    );
  }
}


export default WebsiteFeature;
