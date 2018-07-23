import React , { Component }  from 'react';
import { Col }  from 'react-bootstrap';
import  './Channel.scss';
import {
  Facebook,
  Google,
} from 'img';

class Channel extends Component  {

  channelfunc = (index) => {
    let res = {};
    switch(true) {
      case /0/.test(index) : res = Facebook; break;
      case /1/.test(index) : res = Google; break;
    }
    return res;
  }


  channels = ['Facebook' , 'Google'];

  channelsList = () => {
    return this.channels.map((channelName,i)=> {
      return (
        <div  className="bx-shadow" key={i}>
          <img src={this.channelfunc(i)} className="logocompany " />
          <span className="text-muted text-uppercase mt-0  title">{channelName}</span>
          <span className="text-muted btn btn-primary waves-effect  btns" onClick={()=>this.props.showpopup(channelName)}>View Reviews&nbsp; <i className=" mdi mdi-arrow-down-drop-circle-outline"></i></span>
        </div>
      );
    });
  }

  render() {
    return (
      <div  className="channel-container">
        <span className="btn btn-primary waves-effect editchannel-btn "><i className="mdi mdi-grease-pencil "></i>&nbsp;Edit &nbsp;</span>
        <Col md={12}>
          {this.channelsList()}
        </Col>
      </div>
    );
  }
}

export default  Channel;
