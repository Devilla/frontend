import React , {Component }  from 'react';
import {Col }  from 'react-bootstrap';


class Channel extends Component  {
  render() {
    return (
      <div>
        <Col md={6}>
          <span className="btn btn-primary ">Edit Channels</span>
        </Col>
        <Col md={6}>

        </Col>
          
      </div>
    );
  }
}

export default  Channel;