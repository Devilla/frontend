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
<<<<<<< HEAD

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



=======
  channelfunc = (index) => {
    let res = {};
    switch(true) {
      case /0/.test(index) : res = Facebook; break;
      case /1/.test(index) : res = Zendesk; break;
      case /2/.test(index) : res = Google; break;
      case /3/.test(index) : res = TrustPilot; break;
      case /4/.test(index) : res = FourSquare; break;
      case /5/.test(index) : res = G2Crowd; break;
      case /6/.test(index) : res = TrustRadius; break;
      case /7/.test(index) : res = Yelp; break;
      case /8/.test(index) : res = BingPlaces; break;


    }
    return res;
  }

  componentWillMount() {
    var scrollElm = document.scrollingElement;
    scrollElm.scrollTop = 0;
  }

  channels = ['Facebook' , 'Zendesk','Google','TrustPilot','FourSquare','G32Crowd','TrustRadius','Yelp','BingPlaces'];

  channelsList = () => {
    return this.channels.map((channelName,i)=> {
      return (<div >
        <Row className="justify-content-center mb-2 ">
          <Col md={6}  className="bx-shadow">
            <img src={this.channelfunc(i)} className="logocompany " />
            <span className="text-muted text-uppercase mt-0  title">{channelName}</span>
            <span className="text-muted btn btn-primary waves-effect  btns" onClick={()=>{browserHistory.push('/oauthshow');}}>Connect&nbsp; <i className="fi-open"></i></span>

          </Col>
        </Row>
      </div>);
    });
  }

>>>>>>> 471d9ff4af1409519f2761273808b9d43a03c70f

  render() {

    return (
<<<<<<< HEAD
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
=======

      <div className="container">
        <button type="button" className="btn btn-info btn-lg addchannel" data-toggle="modal" data-target="#myModal"><i className="fi-plus"></i>&nbsp;Add Channels</button>
        <div className="modal fade show-modal" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Channels</h4>
              </div>
              <div className="modal-body">
                {this.channelsList()}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

>>>>>>> 471d9ff4af1409519f2761273808b9d43a03c70f
    );
  }
}


export default DashboardChannel;
