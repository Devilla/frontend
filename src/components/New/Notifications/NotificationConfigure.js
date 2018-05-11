import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import {Card} from '../notification/template/common';
import { Notification } from '../notification/template/common/notification'
import { Setting } from '../notification/template/common/settings'

const NotificationConfigure = ({
    notification,
    activity,
    setDefaultPanel,
    handleActivityChange,
    notificationPanelStyle,
    handleNotificationStyleChange,
    backConfiguration,
    saveConfiguration
  }) => {

  return (
    <div className="notification-configure">
      <Row>
        <Col md={12}>
          <Card title="Recent User Activity"
            isDisabled={activity}
            content={
              <Row>
                <Col md={6}>
                  <Notification notification={notification} notificationPanelStyle={notificationPanelStyle} />
                </Col>
                <Col md={6}>
                  <Setting notificationPanelStyle={notificationPanelStyle} onConfigChange={handleNotificationStyleChange} />
                </Col>
              </Row>
            }
          />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <p>&nbsp;</p>
          <div className="text-left">
              <button className="btn btn-default" onClick={() => backConfiguration()}>
                <i className="fas fa-angle-left"></i>
                Back
              </button>
          </div>
        </Col>
        <Col md={4}>
          <p>&nbsp;</p>
          <div className="text-center">
              <button className="btn btn-default" onClick={() => setDefaultPanel()}>
                <i className="fas fa-angle-left"></i>
                Set Default
              </button>
          </div>
        </Col>
        <Col md={4}>
          <p>&nbsp;</p>
          <div className="text-right">
              <button className="blue btn btn-default" onClick={() => saveConfiguration()}>
                Save
                <i className="fas fa-chevron-right"></i>
              </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default NotificationConfigure;
