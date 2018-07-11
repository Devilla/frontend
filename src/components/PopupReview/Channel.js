import React , {Component }  from 'react';
import {Col }  from 'react-bootstrap';
import  './Channel.scss'; 
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

class Channel extends Component  {




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
      return (
      
        <div  className="bx-shadow">
          <img src={this.channelfunc(i)} className="logocompany " />
          <span className="text-muted text-uppercase mt-0  title">{channelName}</span>
          <span className="text-muted btn btn-primary waves-effect  btns" >View Reviews&nbsp; <i className=" mdi mdi-arrow-down-drop-circle-outline"></i></span>
         
        </div>  
     
      );
    });
  }






  render() {
    return (
      <div  className="channel-container">
        <span className="btn btn-primary waves-effect editchannel-btn "><i className="mdi mdi-grease-pencil "></i>&nbsp;Edit Channels</span>
        <Col md={12}>
          {this.channelsList()}
        </Col>
          
      </div>
    );
  }
}

export default  Channel;