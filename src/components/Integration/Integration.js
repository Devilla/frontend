import React , { Component } from 'react';
import './Integration.scss';
import { Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import {
  Facebook,
  Zendesk,
  Google,
  TrustPilot,
  FourSquare,
  G2Crowd,
  TrustRadius,
  Yelp,
  BingPlaces } from 'img';


class Integration extends Component {
  constructor() {
    super();
    this.state = {
      selectedChannels: [],
      channelContent: [],
      checked: false
    };
  }

  componentDidMount() {
    let scrollElm = document.scrollingElement;
    scrollElm.scrollTop = 0;
  }

  channelsList = () => {
    return (
      <div>
        <Row className="justify-content-around mb-5">
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Facebook} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-2 i-title">Facebook</h4>
              <span className="text-muted " onClick={()=>{browserHistory.push('/oauthshow');}}>View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Zendesk} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-3 i-title">Zendesk</h4>
              <span className="text-muted ">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Google} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-3 i-title">Google</h4>
              <span className="text-muted ">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-around mb-5">
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={TrustPilot} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-4 i-title">TrustPilot</h4>
              <span className="text-muted ">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={FourSquare} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title">FourSquare</h4>
              <span className="text-muted ">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={G2Crowd} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-3 i-title">G2Crowd</h4>
              <span className="text-muted ">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-around mb-5">
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={TrustRadius} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title">TrustRadius</h4>
              <span className="text-muted ">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Yelp} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 ml-3 pl-3 i-title">Yelp</h4>
              <span className="text-muted ">View Details&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={BingPlaces} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0 i-title">Bing Places</h4>
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
      <div>
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


export default Integration;
