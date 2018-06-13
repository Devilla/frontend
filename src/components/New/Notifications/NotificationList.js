import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Switch from 'react-flexible-switch';
import {
  RecentActivity,
  GroupActivity,
  LiveActivity
} from 'img';
import './NotificationList.scss';

const NotificationList = ({ notificationList, configure, handleActivityChange }) => {
  const renderNotifications = () => {
    return notificationList.map(notification =>
      <Col md={4} key={notification._id}>
        <div className='card'
          style={{
            width: '15rem',
            margin: '0 auto',
            borderRadius: '10px'
          }}
        >
          <div className="view gradient-card-header blue-gradient"
            style={{
              padding: '0 1rem',
              textAlign: 'center',
              border: '1px solid #ececf1',
              backgroundColor: 'white',
              borderTopRadiusLeft: '10px',
              borderTopRadiusRight: '10px'
            }}
          >
            <h2 className="h2-responsive">
              {notification.notificationName === "Bulk Activity" && <img src={GroupActivity} />}

              {notification.notificationName === "Live Visitor Count" && <img src={LiveActivity} />}

              {notification.notificationName === "Recent Activity" && <img src={RecentActivity} />}
            </h2>
            <h4>{notification.notificationName}</h4>
            {notification.notificationName === "Bulk Activity" && <p style={{ color: 'grey', fontFamily: 'Arial', fontWeight: 'normal' }}>Show the total visitors or signups over a period of time</p>}

            {notification.notificationName === "Live Visitor Count" && <p style={{ color: 'grey', fontFamily: 'Arial', fontWeight: 'normal' }} >Show how many people are currently on your page </p>}

            {notification.notificationName === "Recent Activity" && <p style={{ color: 'grey', fontFamily: 'Arial', fontWeight: 'normal' }} >Show individual people that recently signed up </p>}
          </div>
          <div className="button-config" onClick={() => configure(notification)} style={{ cursor: 'pointer' }} data-toggle="modal" data-target="#notificationModal">
            <ul className="list-unstyled list-inline font-small mt-3" style={{ margin: '0 auto', padding: '10px' }}>
              <li className="list-inline-item pr-2 white-text" style={{ display: 'flex', justifyContent: 'center' }}>
                <strong> Configure</strong>
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
            onChange={(e) => e != notification.activity ? handleActivityChange(e, notification._id, notification.configurationId) : null}
          />
        </div>
      </Col>
    );
  };

  return (
    <div className="notification-list">
      {renderNotifications()}
    </div>
  );
};

export default NotificationList;
