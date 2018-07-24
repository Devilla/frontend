import React , { Component } from 'react';
import './Integration.scss';
import { Row, Col } from 'react-bootstrap';
// import { browserHistory } from 'react-router';

class IntegrationContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='integrationContent'>
        <Row>
          <Col md={12}>
            <h3 className="text-left ml-4 btn ">STEP 1 </h3>
           
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3 className="text-left ml-4 btn ">STEP 2 </h3>
           
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3 className="text-left ml-4 btn ">STEP 3 </h3>
           
          </Col>
        </Row>

      </div>
    );
  }
}

export default IntegrationContent;