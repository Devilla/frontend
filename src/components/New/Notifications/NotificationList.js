import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Switch from 'react-flexible-switch';
import './NotificationList.css';

const NotificationList = ({notificationList, configure, configurations, handleActivityChange, createSuccess}) => {
  const renderNotifications = () => {
    return notificationList.map(notification =>
      <Col md={4} key={notification._id}>
        <div className="card"
          style={{
            width: "25rem",
            margin: "0 auto",
            borderRadius: '10px'
          }}
          >
          <div className="view gradient-card-header blue-gradient"
            style={{
              padding: '1.6rem 1rem',
              textAlign: 'center',
              border: '1px solid #ececf1',
              backgroundColor: 'white',
              borderTopRadiusLeft: '10px',
              borderTopRadiusRight: '10px'
            }}
            >
            <h2 className="h2-responsive">{notification.notificationType}</h2>
            <p>{notification.notificationName}</p>
          </div>
          <div className="button-config" onClick={() => configure(notification)} style={{ cursor:'pointer'}} data-toggle="modal" data-target="#notificationModal">
            <ul className="list-unstyled list-inline font-small mt-3" style={{ margin: '0 auto', padding: '10px'}}>
              <li className="list-inline-item pr-2 white-text" style={{display: 'flex', justifyContent: 'center'}}>
                Configure
              </li>
            </ul>
          </div>
        </div>
        <div className="notification-toggle">
          <Switch
            circleStyles={{ onColor: 'blue', offColor: 'gray', diameter: 18 }}
            switchStyles={{ width: 50 }}
            cssClass="alignsame"
            value={notification.activity}
            onChange={(e) => e !=notification.activity?handleActivityChange(e, notification._id, notification.configurationId):null}
          />
        </div>
      </Col>
    )
  };

  return (
    <div className="notification-list">
      {renderNotifications()}
    </div>
  );
}

export default NotificationList;
