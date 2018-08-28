import React, { Component } from 'react';
import {Link} from 'react-router';
import { Row, Col } from 'react-bootstrap';
import Integrations  from './Integration';
import {
  Wordpress,
  Googletag,
  Zapier,
  Illustration
} from 'img';

import './Integration.scss';
import './WebsiteIntegration.scss';

class WebsiteIntegrations extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="transition-item websiteintegrations-container">
        <div className="main-container">
          <section className="cover switchable text-center-xs bg--secondary switchable--switch pt-0">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-6 col-lg-6 mt--3">
                  <h2>Influence integrations are meant to scale and work everywhere</h2>
                  <p className="lead"> Influence integrates with all your favorite platforms to make increasing conversions simple</p>
                  <a className="btn btn--primary type--uppercase trynow-btn" href="/signup">
                    <span className="btn__text"> Try influence now</span>
                  </a>
                  <span className="block type--fine-print">or <Link to="/demopage">view the demos</Link></span>
                </div>
                <div className="col-md-5"> <img alt="Image" src={ Illustration } /> </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2>Popular integrations</h2>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-12">


                  <Row className="justify-content-center mb-5">
                    <Col md={3}  className="box-shadow">

                      <div className="card-box tilebox-one">
                        <img src={Wordpress} className="logocompany" />
                        <h4 className="text-muted text-uppercase mt-0 i-title">Wordpress</h4>
                        <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Wordpress</p>

                        <span className="text-muted"  >View Details&nbsp; <i className="fi-open"></i></span>
                      </div>
                    </Col>
                    <Col md={3}  className="box-shadow">

                      <div className="card-box tilebox-one">
                        <img src={Googletag} className="logocompany" />
                        <h4 className="text-muted text-uppercase mt-0 ml-2 i-title googletag">Google Tag Manager</h4>
                        <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Tag Manager</p>

                        <span  className="text-muted" >View Details&nbsp; <i className="fi-open"></i></span>
                      </div>
                    </Col>

                    <Col md={3}  className="box-shadow ">

                      <div className="card-box tilebox-one">
                        <img src={Zapier} className="logocompany zapier" />
                        <h4 className="text-muted text-uppercase mt-0 ml-3 i-title zapier">Zapier</h4>
                        <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Zapier</p>

                        <span className="text-muted " >View Details&nbsp; <i className="fi-open"></i></span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2>All integrations</h2>
                </div>
                <Integrations/>
              </div>
            </div>
          </section>

          <section className="text-center imagebg" style={{background: 'rgb(20, 187, 250)'}}>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-lg-6">
                  <div className="cta">
                    <p className="integration-text"> Don't see your integration if you can help us understanding your requirements we can make it</p>
                    <a className="btn  btn--lg talk-btn" href="#purchase-template" style={{backgroundColor:'#097fff'}}>Lets talk</a>
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

export default WebsiteIntegrations;
