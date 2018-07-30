import React , { Component } from 'react';
import './Integration.scss';
import { Row, Col } from 'react-bootstrap';
import IntegrationContent from './IntegrationContent';

import {
  Aweber,
  Clickfunnels,
  Hubspot,
  Instapage,
  Leadpages,
  Mailmunch,
  Ontraport,
  Squarespace,
  Thrivecart,
  Unbounce,
  Webflow,
  Woocommerce,
  Wordpress,
  Googletag,
  Zapier
} from 'img';


class Integrations extends Component {
  constructor() {
    super();
    this.state = {
      selectedChannels: [],
      channelContent: [],
      checked: false,
      activePage: 0
    };
  }
  renderIntegration =(value) => {
    this.setState({
      activePage: value
    });
  }
  componentWillUnmount() {
    this.setState({
      activePage: 0
    });
  }

  channelsList = () => {
    return (
      <div>
        <Row className="justify-content-center mb-5">
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="card-box tilebox-one">
              <img src={Wordpress} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title">Wordpress</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Wordpress</p>

              <span className="text-muted"  onClick={() => this.renderIntegration(14)}>View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="card-box tilebox-one">
              <img src={Googletag} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-2 i-title googletag">Google Tag Manager</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Tag Manager</p>

              <span  className="text-muted"  onClick={() => this.renderIntegration(15)}>View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>

          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="card-box tilebox-one">
              <img src={Zapier} className="logocompany demio" />
              <h4 className="text-muted text-uppercase mt-0 ml-3 i-title zapier">Zapier</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Zapier</p>

              <span className="text-muted "  onClick={() => this.renderIntegration(3)}>View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="card-box tilebox-one">
              <img src={Hubspot} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-4 i-title hubspot">Hubspot</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Hubspot</p>

              <span className="text-muted "  onClick={() => this.renderIntegration(4)}>View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="card-box tilebox-one">
              <img src={Instapage} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title">Instapage</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Instapage</p>

              <span className="text-muted "  onClick={() => this.renderIntegration(5)}>View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="card-box tilebox-one">
              <img src={Leadpages} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-3 i-title">Leadpages</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Leadpages </p>

              <span className="text-muted "  onClick={() => this.renderIntegration(6)}>View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="card-box tilebox-one">
              <img src={Mailmunch} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title">Mailmunch</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Mailmunch </p>

              <span className="text-muted "  onClick={() => this.renderIntegration(7)}>View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="card-box tilebox-one">
              <img src={Ontraport} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-3 pl-3 i-title ontraport">Ontraport</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Ontraport</p>

              <span className="text-muted "  onClick={() => this.renderIntegration(8)}>View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="card-box tilebox-one">
              <img src={Squarespace} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title sqspace">Squarespace</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Squarespace</p>

              <span className="text-muted"  onClick={() => this.renderIntegration(9)}>View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="card-box tilebox-one">
              <img src={Thrivecart} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title ">Thrivecart</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Thrivecart </p>

              <span className="text-muted"  onClick={() => this.renderIntegration(10)}>View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="card-box tilebox-one">
              <img src={Unbounce} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title unbounce">Unbounce</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Unbounce</p>

              <span className="text-muted"  onClick={() => this.renderIntegration(11)}>View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="card-box tilebox-one">
              <img src={Webflow} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title">Webflow</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Webflow</p>

              <span className="text-muted"  onClick={() => this.renderIntegration(12)}>View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="card-box tilebox-one">
              <img src={Woocommerce} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title">Woocommerce</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Woocommerce</p>

              <span className="text-muted"  onClick={() => this.renderIntegration(13)} >View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="card-box tilebox-one">
              <img src={Aweber} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-2 i-title aweber">Aweber</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Aweber</p>

              <span  className="text-muted"  onClick={() => this.renderIntegration(1)}>View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="card-box tilebox-one">
              <img src={Clickfunnels} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-3 i-title click cfunnel">Clickfunnels</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Clickfunnels</p>

              <span className="text-muted "  onClick={() => this.renderIntegration(2)}>View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  addChannelHandler = (event) => {
    const { value }  = event.target;
    this.setState((prevState) => {
      return {selectedChannels : prevState.selectedChannels.concat(value)};
    });

    //more code to write for each redirection to the correspoding oauth server of the  respective partner site.
  }




  render() {

    return (
      this.state.activePage === 0 ? (
        <div className="integration-container">
          <div className="channel-container" >
            <div className="channel">
              <div className="content">

                {this.channelsList()}

              </div>


            </div>
          </div>
        </div>)
        : (
          <div className="pageContent">
            <IntegrationContent renderState={this.state.activePage} renderIntegration={this.renderIntegration}/>
          </div>
        )
    );
  }
}


export default Integrations;
