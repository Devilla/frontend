import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';

import './Settings.scss';

const setup = [
  {
    icon: 'fi-head',
    path: 'profile',
    text: 'Profile Settings'
  },
  {
    icon: 'fi-cog',
    path: 'integration',
    text: 'Integration',
    head: 'Unique'
  },
  {
    icon: 'fi-book',
    path: 'billing',
    text: 'Billing Settings',
  },
  {
    icon: 'fi-paper-stack',
    path: 'campaign',
    text: 'Campaigns',
    head: 'Detailed'
  }
];

const configuration = [
  {
    icon: 'fi-head',
    path: 'profile',
    text: 'Profile Settings'
  },
  {
    icon: 'fi-cog',
    path: 'integration',
    text: 'Integration',
    head: 'Unique'
  },
  {
    icon: 'fi-book',
    path: 'billing',
    text: 'Billing Settings',
  },
  {
    icon: 'fi-paper-stack',
    path: 'campaign',
    text: 'Campaigns',
    head: 'Detailed'
  }
];

class Settings extends Component {

  renderConfigurations = () => {
    return configuration.map(item => {
      return (
        <div className="card" onClick={() => browserHistory.push(item.path)}>
          <div className="card-img-top">
            {item.head &&
              <p>
                {item.head}
              </p>
            }
          </div>
          <div className="card-body">
            <i className={item.icon}></i>
            <p className="card-text">{item.text}</p>
          </div>
        </div>
      );
    });
  }

  renderSetup = () => {
    return setup.map(item => {
      return (
        <div className="card" onClick={() => browserHistory.push(item.path)}>
          <div className="card-img-top">
            {item.head?
              <p>
                {item.head}
              </p>
              :
              <h5 style={{background:'transparent'}}></h5>
            }
          </div>
          <div className="card-body">
            <i className={item.icon}></i>
            <p className="card-text">{item.text}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="settings-container">
        <Row>
          <Col md={1}>
            <h3 className="settingsheader pl-0">Setup</h3>
          </Col>
          <Col md={11}>
            <div className="settings-card-container">
              {this.renderSetup()}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={1}>
            <h3 className="settingsheader pl-0">Configure</h3>
          </Col>
          <Col md={11}>
            <div className="settings-card-container">
              {this.renderConfigurations()}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Settings;
