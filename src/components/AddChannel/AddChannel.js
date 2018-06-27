import React , { Component } from 'react';
import './AddChannel.scss';
import { Row, Col } from 'react-bootstrap';
class AddChannel extends Component {
  constructor() {
    super();
    this.state = {
      selectedChannels: []
    };
  }
  pos = 0;
  channel = ['Facebook','Twitter','Zendesk','Google','TrustPlot','Epinions','FourSquare','G2Crowd','Trust Radius','Yelp','Bing Places','Instagram'];

  channels = () => {
    return this.channel.map((elem,pos)=> {(
      <Row>
        <Col md={4}>
          <div className="checkbox checkbox-success">
            <input id={pos} type="checkbox" />
            <label for={pos}> elem </label>
          </div>
        </Col>
        <Col md={4}>
          <div className="checkbox checkbox-success">
            <input id={pos} type="checkbox" />
            <label for={pos}>elem</label>
          </div>
        </Col>
        <Col  md={4}>
          <div className="checkbox checkbox-success">
            <input id={pos} type="checkbox" />
            <label for={pos}> elem </label>
          </div>    
        </Col>
      </Row>
    );
    });

  
  }


  render() {
    return (
      <div className="pops-container">
        <div className="popup">
          <h3 className="lead texr-center">Add Your channel </h3>
          <span className="close"><i className="fi-circle-cross"></i></span>
          <div className="text">
          
            {this.channels()}
          
          </div>     
        </div>
      </div>
    );
  }
}


export default AddChannel;
