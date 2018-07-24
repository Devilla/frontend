import React , { Component } from 'react';
import './IntegrationContent.scss';
import { Row, Col } from 'react-bootstrap';
// import { browserHistory } from 'react-router';

class IntegrationContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { renderIntegration }  = this.props;
    return (
      <div className='integrationContent-container'>
        <div className="integration-header">
          <h4 className="m-t-0 header-title">Make your Integration Live</h4>
          <button type="button" className="btn btn-primary  waves-light waves-effect number back-btn" style={{borderRadius:'5px'}} onClick={() => renderIntegration(0)}>Back</button>
        </div>
        <Row>
          <h3 className="text-left ml-4 btn-step ">STEP 1 </h3>
          <Col md={12}>
           
           
          </Col>
        </Row>
        <Row>
          <h3 className="text-left ml-4 btn-step ">STEP 2 </h3>
          <Col md={12}>
         
           
          </Col>
        </Row>
        <Row>
          <h3 className="text-left ml-4 btn-step ">STEP 3 </h3>
          <Col md={12}>
  
           
          </Col>
        </Row>

      </div>
    );
  }
}

export default IntegrationContent;