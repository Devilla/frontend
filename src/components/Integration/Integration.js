import React , { Component } from 'react';
import './Integration.scss';
import { Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import {
  Aweber,
  Clickfunnels,
  Demio,
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
  Wordpress
} from 'img';


class Integrations extends Component {
  constructor() {
    super();
    this.state = {
      selectedChannels: [],
      channelContent: [],
      checked: false
    };
  }


  channelsList = () => {
    return (
      <div>
        <Row className="justify-content-center mb-5">
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Aweber} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-2 i-title aweber">Aweber</h4>
              <span className="text-muted " onClick={()=>{browserHistory.push('/oauthshow');}}>View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Clickfunnels} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-3 i-title click cfunnel">Clickfunnels</h4>
              <span className="text-muted ">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Demio} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-3 i-title demio">Demio</h4>
              <span className="text-muted ">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Hubspot} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-4 i-title hubspot">Hubspot</h4>
              <span className="text-muted ">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Instapage} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title">Instapage</h4>
              <span className="text-muted ">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Leadpages} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-3 i-title">Leadpages</h4>
              <span className="text-muted ">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Mailmunch} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title">Mailmunch</h4>
              <span className="text-muted ">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Ontraport} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-3 pl-3 i-title ontraport">Ontraport</h4>
              <span className="text-muted ">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Squarespace} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title sqspace">Squarespace</h4>
              <span className="text-muted">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Thrivecart} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title ">Thrivecart</h4>
              <span className="text-muted">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>

          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Unbounce} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title unbounce">Unbounce</h4>
              <span className="text-muted">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Webflow} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title">Webflow</h4>
              <span className="text-muted">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Woocommerce} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title">Woocommerce</h4>
              <span className="text-muted">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Wordpress} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title">Wordpress</h4>
              <span className="text-muted">View Details&nbsp; <i className="fi-open"></i></span>
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
      <div className="integration-container">
        <div className="channel-container" >
          <div className="channel">
            <div className="content">

              {this.channelsList()}

            </div>


          </div>
        </div>
      </div>
    );
  }
}


export default Integrations;
