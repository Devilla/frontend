import React , { Component } from 'react';
import './PopupReview.scss';
import { Row, Col } from 'react-bootstrap';
<<<<<<< HEAD
// import { Link } from 'react-router';

=======
import Popupsettings from './Popupsettings.js';
import Channels from  './Channels.js';
import DashboardChannel  from '../DashboardChannel/DashboardChannel';
>>>>>>> 471d9ff4af1409519f2761273808b9d43a03c70f


class PopupReview extends Component {
  constructor() {
    super();
<<<<<<< HEAD
    this.state = {
     
    };
  }

  render() {
=======
    this.state= {
      activeClass: 1
    };
  }


  setActiveState = (val) => {
    this.setState({activeClass: val});
  }

  render() {
    const { activeClass } = this.state;
>>>>>>> 471d9ff4af1409519f2761273808b9d43a03c70f
    return (
      <div>
        <div className="review-container">
          <div className="review">
<<<<<<< HEAD
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
=======
            <div className="card-box review-title">
              <h4 className="header-title text-left">Indentify and Convert Customers</h4>
              <hr/>
              <div className="pos">
                <DashboardChannel />
              </div>
            </div>
            <div className="content">
              <Row>
                <Col md={6} sm={12}>
                  <div className="card-box">
                    {/**popup goes here*/}
                  
                  </div>
                </Col>
                <Col md={6} sm={12}>
                  <div className="card-box">
                    <ul className="nav nav-tabs  switch">
                      <li className="nav-item waves-effect text-center">
                        <a data-toggle="tab" aria-expanded="true" className={`nav-link ${activeClass == 1?'active pb-3 pt-3':'pb-3 pt-3'}`} onClick={() => this.setActiveState(1)}>
                          <i className="fi-layers mr-2"></i>Your Channel
                        </a>
                      </li>
                      <li className="nav-item waves-effect">
                        <a data-toggle="tab" aria-expanded="true" className={`nav-link ${activeClass == 2?'active pb-3 pt-3':'pb-3 pt-3'}`} onClick={() => this.setActiveState(2)}>
                          <i className="fi-mail mr-2"></i>Settings
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content switch-data">
                    <div className={`tab-pane ${activeClass == 1?'show active':''}`} id="Channels">
                      <Row>
                        <Col md={12}>
                          <Channels />
                        </Col>
                      </Row>
                    </div>
                    <div className={`tab-pane ${activeClass == 2?'show active':''}`} id="Settings">
                      <Row>
                        <Col md={12}>
                          <Popupsettings />
                        </Col>
                      </Row>
                    </div>
                  </div>

                </Col>

>>>>>>> 471d9ff4af1409519f2761273808b9d43a03c70f
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

<<<<<<< HEAD
export default PopupReview;
=======
export default PopupReview;
>>>>>>> 471d9ff4af1409519f2761273808b9d43a03c70f
