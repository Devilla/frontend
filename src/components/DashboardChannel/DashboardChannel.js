import React , { Component } from 'react';
import './DashboardChannel.scss';
import { Row, Col } from 'react-bootstrap';
import { Link,browserHistory } from 'react-router';
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


class DashboardChannel extends Component {
  constructor() {
    super();
    this.state = {
      selectedChannels: [],
      channelContent: [],
      checked: false
    };
  }

  componentWillMount() {
    window.scrollTo(0,0);
  }
  

  channelsList = () => {
    return (
      <div>
        <Row className="justify-content-around mb-5">
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Facebook} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0">Facebook</h4>
              <span className="text-muted btn btn-primary waves-effect" onClick={()=>{browserHistory.push('/oauthshow');}}>Connect&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>   
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Zendesk} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0">Zendesk</h4>
              <span className="text-muted btn btn-primary waves-effect">Connect&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Google} className="logocompany" />               
              <h4 className="text-muted text-uppercase mt-0">Google</h4>
              <span className="text-muted btn btn-primary waves-effect">Connect&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-around mb-5">  
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={TrustPilot} className="logocompany" />               
              <h4 className="text-muted text-uppercase mt-0">TrustPilot</h4>
              <span className="text-muted btn btn-primary waves-effect">Connect&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={FourSquare} className="logocompany" />               
              <h4 className="text-muted text-uppercase mt-0">FourSquare</h4>
              <span className="text-muted btn btn-primary waves-effect">Connect&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={G2Crowd} className="logocompany" />
              <h4 className="text-muted text-uppercase mt-0">G2Crowd</h4>
              <span className="text-muted btn btn-primary waves-effect">Connect&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col> 
        </Row>
        <Row className="justify-content-around mb-5">
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={TrustRadius} className="logocompany" />               
              <h4 className="text-muted text-uppercase mt-0">TrustRadius</h4>
              <span className="text-muted btn btn-primary waves-effect">Connect&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={Yelp} className="logocompany" />               
              <h4 className="text-muted text-uppercase mt-0">Yelp</h4>
              <span className="text-muted btn btn-primary waves-effect">Connect&nbsp; <i className="fi-open"></i></span>
            </div>
          </Col>
          <Col md={3}  className="bx-shadow">
            <div className="card-box tilebox-one">
              <img src={BingPlaces} className="logocompany" />              
              <h4 className="text-muted text-uppercase mt-0">Bing Places</h4>
              <span className="text-muted btn btn-primary waves-effect">Connect&nbsp; <i className="fi-open"></i></span>
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
            <div className="channel-title mb-5">
              <h1>Influence Integrates Easily</h1>
              <h4>Setting up takes less than 10 minutes. No tech skills required. </h4>
            </div>
            <div className="pt-5 pr-5">
              <div className="card-box pt-0 pb-0 mb-0">
                <h4 className="header-title"><Link to="#"><i className="icon-arrow-left mr-3"></i></Link>Popular Integrations</h4>
                <hr/>
              </div>
            </div>
            <div className="content">
             
              {this.channelsList()}
              <button className="btn btn-primary waves-effect mb-5 float-right" onClick={() => {browserHistory.push('/popupreview');}} ><i className="fi-plus"></i>&nbsp;&nbsp;Proceed</button>
              <div className="clearfix"></div>
            </div>
        
            
          </div>
        </div>
      </div>
    );
  }
}


export default DashboardChannel;
