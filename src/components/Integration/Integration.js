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
  componentDidMount() {
    window.scrollTo(0,0);
  }
  componentWillUnmount() {
    this.setState({
      activePage: 0
    });
  }

  channelsList = () => {
    return (
      <div>
        <Row className="mb-5 navbar-custom integrations-header">

          <div className="col-xl-12"><h3 className="integrationheader-1"> Integrations </h3></div>
          <div className="col-xl-12"><p className=" mb-5 h6 integrationheader-2"> The best of all worlds - Use Influence with your favourite apps </p></div>

        </Row>

        <Row className="justify-content-center mb-5">
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-success"><span>Active</span></div>
            <div className="tilebox-one">
              <img src={Wordpress} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title wordpress">Wordpress</h4>
              <p className="text-center desc-page text-muted">Show social proof notification on wordpress using our app. </p>

              <span className="text-muted" ><a href='https://wordpress.org/plugins/useinfluence/' target="_blank">View Details&nbsp; <i className="fi-open"></i></a></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-success"><span>Active</span></div>
            <div className="tilebox-one">
              <img src={Googletag} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-2 i-title googletag">Google Tag Manager</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Tag Manager</p>

              <span className="text-muted" ><a href=' https://useinfluence.freshdesk.com/support/solutions/articles/36000080637-integrate-with-google-tag-manager' target="_blank">View Details&nbsp; <i className="fi-open"></i></a></span>
            </div>
          </Col>

          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-success"><span>Active</span></div>
            <div className="tilebox-one">
              <img src={Zapier} className="logocompany demio" />
              <h4 className="text-muted text-uppercase mt-0 ml-3 i-title zapier">Zapier</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Zapier</p>

              <span><a href='https://useinfluence.freshdesk.com/support/solutions/articles/36000075182-integrate-with-zapier-' target="_blank">View Details&nbsp; <i className="fi-open"></i></a></span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="tilebox-one">
              <img src={Hubspot} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-4 i-title hubspot">Hubspot</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Hubspot</p>

              <span className="text-muted " >View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="tilebox-one">
              <img src={Instapage} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title instapage">Instapage</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Instapage</p>

              <span className="text-muted "><a href= "https://useinfluence.freshdesk.com/support/solutions/articles/36000076079-integrate-with-instapage" target="_blank"> View Details&nbsp; <i className="fi-open"></i></a></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="tilebox-one">
              <img src={Leadpages} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-3 i-title leadpages">Leadpages</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Leadpages </p>

              <span className="text-muted "><a href= "https://useinfluence.freshdesk.com/support/solutions/articles/36000078519-integrate-with-leadpages" target="_blank"> View Details&nbsp; <i className="fi-open"></i></a></span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="tilebox-one">
              <img src={Mailmunch} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title mailmunch">Mailmunch</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Mailmunch </p>

              <span className="text-muted "> <a href="https://useinfluence.freshdesk.com/support/solutions/articles/36000076088-integrate-with-mailmunch" target="_blank"> View Details&nbsp; <i className="fi-open"></i></a></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="tilebox-one">
              <img src={Ontraport} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-3 pl-3 i-title ontraport">Ontraport</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Ontraport</p>

              <span className="text-muted "> <a href="https://useinfluence.freshdesk.com/support/solutions/articles/36000076192-integrate-with-ontraport-" target="_blank"> View Details&nbsp; <i className="fi-open"></i></a></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="tilebox-one">
              <img src={Squarespace} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title sqspace">Squarespace</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Squarespace</p>

              <span className="text-muted"><a href="https://useinfluence.freshdesk.com/support/solutions/articles/36000076111-integrate-with-squarespace" target="_blank"> View Details&nbsp; <i className="fi-open"></i></a></span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="tilebox-one">
              <img src={Thrivecart} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title thrivecart">Thrivecart</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Thrivecart </p>

              <span className="text-muted" >View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="tilebox-one">
              <img src={Unbounce} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title unbounce">Unbounce</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Unbounce</p>

              <span className="text-muted" >View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="tilebox-one">
              <img src={Webflow} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title webflow">Webflow</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Webflow</p>
              <span className="text-muted">< a href = "https://useinfluence.freshdesk.com/support/solutions/articles/36000075200-integrate-with-webflow" target="_blank"> View Details&nbsp; <i className="fi-open"></i></a></span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="tilebox-one">
              <img src={Woocommerce} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title woocomm">Woocommerce</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Woocommerce</p>

              <span className="text-muted" ><a href='https://wordpress.org/plugins/useinfluence/' target="_blank">View Details&nbsp; <i className="fi-open"></i></a></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="tilebox-one">
              <img src={Aweber} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-2 i-title aweber">Aweber</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Aweber</p>

              <span  className="text-muted" >View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="box-shadow ribbon-box">
            <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
            <div className="tilebox-one">
              <img src={Clickfunnels} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-3 i-title click cfunnel">Clickfunnels</h4>
              <p className="text-center desc-page text-muted">Sync your conversation and import yourFAQs from Clickfunnels</p>
              <span className="text-muted"><a href="https://useinfluence.freshdesk.com/support/solutions/articles/36000072080-integrate-with-clickfunnels" target="_blank"> View Details&nbsp; <i className="fi-open"></i></a></span>
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
        <div className="transition-item integration-container">
          <div className="channel-container" >
            <div className="channel">
              <div className="content">

                {this.channelsList()}

              </div>


            </div>
          </div>
        </div>)
        : (
          <div className="transition-item pageContent">
            <IntegrationContent renderState={this.state.activePage} renderIntegration={this.renderIntegration}/>
          </div>
        )
    );
  }
}


export default Integrations;
