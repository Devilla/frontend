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
    path: 'integrations',
    text: 'Integrations',
    head: 'Unique'
  },
  {
    icon: 'fi-book',
    path: 'billing-details',
    text: 'Billing',
  },
  {
    icon: 'fi-paper-stack',
    path: 'oauthshow',
    text: 'O-Auth',
    head: 'Detailed'
  },
  {
    icon: 'fi-paper-stack',
    path: 'upgrade',
    text: 'Upgrade',
    head: 'Detailed'
  }
];

const configuration = [
  {
    icon: 'fi-head',
    path: 'campaign',
    text: 'Campaign Setting'
  },
  {
    icon: 'fi-cog',
    path: 'analytics',
    text: 'Analytics',
    head: 'Unique'
  },
  {
    icon: 'fi-book',
    path: 'billing',
    text: 'User Profiles',
  },
  {
    icon: 'fi-paper-stack',
    path: 'campaign',
    text: 'Help & Support',
    head: 'Detailed'
  }
];

const security = [
  {
    icon: 'fi-head',
    path: 'campaign',
    text: 'GDPR'
  }
];


class Settings extends Component {

  renderConfigurations = () => {
    return configuration.map(item => {
      return (
        <div className="card mr-0" onClick={() => browserHistory.push(item.path)}>
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
        <div className="card mr-0" onClick={() => browserHistory.push(item.path)}>
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

  renderSecurity = () => {
    return security.map(item => {
      return (
        <div className="card mr-0" onClick={() => browserHistory.push(item.path)}>
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
        <Row className="pt-0">
          <Col md={2}>
            <h3 className="settingsheader">Setup</h3>
          </Col>
          <Col md={10}>
            <div className="settings-card-container">
              {this.renderSetup()}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <h3 className="settingsheader">Configure</h3>
          </Col>
          <Col md={10}>
            <div className="settings-card-container">
              {this.renderConfigurations()}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <h3 className="settingsheader">Security</h3>
          </Col>
          <Col md={10}>
            <div className="settings-card-container">
              {this.renderSecurity()}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Settings;
