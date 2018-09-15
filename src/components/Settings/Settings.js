import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import { UpgradePlan } from 'components';
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
  },
  {
    icon: 'fi-book',
    path: 'billing-details',
    text: 'Billing',
  },
  {
    icon: 'fa fa-gears',
    path: 'oauthshow',
    text: 'O-Auth',
    head: 'Detailed'
  },
  {
    icon: 'fa fa-flash',
    modal: 'upgradePlanModal',
    text: 'Upgrade',
  }
];

const configuration = [
  {
    icon: 'fi-paper-stack',
    path: '',
    text: 'FAQs',
    head: 'Support',
  },
  {
    icon: 'fi-link',
    path: '/campaigns/scripts',
    text: 'Campaign Keys',
  },
  {
    icon: 'fa fa-users',
    path: '/campaigns/scripts',
    text: 'Affiliates',
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
    if(path) {
      let breadcrumb = this.props.breadcrumb;
      breadcrumb.push({
        name: name,
        path: path
      });
      this.props.setBreadCrumbs(breadcrumb);
      browserHistory.push(path);
    } else {
      return;
    }
  }

  renderConfigurations = () => {
    return configuration.map((item, index) => {
      return (
        item.text=='FAQs' ? <a href="https://useinfluence.freshdesk.com/support/solutions" target="_blank" style={{color:'inherit'}}>
          <div key={index+item.text} className="card mr-0">
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
        </a>
          :
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
              <p className="card-text">{item.text}</p>
            </div>
          </div>
      );
    });
  }

  renderSetup = () => {
    return setup.map((item, index) => {
      return (
        <div key={index+item.text} className="card mr-0" data-toggle={item.modal?'modal':''} data-target={item.modal?`#${item.modal}`:''} onClick={() => this.handleRoutes(item.text, item.path)}>
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

  handleSelectedPlan = (plan) => {
    browserHistory.push(`/billing-details/${plan.id}`);
  }

  render() {
    return (
      <div className="settings-container mt-3" style={{height: '800px'}}>
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
        <UpgradePlan handleSelectedPlan={this.handleSelectedPlan} />
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
