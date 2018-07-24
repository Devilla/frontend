import React , { Component } from 'react';
import './IntegrationContent.scss';
import { Row, Col } from 'react-bootstrap';


class IntegrationContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { renderIntegration }  = this.props;
    return (
      <div className='integrationContent-container'>
        <div className="card-box">
          <div className="integration-header">
            <h4 className="m-t-0 header-title">Make your Integration Live</h4>
            <button type="button" className="btn btn-primary  waves-light waves-effect number back-btn" style={{borderRadius:'5px'}} onClick={() => renderIntegration(0)}>Back</button>
          </div>
          <hr className="mt-0"/>
          <Row>
            <Col md={12}>
           
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default IntegrationContent;