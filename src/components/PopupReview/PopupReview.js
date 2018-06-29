import React , { Component } from 'react';
import './PopupReview.scss';
import { Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router';



class PopupReview extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }

  render() {
    return (
      <div>
        <div className="review-container">
          <div className="review">
            <div className="review-title mb-5">
              <h1>Your Current Integrations</h1>
              <h4>Identify & convert more of your visitors into customers</h4>
            </div>
            <div className="content">
              <Row>
                <Col md={6} sm={12}> 
                
                </Col>
                <Col md={6} sm={12}> 

                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupReview;