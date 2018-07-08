import React , { Component } from 'react';
import './PopupReview.scss';
import { Row, Col } from 'react-bootstrap';
import Popupsettings from './Popupsettings.js';
import Channels from  './Channels.js';
import DashboardChannel  from '../DashboardChannel/DashboardChannel';


class PopupReview extends Component {
  constructor() {
    super();
    this.state= {
      activeClass: 1
    };
  }


  setActiveState = (val) => {
    this.setState({activeClass: val});
  }

  render() {
    const { activeClass } = this.state;
    return (
      <div>
        <div className="review-container">
          <div className="review">
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

              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupReview;
