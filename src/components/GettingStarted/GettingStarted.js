import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';

import './GettingStarted.scss';

class GettingStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: true
    };
  }

  render() {
    return (
      <div className="list-modal-container">
        <div className="list-header">
          <p className="list-header-para">You can get started in less then 5 minutes.</p>
        </div>
        <div className="list-content row border-between">
          <Col md={6} className="list1-content">
            <p className="list-content-para">Create your first campaign.</p>
            <button className="btn btn-primary" onClick={() => browserHistory.push('new')}>
              <i className="fa fa-plus"></i>
              <p className="list-content-button-para">New Campaign</p>
            </button>
          </Col>
          <Col md={6} className="list2-content">
            <p className="list-content-para">Quick start checklist</p>
            <div className="list-checklist">
              <div className="form-check">
                {/* <i class="fa fa-circle" aria-hidden="true"></i> */}
                <i className="fa fa-check-circle"></i>
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Launch you first campaign
                </label>
                <i className="fa fa-angle-right" onClick={() => browserHistory.push('/new')}></i>
              </div>
              <div className="form-check">
                <i className="fa fa-check-circle"></i>
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Complete my profile
                </label>
                <i className="fa fa-angle-right" onClick={() => browserHistory.push('/profile')}></i>
              </div>
              <div className="form-check">
                <i className="fa fa-check-circle"></i>
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Integrate with other accounts
                </label>
                <i className="fa fa-angle-right" onClick={() => browserHistory.push('/integrations')}></i>
              </div>
              <div className="form-check">
                <i className="fa fa-check-circle"></i>
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Enroll into "Beta" feature club
                </label>
                <i className="fa fa-angle-right"></i>
              </div>
            </div>
          </Col>
        </div>
        {/* <div id="listModal" className="list-modal" style={{opacity: 1, display: 'block'}}>
          <div className="list-modal-content">
            <span className="close">&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div> */}

      </div>
    );
  }
}

export default GettingStarted;
