import React from 'react';
import { Avatar2, Avatar3, Avatar4 } from 'img';
import './NotificationList.scss';

const NotificationList = ({ notificationList, configure, handleActivityChange, campaignUrl }) => {
  const renderNotifications = () => {
    return notificationList.map(notification =>
      <div key={notification._id} className="col-md-4 notification-box">
        <div className="card-box ribbon-box bx-shadow">
          <div className="ribbon-two ribbon-two-success">
            <span>
              {
                notification.notificationName === 'Bulk Activity' ?
                  'GROUP'
                  :
                  notification.notificationName === 'Live Visitor Count' ?
                    'LIVE'
                    :
                    'RECENT'
              }
            </span>
          </div>
          <div className="text-center card-box ">
            <div className="member-card pt-2 pb-2">
              <div className="thumb-lg member-thumb m-b-10 mx-auto">
                <img src={notification.notificationName === 'Bulk Activity' ?
                  Avatar2
                  :
                  notification.notificationName === 'Live Visitor Count' ?
                    Avatar3
                    :
                    Avatar4} className="rounded-circle img-thumbnail" alt="profile-image" />
              </div>

              <div className=" m-t-30">
                <h4 className="m-b-5">{notification.notificationName}</h4>
                <p className="text-muted notification-list-content">Show the total visitors over a period of time
                  <span> | </span>
                  <span>
                    <a className="text-pink">{campaignUrl}</a>
                  </span>
                </p>
              </div>
              <div className="toggle-checkbox">
                <input
                  className="tgl tgl-ios"
                  id={notification._id}
                  type="checkbox"
                  checked={notification.activity}

                />
                <label className="tgl-btn"onChange={(e) => e.target.checked !=notification.activity?handleActivityChange(e.target.checked, notification._id, notification.configurationId):null} for={notification._id}></label>
              </div>

              <button
                type="button"
                className="btn btn-primary m-t-20 btn-rounded btn-bordered waves-effect w-md waves-light"
                onClick={() => configure(notification)}
              >
                Configure
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="row m-t-50 notification-list">
      {renderNotifications()}
    </div>
  );
};

export default NotificationList;
