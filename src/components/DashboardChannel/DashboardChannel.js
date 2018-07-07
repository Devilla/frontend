import React , { Component } from 'react';
import './DashboardChannel.scss';
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
      <div >
        <Row className="justify-content-center mb-2 ">
          <Col md={6}  className="bx-shadow">
            <img src={Facebook} className="logocompany " />
            <span className="text-muted text-uppercase mt-0  title">Facebook</span>
            <span className="text-muted btn btn-primary waves-effect  btns" onClick={()=>{browserHistory.push('/oauthshow');}}>Connect&nbsp; <i className="fi-open"></i></span>
           
          </Col>  
        </Row>
        <Row className="justify-content-around mb-2"> 
          <Col md={6}  className="bx-shadow">
            <img src={Zendesk} className="logocompany " />
            <span className="text-muted text-uppercase mt-0 title">Zendesk</span>
            <span className="text-muted btn btn-primary waves-effect btns">Connect&nbsp; <i className="fi-open"></i></span>
          </Col>
        </Row>
        <Row className="justify-content-around mb-2 ">
          <Col md={6}  className="bx-shadow">
            <img src={Google} className="logocompany " />               
            <span className="text-muted text-uppercase mt-0 title">Google</span>
            <span className="text-muted btn btn-primary waves-effect btns">Connect&nbsp; <i className="fi-open"></i></span>
          </Col>
        </Row>
        <Row className="justify-content-around mb-2">  
          <Col md={6}  className="bx-shadow">
   
            <img src={TrustPilot} className="logocompany trustpilot" />               
            <span className="text-muted text-uppercase mt-0 title ">TrustPilot</span>
            <span className="text-muted btn btn-primary waves-effect btns">Connect&nbsp; <i className="fi-open"></i></span>

          </Col>
        </Row>
        <Row className="justify-content-around mb-2">
          <Col md={6}  className="bx-shadow">
       
            <img src={FourSquare} className="logocompany " />               
            <span className="text-muted text-uppercase mt-0 title">FourSquare</span>
            <span className="text-muted btn btn-primary waves-effect btns">Connect&nbsp; <i className="fi-open"></i></span>

          </Col>
        </Row>
        <Row className="justify-content-around mb-2">
          <Col md={6}  className="bx-shadow">
   
            <img src={G2Crowd} className="logocompany " />
            <span className="text-muted text-uppercase mt-0 title">G2Crowd</span>
            <span className="text-muted btn btn-primary waves-effect btns">Connect&nbsp; <i className="fi-open"></i></span>
    
          </Col> 
        </Row>
        <Row className="justify-content-around ">
          <Col md={6}  className="bx-shadow">
    
            <img src={TrustRadius} className="logocompany " />               
            <span className="text-muted text-uppercase mt-0 title">TrustRadius</span>
            <span className="text-muted btn btn-primary waves-effect btns">Connect&nbsp; <i className="fi-open"></i></span>
   
          </Col>
        </Row>
        <Row className="justify-content-around mb-2 ">
          <Col md={6}  className="bx-shadow">

            <img src={Yelp} className="logocompany " />               
            <span className="text-muted text-uppercase mt-0 title">Yelp</span>
            <span className="text-muted btn btn-primary waves-effect btns">Connect&nbsp; <i className="fi-open"></i></span>
     
          </Col>
        </Row>
        <Row className="justify-content-around mb-2 ">
          <Col md={6}  className="bx-shadow">
      
            <img src={BingPlaces} className="logocompany " />              
            <span className="text-muted text-uppercase mt-0 title">Bing Places</span>
            <span className="text-muted btn btn-primary waves-effect btns">Connect&nbsp; <i className="fi-open"></i></span>
    
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
      <div className="dashboard-container">
        <div className="channel-container" >
          <div className="channel">
            <div className="channel-title mb-5">
              <h1>Influence Integrates Easily</h1>
              <h4>See what customers say !</h4>
            </div>
            <div className="content">
             
              {this.channelsList()}
              <button className="btn btn-primary waves-effect mb-5  mt-3 float-right proceedbtn" onClick={() => {browserHistory.push('/popupreview');}} ><i className="fi-plus"></i>&nbsp;&nbsp;Proceed</button>
              <div className="clearfix"></div>
            </div>
        
            
          </div>
        </div>
      </div>
    );
  }
}


export default DashboardChannel;
