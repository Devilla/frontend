import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import { setBreadCrumbs } from 'ducks/breadcrumb';
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
    icon: 'fi-paper-stack',
    path: '',
    text: 'FAQs',
    head: 'Detailed'
  },
  {
    icon: 'fi-link',
    path: '/campaigns/scripts',
    text: 'Campaign Keys',
    head: 'Detailed'
  }
];

const security = [
  {
    icon: 'fi-head',
    path: 'campaigns',
    text: 'GDPR'
  }
];


class Settings extends Component {

  handleRoutes = (name, path) => {
    let breadcrumb = this.props.breadcrumb;
    breadcrumb.push({
      name: name,
      path: path
    });
    this.props.setBreadCrumbs(breadcrumb);
    browserHistory.push(path);
  }

  renderConfigurations = () => {
    return configuration.map((item, index) => {
      return (
        <div key={index+item.text} className="card mr-0" onClick={() => this.handleRoutes(item.text, item.path)}>
          <div className="card-img-top">
            {item.head &&
              <p>
                {item.head}
              </p>
            }
          </div>
          <div className="card-body">
            <i className={item.icon}></i>
            {item.text=='FAQs' ? <a href="https://useinfluence.freshdesk.com/support/solutions" target="_blank"><p className="card-text">{item.text}</p></a>:<p className="card-text">{item.text}</p>}
          </div>
        </div>
      );
    });
  }

  renderSetup = () => {
    return setup.map((item, index) => {
      return (
        <div key={index+item.text} className="card mr-0" onClick={() => this.handleRoutes(item.text, item.path)}>
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
    return security.map((item, index) => {
      return (
        <div key={index+item.text} className="card mr-0" onClick={() => this.handleRoutes(item.text, item.path)}>
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
      <div className="settings-container mt-3">
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

const mapStateToProps = state => ({
  breadcrumb: state.getIn(['breadcrumb', 'breadcrumb'])
});

const mapDispatchToProps = {
  setBreadCrumbs
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Settings);
